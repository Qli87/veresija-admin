import { connect } from 'react-redux'
import HomePage from '../../components/user/HomePage';
import { getUsersHP_request, getLicencesHP_request } from '../../actions/user.actions';

const mapStateToProps = state => ({
    users: state.userReducer.users,
    licences: state.userReducer.licences
})

const mapDispachToProps = dispatch => ({
    getUsers: () => dispatch(getUsersHP_request()),
    getLicences: () => dispatch(getLicencesHP_request())
})

const HomePageCon = connect (
    mapStateToProps,
    mapDispachToProps
)(HomePage)

export default HomePageCon