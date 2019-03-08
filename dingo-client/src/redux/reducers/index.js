import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import auth from './auth'
import userdata from './userdata'
import yearpicker from './yearpicker'

export default combineReducers({
    auth,
    userdata,
    yearpicker,
    form: formReducer
})