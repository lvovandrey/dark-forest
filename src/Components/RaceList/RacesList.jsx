import RaceLink from './Common/RaceLink/RaceLink';
import css from './RacesList.module.css'

const RacesList = (props) => {

    let racesLinksElements = props.races.map(race => (<RaceLink race={race} />));

    return (
        <div className={css.racesList}>
            <h1>RacesList</h1>
            <div className={css.list}>
                { racesLinksElements }
            </div>
        </div>
    )
}

export default RacesList;