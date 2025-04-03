import { createSelector } from "reselect";
import { getPlayersSL } from "./playersSelectors";

export const getGameStateSL = (state) => state.gameState

export const getGameStateWithPlayersSL = createSelector(
    getPlayersSL, getGameStateSL,
    (players, gameState) => {
        let gameStateWithPlayers = gameState;
        gameStateWithPlayers.races = players
        return {
            gameStateWithPlayers
        }
    }
) 