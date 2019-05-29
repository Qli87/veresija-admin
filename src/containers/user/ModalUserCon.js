import { connect } from 'react-redux'
import { activateUser_success, blockUser_success } from '../../actions/user.actions';
import ModalClass from '../../components/ModalClass';

const mapStateToProps = state => ({
    users: state.userReducer.users
})

const mapDispachToProps = dispatch => ({
    activateUser: (userId, date) => dispatch(activateUser_success(userId, date)),
    blockUser: (userId, status) => dispatch(blockUser_success(userId, status)),
    //dodati akciju, reducer, api.. za promjenu statusa inactive->active
})

const ModalUserCon = connect (
    mapStateToProps,
    mapDispachToProps
)(ModalClass)

export default ModalUserCon