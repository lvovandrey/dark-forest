const SET_USER_DATA = 'SET_USER_DATA'

export const setUserData = (userData, isAuth) =>
    ({ type: SET_USER_DATA, userData, isAuth })

let initialState = {
    userId: null,
    login: null,
    token: null,
    isAuth: false,
    isFetching: false
}

const authReducer = (state = initialState, action) => {

    const setUserData = (userData, isAuth) => {
        debugger
        return {
            ...state,
            ...userData,
            isAuth
        }
    }


    debugger
    switch (action.type) {
        case SET_USER_DATA:
            return setUserData(action.userData, action.isAuth)

        default:
            break;
    }

    return state
}

export default authReducer