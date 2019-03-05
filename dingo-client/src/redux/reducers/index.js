import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import auth from './auth'
import userdata from './userdata'

export default combineReducers({
    auth,
    userdata,
    form: formReducer
})