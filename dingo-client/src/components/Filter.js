import React from "react";
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../redux/action'
import auth from '../redux/reducers/auth'
import moment from "moment";
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'
import axios from 'axios'

class Filter extends React.Component {
    componentDidMount() {
        if (this.props.access_token) {

        }
    }

    userLogout = () => {
        console.log(this.props.logout())
        // this.props.logout()
        document.location.reload()
    }

    handleSubmit = async (event) => {
        event.preventDefault()

        const form = event.target
        let years = []

        for (let i = 0; i <= this.props.year.max - Number(this.props.year.min); i += 1) {
            years.push({ "RemoveDate": this.props.year.min + i })
        }
        let { data } = await axios.post('http://localhost:3001/data/performance', {
            "Location": form.elements.location.value,
            "Global Asset Make": form.elements.assetMake.value,
            "Global Component Model": form.elements.componentModel.value,
            "Global Asset Type": form.elements.assetType.value,
            "Global Asset Model": form.elements.assetModel.value,
            "Global Component Type": form.elements.componentType.value,
            "Global Component Make": form.elements.componenMake.value
        })

    }

    render() {
        console.log(this.props.assetMake)
        return (
            <div id="filter-container">
                <h2>Filter</h2>
                <hr />

                <form onSubmit={this.handleSubmit}>

                    <label for="site">Site:</label><br />
                    <select id="site">

                        <option>{this.props.site}</option>
                    </select>

                    <br /><br />
                    <label for="location">Location:</label><br />
                    <select id="location">
                        {this.props.location.map((local, index) => {
                            return <option key={index}>{local}</option>
                        })}
                    </select>

                    <br /><br />
                    <label for="assetMake">Asset Make:</label><br />
                    <select id="assetMake">
                        {this.props.assetMake.map((local, index) => {
                            return <option key={index}>{local}</option>
                        })}
                    </select>

                    <br /><br />
                    <label for="assetModel">Asset Model:</label><br />
                    <select id="assetModel">
                        {this.props.assetModel.map((local, index) => {
                            return <option key={index}>{local}</option>
                        })}
                    </select>

                    <br /><br />
                    <label for="assetType">Asset Type:</label><br />
                    <select id="assetType">
                        {this.props.assetType.map((local, index) => {
                            return <option key={index}>{local}</option>
                        })}

                    </select>

                    {/* <br /><br />
                    <label for="componenMake">Component Type:</label><br />
                    <select id="componenMake">
                        <option>ABC</option>
                        <option>CDAl</option>
                        <option>DSA</option>
                    </select> */}

                    <br /><br />
                    <label for="componentModel">Component Model:</label><br />
                    <select id="componentModel">
                        {this.props.componentModel.map((local, index) => {
                            return <option key={index}>{local}</option>
                        })}
                    </select>

                    <br /><br />
                    <label for="componentType">Component Type:</label><br />
                    <select id="componentType">
                        {this.props.componentType.map((local, index) => {
                            return <option key={index}>{local}</option>
                        })}
                    </select>

                    <br /><br />

                    <label for="yearRange">Year Range selctor:</label><br />
                    <br /><br />
                    <InputRange
                        draggableTrack
                        maxValue={moment().format('YYYY')}
                        minValue={2000}
                        onChange={value => this.props.setYearRange(value)}
                        onChangeComplete={value => console.log(value)}
                        value={this.props.year}
                        id="yearRange" />


                    <br /><br />

                    <Button type="submit" variant="contained" color="primary">Filter</Button>

                </form>
                <br /><br />
                <Button onClick={this.userLogout} variant="contained" color="primary" >Logout</Button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    site: state.auth.site,
    access_token: state.auth.access_token,
    year: state.yearpicker.year,

    location: state.userdata.filter[0].Location,
    assetMake: state.userdata.filter[0]["Global Asset Make"],
    assetModel: state.userdata.filter[0]["Global Asset Model"],
    assetType: state.userdata.filter[0]["Global Asset Type"],
    componentType: state.userdata.filter[0]["Global Component Type"],
    componentModel: state.userdata.filter[0]["Global Component Model"],

})
export default connect(mapStateToProps, actions)(Filter)

