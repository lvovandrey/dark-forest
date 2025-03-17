import { APIAuth } from "../Api/apiAuth"

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    userId: null,
    login: null,
    token: null,
    isAuth: false,
    isFetching: false
}

const authReducer = (state = initialState, action) => {

    const setUserData = (userData, isAuth) => {
        return {
            ...state,
            ...userData,
            isAuth
        }
    }


    switch (action.type) {
        case SET_USER_DATA:
            return setUserData(action.userData, action.isAuth)

        default:
            break;
    }

    return state
}

export const setUserData = (userData, isAuth) => ({ type: SET_USER_DATA, userData, isAuth })

export const loginTC = (creditionals, onFinishFailed) => {
    return (dispatch) => {
        APIAuth.login(creditionals)
            .then((data) => {
                dispatch(setUserData({
                    login: data.login,
                    userId: data.userId,
                    token: data.token
                }, true))
            }).catch((error) => {
                dispatch(setUserData({ login: null, userId: null, token: null }, false))
                onFinishFailed()
            });
    }
}

export const authTC = (token) => {
    return (dispatch) => {
        APIAuth.auth(token).then((data) => {
            dispatch(setUserData({ login: data.user.username, userId: data.user.userId }, true))
        }).catch((error) => {
            dispatch(setUserData({ login: null, userId: null }, false))
        });
    }
}

export default authReducer