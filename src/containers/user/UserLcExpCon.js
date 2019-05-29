import { connect } from 'react-redux'
import UserLicenceExp from '../../components/user/UserLicenceExp'
import { licenceExpired_request } from '../../actions/user.actions';

const mapStateToProps = state => ({
    users: state.userReducer.users
})

const mapDispachToProps = dispatch => ({
    getExpiredLicences: () => dispatch(licenceExpired_request())
})

const UserLcExpCon = connect (
    mapStateToProps,
    mapDispachToProps
)(UserLicenceExp)

export default UserLcExpCon