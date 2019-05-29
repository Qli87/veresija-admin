import { connect } from 'react-redux'
import UserAdd from '../../components/user/UserAdd';
import { addUser_success } from '../../actions/user.actions';

const mapStateToProps = state => ({
    
})

const mapDispachToProps = dispatch => ({
    addUser: (user) => dispatch(addUser_success(user))
})

const UserAddCon = connect (
    mapStateToProps,
    mapDispachToProps
)(UserAdd)

export default UserAddCon