const initialState = {
    name: null,
    loading: false,
    error: null,
    contacted: false
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case('TRANS_START'):
            return {
                ...state,
                loading: true,
                error: null
            };
        case('TRANS_SUCCESS'):
            return {
                ...state,
                name: action.name,
                loading: false,
                contacted: true,
                error: null
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
