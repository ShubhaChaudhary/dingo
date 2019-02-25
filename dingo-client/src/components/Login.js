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

            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Singapore_Hitachi-ZAXIS-200-excavator-01.jpg" width="50%" />
        </React.Fragment>
    )
}