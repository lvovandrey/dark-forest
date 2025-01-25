import RaceLink from './Common/RaceLink/RaceLink';
import css from './RacesList.module.css'

const RacesList = (props) => {
    return (
        <div className={css.racesList}>
            <h1>RacesList</h1>
            <div className={css.list}>
                <RaceLink race={props.races[0]} />
                <RaceLink race={props.races[1]} />
                <RaceLink race={props.races[2]} />
                <RaceLink race={props.races[3]} />
            </div>
        </div>
    )
}

export default RacesList;