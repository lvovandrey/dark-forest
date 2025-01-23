import CardsContainer from '../CardsContainer/CardsContainer'
import css from './GameGrid.module.css'

const GameGrid = () => {
    return (
        <div>
            <img className={css.top_image} alt='galaxyMap' src='/galaxyMap.png' />
            <CardsContainer />
        </div>
    )
}

export default GameGrid