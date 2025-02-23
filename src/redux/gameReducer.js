import { actionNames } from "./actionNameConstants";
import { races } from "./state";

let initialState = {
    races,
    activeRaceId: 0,
    contragentRaceId: 0
}

const gameReducer = (state = initialState, action) => {

    const gameNextStep = () => {
        let stateCopy = {...state}
        stateCopy.activeRaceId++
        return stateCopy
    }

  switch (action.type) {
            case actionNames.GAME_NEXT_STEP:
                return gameNextStep()
            default:
                break;
        }

    return state
}

export default gameReducer