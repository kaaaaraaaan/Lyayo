import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../lyayologo.ico';
import {ButtonContainer} from "./Button";


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm">
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand" style={{height:93, width:86}}/>
                </Link>
                <div className="centered"> 
                        <i class="material-icons">verified_user</i>
                            <span>
                                Chitai Lyayo, Sajilai Paayo
                            </span>
                </div>               
                <Link to="/cart" className="ml-auto">
                        <buttonalign variant="primary" size="lg">  
                            <i class="material-icons">shopping_cart</i>                    
                        </buttonalign>
                    </Link>
            </nav>
        );
    }
}
export default Navbar;





