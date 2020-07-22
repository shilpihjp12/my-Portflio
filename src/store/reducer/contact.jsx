const initialState = {
    name: null,
    loading: false,
    error: null
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case('TRANS_START'):
            return {
                ...state,
                loading: true
            };
        case('TRANS_SUCCESS'):
            return {
                ...state,
                name: action.name,
                loading: false
            };
        case('TRANS_FAILED'):
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
}

export default reducer;
