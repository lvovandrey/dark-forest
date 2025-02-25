import RaceLink from '../RaceList/Common/RaceLink/RaceLink';
import css from './Players.module.css'

const Players = (props) => {
    debugger
    const racesLinksElements = props.races.map(race => (<RaceLink race={race} />));
    const playersLinksElements = props.players.map(race => (<RaceLink race={race} />));
    

    return (
        <div>
            Список рас
            <div>
                {racesLinksElements}
            </div>
            Список игроков
            <div>
                {playersLinksElements}
            </div>
        </div>

    )
}

export default Players