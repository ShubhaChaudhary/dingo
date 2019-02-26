import React from 'react'
import { Paper, Button, TextField } from '@material-ui/core'


export default () => {

    const handleLogin = async (event) => {
        event.preventDefault()
        alert('Peeka Boooo, log in feature coming soon. Please stand by :)')
    }
    return (

        <div id='login-container'>
            <Paper style={{
                padding: '30px',
                background: 'rgba(255, 255, 250, 0.85)',
                'max-height': '300px'
            }}>

                <form onSubmit={handleLogin}>
                    <TextField
                        required
                        id="username"
                        label="User Name"
                        margin="normal"
                        type="text"
                    />

                    <br /><br />

                    <TextField
                        required
                        id="password"
                        label="Password"
                        margin="normal"
                        type="password"
                    />
                    <br /><br />
                    <Button type="submit" variant="contained" color="primary" >Login</Button>
                </form>
            </Paper >
            <img src="http://www.dingo.com/Dingo/media/img/dingo-logo.png" alt='Dingo logo' height='50px' />
        </div>
    )
}