import { gameNextStepActionCreator } from '../../redux/actionCreators'
import StoreContext from '../../storeContext';
import GameGrid from './GameGrid';

const GameGridContainer = () => {
    debugger
    return (<StoreContext.Consumer>
        {
            (store) => {
                const gameNextStep = () => {
                    store.dispatch(gameNextStepActionCreator())
                }
                return <GameGrid gameState={store.getState().gameState} gameNextStep={gameNextStep} />
            }
        }
    </StoreContext.Consumer>)
}

export default GameGridContainer