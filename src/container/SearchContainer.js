import {connect} from 'react-redux'
import { searchTerm, updateSearchTerm, clearSearchTerm, toggleNewDataAlert } from '../actions'
import Search from '../component/Search'

const mapStateToProps = state => ({
    term: state.searchReducer.searchField,
    searchResult: state.searchReducer.searchResult,
    socket: state.searchReducer.socket,
    isNewData: state.searchReducer.isNewData
})
  
const mapDispatchToProps = dispatch => ({
    onSearchClick: (query, socket) => dispatch(searchTerm(query, socket)),
    onSearchQueryChange: (term, socket) => dispatch (updateSearchTerm(term, socket)),
    onAlertClose:() => dispatch(toggleNewDataAlert()),
    onCloseIconClick: () => dispatch(clearSearchTerm())
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Search)

