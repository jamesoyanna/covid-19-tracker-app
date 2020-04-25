import React, { Component } from 'react';
// import Cards from './components/Cards/Cards';
// import Chart from "./components/Chart/Chart";
// import CountryPicker from "./components/CountryPicker/CountryPicker";

import {Cards, Charts, CountryPicker}

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
