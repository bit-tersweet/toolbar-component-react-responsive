import React from 'react';
import '../Stylesheets/ToggleStyle.css';

const ToggleButton = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button__line"/>
        <div className="toggle-button__line"/>
        <div className="toggle-button__line"/>
    </button>

);

export default ToggleButton;