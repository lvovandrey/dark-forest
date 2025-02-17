import RaceEditor from '../RaceEditor/RaceEditor';
import RacesList from '../RaceList/RacesList';
import css from './RacesPage.module.css'

const RacesPage = (props) => {
    return (
        <div className={css.racesPage}>
            <RacesList races={props.races} 
                       preCreatedRaceName = {props.preCreatedRaceName}
                       dispatch={props.dispatch} />
            <RaceEditor race={props.editedRace} 
                        dispatch={props.dispatch}/>
        </div>
    )
}

export default RacesPage;