import RaceEditor from '../RaceEditor/RaceEditor';
import RaceInfo from '../RaceInfo/RaceInfo';
import RacesList from '../RaceList/RacesList';
import css from './RacesPage.module.css'

const RacesPage = (props) => {
    return (
        <div className={css.racesPage}>
            <RacesList races={props.races} addRace={props.addRace} />
            <RaceInfo race={props.races[1]} />
            <RaceEditor race={props.races[2]} addRace={props.addRace} updateRace={props.updateRace} />
        </div>
    )
}

export default RacesPage;