import React, { Component } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import {faShippingFast} from '@fortawesome/free-solid-svg-icons';

import Header from './Header';
// import '../styles/App.css';

library.add(faShippingFast);

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
            </div>
        );
    }
}

export default App;