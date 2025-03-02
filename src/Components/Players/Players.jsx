import PlayerCard from '../PlayerCard/PlayerCard';
import css from './Players.module.css'
import React from 'react';

const Players = (props) => {

    const racesLinksElements = props.races.map(race =>
    (
        <div className={css.racesElementsContainer}>
            <PlayerCard key={race.id} race={race.name} streight={race.streight} health={race.health} />
            {
                props.players.find((r) => r.id === race.id) === undefined
                    ? <button className={css.raceElementButton} onClick={() => props.addPlayer(race.id)}>Add</button>
                    : <button className={css.raceElementButton} onClick={() => props.removePlayer(race.id)}>Remove</button>
            }
        </div>
    ));

    const playersLinksElements = props.players.map(race =>
    (
        <PlayerCard key={race.id} race={race.name} streight={race.streight} health={race.health} />
    ));

    let pageCount = Math.ceil(props.totalRacesCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div className={css.playersPage}>
            <div className={css.raceslist}>
                {pages.map(p => {
                    return <span onClick={() => { props.onPageChanged(p) }} key={p} className={p === props.currentPage && css.selectedPage} >
                        {p}
                    </span>
                })}
                <h2>Список рас</h2>
                {racesLinksElements}
            </div>
            <div className={css.playerslist}>
                <h2>Список игроков</h2>
                <div className={css.playerscardsview}>
                    {playersLinksElements}
                </div>
            </div>
        </div>
    )
}

export default Players