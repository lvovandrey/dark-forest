import { actionNames } from "./actionNameConstants";
import { races } from "./state";

let initialState = {
    races: [...races, races[0]],
    players: [races[0], races[1]]
}

const playersReducer = (state = initialState, action) => {
    const addPlayer = (raceId) => {
        let foundedRace = state.races.find((r) => r.id === raceId)
        if (foundedRace === undefined)
            return {
                ...state,
                players: [...state.players]
            }
        else
            return {
                ...state,
                players: [...state.players, foundedRace]
            }

    }


    const removePlayer = (raceId) => {
        let savedPlayers = state.players.filter((p) => p.id !== raceId )
        return {
            ...state, 
            players: [...savedPlayers]
        }
    }

    switch (action.type) {
        case actionNames.ADD_PLAYER:
            return addPlayer(action.raceId)
        case actionNames.REMOVE_PLAYER:
            return removePlayer(action.raceId)
        default:
            break;
    }

    return state
}

export default playersReducer