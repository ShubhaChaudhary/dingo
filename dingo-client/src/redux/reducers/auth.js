// Reducer for authentication,  changing the state with action creator dispatch method
const INITIAL_STATE = {
    access_token: '',
    token_type: '',
    site: '',
    errorMessage: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ('AUTH_USER'):
            return { ...state, access_token: action.payload.access_token, token_type: action.payload.token_type, site: action.payload.site }
        case ('AUTH_ERROR'):
            return { ...state, errorMessage: action.payload }
        default:
            return state
    }

}