import React from 'react';
import MyNav from './Components/navbar';
import Drawer from './MenuOpener/Drawer';
import Backdrop from './Backdrop/Backdrop';
import Swipeable from 'react-swipeable';


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
        this.setState({ sideDrawerOpen: false });
    };

    a = () => {
        this.setState({ sideDrawerOpen: true });
    };

    render() {
        let backDrop;

        if (this.state.sideDrawerOpen) {
            backDrop = <Backdrop click={this.backdropClickHandler} />;
        }

        return (
            <Swipeable onSwipingLeft={this.backdropClickHandler} >
                <Swipeable onSwipingRight={this.a}>
                    <div className="myDiv" style={{ height: '100%' }}>

                        <MyNav drawerClickHandler={this.drawerToggleClickHandler} />
                        <Drawer show={this.state.sideDrawerOpen} />
                        {backDrop}

                    </div>
                </Swipeable>
            </Swipeable>
        );
    }
}

export default App;
