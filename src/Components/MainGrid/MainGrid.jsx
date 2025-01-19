import Content from '../Content/Content'
import './MainGrid.css'

const MainGrid = () => {
    return <main className='main-grid'>
        <img className='top-image' alt='galaxyMap' src='/galaxyMap.png'/>
        <Content/>   
    </main>
}

export default MainGrid