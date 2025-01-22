import CardsContainer from '../CardsContainer/CardsContainer'
import css from './GameGrid.module.css'

const GameGrid = () => {
    return (
        <main className={css.game}>
            <img className={css.top_image} alt='galaxyMap' src='/galaxyMap.png' />
            <CardsContainer />
        </main>
    )
}

export default GameGrid