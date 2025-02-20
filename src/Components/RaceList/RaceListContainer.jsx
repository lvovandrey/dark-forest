import { newEmptyRaceActionCreator, onChangePreCreatedRaceNameActionCreator } from "../../redux/actionCreators"
import store from "../../redux/reduxStore"
import RacesList from "./RacesList"

const RacesListContainer = () => {

    const addNewRace = () => {
        store.dispatch(newEmptyRaceActionCreator(store.getState().raceState.preCreatedRaceName))
    }

    const onChangePreCreatedRaceName = (value) => {
        store.dispatch(onChangePreCreatedRaceNameActionCreator(value))
    }

    return (<RacesList
        races={store.getState().raceState.races}
        preCreatedRaceName={store.getState().raceState.preCreatedRaceName}
        addNewRace={addNewRace}
        onChangePreCreatedRaceName={onChangePreCreatedRaceName} />)
}

export default RacesListContainer