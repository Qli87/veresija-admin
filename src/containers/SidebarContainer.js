import Sidebar from '../Sidebar'
import { connect } from 'react-redux'
import { getTranslations_request } from '../actions/admin.actions';


const mapStateToProps = state => ({
    translations: state.adminReducer.translations
})

const mapDispatchToProps = dispatch => ({
    getTranslations: () => dispatch(getTranslations_request())
})

const SidebarContainer = connect (
    mapStateToProps,
    mapDispatchToProps
)(Sidebar)

export default SidebarContainer