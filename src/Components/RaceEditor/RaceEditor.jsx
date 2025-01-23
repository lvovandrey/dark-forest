import css from './RaceEditor.module.css';

const RaceEditor = () => {
    return (
        <div className={css.raceEditor}>
            Race Editor
            <div className={css.editFieldContainer}>
                <h3>Название</h3>
                <input type="text" name="raceName" />
                <h3>Здоровье</h3>
                <input type="text" name="health" />
                <h3>Сила</h3>
                <input type="text" name="streight" />
                <h3>Описание</h3>
                <input type="text" name="streight" />
            </div>
            <div className={css.buttonContainer}>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default RaceEditor;
