import RaceEditor from '../RaceEditor/RaceEditor';
import RacesList from '../RaceList/RacesList';
import css from './RacesPage.module.css'

const RacesPage = (props) => {
    return (
        <div className={css.racesPage}>
            <RacesList races={props.races} 
                       addRace={props.racesActor.addRace} />
            <RaceEditor race={props.races[2]} 
                        addRace={props.racesActor.addRace} 
                        updateRace={props.racesActor.updateRace} />
        </div>
    )
}

export default RacesPage;