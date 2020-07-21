const initialState = {
    contact: {},
    loading: false,
    error: null
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case('TRANS_START'):
            return state;
        case('TRANS_SUCCESS'):
            return state;
        case('TRANS_FAILED'):
            return state;
        default:
            return state;
    }
}

export default reducer;
