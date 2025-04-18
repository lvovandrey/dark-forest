import CardsContainer from '../CardsContainer/CardsContainer'
import css from './GameGrid.module.css'

const GameGrid = (props) => {
    debugger
    const nextStep = () => {
        props.gameNextStep()
    }

    return (
        <div>
            <img className={css.top_image} alt='galaxyMap' src='/galaxyMap.png' />
            <CardsContainer races={props.gameStateWithPlayers.races} />
            <h2>Активная раса</h2>
            <h2>{props.gameStateWithPlayers.activeRaceId}</h2>
            <button onClick={nextStep}>Следующий шаг</button>
        </div>
    )
}

export default GameGrid