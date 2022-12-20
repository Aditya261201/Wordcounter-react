import React, { useState } from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function Navbar(props) {


    return (
        // its an bootstrap navbar used as a component
        // whenever we use bootstrap components we have to ensure that we have to write className="" instead of class="" , close all the tags even if ending tag isn't there we have to end it with /  (ie  <img src="" />)


        // this component can be reused as many times we want . so if we want to change any property at time of addding this component to main app.js file then we can use props(means properties).
        //props can be specified in the componets as {props.title},{props.text} etc..  and their value/data can be passed to the component while adding them to the main app.js file i.e title="____" , text="____" 
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    {/* prop */}
                    {props.title}
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">
                                {/* prop */}
                                {props.abouttext}
                            </Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form> */}

                    <div className="mx-2">
                    <input type="radio" class="btn-check mx-2" onClick={props.setTheme} name="options-outlined" id="secondary-outlined" autocomplete="off" checked />
                    <label className="btn btn-outline-secondary mx-2 my-2" for="secondary-outlined">Default</label>

                    <input type="radio" class="btn-check mx-2" onClick={props.setTheme} name="options-outlined" id="success-outlined" autocomplete="off" />
                    <label className="btn btn-outline-success mx-2 my-2" for="success-outlined">GreenTheme</label>

                    <input type="radio" class="btn-check mx-2" onClick={props.setTheme} name="options-outlined" id="danger-outlined" autocomplete="off" />
                    <label className="btn btn-outline-danger mx-2 my-2" for="danger-outlined">RedTheme</label>
                    </div>

                    <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.modetext}</label>
                    </div>
                </div>
            </div>
        </nav>
    );
}

// it specifies about the props so that if we pass some other kind of value for props then we can be notified.
// and if its important to give the prop value then we can set .isRequired

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    abouttext: PropTypes.string
};



// its used to give default values to the props 

Navbar.defaultProps = {
    title: 'Stranger',
    abouttext: "about me"
};