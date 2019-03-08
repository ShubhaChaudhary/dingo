import React from 'react'
import { Paper, Button, TextField } from '@material-ui/core'

import { connect } from 'react-redux'
import { compose } from 'redux'

import * as actions from '../redux/action'
import { reduxForm, Field } from 'redux-form'



class Login extends React.Component {

    onSubmit = ({ username, password }) => {
        this.props.login({ username, password }, () => {
            //    this.props.history.push('/performance')
        })
        //    
    }


    render() {
        const { handleSubmit } = this.props
        return (
            <div id='login-container'>
                <Paper style={{
                    color: 'white',
                    padding: '30px',
                    width: '200px',
                    background: 'rgba(67, 67, 67, 0.80', //dingo grey
                    'max-height': '375px',
                    'border-radius': '10px'
                }}>
                    <img src="http://www.dingo.com/Dingo/media/img/dingo-logo.png" alt='Dingo logo' width='200px' />
                    <form onSubmit={handleSubmit(this.onSubmit)}>
                    <h3>Performance and Banchmarking</h3>
                    <br></br>
                    <p>Username</p>
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
                        <br></br>
                        <p>Password</p>
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
    connect(mapStateToProps, actions),
    reduxForm({ form: 'login' })
)(Login)




