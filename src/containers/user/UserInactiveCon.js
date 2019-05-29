import { connect } from 'react-redux'
import UserInactive from '../../components/user/UserInactive';
import { getInactiveUsers_request } from '../../actions/user.actions';

const mapStateToProps = state => ({
    users: state.userReducer.users    
})

const mapDispachToProps = dispatch => ({
    getInactiveUsers: () => dispatch(getInactiveUsers_request())
})

const UserInactiveCon = connect (
    mapStateToProps,
    mapDispachToProps
)(UserInactive)

export default UserInactiveCon