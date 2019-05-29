import React from 'react';
import {Route, Redirect} from 'react-router-dom'


export default function PrivateRoute({component: Component, ...rest}) {
    return (
        <Route 
            {...rest}
            render= { props =>
                //autentikacija treba da bude user iz localStorage? localStorage.getItem('user')
                //ako ga ima ok je, a ako ne redirect to login
                localStorage.getItem('user') ? ( 
                    <Component {...props} />
                ) : (
                    <Redirect 
                        to = {{
                            pathname: "/login",
                            state : { from: props.location }
                        }}
                    />
                )
            }
        />
    );
}

