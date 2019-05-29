import React from 'react'
import { withRouter } from 'react-router-dom'


class HomePageLicences extends React.Component {
    constructor(props) {
        super(props)
        this.userDetails = this.userDetails.bind(this)
    }
    
    userDetails(userId) {
        let path = '/izmjeniKorisnika/'+userId
        this.props.history.push(path)
    }

    render() {
        return(
            <tr onClick={() => this.userDetails(this.props.id)}>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.start_from}</td>
                <td>{this.props.end_with}</td>
            </tr>
        )
    }
}


export default withRouter(HomePageLicences)