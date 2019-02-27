import React from 'react'
import { Tabs, Tab } from '@material-ui/core';
import { Link } from 'react-router-dom'

class TabBar extends React.Component {

    render() {
        return (
            <Tabs style={{ 'border-bottom': '1px solid black' }}>
                <Tab label="Benchmark" component={Link} to="/benchmark" style={{ 'border-radius': '20px 20px 0 0', 'border': '1px solid grey', 'box-shadow': '3px 2px 2px 1px rgb(3, 3, 3, 0.3)' }} />
                <Tab label="Performance" component={Link} to="/performance" style={{ 'border-radius': '20px 20px 0 0', 'border': '1px solid grey', 'box-shadow': '3px 2px 2px 1px rgb(3, 3, 3, 0.3)' }} />
            </Tabs>
        )
    }
}

export default TabBar