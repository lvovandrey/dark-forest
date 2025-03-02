import { connect } from 'react-redux';
import Players from './Players';
import { addPlayerActionCreator, loadRacesAC, removePlayerActionCreator, setCurrentPageAC, setTotalRacesCountAC } from '../../redux/actionCreators';
import axios from 'axios';
import React from 'react';


class PlayersAPIContainer extends React.Component {

    loadRaces = () => {
        if (this.props.races.length > 0) {
            axios.get(`http://localhost:8089/races/?page=${this.props.currentPage}&pageSize=${this.props.pageSize}`).then((response) => {
                this.props.loadRaces(response.data.races)
                this.props.setTotalRacesCount(response.data.count)
            }).catch((error) => { console.log(error.message) });
        }
    }

    componentDidMount() {
        this.loadRaces()
    }

    onPageChanged = (pageId) => {
        this.props.setCurrentPage(pageId)
        axios.get(`http://localhost:8089/races/?page=${pageId}&pageSize=${this.props.pageSize}`).then((response) => {
            this.props.loadRaces(response.data.races)
        }).catch((error) => { console.log(error.message) });
    }

    render() {
        return <Players races={this.props.races}
            players={this.props.players}
            addPlayer={this.props.addPlayer}
            removePlayer={this.props.removePlayer}
            totalRacesCount={this.props.totalRacesCount}
            pageSize={this.props.pageSize}
            onPageChanged={this.onPageChanged}
            currentPage={this.props.currentPage}
        />
    }
}

const mapStateToProps = (state) => {
    let newState = state.playersState;
    newState.pageSize = state.playersState.pageSize
    newState.totalRacesCount = state.playersState.totalRacesCount
    newState.currentPage = state.playersState.currentPage
    return newState
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPlayer: (raceId) => {
            dispatch(addPlayerActionCreator(raceId))
        },
        removePlayer: (raceId) => {
            dispatch(removePlayerActionCreator(raceId))
        },
        loadRaces: (races) => {
            dispatch(loadRacesAC(races))
        },
        setCurrentPage: (pageId) => {
            dispatch(setCurrentPageAC(pageId))
        },
        setTotalRacesCount: (racesCount) => {
            dispatch(setTotalRacesCountAC(racesCount))
        }
    }
}

const PlayersContainer = connect(mapStateToProps, mapDispatchToProps)(PlayersAPIContainer)

export default PlayersContainer