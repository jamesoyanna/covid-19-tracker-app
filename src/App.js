import React, { Component } from 'react';
import {Cards, Chart, CountryPicker} from "./components";
import styles from "./App.module.css"
class App extends Component {
    render() {
        return ( 
          <div className={styles.container}>
            <h1>I am App</h1>
            <Cards />
            <Chart />
            <CountryPicker />
          </div>
        );
    }
}
export default App;
