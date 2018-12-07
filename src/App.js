import React from 'react';
import MyNav from './Components/navbar';
import Drawer from './MenuOpener/Drawer';
import Backdrop from './Backdrop/Backdrop';


class App extends React.Component {
    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prev) => {
            return { sideDrawerOpen: !prev.sideDrawerOpen }
        });
    };


    backdropClickHandler = () => {
        this.setState({sideDrawerOpen:false});
    };

    render() {
        let backDrop;

        if (this.state.sideDrawerOpen) {
            backDrop = <Backdrop click={this.backdropClickHandler}/>;
        }

        return (
            <div style={{ height: '100%' }}>
                <MyNav drawerClickHandler={this.drawerToggleClickHandler}/>
                <Drawer show={this.state.sideDrawerOpen}/>
                {backDrop}
            </div>
        );
    }
}

export default App;
