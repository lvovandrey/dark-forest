import ParameterEditor from '../Common/ParameterEditor/ParameterEditor';
import TextAreaEditor from '../Common/TextAreaEditor/TextAreaEditor';
import css from './RaceEditor.module.css';


const RaceEditor = (props) => {

    const saveRace = () => {
        props.updateRace(props.race)
    }

    const createRace = () => {
        props.addRace(props.race)
    }

    const setName = (name) => props.race.name = name;
    const setHealth = (health) => props.race.health = health;
    const setStreight = (streight) => props.race.streight = streight;
    const setDescription = (description) => props.race.description = description;

    return (
        <div className={css.raceEditor}>
            Race Editor
            <div className={css.editFieldContainer}>
                <ParameterEditor title='Название' parameter='name' setValue={setName} value={props.race.name} />
                <ParameterEditor title='Здоровье' parameter='health' setValue={setHealth} value={props.race.health} />
                <ParameterEditor title='Сила' parameter='streight' setValue={setStreight} value={props.race.streight} />
                <TextAreaEditor title='Описание' parameter='description' setValue={setDescription} value={props.race.description} />
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
