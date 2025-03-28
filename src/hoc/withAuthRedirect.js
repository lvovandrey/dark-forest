import React from "react"
import { connect } from "react-redux"
import { Navigate } from "react-router"

const mapStateToPropsAuthRedirect = (state) => {
    return {
        isAuth: state.authState.isAuth
    }
}

export const withAuthRedirect = (Component) => {
    
    let RedirectedComponent =  (props)  => {
        if (props.isAuth === false)
            return <Navigate to='/login' />
        return <Component {...props} />
    }
    
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsAuthRedirect, {})(RedirectedComponent)
    
    return ConnectedAuthRedirectComponent
}

