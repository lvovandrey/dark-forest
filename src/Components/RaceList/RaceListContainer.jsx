import { connect } from 'react-redux';
import RacesList from "./RacesList";
import { loadAllRaces, newEmptyRace, onChangePreCreatedRaceName } from '../../redux/racesReducer';

const mapStateToProps = (state) => {
    return {
        races: state.raceState.races,
        preCreatedRaceName: state.raceState.preCreatedRaceName
    }
}

const RacesListContainer = connect(mapStateToProps, {
    addNewRace: newEmptyRace,
    loadRaces: loadAllRaces,
    onChangePreCreatedRaceName
})(RacesList)

export default RacesListContainer