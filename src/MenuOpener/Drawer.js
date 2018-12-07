import React from 'react';
import '../Stylesheets/Drawer.css';

const Drawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li> <a href="Products">Products</a></li>
                <li> <a href="Users">Users</a></li>
            </ul>
        </nav>
    );
};

export default Drawer;