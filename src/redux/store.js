import gameReducer from "./gameReducer";
import racesReducer from "./racesReducer";
import state from "./state";

const store = {
    _state: state,
    _render() { throw new Error('Render method is empty') },

    dispatch(action) {
        this._state.gameState = gameReducer(this._state.gameState, action);
        this._state.raceState = racesReducer(this._state.raceState, action)

        this._render()
    },
        
    getState() { return this._state },
    subscribeOnStateChangingCallback(observer) {
        this._render = observer
    },
}

export default store;