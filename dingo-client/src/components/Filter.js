import React from "react";
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'


class Filter extends React.Component {
    userLogout() {
        localStorage.clear();
        document.location.reload()

    }

    render() {
        return (
            <div id="filter-container">
                <h2>Filter</h2>
                <hr />
                <from>
                    <label for="site">Site:</label><br />
                    <select id="site">

                        <option>Site 1</option>
                        <option>Site 2</option>
                        <option>Site 3</option>
                    </select>

                    <br /><br />
                    <label for="location">Location:</label><br />
                    <select id="location">
                        <option>Location 1</option>
                        <option>Location 2</option>
                        <option>Location 3</option>
                    </select>

                    <br /><br />
                    <label for="asset-make">Asset Make:</label><br />
                    <select id="asset-make">
                        <option>Make 1</option>
                        <option>Make 2</option>
                        <option>Make 3</option>
                    </select>

                    <br /><br />
                    <label for="asset-model">Asset Model:</label><br />
                    <select id="asset-model">
                        <option>AAAA</option>
                        <option>BBBB</option>
                        <option>CCCC</option>
                    </select>

                    <br /><br />
                    <label for="component-type">Component Type:</label><br />
                    <select id="component-type">
                        <option>Engine</option>
                        <option>Drill</option>
                        <option>Drive Train</option>
                    </select>

                    <br /><br />
                    <label for="component-model">Component Model:</label><br />
                    <select id="component-model">
                        <option>DDDD</option>
                        <option>EEEE</option>
                        <option>FFFF</option>
                    </select>

                    <br /><br />

                    <Button variant="contained" color="primary" >Filter</Button>

                </from>
                <br /><br />
                <Button onClick={this.userLogout} variant="contained" color="primary" >Logout</Button>
            </div>
        )
    }
}

export default Filter