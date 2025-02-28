import PlayerCard from '../PlayerCard/PlayerCard';
import css from './Players.module.css'
import axios from 'axios';
import React from 'react';

class Players extends React.Component {

    loadRaces = () => {
        if (this.props.races.length > 0) {
            axios.get(`http://localhost:8089/races/?page=${this.props.currentPage}&pageSize=${this.props.pageSize}`).then((response) => {
                this.props.loadRaces(response.data.races)
            }).catch((error) => { console.log(error.message) });
        }
    }

    componentDidMount() {
        this.loadRaces()
    }

    onPageChanged = (pageId) => {
        this.props.setCurrentPage(pageId)
        axios.get(`http://localhost:8089/races/?page=${pageId}&pageSize=${this.props.pageSize}`).then((response) => {
            this.props.loadRaces(response.data.races)
        }).catch((error) => { console.log(error.message) });
    }

    render() {

        const racesLinksElements = this.props.races.map(race =>
        (
            <div className={css.racesElementsContainer}>
                <PlayerCard key={race.id} race={race.name} streight={race.streight} health={race.health} />
                {
                    this.props.players.find((r) => r.id === race.id) === undefined
                        ? <button className={css.raceElementButton} onClick={() => this.props.addPlayer(race.id)}>Add</button>
                        : <button className={css.raceElementButton} onClick={() => this.props.removePlayer(race.id)}>Remove</button>
                }
            </div>
        ));

        const playersLinksElements = this.props.players.map(race =>
        (
            <PlayerCard key={race.id} race={race.name} streight={race.streight} health={race.health} />
        ));

        let pageCount = Math.ceil(this.props.totalRacesCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }

        return (
            <div className={css.playersPage}>
                <div className={css.raceslist}>
                    {pages.map(p => {
                        return <span onClick={() => { this.onPageChanged(p) }} key={p} className={p === this.props.currentPage && css.selectedPage} >
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
}



// const Players = (props) => {
//     const racesLinksElements = props.races.map(race =>
//     (
//         <div className={css.racesElementsContainer}>
//             <PlayerCard key={race.id} race={race.name} streight={race.streight} health={race.health} />
//             {
//                 props.players.find((r) => r.id === race.id) === undefined
//                     ? <button className={css.raceElementButton} onClick={() => props.addPlayer(race.id)}>Add</button>
//                     : <button className={css.raceElementButton} onClick={() => props.removePlayer(race.id)}>Remove</button>
//             }
//         </div>
//     ));

//     const playersLinksElements = props.players.map(race =>
//     (
//         <PlayerCard key={race.id} race={race.name} streight={race.streight} health={race.health} />
//     ));


//     return (
//         <div className={css.playersPage}>
//             <div className={css.raceslist}>
//                 <h2>Список рас</h2>
//                 {racesLinksElements}
//             </div>
//             <div className={css.playerslist}>
//                 <h2>Список игроков</h2>
//                 <div className={css.playerscardsview}>
//                     {playersLinksElements}
//                 </div>
//             </div>
//         </div>

//     )
// }

export default Players