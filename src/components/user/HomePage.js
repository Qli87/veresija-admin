import React from 'react'
import { withRouter } from 'react-router-dom'
import { Translate, withLocalize } from 'react-localize-redux';
import HomePageLicences from './HomePageLicences';
import User from './User';


class HomePage extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.getUsers();
        this.props.getLicences();
    }

    render() {
        return(
            <div className="container-fluid">

                <div className="row">
                
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="card card-stats">
                            <div className="card-header card-header-primary card-header-icon">
                                <div className="card-icon">
                                    <i className="material-icons">person_outline</i>
                                </div>
                                    <Translate id="usersHP">Korisnici</Translate>
                                    <h6 className="card-title">250</h6>
                            </div>
                            <div className="card-footer">
                                <div className="stats">
                                    <i className="material-icons text-danger">warning</i>
                                    <a href="#pablo">
                                        <Translate id="numberOfUsers"></Translate>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="card card-stats">
                            <div className="card-header card-header-success card-header-icon">
                                <div className="card-icon">
                                    <i className="material-icons">person_outline</i>
                                </div>
                                <Translate id="activeUsersHP"></Translate>
                                <h6 className="card-title">55
                                </h6>
                            </div>
                            <div className="card-footer">
                                <div className="stats">
                                    <i className="material-icons text-danger">warning</i>
                                    <a href="#pablo">
                                        <Translate id="numberOfActiveUsers"></Translate>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="card card-stats">
                            <div className="card-header card-header-danger card-header-icon">
                                <div className="card-icon">
                                    <i className="material-icons">person_outline</i>
                                </div>
                                <Translate id="licenceExpiredHP"></Translate>
                                <h6 className="card-title">10</h6>
                            </div>
                            <div className="card-footer">
                                <div className="stats">
                                    <i className="material-icons text-danger">warning</i>
                                    <a href="#pablo">
                                        <Translate id="numberOfInactiveUsers"></Translate>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header card-header-tabs card-header-danger">
                                <h4 className="card-title">
                                    <a href="istekleLicence">
                                        <i className="material-icons">assignment_late</i>
                                        <Translate id="licenceExpired"></Translate> 
                                    </a>
                                </h4>
                            </div>
                            <div className="card-body table-responsive">
                                <table className="table table-hover">
                                    <thead className="text-warning">
                                        <tr>
                                            <th> <Translate id="userId" ></Translate> </th>
                                            <th> <Translate id="name" ></Translate> </th>
                                            <th> <Translate id="from" ></Translate> </th>
                                            <th> <Translate id="to" ></Translate> </th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                    {
                                        this.props.licences.map(user => {
                                            return <HomePageLicences
                                                key={user.id}
                                                id={user.id}
                                                name={user.name}
                                                start_from={user.start_from}
                                                end_with={user.end_with}
                                            />
                                        })
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header card-header-tabs card-header-warning">
                                <h4 className="card-title">
                                    <a href="isticuUskoro" title="Lista zaduzenja">
                                        <i className="material-icons">assignment_turned_in</i>
                                        <Translate id="licenceExpiredSoon"></Translate>
                                    </a>
                                </h4>
                            </div>
                            <div className="card-body table-responsive">
                                <table className="table table-hover">
                                    <thead className="text-warning">
                                        <tr>
                                            <th> <Translate id="userId" ></Translate> </th>
                                            <th> <Translate id="name" ></Translate> </th>
                                            <th> <Translate id="from" ></Translate> </th>
                                            <th> <Translate id="to" ></Translate> </th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                    {
                                        this.props.licences.map(user => {
                                            return <HomePageLicences
                                                key={user.id}
                                                id={user.id}
                                                name={user.name}
                                                start_from={user.start_from}
                                                end_with={user.end_with}
                                            />
                                        })
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                            <div className="card">
                                <div className="card-header card-header-tabs card-header-warning">
                                <h4 className="card-title">
                                    <a href="listaKorisnika" title="Lista korisnika">
                                        <i className="material-icons">person_pin</i>
                                        <Translate id="userList"></Translate>
                                    </a>
                                </h4>
                        <p className="card-category"><i className="material-icons">fiber_new</i>
                            <Translate id="newUsers"></Translate>
                        </p>
                                </div>
                                <div className="card-body table-responsive">
                                    <table className="table table-hover">
                                        <thead className="text-warning">
                                            <tr>
                                                <th> <Translate id="userId"></Translate> </th>
                                                <th> <Translate id="name" ></Translate> </th>
                                                <th> <Translate id="from" ></Translate> </th>
                                                <th> <Translate id="to" ></Translate> </th>
                                                <th style={{'textAlign':'center'}}> <Translate id="activeUser" ></Translate> </th>
                                                <th style={{'textAlign':'center'}}> <Translate id="action"></Translate> </th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                            {
                                                this.props.users.map(user => {
                                                    return <User
                                                        key={user.id}
                                                        id={user.id}
                                                        name={user.name}
                                                        start_from={user.start_from}
                                                        end_with={user.end_with}
                                                        active={user.active}
                                                        homePage={true}
                                                    />
                                                })
                                            }
                                        </tbody>
                                    </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


export default withLocalize(withRouter(HomePage))