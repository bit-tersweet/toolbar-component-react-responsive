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
          <li><a href="/">Products</a></li>
          <li><a href="/">Users</a></li>
        </ul>
      </div>
    </nav>
  </header>
);
export default MyNav;