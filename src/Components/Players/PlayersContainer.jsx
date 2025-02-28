import { connect } from 'react-redux';
import Players from './Players';
import { addPlayerActionCreator, loadRacesAC, removePlayerActionCreator, setCurrentPageAC } from '../../redux/actionCreators';

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
        }
    }
}

const PlayersContainer = connect(mapStateToProps, mapDispatchToProps)(Players)

export default PlayersContainer