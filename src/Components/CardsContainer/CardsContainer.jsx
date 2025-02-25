import css from './CardsContainer.module.css';
import PlayerCard from "../PlayerCard/PlayerCard"

const CardsContainer = (props) => {
    let racesElements = props.races.map(race => 
        (
            <PlayerCard key={race.id} race={race.name} streight={race.streight} health={race.health} />
        ));
    return (
         <div className={css.container} >
            {racesElements}
        </div>
    )
}

export default CardsContainer;