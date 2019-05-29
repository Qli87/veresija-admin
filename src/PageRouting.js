import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { userPath } from './constans/user.constants'
import UserListCon from './containers/user/UserListCon';
import SidebarContainer from './containers/SidebarContainer';
import UserEditCon from './containers/user/UserEditCon';
import HomePageCon from './containers/user/HomePageCon';
import UserInactiveCon from './containers/user/UserInactiveCon';
import UserAddCon from './containers/user/UserAddCon';
import UserLcExpCon from './containers/user/UserLcExpCon';
import UserLcExpSoonCon from './containers/user/UserLcExpSoonCon';
import LoginContainer from './containers/LoginContainer';

const routes = [
    {
        path: userPath.homePage,
        exact: true,
        main: () => <div> <HomePageCon /> </div>
    },
    {
        path: userPath.userList,
        main: () => <div> <UserListCon /> </div>
    },
    {
        path: userPath.userEdit+"/:id",
        main: ({match}) => <div> <UserEditCon userId={match.params} /> </div>
    },
    {
        path: userPath.userInactive,
        main: () => <div> <UserInactiveCon /> </div>
    },
    {
        path: userPath.userAdd,
        main: () => <div> <UserAddCon /> </div>
    },
    {
        path: userPath.licenceExpired,
        main: () => <div> <UserLcExpCon /> </div>
    },
    {
        path: userPath.licenceExpiredSoon,
        main: () => <div> <UserLcExpSoonCon /> </div>
    },
    {
        path: userPath.loginPage,
        main: () => <div> <LoginContainer/> </div>
    }
]

export default class PageRouting extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <Router>
                {/* style={{'backgroundColor': '#f1f1f1', 'height':'100%', 'width':'100%', 'minHeight':'100%', 'position': 'relative'}} */}
                <div className="container-fluide">
                    <SidebarContainer />
                    <div className="col-lg-9 offset-3 col-sm-10 pt-3">
                        {
                        routes.map((route, index) => (
                            <Route 
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.main}
                            />
                            ))
                        }                        
                    </div>
                </div>
            </Router>
        )
    }
}