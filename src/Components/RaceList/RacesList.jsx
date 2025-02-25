import ParameterEditor from '../Common/ParameterEditor/ParameterEditor';
import RaceLink from './Common/RaceLink/RaceLink';
import css from './RacesList.module.css'

const RacesList = (props) => {

    const racesLinksElements = props.races.map(race => (<RaceLink key={race.id} race={race} />));
    const addNewRace = () => props.addNewRace()
    const setValue = (parameter, value) => props.onChangePreCreatedRaceName(value)

    return (
        <div className={css.racesList}>
            <h1>RacesList</h1>
            <div className={css.editFieldContainer}>
                <ParameterEditor title='Название' parameter='name' setValue={setValue} value={props.preCreatedRaceName} />
                <button onClick={addNewRace}> Create </button>
            </div>
            <div className={css.list}>
                {racesLinksElements}
            </div>
        </div>
    )
}

export default RacesList;