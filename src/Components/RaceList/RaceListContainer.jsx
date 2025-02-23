import { newEmptyRaceActionCreator, onChangePreCreatedRaceNameActionCreator } from "../../redux/actionCreators"
import { connect } from 'react-redux';
import RacesList from './RacesList';

const mapStateToProps = (state) => {
    return {
        races: state.raceState.races,
        preCreatedRaceName: state.raceState.preCreatedRaceName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewRace: () => {
            dispatch(newEmptyRaceActionCreator())
        },

        onChangePreCreatedRaceName: (value) => {
            debugger
            dispatch(onChangePreCreatedRaceNameActionCreator(value))
        }
    }
}

const RacesListContainer = connect(mapStateToProps, mapDispatchToProps)(RacesList)

export default RacesListContainer