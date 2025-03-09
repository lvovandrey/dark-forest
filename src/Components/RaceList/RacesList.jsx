import axios from 'axios';
import ParameterEditor from '../Common/ParameterEditor/ParameterEditor';
import RaceLink from './Common/RaceLink/RaceLink';
import css from './RacesList.module.css'
import React from 'react';

class RacesList extends React.Component {

    loadRaces = () => {
        if (this.props.races.length > 0) {
            axios.get(`http://localhost:8089/races/?page=1&pageSize=100`).then((response) => {
                this.props.loadRaces(response.data.races)
            }).catch((error) => {
                console.log(error.message)
            });
        }
    }

    componentDidMount() {
        this.loadRaces()
    }

    render () {
        const racesLinksElements = this.props.races?.map(race => (<RaceLink key={race.id} race={race} />));
        const addNewRace = () => this.props.addNewRace()
        const setValue = (parameter, value) => this.props.onChangePreCreatedRaceName(value)

        return (
            <div className={css.racesList}>
                <button onClick={()=>this.loadRaces()}>Reload races</button>
                <h1>RacesList</h1>
                <div className={css.editFieldContainer}>
                    <ParameterEditor title='Название' parameter='name' setValue={setValue} value={this.props.preCreatedRaceName} />
                    <button onClick={addNewRace}> Create </button>
                </div>
                <div className={css.list}>
                    {racesLinksElements}
                </div>
            </div>
        )
    }
}

export default RacesList;