import React, { Component } from 'react'
import './Header.css';
import Logo from '../../assets/Logo.png';
export class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='header_logo'>
                    <img src={Logo} alt="Check Point" className='image_logo' />
                </div>
            </div>
        )
    }
}

export default Header