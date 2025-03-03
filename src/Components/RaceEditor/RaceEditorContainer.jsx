import { addRace, onChangeNewRace, updateRace } from "../../redux/actionCreators"
import RaceEditor from "./RaceEditor"
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        race: state.raceState.newRace
    }
}

const RaceEditorContainer = connect(mapStateToProps, {
    saveRace: updateRace,
    createRace: addRace,
    changeRaceParameter: onChangeNewRace
})(RaceEditor)

export default RaceEditorContainer