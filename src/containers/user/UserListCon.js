import { getUsers_request, deleteUser_success } from "../../actions/user.actions";
import { connect } from 'react-redux'
import UserList from '../../components/user/UserList'

const mapStateToProps = state => ({
    users: state.userReducer.users
})

const mapDispachToProps = dispatch => ({
    getUsers: () => dispatch(getUsers_request()),
    //treba da se pozovu user_request akcije, ne success, kada se napravi server i validan api
    deleteUser: (user) => dispatch(deleteUser_success(user))
})

const UserListCon = connect (
    mapStateToProps,
    mapDispachToProps
)(UserList)

export default UserListCon