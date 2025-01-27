import { addRace } from '../../redux/state';
import RaceLink from './Common/RaceLink/RaceLink';
import css from './RacesList.module.css'

const RacesList = (props) => {

    let racesLinksElements = props.races.map(race => (<RaceLink race={race} />));

    let addNewRace = () => {
        addRace('Gray', 1,2,'desc')
    }

    return (
        <div className={css.racesList}>
            <h1>RacesList</h1>
            <button onClick={addNewRace}> Create </button>
            <div className={css.list}>
                { racesLinksElements }
            </div>
        </div>
    )
}

export default RacesList;