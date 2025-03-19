import { applyMiddleware, combineReducers, createStore } from "redux";
import gameReducer from "./gameReducer";
import racesReducer from "./racesReducer";
import playersReducer from "./playersReducer";
import authReducer from "./authReducer";
import { thunk as thunkMiddleware } from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

const reducersBatch = combineReducers(
    {
        gameState: gameReducer,
        raceState: racesReducer,
        playersState: playersReducer,
        authState: authReducer,
        form: formReducer
    }
)

const store = createStore(reducersBatch, applyMiddleware(thunkMiddleware))
store.dispatch.bind(store)

export default store