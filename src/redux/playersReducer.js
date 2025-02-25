import { actionNames } from "./actionNameConstants";
import { races } from "./state";

let initialState = {
    races,
    players: [races[0], races[1]]
}

const playersReducer = (state = initialState, action) => {

    const addPlayer = (race) => (
        {
            ...state,
            players: [...state.players, race]
        })

    switch (action.type) {
        case actionNames.ADD_PLAYER:
            return addPlayer(action.race)
        default:
            break;
    }

    return state
}

export default playersReducer