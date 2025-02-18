import { actionNames } from "./actionNameConstants";

const gameReducer = (state, action) => {

    const gameNextStep = () => {
       state.activeRaceId++;
    }

  switch (action.type) {
            case actionNames.GAME_NEXT_STEP:
                gameNextStep()
                break;
            default:
                break;
        }

    return state
}

export default gameReducer