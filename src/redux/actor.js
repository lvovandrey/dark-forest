import state from "./state";
import { rerender } from "../render"

let addRace = (race) => {
    let max = state.races.reduce((acc, curr) => acc.id > curr.id ? acc : curr).id;
    race.id = max + 1
    state.races.push(race)
    newEmptyRace();
    rerender(state, actor)
}

let updateRace = (race) => {
    let curRace = state.races.find((r) => r.id === race.id)
    var index = state.races.indexOf(curRace);

    alert(curRace.name + ' -> ' + race.name)
    if (index !== -1) {
        state.races[index] = race;
    }
    rerender(state, actor)
}

let newEmptyRace = () => {
    let emptyRace = {
        name:'',
        streight:10,
        health:10
    }
    state.newRace = emptyRace
    rerender(state, actor)
}

let racesActor = {
    addRace,
    updateRace,
    newEmptyRace
}

let actor = {
    racesActor
}

export default actor