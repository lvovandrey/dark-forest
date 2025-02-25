import { actionNames } from "./actionNameConstants"

export const addRaceActionCreator = () => ({type: actionNames.ADD_RACE})
export const newEmptyRaceActionCreator = (raceName) => ({type: actionNames.NEW_EMPTY_RACE, name: raceName})
export const updateRaceActionCreator = () => ({type: actionNames.UPDATE_RACE})
export const onChangeNewRaceActionCreator = (parameter, value) => 
    ({type: actionNames.ON_CHANGE_NEW_RACE, parameter, value})
export const onChangePreCreatedRaceNameActionCreator = (raceName) => 
    ({type: actionNames.ON_CHANGE_PRE_CREATED_RACE_NAME, name: raceName})

export const gameNextStepActionCreator = () => ({type: actionNames.GAME_NEXT_STEP})

export const addPlayerActionCreator = (race) => 
    ({type: actionNames.ADD_PLAYER, race})
