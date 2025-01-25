import { NavLink } from 'react-router';
import PlayerCard from '../../../PlayerCard/PlayerCard';
import css from './RaceLink.module.css';

const RaceLink = (props) => {
    let path = `/race/${props.race.id}`;
    return (
        <NavLink to={path}>
            <PlayerCard race={props.race.name} streight={props.race.streight} health={props.race.health} />
        </NavLink>
    )
}

export default RaceLink;