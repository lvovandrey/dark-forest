import { actionNames } from "./actionNameConstants"

export const addRaceActionCreator = () => ({type: actionNames.ADD_RACE})
export const newEmptyRaceActionCreator = (raceName) => ({type: actionNames.NEW_EMPTY_RACE, name: raceName})
export const updateRaceActionCreator = () => ({type: actionNames.UPDATE_RACE})
export const onChangeNewRaceActionCreator = (parameter, value) => 
    ({type: actionNames.ON_CHANGE_NEW_RACE, parameter, value})
export const onChangePreCreatedRaceNameActionCreator = (raceName) => 
    ({type: actionNames.ON_CHANGE_PRE_CREATED_RACE_NAME, name: raceName})
export const loadRacesAC = (races) => 
    ({type: actionNames.LOAD_RACES, races})
export const getAllRacesAC = () => ({type: actionNames.GET_ALL_RACES})

export const gameNextStepActionCreator = () => ({type: actionNames.GAME_NEXT_STEP})

export const addPlayerActionCreator = (raceId) => 
    ({type: actionNames.ADD_PLAYER, raceId})
export const removePlayerActionCreator = (raceId) => 
    ({type: actionNames.REMOVE_PLAYER, raceId})
export const setCurrentPageAC = (pageId) => 
    ({type: actionNames.SET_CURRENT_PAGE, pageId})
export const setTotalRacesCountAC = (racesCount) => 
    ({type: actionNames.SET_TOTAL_RACES_COUNT, racesCount})
export const toggleIsRacesFetchingAC = (isFetching) => 
    ({type: actionNames.TOGGLE_IS_RACES_FETCHING, isFetching})
