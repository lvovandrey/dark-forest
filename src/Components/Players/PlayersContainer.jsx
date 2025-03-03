import { connect } from 'react-redux';
import Players from './Players';
import { addPlayer, loadRaces, removePlayer, setCurrentPage, setTotalRacesCount, toggleIsRacesFetching } from '../../redux/actionCreators';
import axios from 'axios';
import React from 'react';
import { Preloader } from '../Common/Preloader/Preloader';

class PlayersAPIContainer extends React.Component {

    loadRaces = () => {
        if (this.props.races.length > 0) {
            this.props.toggleIsRacesFetching(true)
            axios.get(`http://localhost:8089/races/?page=${this.props.currentPage}&pageSize=${this.props.pageSize}`).then((response) => {
                this.props.loadRaces(response.data.races)
                this.props.setTotalRacesCount(response.data.count)
                this.props.toggleIsRacesFetching(false)
            }).catch((error) => {
                console.log(error.message)
                this.props.toggleIsRacesFetching(false)
            });
        }
    }

    componentDidMount() {
        this.loadRaces()
    }

    onPageChanged = (pageId) => {
        this.props.toggleIsRacesFetching(true)
        this.props.setCurrentPage(pageId)
        axios.get(`http://localhost:8089/races/?page=${pageId}&pageSize=${this.props.pageSize}`).then((response) => {
            this.props.loadRaces(response.data.races)
            this.props.toggleIsRacesFetching(false)
        }).catch((error) => {
            console.log(error.message)
            this.props.toggleIsRacesFetching(false)
        });
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

const PlayersContainer = connect(mapStateToProps,
    {
        addPlayer,
        removePlayer,
        loadRaces,
        setCurrentPage,
        setTotalRacesCount,
        toggleIsRacesFetching
    }
)(PlayersAPIContainer)

export default PlayersContainer