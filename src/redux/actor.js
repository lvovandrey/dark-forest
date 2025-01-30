import state from "./state";
import { rerender } from "../render"

let addRace = (race) => {

    let curRace = state.races.find((r) => r.id === state.newRace.id)
    if (curRace !== undefined)
        return

    let max = state.races.reduce((acc, curr) => acc.id > curr.id ? acc : curr).id;
    state.newRace.id = max + 1
    state.races.push(state.newRace)
    state.newRace = {...(state.newRace)}
    rerender(state, actor)
}

let updateRace = () => {
    let curRace = state.races.find((r) => r.id === state.newRace.id)
    var index = state.races.indexOf(curRace);

    if (index !== -1) {
        state.races[index] = {...(state.newRace)};
    }
    rerender(state, actor)
}

let newEmptyRace = () => {
    let emptyRace = {
        name: 'Чужие',
        streight: 10,
        health: 10,
        description: 'Описание'
    }
    state.newRace = emptyRace
    rerender(state, actor)
}

let onChangeNewRace = () => {
    rerender(state, actor)
}

let racesActor = {
    addRace,
    updateRace,
    onChangeNewRace,
    newEmptyRace
}

let actor = {
    racesActor
}

export default actor