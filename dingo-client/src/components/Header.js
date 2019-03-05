import React from 'react'
import '../styles/Header.css'

class Header extends React.Component {


    render() {
        return (
            <header>

                <h1>Dingo Benchmark & Performance</h1>
                <div id='logo-container'>
                    <img src="http://www.dingo.com/Dingo/media/img/dingo-logo.png" alt='Dingo logo' />
                </div>

            </header>
        )
    }
}

export default Header