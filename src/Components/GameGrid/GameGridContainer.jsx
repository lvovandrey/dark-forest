import { connect } from 'react-redux';
import { gameNextStepActionCreator } from '../../redux/actionCreators'
import GameGrid from './GameGrid';

const mapStateToProps = (state) => {
    return {
        gameState: state.gameState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        gameNextStep: () => { 
            dispatch(gameNextStepActionCreator()) 
        }
    }
}

const GameGridContainer = connect(mapStateToProps, mapDispatchToProps)(GameGrid)

export default GameGridContainer