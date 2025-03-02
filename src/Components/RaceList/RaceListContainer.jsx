import { getAllRacesAC, loadRacesAC, newEmptyRaceActionCreator, onChangePreCreatedRaceNameActionCreator } from "../../redux/actionCreators"
import { connect } from 'react-redux';
import RacesList from "./RacesList";

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

        // loadRaces: (races) => {
        //     dispatch(loadRacesAC(races))
        // },

        onChangePreCreatedRaceName: (value) => {
            dispatch(onChangePreCreatedRaceNameActionCreator(value))
        },

        // getAllRaces: () => {
        //     dispatch(getAllRacesAC())
        // }
    }
}

const RacesListContainer = connect(mapStateToProps, mapDispatchToProps)(RacesList)

export default RacesListContainer