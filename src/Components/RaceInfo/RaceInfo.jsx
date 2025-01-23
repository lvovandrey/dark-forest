import css from './RaceInfo.module.css'

const RaceInfo = () => {
    return (
        <div className={css.raceInfo}>
            <div className={css.title}>
                <h2>Силикоиды</h2>
            </div>
            <div className={css.info}>
                <h4>Здоровье = 10</h4>
                <h4>Сила = 10</h4>
                <h4>Описание</h4>
            </div>
            <div className={css.buttonContainer}>
                <button>Save</button>
                <button>Cancel</button>
            </div>
        </div>
    )
}

export default RaceInfo;