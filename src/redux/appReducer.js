import { authTC } from "./authReducer"

const INITIALIZE = 'INITIALIZE'

let initialState = {
    isInitialized: false,
}

const appReducer = (state = initialState, action) => {

    const onInitialized = () => {
        return {
            ...state,
            isInitialized: true
        }
    }


    switch (action.type) {
        case INITIALIZE:
            return onInitialized()

        default:
            break;
    }

    return state
}

export const onInitializedAC = () => ({ type: INITIALIZE })

export const initializeAppTC = () => {
    return (dispatch) => {
        let authPromise = dispatch(authTC())
        
        Promise.all([authPromise]).then(() => {
            dispatch(onInitializedAC())
        })
    }
}

export default appReducer