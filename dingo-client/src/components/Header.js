import React from 'react'
import '../styles/Header.css'

class Header extends React.Component {


    render() {
        return (
            <header>

                <div id='navigation'>
                    <a href='./Benchmark'>
                        <div class="button">Benchmark</div></a>
                    <a href='./Performance'>
                        <div class="button">Performance</div>
                    </a>
                </div>
                <div id='logo-container'>
                    <img src="http://www.dingo.com/Dingo/media/img/dingo-logo.png" alt='Dingo logo' />
                </div>

            </header>
        )
    }
}

export default Header