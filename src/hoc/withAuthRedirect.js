import React from "react"
import { connect } from "react-redux"
import { Navigate } from "react-router"
import { getIsAuthSL } from "../redux/selectors/authSelectors"

const mapStateToPropsAuthRedirect = (state) => {
    return {
        isAuth: getIsAuthSL(state)
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

