import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from "./Button";

class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            <Link to="/">
                <img src={logo} alt="store" className="navbar-brand"/>
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to= "/" className="nav-link">Products</Link>
                </li>
            </ul> 
            <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                    <i className="fas fa-shopping-cart" />my Cart
                </ButtonContainer>
            </Link>
            </NavWrapper>
        );
    }
}
export default Navbar;

const NavWrapper = styled.nav`
background:var(--mainBlue);
text=transform:capitalize;
font-size:1.3rem;


`


