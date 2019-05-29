import React from 'react'
import { Translate } from 'react-localize-redux'
import ModalUserCon from '../../containers/user/ModalUserCon'
import User from './User';
import Pagination from 'react-js-pagination';


class UserLicenceExp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            activePage : 1,
            usersPerPage: 2,
            numberOfPages : 5,
            showPagination: false,
            sortedData: [],
            user: '',
            showModalLicence: false,
            sort: {
                column: null,
                direction: 'desc'
            }
        }
        this.onSort = this.onSort.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.renewUserLicence = this.renewUserLicence.bind(this)
        this.setActivePage = this.setActivePage.bind(this)
        this.searchByName = this.searchByName.bind(this)
    }

    componentDidMount(){
        this.props.getExpiredLicences();
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

    renewUserLicence(_user) {
        this.setState({
            user: _user,
            showModalLicence: true
        })
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

    closeModal() {
        this.setState({
            showModalLicence: false
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="card">
                        <div className="card-header card-header-primary">
                            <div className="nav-tabs-navigation">
                                <div className="nav-tabs-wrapper">
                                    <ul className="nav">
                                        <li className="nav-item">  
                                            <a className="nav-link">
                                                <i className="material-icons p-1">supervisor_account</i> <Translate id="licenceExpired"></Translate>
                                                <span className="nav-link" style={{'position':'absolute', 'right':'0', 'marginTop':'-36px', 'fontSize':'15px'}}>
                                                    <i className="material-icons">search</i>
                                                    <input type="text"  placeholder="Name"
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
                                            </th>

                                            <th className="sortable" onClick={this.onSort('name')} style={{'cursor':'pointer'}}>
                                                <div style={{'marginBottom': '-15px', 'fontSize':'10px'}}>
                                                    <span className="fa fa-chevron-up" ></span> 
                                                </div>
                                                <div style={{'marginRight':'8px', 'fontSize':'10px'}}>
                                                    <span className="fa fa-chevron-down"></span>
                                                </div>
                                                <p style={{'marginTop': '-25px', 'marginLeft': '16px'}}>
                                                    <Translate id="name">Ime</Translate>
                                                </p>
                                            </th>
                                            <th onClick={this.onSort('start')} style={{'cursor':'pointer'}}>
                                                <div style={{'marginBottom': '-15px', 'fontSize':'10px'}}>
                                                    <span className="fa fa-chevron-up" ></span> 
                                                </div>
                                                <div style={{'marginRight':'8px', 'fontSize':'10px'}}>
                                                    <span className="fa fa-chevron-down"></span>
                                                </div>
                                                <p style={{'marginTop': '-25px', 'marginLeft': '16px'}}>
                                                    <Translate id="from">Od</Translate>
                                                </p>
                                            </th>
                                            <th onClick={this.onSort('end')} style={{'cursor':'pointer'}}>
                                                <div style={{'marginBottom': '-15px', 'fontSize':'10px'}}>
                                                    <span className="fa fa-chevron-up" ></span> 
                                                </div>
                                                <div style={{'marginRight':'8px', 'fontSize':'10px'}}>
                                                    <span className="fa fa-chevron-down"></span>
                                                </div>
                                                <p style={{'marginTop': '-25px', 'marginLeft': '16px'}}>
                                                    <Translate id="to">Do</Translate>
                                                </p>
                                            </th>
                                            <th onClick={this.onSort('status')} style={{'cursor':'pointer'}}>
                                                <div style={{'marginBottom': '-15px', 'fontSize':'10px'}}>
                                                    <span className="fa fa-chevron-up" ></span> 
                                                </div>
                                                <div style={{'marginRight':'8px', 'fontSize':'10px'}}>
                                                    <span className="fa fa-chevron-down"></span>
                                                </div>
                                                <p style={{'marginTop': '-25px', 'marginLeft': '16px'}}>
                                                    <Translate id="status">Status</Translate>
                                                </p>
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
                                        this.state.sortedData.map(user => {
                                            return <User 
                                                key={user.id}
                                                id={user.id}
                                                name={user.name}
                                                start_from={user.start_from}
                                                end_with={user.end_with}
                                                status={user.status}
                                                showAllButtons={false}
                                                renewLicence={true}
                                                showExpiredLicences={true}
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

export default UserLicenceExp