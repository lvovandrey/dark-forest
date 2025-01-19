import './Content.css';
import PlayerCard from "../PlayerCard/PlayerCard"

const Content = () => {
    return <div className='cards-container' >
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
        </div>
}

export default Content;