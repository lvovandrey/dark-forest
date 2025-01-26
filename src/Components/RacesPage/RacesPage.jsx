import RaceEditor from '../RaceEditor/RaceEditor';
import RaceInfo from '../RaceInfo/RaceInfo';
import RacesList from '../RaceList/RacesList';
import css from './RacesPage.module.css'

const RacesPage = (props) => {
    return (
        <div className={css.racesPage}>
            <RacesList races={props.races} />
            <RaceInfo race={props.races[1]} />
            <RaceEditor race={props.races[2]} />
        </div>
    )
}

export default RacesPage;