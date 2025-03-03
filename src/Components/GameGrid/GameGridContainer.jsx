import { connect } from 'react-redux';
import { gameNextStep } from '../../redux/actionCreators'
import GameGrid from './GameGrid';

const mapStateToProps = (state) => {
    let gameState = state.gameState;
    gameState.races = state.playersState.players
    return {
        gameState
    }
}

const GameGridContainer = connect(mapStateToProps, { gameNextStep })(GameGrid)

export default GameGridContainer