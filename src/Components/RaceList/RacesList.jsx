import RaceLink from './Common/RaceLink/RaceLink';
import css from './RacesList.module.css'

const RacesList = () => {
    return (
        <div className={css.racesList}>
            <h1>RacesList</h1>
            <div className={css.list}>
                <RaceLink raceid='1' race='Силикоиды' streight='21' health='25' />
                <RaceLink raceid='2' race='Терраны' streight='10' health='10' />
                <RaceLink raceid='3' race='Псилоны' streight='41' health='3' />
            </div>
        </div>
    )
}

export default RacesList;