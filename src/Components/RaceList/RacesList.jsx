import { newEmptyRaceActionCreator, onChangePreCreatedRaceNameActionCreator } from '../../redux/actionCreators';
import ParameterEditor from '../Common/ParameterEditor/ParameterEditor';
import RaceLink from './Common/RaceLink/RaceLink';
import css from './RacesList.module.css'

const RacesList = (props) => {

    let racesLinksElements = props.races.map(race => (<RaceLink race={race} />));
    let addNewRace = () => {
        props.dispatch(newEmptyRaceActionCreator(props.preCreatedRaceName))
    }

    const setValue = (parameter, value) => {
        props.dispatch(onChangePreCreatedRaceNameActionCreator(value))
    }

    return (
        <div className={css.racesList}>
            <h1>RacesList</h1>
            <div className={css.editFieldContainer}>
                <ParameterEditor title='Название' parameter='name' setValue={setValue} value = {props.preCreatedRaceName}/>

            <button onClick={addNewRace}> Create </button>
            </div>
            <div className={css.list}>
                {racesLinksElements}
            </div>
        </div>
    )
}

export default RacesList;