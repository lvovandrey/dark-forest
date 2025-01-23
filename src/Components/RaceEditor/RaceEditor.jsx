import ParameterEditor from '../Common/ParameterEditor/ParameterEditor';
import TextAreaEditor from '../Common/TextAreaEditor/TextAreaEditor';
import css from './RaceEditor.module.css';

const RaceEditor = (props) => {
    return (
        <div className={css.raceEditor}>
            Race Editor
            <div className={css.editFieldContainer}>
                <ParameterEditor title='Название' parameter='name' value={props.race.name} />
                <ParameterEditor title='Здоровье' parameter='health'  value={props.race.health}/>
                <ParameterEditor title='Сила' parameter='streight'  value={props.race.streight}/>
                <TextAreaEditor title='Описание' parameter='description'  value={props.race.description}/>
            </div>
            <div className={css.buttonContainer}>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default RaceEditor;
