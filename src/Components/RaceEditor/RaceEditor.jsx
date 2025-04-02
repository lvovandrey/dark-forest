import ParameterEditor from '../Common/ParameterEditor/ParameterEditor';
import TextAreaEditor from '../Common/TextAreaEditor/TextAreaEditor';
import css from './RaceEditor.module.css';


const RaceEditor = (props) => {
    const updateRace = () => props.updateRace()
    const addRace = () =>  {
        debugger
        return props.addRace(props.jwt)
    }
    const changeRaceParameter = (parameter, value) => props.changeRaceParameter(parameter, value)

    return (
        <div className={css.raceEditor}>
            Race Editor
            <div className={css.editFieldContainer}>
                <ParameterEditor title='Название' parameter='name' setValue={changeRaceParameter} value={props.race?.name} />
                <ParameterEditor title='Здоровье' parameter='health' setValue={changeRaceParameter} value={props.race?.health} />
                <ParameterEditor title='Сила' parameter='streight' setValue={changeRaceParameter} value={props.race?.streight} />
                <TextAreaEditor title='Описание' parameter='description' setValue={changeRaceParameter} value={props.race?.description} />
            </div>
            <div className={css.buttonContainer}>
                <button onClick={addRace}>Create</button>
                <button onClick={updateRace}>Save</button>
                <button>Cancle</button>
            </div>
        </div>
    )
}

export default RaceEditor;
