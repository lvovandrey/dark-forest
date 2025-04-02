import { APIRaces } from "../Api/apiRaces";
import { actionNames } from "./actionNameConstants";
import { races } from "./state";

let initialState = {
    races: [...races, races[0]], //TODO: убрать вообще state обычный и тут тоже почистить
    players: [races[0], races[1]],
    pageSize: 3,
    totalRacesCount: 25,
    currentPage: 1,
    isRacesFetching: true
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
        let savedPlayers = state.players.filter((p) => p.id !== raceId)
        return {
            ...state,
            players: [...savedPlayers]
        }
    }

    const loadRaces = (races) => (
        {
            ...state,
            races: [...races]
        })

    const setCurrentPage = (pageId) => (
        {
            ...state,
            currentPage: pageId
        })

    const setTotalRacesCount = (racesCount) => (
        {
            ...state,
            totalRacesCount: racesCount
        })

    const toggleIsRacesFetching = (isFetching) => (
        {
            ...state,
            isRacesFetching: isFetching
        })

    switch (action.type) {
        case actionNames.ADD_PLAYER:
            return addPlayer(action.raceId)
        case actionNames.REMOVE_PLAYER:
            return removePlayer(action.raceId)
        case actionNames.LOAD_RACES:
            return loadRaces(action.races)
        case actionNames.SET_CURRENT_PAGE:
            return setCurrentPage(action.pageId)
        case actionNames.SET_TOTAL_RACES_COUNT:
            return setTotalRacesCount(action.racesCount)
        case actionNames.TOGGLE_IS_RACES_FETCHING:
            return toggleIsRacesFetching(action.isFetching)
        default:
            break;
    }

    return state
}

export const addPlayer = (raceId) => ({ type: actionNames.ADD_PLAYER, raceId })
export const removePlayer = (raceId) => ({ type: actionNames.REMOVE_PLAYER, raceId })
export const loadRaces = (races) => ({ type: actionNames.LOAD_RACES, races })
export const setCurrentPage = (pageId) => ({ type: actionNames.SET_CURRENT_PAGE, pageId })
export const setTotalRacesCount = (racesCount) => ({ type: actionNames.SET_TOTAL_RACES_COUNT, racesCount })
export const toggleIsRacesFetching = (isFetching) => ({ type: actionNames.TOGGLE_IS_RACES_FETCHING, isFetching })


export const getRacesTC = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsRacesFetching(true))
        dispatch(setCurrentPage(currentPage))
        
        APIRaces.getRaces(currentPage, pageSize)
            .then((data) => {
                dispatch(loadRaces(data.races))
                dispatch(setTotalRacesCount(data.count))
                dispatch(toggleIsRacesFetching(false))
            }).catch((error) => {
                dispatch(toggleIsRacesFetching(false))
            });
    }
}

export default playersReducer