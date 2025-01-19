import Content from '../Content/Content'
import './GameGrid.module.css'

const GameGrid = () => {
    return <main className='main-grid'>
        <img className='top-image' alt='galaxyMap' src='/galaxyMap.png'/>
        <Content/>   
    </main>
}

export default GameGrid