import React from 'react'
import { Paper, Button, TextField } from '@material-ui/core'
import { white } from 'ansi-colors';


export default () => {

    const handleLogin = async (event) => {
        event.preventDefault()
        alert('Peeka Boooo, log in feature coming soon. Please stand by :)')
    }
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
                <form onSubmit={handleLogin}>
                    {/* <TextField
                        required
                        id="username"
                        label="User Name"
                        margin="normal"
                        type="text"
                        style={{ background: 'white', 'border-radius': '5px', padding: '5px 10px' }}
                    /> */}

                    <TextField
                        id="username"
                        label="User Name"
                        type="text"
                        name="username"
                        margin="normal"
                        variant="filled"
                        style={{ background: 'rgb(254, 254, 255)', 'border-radius': '5px' }}
                    />

                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        name="password"
                        margin="normal"
                        variant="filled"
                        style={{ background: 'rgb(254, 254, 255)', 'border-radius': '5px' }}
                    />

                    <br /><br />
                    <Button type="submit" variant="contained" color="primary" >Login</Button>
                </form>
            </Paper >
        </div>
    )
}