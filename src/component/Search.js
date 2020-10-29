import React from 'react';

import '../assets/css/search.css';

import PropTypes from 'prop-types'
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import SearchCards from './SearchCards';


const Search = (props) => {
    return (<div id="search-input">
        <TextField
            id="search-inut"
            variant="outlined"
            fullWidth
            onChange={(e) => props.onSearchQueryChange(e, props.socket)}
            value={props.term}
            onKeyPress={(e) => (e.key === 'Enter') ? props.onSearchClick(props.term, props.socket) : null}
            placeholder="Search here..."
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">
                        <CloseIcon id="input-clear-icon" onClick={props.onCloseIconClick} />
                    </InputAdornment>
                )
            }}
        />
       <div id="hintPlaceholder">* hint: seach for acme/carol/john/bob/lunch/slack/dropbox/calendar/contacts/roe for sample results</div>
        {/** Commented this code in-case we need a search  */}
        {/* <Button id="search-btn" variant="outlined" onClick={() => props.onSearchClick(props.term, props.socket)}>search</Button> */}
        <Snackbar
            className="snackbar-success"
            open={props.isNewData}
            autoHideDuration={6000}
            message="New data received! Updating results"
            onClose={props.onAlertClose}
        />
        <SearchCards result={props.searchResult} />
    </div>)
};

Search.propTypes = {
    onSearchClick: PropTypes.func.isRequired,
    onSearchQueryChange: PropTypes.func.isRequired

}
export default Search;
