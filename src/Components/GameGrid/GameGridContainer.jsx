import { connect } from 'react-redux';
import GameGrid from './GameGrid';
import { gameNextStep } from '../../redux/gameReducer';

const mapStateToProps = (state) => {
    let gameState = state.gameState;
    gameState.races = state.playersState.players
    return {
        gameState
    }
}

const GameGridContainer = connect(mapStateToProps, { gameNextStep })(GameGrid)

export default GameGridContainer