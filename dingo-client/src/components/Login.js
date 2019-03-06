<<<<<<< HEAD
import React from 'react'
import { Paper, Button, TextField } from '@material-ui/core'
import { white } from 'ansi-colors';
const axios = require('axios');
const { Issuer } = require('openid-client')


class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }
    addingUsername = (e) => {
        const username = e.target.value
        this.setState(() => ({ username }))
    }
    addingPassword = (e) => {
        const password = e.target.value
        this.setState(() => ({ password }))
    }
    handleLogin = (event) => {
        event.preventDefault()
        let discovered = null;
        let client = null;
        let access_token = null;
        let token_type = null;
        let username = this.state.username;
        let password = this.state.password;

        console.green = function (text) {
            console.log('\x1b[32m%s\x1b[0m', text);
        };

        console.red = function (text) {
            console.log('\x1b[31m%s\x1b[0m', text);
        };

        console.yellow = function (text) {
            console.log('\x1b[33m%s\x1b[0m', text);
        };

        Issuer.defaultHttpOptions = { timeout: 5000 };
        Issuer.discover('https://trakkaacc.dingo.com/ws/Gemini/authService/.well-known/openid-configuration')
            .then(function (result) {
                discovered = result;

                console.green('Discovered issuer:');
                console.log('');
                console.log('discovered: ', discovered);
                console.log('');
                console.log('discovered.issuer: ', discovered.issuer);
                console.log('');
                console.log('discovered.metadata: ', discovered.metadata);
                console.log('**********************************************************************');
            })
            .then(function setupClient() {
                // Create a new auth client using the discovered settings...
                const clientSettings = {
                    client_id: 'performanceAndBenchmarkApp',
                    client_secret: '{8ED66AC7-3b9a-429b-b3d7-EDFE132986EB}',
                    token_endpoint_auth_method: 'client_secret_post'
                }
                client = new discovered.Client(clientSettings);
                console.log('new Client:');
                console.log('');
                console.log('client: ', client);
                console.log('');
                console.log('client.issuer: ', client.issuer);
                console.log('');
                console.log('client.metadata: ', client.metadata);
                console.log('**********************************************************************');
            })
            .then(function tryBadLogin() {
                // Login with bad credentials...
                const loginSettings = {
                    grant_type: 'password',
                    scope: 'email openid profile trakkaApi',
                    username: 'hello',
                    password: 'world'
                }
                client.grant(loginSettings)
                    .then(function (success) {
                        // Shouldn't get here because of invalid credentials.
                        console.green('Login success:');
                        console.log('success: ', success);
                        console.log('**********************************************************************');
                    })
                    .catch(error => {
                        console.red('Login error: ');
                        console.red(error);
                        console.log('error: ', error.error);
                        console.log('error_description: ', error.error_description);
                        console.log('**********************************************************************');
                    });
            })
            .then(function trySuccessfulLogin() {
                // Login with good credentials...
                const loginSettings = {
                    grant_type: 'password',
                    scope: 'email openid profile trakkaApi',
                    username: username,
                    password: password
                }
                client.grant(loginSettings)
                    .then(function (success) {
                        // Should be successful and get here...
                        // What you're looking for is the access_token and token_type
                        access_token = success.access_token;
                        token_type = success.token_type;

                        console.green('Login success:');
                        // console.log(success);
                        console.log('access_token: ', success.access_token);
                        console.log('expires_at: ', success.expires_at);
                        console.log('token_type: ', success.token_type);
                        console.log('**********************************************************************');
                    })
                    .then(function logout() {
                        // Not shown in the authService's metadata is the logout method.
                        // Trakka users are generally limited to 2-5 concurrent sessions.
                        // You need to logout occassionally so they don't run out of sessions.
                        // You'll be able to tell when that happens because a known-good
                        // username+password combination will start returning 'invalid_grant'
                        // to every login request.
                        if (access_token && token_type) {
                            const logoutUrl = discovered.issuer + '/logout';
                            console.yellow('Logging out...');
                            console.log('logoutUrl: ', logoutUrl);

                            axios.defaults.headers.get['Authorization'] = token_type + ' ' + access_token;
                            axios.get(logoutUrl)
                                .then(function (success) {
                                    console.green('Logged out success:');
                                    console.log('**********************************************************************');
                                })
                                .catch(error => {
                                    console.red('Logout error:');
                                    console.red(error);
                                    console.log('error: ', error.error);
                                    console.log('error_description: ', error.error_description);
                                    // console.log('request: ', error.request);
                                    // console.log('response: ', error.response);
                                    console.log('**********************************************************************');
                                });
                        }
                    })
                    .catch(error => {
                        console.red('Login error:');
                        console.red(error);
                        console.log('error: ', error.error);
                        console.log('error_description: ', error.error_description);
                        console.log('**********************************************************************');
                    });
            })

    }
    render() {
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
                    <form onSubmit={this.handleLogin}>
                        <TextField
                            id="username"
                            label="User Name"
                            type="text"
                            name="username"
                            margin="normal"
                            variant="filled"
                            onChange={this.addingUsername}
                            style={{ background: 'rgb(254, 254, 255)', 'border-radius': '5px' }}
                        />
                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                            name="password"
                            margin="normal"
                            variant="filled"
                            onChange={this.addingPassword}
                            style={{ background: 'rgb(254, 254, 255)', 'border-radius': '5px' }}
                        />
                        <br /><br />
                        <Button type="submit" variant="contained" color="primary" >Login</Button>
                    </form>
                </Paper >
            </div>
        )
    }
}
export default Login
=======
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
    connect(mapStateToProps, actions),
    reduxForm({ form: 'login' })
)(Login)




>>>>>>> 59dca782bafbdabfbb41aa5de46afb0549c9ba9b
