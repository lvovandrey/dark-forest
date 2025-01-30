import RaceEditor from '../RaceEditor/RaceEditor';
import RacesList from '../RaceList/RacesList';
import css from './RacesPage.module.css'

const RacesPage = (props) => {
    return (
        <div className={css.racesPage}>
            <RacesList races={props.races} 
                       createRace={props.racesActor.newEmptyRace} />
            <RaceEditor race={props.editedRace} 
                        raceActor={props.racesActor}/>
        </div>
    )
}

export default RacesPage;