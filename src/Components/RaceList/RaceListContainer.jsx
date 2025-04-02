import { connect } from 'react-redux';
import RacesList from "./RacesList";
import { loadAllRaces, loadFullRacesListTC, newEmptyRace, onChangePreCreatedRaceName } from '../../redux/racesReducer';
import { getPreCreatedRaceNameSL, getRacesSL } from '../../redux/selectors/racesSelectors';

const mapStateToProps = (state) => {
    return {
        races: getRacesSL(state),
        preCreatedRaceName: getPreCreatedRaceNameSL(state)
    }
}

const RacesListContainer = connect(mapStateToProps, {
    addNewRace: newEmptyRace,
    loadRaces: loadAllRaces,
    onChangePreCreatedRaceName,
    loadFullRacesListTC
})(RacesList)

export default RacesListContainer