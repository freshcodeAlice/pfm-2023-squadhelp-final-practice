import ACTION from '../actions/actionTypes';

const initialState = []


function transactionReducer(state = initialState, action) {
    switch(action.type) {
        case ACTION.GET_TRANSACTIONS_SUCCESS: {
            return action.payload
        }
        default: {
            return state
        }
    }
}


export default transactionReducer