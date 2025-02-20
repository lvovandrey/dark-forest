import { gameNextStepActionCreator } from '../../redux/actionCreators'
import store from '../../redux/reduxStore';
import GameGrid from './GameGrid';

const GameGridContainer = () => {
    const gameNextStep = () => {
        store.dispatch(gameNextStepActionCreator())
    }

    return ( <GameGrid gameState={store.getState().gameState} 
                gameNextStep={gameNextStep} /> )
}

export default GameGridContainer