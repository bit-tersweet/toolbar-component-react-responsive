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
                <li> <a href="/Demo_1">Demo_1</a></li>
                <li> <a href="/Demo_2">Demo_2</a></li>
                <li> <a href="/Demo_3">Demo_3</a></li>
                <li> <a href="/Demo_4">Demo_4</a></li>
            </ul>
        </nav>
    );
};

export default Drawer;