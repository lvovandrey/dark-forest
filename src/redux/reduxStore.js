import { combineReducers, createStore } from "redux";
import gameReducer from "./gameReducer";
import racesReducer from "./racesReducer";

const reducersBatch = combineReducers(
    {
        gameState: gameReducer,
        raceState: racesReducer
    }
)

const store = createStore(reducersBatch)
store.dispatch.bind(store)

export default store