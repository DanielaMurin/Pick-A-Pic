import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo/Logo';
import SearchInput from './SearchInput/SearchInput';
import UserPhotos from './UserPhotos/UserPhotos';
import Upload from './Upload/Upload';
import Filters from './Filters/Filters';
import RadiusSlider from './RadiusSlider/RadiusSlider';
import LoginRegister from './LoginRegister/LoginRegister';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

import './Toolbar.css';

class Toolbar extends Component {

    state = {
        isOpen: false,
    };

    componentDidMount() {
        // console.log('[Toolbar] componentDidMount');
    }

    toggleMobileToolbar = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <div>

                <Navbar color="dark" dark expand="xl" id="navbarMain">

                    {/* LOGO */} {/* SHOULD BE RENDRED ON ALL PAGES */}
                    <Logo />

                    <NavbarToggler onClick={this.toggleMobileToolbar} />

                    <Collapse isOpen={this.state.isOpen} navbar>

                        <Nav navbar className="mr-auto" >

                            {/* Search Location Input */}
                            <NavItem>
                                <SearchInput />
                            </NavItem>


                            {/* Categories (Filters) Button */}
                            <NavItem className="navBtn">
                                <Filters />
                            </NavItem>


                            {/* Search by radius */}
                            <NavItem className="navBtn">
                                <RadiusSlider />
                            </NavItem>


                            {/* Show only logged in user photos */}
                            <NavItem className="navBtn">
                                <UserPhotos />
                            </NavItem>


                            {/* Upload Picture Button  */}
                            <NavItem className="navBtn">
                                <Upload />
                            </NavItem>

                        </Nav>

                        {/* Login/Register Button  */} {/* SHOULD BE RENDRED ON ALL PAGES */}
                        <NavItem className="navBtn">
                            <LoginRegister />
                        </NavItem>

                    </Collapse>

                </Navbar>

            </div>

        );
    }
}

export default Toolbar;

NavbarToggler.propTypes = {
    onClick: PropTypes.func
}

Collapse.propTypes = {
    isOpen: PropTypes.bool
}