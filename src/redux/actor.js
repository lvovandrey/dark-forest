import state from "./state";

let rerender = () => {}

const subscribe = (observer) => {
    rerender = observer
}

let addRace = (race) => {

    let curRace = state.races.find((r) => r.id === state.newRace.id)
    if (curRace !== undefined)
        return

    let max = state.races.reduce((acc, curr) => acc.id > curr.id ? acc : curr).id;
    state.newRace.id = max + 1
    state.races.push(state.newRace)
    state.newRace = {...(state.newRace)}
    rerender()
}

let updateRace = () => {
    let curRace = state.races.find((r) => r.id === state.newRace.id)
    var index = state.races.indexOf(curRace);

    if (index !== -1) {
        state.races[index] = {...(state.newRace)};
    }
    rerender()
}

let newEmptyRace = () => {
    let emptyRace = {
        name: 'Чужие',
        streight: 10,
        health: 10,
        description: 'Описание'
    }
    state.newRace = emptyRace
    rerender()
}

let onChangeNewRace = () => {
    rerender()
}

let racesActor = {
    addRace,
    updateRace,
    onChangeNewRace,
    newEmptyRace
}

const globalActor = {
    subscribe
}

let actor = {
    globalActor,
    racesActor
}

export default actor