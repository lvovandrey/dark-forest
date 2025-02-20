import { addRaceActionCreator, onChangeNewRaceActionCreator, updateRaceActionCreator } from "../../redux/actionCreators"
import store from "../../redux/reduxStore"
import RaceEditor from "./RaceEditor"

const RaceEditorContainer = () => {

    const saveRace = () => {
        store.dispatch(updateRaceActionCreator())
    }

    const createRace = () => {
        store.dispatch(addRaceActionCreator())
    }

    const changeRaceParameter = (parameter, value) => {
        store.getState().raceState.newRace[parameter] = value //TODO: это должно быть в store
        store.dispatch(onChangeNewRaceActionCreator())
    }


    return (<RaceEditor
        race={store.getState().raceState.newRace}
        saveRace={saveRace}
        createRace={createRace}
        changeRaceParameter={changeRaceParameter}
    />)
}

export default RaceEditorContainer