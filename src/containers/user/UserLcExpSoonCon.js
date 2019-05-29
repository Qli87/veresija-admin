import { connect } from 'react-redux'
import  UserLicenceExpSoon  from '../../components/user/UserLicenceExpSoon'
import { licenceExpiredSoon_request } from '../../actions/user.actions';


const mapStateToProps = state => ({
    users: state.userReducer.users
})

const mapDispachToProps = dispatch => ({
    getLicences: () => dispatch(licenceExpiredSoon_request())
})

const UserLcExpConSoon = connect (
    mapStateToProps,
    mapDispachToProps
)(UserLicenceExpSoon)

export default UserLcExpConSoon