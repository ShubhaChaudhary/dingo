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
                position: 'absolute',
                padding: '30px',
                width: '500px',
                background: 'rgba(67, 67, 67, 0.70', //dingo grey
                'max-height': '350px',
                'border-radius': '10px',
                color: 'white'
            }}>
            
                <img src="http://www.dingo.com/Dingo/media/img/dingo-logo.png" alt='Dingo logo' width='250px' /><br/>
                <p>Performance and Benchmarking</p>
                <form onSubmit={handleLogin}>

                    <TextField
                        id="username"
                        label="User Name"
                        type="text"
                        name="username"
                        margin="normal"
                        variant="filled"
                        style={{ background: 'rgb(255, 255, 255)', 'border-radius': '5px',  width: '100%' }}
                    />

                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        name="password"
                        margin="normal"
                        variant="filled"
                        style={{ background: 'rgb(255, 255, 255)', 'border-radius': '5px', width: '100%' }}
                    />

                    <br /><br />
                    <Button type="submit" variant="contained" color="primary" >Login</Button>
                </form>
            </Paper >
        </div>
    )
}