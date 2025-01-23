import { NavLink } from 'react-router';
import PlayerCard from '../../../PlayerCard/PlayerCard';
import css from './RaceLink.module.css';

const RaceLink = (props) => {
    let path = `/race/${props.raceid}`;
    return (
        <NavLink to={path}>
            <PlayerCard race={props.race} streight={props.streight} health={props.health}/>
        </NavLink>
    )
}

export default RaceLink;