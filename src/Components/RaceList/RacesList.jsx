import ParameterEditor from '../Common/ParameterEditor/ParameterEditor';
import RaceLink from './Common/RaceLink/RaceLink';
import css from './RacesList.module.css'
import React, { useEffect } from 'react';

const RacesList = (props) => {

    let loadRaces = () => {
        if (props.races.length > 0) {
            props.loadFullRacesListTC()
        }
    }

    useEffect(() => loadRaces())

    const racesLinksElements = props.races?.map(race => (<RaceLink key={race.id} race={race} />));
    const addNewRace = () => props.addNewRace()
    const setValue = (parameter, value) => props.onChangePreCreatedRaceName(value)


    return (
        <div className={css.racesList}>
            <button onClick={() => loadRaces()}>Reload races</button>
            <h1>RacesList</h1>
            <div className={css.editFieldContainer}>
                <ParameterEditor title='Название' parameter='name' setValue={setValue} value={props.preCreatedRaceName} />
                <button onClick={addNewRace}> Create </button>
            </div>
            <div className={css.list}>
                {racesLinksElements}
            </div>
        </div>
    )
}


// class RacesList extends React.Component {

//     loadRaces = () => {
//         if (this.props.races.length > 0) {
//             this.props.loadFullRacesListTC()
//         }
//     }

//     componentDidMount() {
//         this.loadRaces()
//     }

//     componentDidUpdate() {
//         this.loadRaces()
//     }

//     render () {
//         const racesLinksElements = this.props.races?.map(race => (<RaceLink key={race.id} race={race} />));
//         const addNewRace = () => this.props.addNewRace()
//         const setValue = (parameter, value) => this.props.onChangePreCreatedRaceName(value)

//         return (
//             <div className={css.racesList}>
//                 <button onClick={()=>this.loadRaces()}>Reload races</button>
//                 <h1>RacesList</h1>
//                 <div className={css.editFieldContainer}>
//                     <ParameterEditor title='Название' parameter='name' setValue={setValue} value={this.props.preCreatedRaceName} />
//                     <button onClick={addNewRace}> Create </button>
//                 </div>
//                 <div className={css.list}>
//                     {racesLinksElements}
//                 </div>
//             </div>
//         )
//     }
// }

export default RacesList;