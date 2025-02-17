import { actionNames } from "./actionNameConstants";
import state from "./state";

const store = {
    _state: state,
    _render() { throw new Error('Render method is empty') },

    _addRace() {
        let raceState = this._state.raceState;
        let curRace = raceState.races.find((r) => r.id === raceState.newRace.id)
        if (curRace !== undefined)
            return

        let max = raceState.races.reduce((acc, curr) => acc.id > curr.id ? acc : curr).id;
        raceState.newRace.id = max + 1
        raceState.races.push(raceState.newRace)
        raceState.newRace = { ...(raceState.newRace) }
        console.log("addRace")
        this._render()
    },
    _updateRace() {
        let raceState = this._state.raceState;
        let curRace = raceState.races.find((r) => r.id === raceState.newRace.id)
        var index = raceState.races.indexOf(curRace);

        if (index !== -1) {
            raceState.races[index] = { ...(raceState.newRace) };
        }
        console.log("updateRace")
        this._render()
    },
    _newEmptyRace (name)  {
        let raceState = this._state.raceState;

        let emptyRace = {
            name: !!name ? name : 'Чужие',
            streight: 10,
            health: 10,
            description: 'Описание'
        }
        raceState.newRace = emptyRace
        console.log("newEmptyRace")
        this._render()
    },
    _onChangeNewRace() {
        console.log("onChangeNewRace")
        this._render()
    },
    _onChangePreCreatedRaceName(name) {
        console.log("onChangeNewRace")
        this._state.raceState.preCreatedRaceName = name
        this._render()
    },

    dispatch(action) {
        switch (action.type) {
            case actionNames.ADD_RACE:
                this._addRace(action.race)
                break;
            case actionNames.NEW_EMPTY_RACE:
                this._newEmptyRace(action.name)
                break;
            case actionNames.UPDATE_RACE:
                this._updateRace()
                break;
            case actionNames.ON_CHANGE_NEW_RACE:
                this._onChangeNewRace()
                break;
            case actionNames.ON_CHANGE_PRE_CREATED_RACE_NAME:
                this._onChangePreCreatedRaceName(action.name)
                break;
            default:
                throw new Error(`${action.type} action not found`);
        }
    },
        
    getState() { return this._state },
    subscribeOnStateChangingCallback(observer) {
        this._render = observer
    },
}

export default store;