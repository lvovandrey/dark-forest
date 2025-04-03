import { connect } from 'react-redux';
import Players from './Players';
import React from 'react';
import { Preloader } from '../Common/Preloader/Preloader';
import { addPlayer, getRacesTC, loadRaces, removePlayer, setCurrentPage, setTotalRacesCount, toggleIsRacesFetching } from '../../redux/playersReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getCurrentPageSL, getIsRacesFetchingSL, getPageSizeSL, getPlayersStateSL, getTotalRacesCountSL } from '../../redux/selectors/playersSelectors';

class PlayersAPIContainer extends React.Component {

    componentDidMount() {
        if (this.props.races.length > 0) {
            this.props.getRacesTC(this.props.currentPage, this.props.pageSize)
        }
    }

    onPageChanged = (pageId) => {
        this.props.getRacesTC(pageId, this.props.pageSize)
    }

    render() {
        return <>
            <Preloader isFetching={this.props.isRacesFetching} />
            <Players races={this.props.races}
                players={this.props.players}
                addPlayer={this.props.addPlayer}
                removePlayer={this.props.removePlayer}
                totalRacesCount={this.props.totalRacesCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage} />
        </>
    }
}

const mapStateToProps = (state) => {
    let newState = getPlayersStateSL(state) //TODO: не понимаю прикол - зачем запрашивать весь объект, а потом его же заново собирать по одному свойству? 
    newState.pageSize = getPageSizeSL(state)
    newState.totalRacesCount = getTotalRacesCountSL(state)
    newState.currentPage = getCurrentPageSL(state)
    newState.isRacesFetching = getIsRacesFetchingSL(state)
    return newState
}

let dispatchObject =         {
    addPlayer,
    removePlayer,
    loadRaces,
    setCurrentPage,
    setTotalRacesCount,
    toggleIsRacesFetching,
    getRacesTC
}

const PlayersContainer =    
    compose(
        connect(mapStateToProps, dispatchObject), 
        withAuthRedirect
    )(PlayersAPIContainer)

export default PlayersContainer