import css from './RaceInfo.module.css'

const RaceInfo = (props) => {
    return (
        <div className={css.raceInfo}>
            <div className={css.title}>
                <h2>{props.race.name}</h2>
            </div>
            <div className={css.info}>
                <h4>Здоровье = {props.race.health}</h4>
                <h4>Сила = {props.race.streight}</h4>
                <h4>Описание</h4>
                <p>{props.race.description}</p>
            </div>
            <div className={css.buttonContainer}>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default RaceInfo;