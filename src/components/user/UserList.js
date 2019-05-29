import React from 'react'
import User from './User'
import 'font-awesome/css/font-awesome.min.css';
import { withLocalize, Translate } from "react-localize-redux";
import ModalUserCon from '../../containers/user/ModalUserCon';
import Pagination from 'react-js-pagination';

class UserList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            activePage : 1,
            usersPerPage: 5,
            numberOfPages : 5,
            showPagination: false,
            sort: {
                column: null,
                direction: 'desc'
            },
            sortedData: [],
            showActiveModal: false,
            showModalDelete: false,
            showModalLicence: false,
            user: ''
        }

        this.onSort = this.onSort.bind(this);
        this.searchByName = this.searchByName.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.activateUser = this.activateUser.bind(this);
        this.setActivePage = this.setActivePage.bind(this);
    }

    componentDidMount() {
        this.props.getUsers();
    }

    componentWillReceiveProps(nextProps) {
        let paginationUsers= [];
        let showP = false;
        if(nextProps.users.length > 0) {
            paginationUsers = nextProps.users.slice(this.state.activePage*this.state.usersPerPage-this.state.usersPerPage,
                this.state.activePage*this.state.usersPerPage, []);
            if(this.state.usersPerPage >= nextProps.users.length){
                showP = true
            } else {
                showP = false
            }
        }
        this.setState({
            sortedData: paginationUsers,
            showPagination: showP
        })
    }

    setActivePage(pageNumber) {
        let paginationUsers = [];
        paginationUsers = this.props.users.slice(pageNumber*this.state.usersPerPage-this.state.usersPerPage,
            pageNumber*this.state.usersPerPage, []);
        this.setState({
            activePage: pageNumber,
            sortedData: paginationUsers
        })
    }

    // searchByName = (event) => {
    //     let filteredData = this.props.users;
    //     filteredData = filteredData.filter((item) => {
    //         return item.name.toLowerCase().search(
    //             event.target.value.toLowerCase()) !== -1
    //     })
    //     this.setState({
    //         sortedData: filteredData
    //     })
    // }

    searchByName = (event) => {
        let filteredData = this.props.users;
        filteredData = filteredData.filter((item) => {
            return item.name.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1
        })
        if(filteredData.length > 0) {
            filteredData = filteredData.slice(this.state.activePage*this.state.usersPerPage-this.state.usersPerPage,
                this.state.activePage*this.state.usersPerPage, []);
        }
        this.setState({
            sortedData: filteredData
        })
    } 
    
    deleteUserClick(_user) {
        this.setState({
            user: _user,
            showModalDelete: true
        })
    }

    blockUserClick(_user) {
        this.setState({
            user: _user,
            showActiveModal: true
        })
    }

    renewUserLicence(_user) {
        this.setState({
            user: _user,
            showModalLicence: true
        })
    }

    closeModal() {
        this.setState({
            showActiveModal: false,
            showModalDelete: false,
            showModalLicence: false
        })
    }

    deleteUser(user) {
        this.props.deleteUser(user);
        this.closeModal();
    }

    activateUser(userId, date) {
        this.props.activateUser(userId, date);
        this.closeModal();
    }

    onSort = (column) => (e) => {
        const direction = this.state.sort.column ? (this.state.sort.direction === 'asc' ? 'desc' : 'asc') : 'desc';
        const data = this.state.sortedData.sort((a,b) => {
            if(column === 'name' || column === 'status') {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if(nameA  < nameB) {
                    return -1;
                }
                if(nameA > nameB) {
                    return 1;
                }
                return 0;   
            } else if (column === 'id') {
                return b.id - a.id
            } else if (column === 'start' || column === 'end') {
                const x = Date.parse(a.start_from)
                const y = Date.parse(b.start_from)
                return x-y;
            }
        })
        if(direction === 'asc') {
            data.reverse();
        }
        this.setState({
            sort: {
                column: column,
                direction: direction
            },
            sortedData: data
        })
    }



    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="card">
                        <div className="card-header card-header-primary">
                            <div className="nav-tabs-navigation">
                                <div className="nav-tabs-wrapper">
                                    <ul className="nav">
                                        <li className="nav-item">  
                                            <a className="nav-link">
                                                <i className="material-icons p-1">supervisor_account</i> <Translate id="userListHeader">Pregled svih korisnika</Translate>
                                                <span className="nav-link" style={{'position':'absolute', 'right':'0', 'marginTop':'-36px', 'fontSize':'15px'}}>
                                                    <i className="material-icons">search</i>
                                                    <input className="" type="text"  placeholder="Name"
                                                    // 'fontFamily':'Lucida Console, Monaco, monospace'  
                                                        style={{'border':'0px','marginLeft':'5px', 'height':'26px', 'borderRadius': '2px'}} 
                                                        onChange={this.searchByName}/>
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead className="text-primary">
                                        <tr>
                                            <th onClick={this.onSort('id')} style={{'cursor':'pointer'}}>
                                                <div style={{'marginBottom': '-15px', 'fontSize':'10px'}}>
                                                    <span className="fa fa-chevron-up" ></span> 
                                                </div>
                                                <div style={{'marginRight':'8px', 'fontSize':'10px'}}>
                                                    <span className="fa fa-chevron-down"></span>
                                                </div>
                                                <p style={{'marginTop': '-25px', 'marginLeft': '16px'}}>
                                                    <Translate id="userId" >User ID</Translate>
                                                </p>
                                                {/* <p style={{'marginTop': '-25px', 'marginLeft': '16px'}}>User ID</p> */}
                                            </th>

                                            <th className="sortable" onClick={this.onSort('name')} style={{'cursor':'pointer'}}>
                                                <div style={{'marginBottom': '-15px', 'fontSize':'10px'}}>
                                                    <span className="fa fa-chevron-up" ></span> 
                                                </div>
                                                <div style={{'marginRight':'8px', 'fontSize':'10px'}}>
                                                    <span className="fa fa-chevron-down"></span>
                                                </div>
                                                <p style={{'marginTop': '-25px', 'marginLeft': '16px'}}>
                                                    <Translate id="name"></Translate>
                                                </p>
                                                {/* <p style={{'marginTop': '-25px', 'marginLeft': '16px'}}>Ime</p> */}
                                            </th>
                                            <th onClick={this.onSort('start')} style={{'cursor':'pointer'}}>
                                                <div style={{'marginBottom': '-15px', 'fontSize':'10px'}}>
                                                    <span className="fa fa-chevron-up" ></span> 
                                                </div>
                                                <div style={{'marginRight':'8px', 'fontSize':'10px'}}>
                                                    <span className="fa fa-chevron-down"></span>
                                                </div>
                                                <p style={{'marginTop': '-25px', 'marginLeft': '16px'}}>
                                                    <Translate id="from"></Translate>
                                                </p>
                                                {/* <p style={{'marginTop': '-25px', 'marginLeft': '16px'}}>Od  </p> */}
                                            </th>
                                            <th onClick={this.onSort('end')} style={{'cursor':'pointer'}}>
                                                <div style={{'marginBottom': '-15px', 'fontSize':'10px'}}>
                                                    <span className="fa fa-chevron-up" ></span> 
                                                </div>
                                                <div style={{'marginRight':'8px', 'fontSize':'10px'}}>
                                                    <span className="fa fa-chevron-down"></span>
                                                </div>
                                                <p style={{'marginTop': '-25px', 'marginLeft': '16px'}}>
                                                    <Translate id="to"></Translate>
                                                </p>
                                                {/* <p style={{'marginTop': '-25px', 'marginLeft': '16px'}}>Do</p> */}
                                            </th>
                                            <th onClick={this.onSort('status')} style={{'cursor':'pointer'}}>
                                                <div style={{'marginBottom': '-15px', 'fontSize':'10px'}}>
                                                    <span className="fa fa-chevron-up" ></span> 
                                                </div>
                                                <div style={{'marginRight':'8px', 'fontSize':'10px'}}>
                                                    <span className="fa fa-chevron-down"></span>
                                                </div>
                                                <p style={{'marginTop': '-25px', 'marginLeft': '16px'}}>
                                                    <Translate id="activeUser"></Translate>
                                                </p>
                                                {/* <p style={{'marginTop': '-25px', 'marginLeft': '16px'}}>Status</p> */}
                                            </th>
                                            <th style={{'textAlign':'center'}}>
                                                <p>
                                                    <Translate id="action">Akcije</Translate>
                                                </p>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        // this.props.users
                                        this.state.sortedData.map(user => {
                                            return <User 
                                                    key={user.id}
                                                    id={user.id}
                                                    name={user.name}
                                                    start_from={user.start_from}
                                                    end_with={user.end_with}
                                                    active={user.active}
                                                    user={user}
                                                    showAllButtons={true}
                                                    deleteUserClick={() => this.deleteUserClick(user)}
                                                    blockUserClick={() => this.blockUserClick(user)}
                                                    renewUserLicence={() => this.renewUserLicence(user)}
                                                    />
                                        })
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div style={{'marginLeft': '40%'}}>
                        <Pagination className="pagination"
                            activePage={this.state.activePage}
                            itemsCountPerPage={this.state.usersPerPage}
                            totalItemsCount={this.props.users.length}
                            pageRangeDisplayed={5}
                            onChange={this.setActivePage}
                            hideDisabled
                            activeClass="activeClassPagination"
                        />                
                    </div>


                    <ModalUserCon showModal={this.state.showActiveModal} 
                        sureMessage="Jeste li sigurni?"
                        modalMessage={<Translate id="activeModal"></Translate>}
                        user={this.state.user || ""} 
                        shutDownModal={this.closeModal} 
                        modalName="activeModal"
                        /> 

                    <ModalUserCon showModal={this.state.showModalDelete}
                        sureMessage="Jeste li sigurni?"
                        modalMessage={<Translate id="deleteUser"></Translate>}
                        user={this.state.user || ""} 
                        shutDownModal={this.closeModal} 
                        deleteUser={() => this.deleteUser(this.state.user)}
                        modalName="deleteModal"
                        /> 

                    <ModalUserCon showModal={this.state.showModalLicence}
                        user={this.state.user || ""}
                        sureMessage="Jeste li sigurni?"
                        modalMessage={<Translate id="renewLicence"></Translate>}
                        shutDownModal={this.closeModal} 
                        modalName="renewModal"
                        />

                </div>
            </div>
        )
    }
}

export default withLocalize(UserList)