import { createSelector } from "reselect"

export const getRacesSL = (state) => state.raceState.races
export const getEditedRaceSL = (state) => state.raceState.newRace
export const getPreCreatedRaceNameSL = (state) => state.raceState.preCreatedRaceName
export const getRacesStateSL = (state) => state.raceState

//пример сложного селектора
export const getRacesTop5SL = createSelector( 
    getRacesSL,
    (races) => { return races.slice(0, 5)}
) 