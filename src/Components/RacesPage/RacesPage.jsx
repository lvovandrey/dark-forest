import RaceEditor from '../RaceEditor/RaceEditor';
import RacesList from '../RaceList/RacesList';
import css from './RacesPage.module.css'

const RacesPage = (props) => {
    debugger
    return (
        <div className={css.racesPage}>
            <RacesList races={props.races} 
                       createRace={props.racesActor.newEmptyRace} />
            <RaceEditor race={props.editedRace} 
                        addRace={props.racesActor.addRace} 
                        updateRace={props.racesActor.updateRace} />
        </div>
    )
}

export default RacesPage;