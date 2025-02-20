import store from "../../redux/reduxStore"
import RacesPage from "./RacesPage"

const RacesPageContainer = () => {
    return ( <RacesPage racesState={store.getState().raceState}/> )
}

export default RacesPageContainer