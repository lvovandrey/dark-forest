import PlayerCard from '../PlayerCard/PlayerCard';
import css from './RacesList.module.css'

const RacesList = () => {
    return (
        <div className={css.racesList}>
            <h1>RacesList</h1>
            <div className={css.list}>
                    <PlayerCard race='Силикоиды' streight='21' health='25'/>
                    <PlayerCard race='Силикоиды' streight='21' health='25'/>
                    <PlayerCard race='Силикоиды' streight='21' health='25'/>
                    <PlayerCard race='Силикоиды' streight='21' health='25'/>
            </div>
        </div>
    )
}

export default RacesList;