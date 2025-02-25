import { connect } from 'react-redux';
import Players from './Players';
import { addPlayerActionCreator, removePlayerActionCreator } from '../../redux/actionCreators';

const mapStateToProps = (state) => {
    let newState = state.playersState;
    newState.races = [...state.raceState.races]
    return newState
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPlayer: (raceId) => {
            dispatch(addPlayerActionCreator(raceId))
        },
        removePlayer: (raceId) => {
            dispatch(removePlayerActionCreator(raceId))
        }
    }
}

const PlayersContainer = connect(mapStateToProps, mapDispatchToProps)(Players)

export default PlayersContainer