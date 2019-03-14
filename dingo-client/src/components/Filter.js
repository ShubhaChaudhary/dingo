import React from "react";
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../redux/action'
import auth from '../redux/reducers/auth'
import moment from "moment";
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'

class Filter extends React.Component {
    componentDidMount() {
        if (this.props.access_token) {
            this.props.fetchFilterData(localStorage.getItem('site'))
        }
    }

    userLogout = () => {
        console.log(this.props.logout())
       
        document.location.reload()
    }

    handleSubmit = async (event) => {
        event.preventDefault()

        const form = event.target
        let years = []
        let filter = {}

        // Formatting range in the right format
        for (let i = 0; i <= this.props.year.max - Number(this.props.year.min); i += 1) {
            years.push({ "RemoveDate": this.props.year.min + i })

        }

        //poulating filter data
        for (let element of form.elements) {
            if (element.value !== "All" && element.id !== 'Site' && element.type !== 'submit') {
                filter[element.id] = element.value
            }
        }

        // console.log({ site: form.elements.Site.value, filterdata: filter, range: years })
        if (this.props.tab === 'benchmark') {

            this.props.fetchdataBenchmarkChart(filter, years)
<<<<<<< HEAD
            
=======
            // console.log(this.props.benchmark)


>>>>>>> c46ab36fd8e5247d23aa5a29aba6c85e1f872ccc
        } else if (this.props.tab === 'performance') {
            this.props.fetchdataPerformancechart(filter, years)
            
        }

<<<<<<< HEAD
       
    
=======
        console.log(this.props.benchmark)

>>>>>>> c46ab36fd8e5247d23aa5a29aba6c85e1f872ccc
    }


    render() {

        return (
            <div id="filter-container">
                <h2>Filter</h2>
                <hr />
                <form onSubmit={this.handleSubmit}>
                    <label for="Site">Site:</label><br />
                    <select id="Site">
                        <option>{this.props.site}</option>
                    </select>
                    <br /><br />
                    <label for="Location">Location:</label><br />
                    <select id="Location">
                        <option>All</option>
                        {this.props.location && this.props.location.map((value, index) => {
                            return (<option key={index}>{value}</option>)
                        })}
                    </select>
                    <br /><br />
                    <label for="Global Asset Make">Asset Make:</label><br />
                    <select id="Global Asset Make">
                        <option>All</option>
                        {this.props.assetMake && this.props.assetMake.map((value, index) => {
                            return (<option key={index}>{value}</option>)
                        })}
                    </select>
                    <br /><br />
                    <label for="Global Asset Model">Asset Model:</label><br />
                    <select id="Global Asset Model">
                        <option>All</option>
                        {this.props.assetModel && this.props.assetModel.map((value, index) => {
                            return (<option key={index}>{value}</option>)
                        })}
                    </select>
                    <br /><br />
                    <label for="Global Asset Type">Asset Type:</label><br />
                    <select id="Global Asset Type">
                        <option>All</option>
                        {this.props.assetType && this.props.assetType.map((value, index) => {
                            return (<option key={index}>{value}</option>)
                        })}
                    </select>
                    <br /><br />
                    <label for="Global Component Model">Component Model:</label><br />
                    <select id="Global Component Model">
                        <option>All</option>
                        {this.props.componentModel && this.props.componentModel.map((value, index) => {
                            return (<option key={index}>{value}</option>)
                        })}
                    </select>

                    <br /><br />
                    <label for="Global Component Type">Component Type:</label><br />
                    <select id="Global Component Type">
                        <option>All</option>
                        {this.props.componentType && this.props.componentType.map((value, index) => {
                            return (<option key={index}>{value}</option>)
                        })}
                    </select>

                    <br /><br />
                    <label for="Global Component Make">Component Make:</label><br />
                    <select id="Global Component Make">
                        <option>All</option>
                        {this.props.componentMake && this.props.componentMake.map((value, index) => {
                            return (<option key={index}>{value}</option>)
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
    benchmark: state.graph.benchmark,
    performance: state.graph.performance,
    tab: state.graph.tab,
    location: state.userdata.filter['Location'],
    assetMake: state.userdata.filter["Global Asset Make"],
    assetModel: state.userdata.filter["Global Asset Model"],
    assetType: state.userdata.filter["Global Asset Type"],
    componentType: state.userdata.filter["Global Component Type"],
    componentModel: state.userdata.filter["Global Component Model"],
    componentMake: state.userdata.filter["Global Component Make"]

})
export default connect(mapStateToProps, actions)(Filter)

