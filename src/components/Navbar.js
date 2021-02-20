import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import styled from 'styled-components'
import { ButtonContainer } from './ButtonStyle'

const Navbar = () => {
    return (
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            {/* 
            https://www.iconfinder.com/icons/171508/phone_call_smart_icon
            Creative Commons (Attribution 3.0 Unported);
            https://www.iconfinder.com/iconsets/pittogrammi
            */}
            <Link to="/">
                <img src={logo} alt="store" className="navbar-brand" />
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link text-dark">
                        products
                    </Link>
                </li>
            </ul>
            <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2">
                        <i className="fas fa-cart-plus" />
                    </span>
                    my cart
                </ButtonContainer>
            </Link>
        </NavWrapper>
    )
}

const NavWrapper = styled.nav`
    background:var(--mainYellow);
    .nav-link{
        color:var(--mainWhite) !important;
        font-size:1.7rem;
        text-transform:capitalize;
    }
`


export default Navbar
