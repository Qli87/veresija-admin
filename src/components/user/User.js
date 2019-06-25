import React from 'react'
import { withRouter } from 'react-router-dom'


class User extends React.Component {
    constructor(props){
        super(props);
        this.editUser = this.editUser.bind(this);
    }

    editUser(userId) {
        let path = '/izmjeniKorisnika/'+userId;
        this.props.history.push(path)
    }

    render() {
        return(
            <tr>
                <td> #{this.props.id} </td>
                <td> {this.props.name} </td>
                <td> {this.props.start_from} </td>
                <td> {this.props.end_with} </td>
                <td style={{'textAlign':'center'}}> 
                    { this.props.active ? "Da" : "Ne"}
                </td>
                <td style={{'textAlign':'right'}}>
                {
                    this.props.showAllButtons ? 
                        <div>
                            <button type="button" rel="tooltip" 
                                onClick={() => this.props.renewUserLicence(this.props.user_id)}
                                title="Produzi licencu?" 
                                className="btn btn-success btn-link btn-sm" style={{'border': '0'}}>
                            <i className="material-icons">access_time</i>
                            </button>
                            <button type="button" rel="tooltip" 
                                    onClick={() => this.editUser(this.props.id)}
                                    title="Izmjeni korisnika" 
                                    className="btn btn-primary btn-link btn-sm" style={{'border': '0'}}>
                                <i className="material-icons">edit</i>
                            </button>
                            <button type="button" rel="tooltip" 
                                onClick={() => this.props.blockUserClick(this.props.id)}
                                    title="Promjeni status korisnika" 
                                    className="btn btn-danger btn-link btn-sm" style={{'border': '0'}}>
                                <i className="material-icons">block</i>
                            </button>
                            <button type="button" rel="tooltip" 
                                    title="Obrisi korisnika" 
                                    onClick={() => this.props.deleteUserClick(this.props.id)}
                                    className="btn btn-danger btn-link" style={{'border': '0'}}>
                                <i className="material-icons">close</i>
                            </button>
                        </div>
                        : 
                        (
                            this.props.homePage ?
                            <button type="button" rel="tooltip" 
                                    onClick={() => this.editUser(this.props.id)}
                                    title="Izmjeni korisnika" 
                                    className="btn btn-primary btn-link btn-sm" style={{'border': '0'}}>
                                <i className="material-icons">edit</i>
                            </button>
                            :
                            <button type="button" rel="tooltip" 
                            onClick={() => this.props.renewUserLicence(this.props.user_id)}
                            title="Promjeni status korisnika" 
                            className="btn btn-success btn-link btn-sm" style={{'border': '0'}}>
                            {
                                this.props.renewLicence  
                                ? <i className="material-icons">access_time</i>
                                : <i className="material-icons">autorenew</i>
                            }
                            
                        </button>
                        )

                }
                      
                </td>
            </tr>
        )
    }
}

export default withRouter(User)