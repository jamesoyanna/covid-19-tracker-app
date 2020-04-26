import React, { Component } from 'react';
import {Cards, Chart, CountryPicker} from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends Component {
   
    state = {
        data: {},
    }
    async componentDidMount(){
        const fetchData = await fetchData();
        this.setState({data: fetchData})
    }

    render() {
        const {data} = this.state;
        return ( 
          <div className={styles.container}>
            <h1>I am App</h1>
            <Cards data = {data} />
            <Chart />
            <CountryPicker />
          </div>
        );
    }
}
export default App;
