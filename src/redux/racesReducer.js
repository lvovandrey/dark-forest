import { actionNames } from "./actionNameConstants";

const racesReducer = (state, action) => {

    const addRace = () => {
        let curRace = state.races.find((r) => r.id === state.newRace.id)
        if (curRace !== undefined)
            return

        let max = state.races.reduce((acc, curr) => acc.id > curr.id ? acc : curr).id;
        state.newRace.id = max + 1
        state.races.push(state.newRace)
        state.newRace = { ...(state.newRace) }
    }

    const updateRace = () => {
        let curRace = state.races.find((r) => r.id === state.newRace.id)
        var index = state.races.indexOf(curRace);

        if (index !== -1) {
            state.races[index] = { ...(state.newRace) };
        }
    }

    const newEmptyRace = (name) => {
        let emptyRace = {
            name: !!name ? name : 'Чужие',
            streight: 10,
            health: 10,
            description: 'Описание'
        }
        state.newRace = emptyRace
    }

    const onChangeNewRace = () => {}

    const onChangePreCreatedRaceName = (name) => {
        state.preCreatedRaceName = name
    }

    switch (action.type) {
        case actionNames.ADD_RACE:
            addRace(action.race)
            break;
        case actionNames.NEW_EMPTY_RACE:
            newEmptyRace(action.name)
            break;
        case actionNames.UPDATE_RACE:
            updateRace()
            break;
        case actionNames.ON_CHANGE_NEW_RACE:
            onChangeNewRace()
            break;
        case actionNames.ON_CHANGE_PRE_CREATED_RACE_NAME:
            onChangePreCreatedRaceName(action.name)
            break;
        default:
            break;
    }

    return state
}

export default racesReducer