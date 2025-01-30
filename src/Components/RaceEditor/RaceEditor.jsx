import ParameterEditor from '../Common/ParameterEditor/ParameterEditor';
import TextAreaEditor from '../Common/TextAreaEditor/TextAreaEditor';
import css from './RaceEditor.module.css';


const RaceEditor = (props) => {

    const saveRace = () => {
        props.raceActor.updateRace()
    }

    const createRace = () => {
        props.raceActor.addRace()
    }

    const setValue = (parameter, value) => {
        props.race[parameter] = value
        props.raceActor.onChangeNewRace()
    }

    return (
        <div className={css.raceEditor}>
            Race Editor
            <div className={css.editFieldContainer}>
                <ParameterEditor title='Название' parameter='name' setValue={setValue} value={props.race.name} />
                <ParameterEditor title='Здоровье' parameter='health' setValue={setValue} value={props.race.health} />
                <ParameterEditor title='Сила' parameter='streight' setValue={setValue} value={props.race.streight} />
                <TextAreaEditor title='Описание' parameter='description' setValue={setValue} value={props.race.description} />
            </div>
            <div className={css.buttonContainer}>
                <button onClick={createRace}>Create</button>
                <button onClick={saveRace}>Save</button>
                <button>Cancle</button>
            </div>
        </div>
    )
}

export default RaceEditor;
