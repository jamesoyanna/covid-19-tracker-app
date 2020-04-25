import React, { Component } from 'react';
import {Cards, Chart, CountryPicker} from "./components";

class App extends Component {
    render() {
        return (
          <div>
            <h1>I am App</h1>
            <Cards />
            <Chart />
            <CountryPicker />
          </div>
        );
    }
}
export default App;
