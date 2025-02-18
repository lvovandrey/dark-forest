import { gameNextStepActionCreator } from '../../redux/actionCreators'
import CardsContainer from '../CardsContainer/CardsContainer'
import css from './GameGrid.module.css'

const GameGrid = (props) => {
    const nextStep = () => {
        props.dispatch(gameNextStepActionCreator())
    }

    return (
        <div>
            <img className={css.top_image} alt='galaxyMap' src='/galaxyMap.png' />
            <CardsContainer races={props.gameState.races} />
            <h2>Активная раса</h2>
            <h2>{props.gameState.activeRaceId}</h2>
            <button onClick={nextStep}>Следующий шаг</button>
        </div>
    )
}

export default GameGrid