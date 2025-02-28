import { addRaceActionCreator, onChangeNewRaceActionCreator, updateRaceActionCreator } from "../../redux/actionCreators"
import RaceEditor from "./RaceEditor"
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        ...state,
        race: state.raceState.newRace
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveRace: () => {
            dispatch(updateRaceActionCreator())
        },
    
        createRace: () => {
            dispatch(addRaceActionCreator())
        },
    
        changeRaceParameter: (parameter, value) => {
            dispatch(onChangeNewRaceActionCreator(parameter, value))
        }
    }
}

const RaceEditorContainer = connect(mapStateToProps, mapDispatchToProps)(RaceEditor)

export default RaceEditorContainer