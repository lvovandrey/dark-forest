export const getAuthStateSL = (state) => {
    let newState = {...state.authState}
    return newState
}

export const getTokenSL = (state) => state.authState.token
export const getIsAuthSL = (state) => state.authState.isAuth