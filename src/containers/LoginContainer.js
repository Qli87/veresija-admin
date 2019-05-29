import Login from '../components/auth/Login'
import { login_request } from '../actions/admin.actions'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    admin: state.adminReducer.admin
})

const mapDispatchToProps = dispatch => ({
    checkCredentials: (admin) => dispatch(login_request(admin))
})

const LoginContainer = connect (
    mapStateToProps,
    mapDispatchToProps
)(Login)

export default LoginContainer