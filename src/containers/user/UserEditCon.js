import { connect } from 'react-redux'
import UserEdit from '../../components/user/UserEdit'
import { userDetails_success, userEdit_success } from '../../actions/user.actions';

const mapStateToProps = state => ({
    users: state.userReducer.users,
    user: state.userReducer.user
})

const mapDispachToProps = dispatch => ({
    fetchUserDetails: (id) => dispatch(userDetails_success(id)),
    editUser: (user) => dispatch(userEdit_success(user))
})

const UserEditCon = connect (
    mapStateToProps,
    mapDispachToProps
)(UserEdit)

export default UserEditCon