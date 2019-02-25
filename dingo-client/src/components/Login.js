import React from 'react'
import { Paper, Button, TextField } from '@material-ui/core'
export default () => {

    return (

        <React.Fragment>
            <Paper id="login" style={{
                padding: '30px'
            }}>

                <form>
                    <TextField
                        required
                        id="email"
                        label="Email"
                        margin="normal"
                        type="email"
                    />

                    <br />

                    <TextField
                        required
                        id="password"
                        label="password"
                        margin="normal"
                        type="password"
                    />
                    <br />
                    <Button type="submit" variant="contained" color="primary" >Login</Button>
                </form>
            </Paper >
            <div style={{ 'margin-left': '5%' }}>
                <img src="http://www.dingo.com/Dingo/media/img/dingo-logo.png" alt='Dingo logo' /><br />
                <img src={require("../mining-excavator.png")} alt="mining escavator" width="50%" />
            </div>
        </React.Fragment>
    )
}