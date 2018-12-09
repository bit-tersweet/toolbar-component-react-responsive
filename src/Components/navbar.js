import React from 'react';
import '../Stylesheets/toolbar.css';
import ToggleButton from '../MenuOpener/ToggleButton';

const MyNav = props => (
  <header className="MyNav">
    <nav className="MyNav__navigation">
      <div className="btn-toggle">
        <ToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="MyNav__logo"><a href="/">The logo</a></div>
      <div className="spacer" />
      <div className="MyNav__items">
        <ul>
          <li><a href="/Demo_1">Demo_1</a></li>
          <li><a href="/Demo_2">Demo_2</a></li>
          <li><a href="/Demo_3">Demo_3</a></li>
          <li><a href="/Demo_4">Demo_4</a></li>
          <li><a href="/SignIn">Sign in</a></li>
          <li><button className="sign-up-btn"><a href="/GetStarted">Get started</a></button></li>
        </ul>
      </div>
    </nav>
  </header>
);
export default MyNav;