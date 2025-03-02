import { actionNames } from "./actionNameConstants";
import { races } from "./state";

let initialState = {
    races: [...races, races[0]],
    players: [races[0], races[1]],
    pageSize: 3,
    totalRacesCount: 25, 
    currentPage: 1,
    isRacesFetching: false
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

        debugger
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
        default:
            break;
    }

    return state
}

export default playersReducer