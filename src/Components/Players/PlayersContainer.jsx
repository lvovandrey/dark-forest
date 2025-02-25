import { connect } from 'react-redux';
import Players from './Players';
import { addPlayerActionCreator } from '../../redux/actionCreators';

const mapStateToProps = (state) => {
    let players = state.playersState;
    debugger
    return {
        races: state.raceState.races,
        players: state.playersState.players
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPlayer: () => {
            dispatch(addPlayerActionCreator)
        }
    }
}

const PlayersContainer = connect(mapStateToProps, mapDispatchToProps)(Players)

export default PlayersContainer