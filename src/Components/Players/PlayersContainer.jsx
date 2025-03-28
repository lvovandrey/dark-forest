import { connect } from 'react-redux';
import Players from './Players';
import React from 'react';
import { Preloader } from '../Common/Preloader/Preloader';
import { addPlayer, getRacesTC, loadRaces, removePlayer, setCurrentPage, setTotalRacesCount, toggleIsRacesFetching } from '../../redux/playersReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

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
    let newState = state.playersState;
    newState.pageSize = state.playersState.pageSize
    newState.totalRacesCount = state.playersState.totalRacesCount
    newState.currentPage = state.playersState.currentPage
    newState.isRacesFetching = state.playersState.isRacesFetching
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