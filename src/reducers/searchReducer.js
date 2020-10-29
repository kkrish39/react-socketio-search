import * as actionTypes from '../actionTypes'

let defaultState = {searchField:"",searchResult:{}, socket: null, isNewData:false}

const searchReducer = (state=defaultState, action) => {
    switch(action.type){
        case actionTypes.UPDATE_SEARCH_TERM:
            return {...state, searchField:action.value}
        case actionTypes.SEARCH_ITEM:
            return {...state, searchResult:action.value}
        case actionTypes.UPDATE_SOCKET:
            return{...state, socket:action.value}
        case actionTypes.TOGGLE_NEW_DATA_ALERT:
            return{...state, isNewData:!state.isNewData}
        default:
            return state
    }
}

export default searchReducer