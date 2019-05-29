import React from 'react'
import Modal from 'react-responsive-modal'
import { withLocalize, Translate } from "react-localize-redux";


class ModalClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            ends_with: '',
            user: ''
        }
        // this.closeModal = this.closeModal.bind(this)
        this.changeDate = this.changeDate.bind(this)
    }


    componentWillReceiveProps(nextProps) {
        this.setState({
            showModal: nextProps.showModal,
            ends_with: nextProps.user.end_with
        })
    }

    changeDate(e) {
        this.setState({
            ends_with: e.target.value
        })
    }

    activateUser(userId, date) {
        this.props.activateUser(userId, date);
        this.props.shutDownModal();
    }

    blockUser(userId, status) {
        this.props.blockUser(userId, status);
        this.props.shutDownModal();
    }

    render() {
        return (
            <Modal open={this.state.showModal} onClose={this.props.shutDownModal}>
                <div className="card">
                    <div className="card-header card-header-primary">
                        <div className="nav-tabs-navigation">
                            <div className="nav-tabs-wrapper">
                                <ul className="nav">
                                    <li className="nav-item">  
                                        <a className="nav-link">
                                            <i className="material-icons p-1">priority_high</i> 
                                            <Translate id="areYouSure"> {this.props.sureMessage} </Translate> 
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="p-5">
                        {this.props.modalMessage} {this.props.user.name}
                        { this.props.modalName === "renewModal" ?
                                <input type="date" 
                                    value={this.state.ends_with}
                                    onChange={this.changeDate}
                                    max="3000-12-31" 
                                    min="1000-01-01" 
                                    className="form-control" 
                                    style={{'border': '0px', 'textAlign':'center', 'marginTop':'10px'}} />
                                : ""
                        }
                    </div>
                    
                    <div style={{'textAlign':'right'}}>
                        <button className="btn btn-danger btn-sm" onClick={this.props.shutDownModal}><Translate id="back"></Translate></button>
                        { this.props.modalName === "renewModal"  ?
                            <button className="btn btn-primary btn-sm" onClick={() => this.activateUser(this.props.user.id, this.state.ends_with)}><Translate id="active"></Translate></button>
                            : ""
                        }
                        

                        { this.props.modalName === "deleteModal" ?
                                <button className="btn btn-primary btn-sm"  onClick={() => this.props.deleteUser(this.props.user.id)}> <Translate id="delete"></Translate> </button>
                            : ""
                        }

                        {
                            this.props.modalName === "activeModal" ?
                                <button className="btn btn-primary btn-sm" onClick={() => this.blockUser(this.props.user.id, this.props.status)}> <Translate id="yes"></Translate> </button>
                            : ""
                        }

                        {
                            this.props.modalName === "licenceExpired" ?
                                <button className="btn btn-primary btn-sm" onClick={() => this.blockUser(this.props.user.id, this.props.status)}> <Translate id="active"></Translate> </button>
                            : ""
                        }
                    </div>
                </div>  
            </Modal>
        )
    }
}


export default withLocalize(ModalClass)