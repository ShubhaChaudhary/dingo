import React from 'react'
import { Paper, Button, TextField } from '@material-ui/core'

import {connect} from 'react-redux'
import {compose} from 'redux'

import * as actions from '../redux/action'
import {reduxForm, Field} from 'redux-form'



class Login extends React.Component {
    onSubmit = ({username,password})=>{
       this.props.login({username,password},()=>{
        //    this.props.history.push('/performance')
        document.location.reload()
       })
    //    
    }
    
   
    render() {
         const {handleSubmit} = this.props
        return (
            <div id='login-container'>
                <Paper style={{
                    padding: '30px',
                    width: '250px',
                    background: 'rgba(67, 67, 67, 0.80', //dingo grey
                    'max-height': '300px',
                    'border-radius': '10px'
                }}>
                    <img src="http://www.dingo.com/Dingo/media/img/dingo-logo.png" alt='Dingo logo' width='200px' />
                    <form onSubmit={handleSubmit(this.onSubmit)}>
                        <Field
                            id="username"
                            label="User Name"
                            type="text"
                            name="username"
                            margin="normal"
                            variant="filled"
                            component='input'
                            
                            style={{ background: 'rgb(254, 254, 255)', 'border-radius': '5px' }}
                        />
                        <Field
                            id="password"
                            label="Password"
                            type="password"
                            name="password"
                            margin="normal"
                            variant="filled"
                            component='input'
                          
                            style={{ background: 'rgb(254, 254, 255)', 'border-radius': '5px' }}
                        />
                        <br /><br />
                        <div>{this.props.errorMessage}</div>
                        <Button type="submit" variant="contained" color="primary" >Login</Button>
                    </form>
               </Paper >
            </div>
        )
    }
}

const mapStateToProps = state => ({
    access_token: state.auth.access_token,
    errorMessage: state.auth.errorMessage
});
  
export default compose(
    connect(mapStateToProps,actions),
    reduxForm({form: 'login'})
    )(Login)


 

