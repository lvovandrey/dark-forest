import { act } from "react";
import { actionNames } from "./actionNameConstants";
import { races } from "./state";

let initialState =  {
    races,
    newRace:    {
        id: 0,
        name: 'Меклар',
        health: 15,
        streight: 17,
        description: 'Раса меклар — это кибернеты, полностью отказавшиеся от органической части своих тел. Пища им не нужна, поскольку энергией они снабжаются посредством реакторов с топливом из антиматерии. Политический строй — диктатура: каждый следующий диктатор выбирается после смерти предыдущего, путем оценки IQ всех граждан.'
    },
    preCreatedRaceName:''
}

const racesReducer = (state = initialState, action) => {

    const stateCopy = JSON.parse(JSON.stringify(state))

    const addRace = () => {
        let curRace = stateCopy.races.find((r) => r.id === stateCopy.newRace.id)
        if (curRace !== undefined)
            return

        let max = stateCopy.races.reduce((acc, curr) => acc.id > curr.id ? acc : curr).id;
        stateCopy.newRace.id = max + 1
        stateCopy.races.push(stateCopy.newRace)
        stateCopy.newRace = { ...(stateCopy.newRace) }
        return stateCopy
    }

    const updateRace = () => {
        let curRace = stateCopy.races.find((r) => r.id === stateCopy.newRace.id)
        var index = stateCopy.races.indexOf(curRace);

        if (index !== -1) {
            stateCopy.races[index] = { ...(stateCopy.newRace) };
        }
        return stateCopy
    }

    const newEmptyRace = () => {
        let emptyRace = {
            name: !!stateCopy.preCreatedRaceName ? stateCopy.preCreatedRaceName : 'Чужие',
            streight: 10,
            health: 10,
            description: 'Описание'
        }
        stateCopy.newRace = emptyRace
        return stateCopy
    }

    const onChangeNewRace = (parameter, value) => {
        debugger
        stateCopy.newRace[parameter] = value
        return stateCopy
    }

    const onChangePreCreatedRaceName = (name) => {
        stateCopy.preCreatedRaceName = name
        return stateCopy
    }

    switch (action.type) {
        case actionNames.ADD_RACE:
            return addRace(action.race)
        case actionNames.NEW_EMPTY_RACE:
            return newEmptyRace(action.name)
        case actionNames.UPDATE_RACE:
            return updateRace()
        case actionNames.ON_CHANGE_NEW_RACE:
            return onChangeNewRace(action.parameter, action.value)
        case actionNames.ON_CHANGE_PRE_CREATED_RACE_NAME:
            return onChangePreCreatedRaceName(action.name)
        default:
            break;
    }

    return stateCopy
}

export default racesReducer