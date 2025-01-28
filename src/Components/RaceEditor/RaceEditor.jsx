import ParameterEditor from '../Common/ParameterEditor/ParameterEditor';
import TextAreaEditor from '../Common/TextAreaEditor/TextAreaEditor';
import css from './RaceEditor.module.css';


const RaceEditor = (props) => {

    let currentRace = { ...props.race }

    const saveRace = () => {
        props.updateRace(currentRace)
    }

    const createRace = () => {
        props.addRace({ ...currentRace })
    }

    const setName = (name) => currentRace.name = name;
    const setHealth = (health) => currentRace.health = health;
    const setStreight = (streight) => currentRace.streight = streight;
    const setDescription = (description) => currentRace.description = description;

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
