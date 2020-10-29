import * as actionTypes from '../actionTypes'
import searchService from '../services/searchservice'
import _isEmpty from 'lodash/isEmpty'
import _isUndefined from 'lodash/isUndefined'
import socketIOClient from "socket.io-client";

export const searchTerm = (query, socket) => {
    return dispatch => {
        if (_isEmpty(query) || _isUndefined(query)) {
            dispatch({ type: actionTypes.SEARCH_ITEM, value: {} })
        } else {
            searchService.executeQuery(query)
                .then((response) => {
                    dispatch({ type: actionTypes.SEARCH_ITEM, value: response })
                })
        }
        dispatch(updateSocket(query, socket))
    }
}

export const updateSocket = (term, socket) => async dispatch =>{
    socket = socketIOClient("https://socket-io-node-search.herokuapp.com",{query:`searchId=${term}`});
    socket.on("FromAPI", data => {
        if(data.isUpdated){
          dispatch({ type: actionTypes.SEARCH_ITEM, value: data.updatedData})
          dispatch(toggleNewDataAlert())
        }
    });
    
    dispatch({ type: actionTypes.UPDATE_SOCKET, value: socket})
}

export const toggleNewDataAlert = () => dispatch => {
    dispatch({type: actionTypes.TOGGLE_NEW_DATA_ALERT})
}

export const updateSearchTerm = (term, socket) => dispatch => {
    if(_isEmpty(term) || _isUndefined(term)){
        dispatch({type: actionTypes.UPDATE_SEARCH_TERM, value: ""})
        // dispatch(searchTerm(term, socket))
    }else{
        dispatch({type: actionTypes.UPDATE_SEARCH_TERM, value: term.target.value})
        // dispatch(searchTerm(term.target.value, socket))
    }
}

export const clearSearchTerm = () => dispatch => {
    dispatch(updateSearchTerm())
}