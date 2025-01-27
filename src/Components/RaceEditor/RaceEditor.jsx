import ParameterEditor from '../Common/ParameterEditor/ParameterEditor';
import TextAreaEditor from '../Common/TextAreaEditor/TextAreaEditor';
import css from './RaceEditor.module.css';


const RaceEditor = (props) => {

    const saveRace = () => {
        alert('Save ' + props.race.name)
    }
    
    const setName = (name) => {
        props.race.name = name;
    }

    return (
        <div className={css.raceEditor}>
            Race Editor
            <div className={css.editFieldContainer}>
                <ParameterEditor title='Название' parameter='name' setValue={setName} value={props.race.name} />
                <ParameterEditor title='Здоровье' parameter='health'  value={props.race.health}/>
                <ParameterEditor title='Сила' parameter='streight'  value={props.race.streight}/>
                <TextAreaEditor title='Описание' parameter='description'  value={props.race.description}/>
            </div>
            <div className={css.buttonContainer}>
                <button onClick={ saveRace }>Save</button>
                <button>Cancle</button>
            </div>
        </div>
    )
}

export default RaceEditor;
