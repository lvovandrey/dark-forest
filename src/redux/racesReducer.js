import { getTop100Races, postRace } from "../Api/ServerRequests";
import { actionNames } from "./actionNameConstants";
import { races } from "./state";

let initialState = {
    races,
    newRace: {
        id: 0,
        name: 'Меклар',
        health: 15,
        streight: 17,
        description: 'Раса меклар — это кибернеты, полностью отказавшиеся от органической части своих тел. Пища им не нужна, поскольку энергией они снабжаются посредством реакторов с топливом из антиматерии. Политический строй — диктатура: каждый следующий диктатор выбирается после смерти предыдущего, путем оценки IQ всех граждан.'
    },
    preCreatedRaceName: ''
}

const racesReducer = (state = initialState, action) => {

    const addRace = async () => {
        let curRace = state.races.find((r) => r.id === state.newRace.id)
        if (curRace !== undefined)
            return state

        let max = state.races.reduce((acc, curr) => acc.id > curr.id ? acc : curr).id;

        let stateCopy = {
            ...state,
            newRace: { ...state.newRace },
            races: [...state.races]
        }

        stateCopy.newRace.id = max + 1
        
        let postedRace = await postRace(stateCopy.newRace)
        
        stateCopy.races.push(postedRace)
        stateCopy.newRace = { ...(postedRace) }
        return stateCopy
    }

    const getAllRaces = async () => {
        let allRaces = await getTop100Races()
        debugger
        return loadRaces(allRaces)
    } 

    const loadRaces = (races) => (
        {
            ...state,
            races: [...races]
        })

    const updateRace = () => {
        let curRace = state.races.find((r) => r.id === state.newRace.id)
        var index = state.races.indexOf(curRace);

        let stateCopy = {
            ...state,
            races: [...state.races]
        }

        if (index !== -1) {
            stateCopy.races[index] = { ...(stateCopy.newRace) };
        }
        
        return stateCopy
    }

    const newEmptyRace = () => {
        let emptyRace = {
            name: !!state.preCreatedRaceName ? state.preCreatedRaceName : 'Чужие',
            streight: 10,
            health: 10,
            description: 'Описание'
        }

        return {
            ...state,
            newRace: emptyRace
        }
    }

    const onChangeNewRace = (parameter, value) => {
        let stateCopy = {
            ...state,
            newRace: { ...state.newRace }
        }
        stateCopy.newRace[parameter] = value
        return stateCopy
    }

    const onChangePreCreatedRaceName = (name) => (
        {
            ...state,
            preCreatedRaceName: name
        })


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
        case actionNames.LOAD_RACES:
            return loadRaces(action.races)
        case actionNames.GET_ALL_RACES:
            return getAllRaces()
        default:
            break;
    }

    return state
}

export default racesReducer