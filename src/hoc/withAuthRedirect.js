import React from "react"
import { Navigate } from "react-router"

export const withAuthRedirect = (Component) => {
    debugger
    return (props)  => {
        debugger
            if (props.isAuth === false)
                return <Navigate to='/login' />
            return <Component {...props} />
        }
    }

