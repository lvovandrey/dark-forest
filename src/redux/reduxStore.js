import { combineReducers, createStore } from "redux";
import gameReducer from "./gameReducer";
import racesReducer from "./racesReducer";
import playersReducer from "./playersReducer";

const reducersBatch = combineReducers(
    {
        gameState: gameReducer,
        raceState: racesReducer,
        playersState: playersReducer
    }
)

const store = createStore(reducersBatch)
store.dispatch.bind(store)

export default store