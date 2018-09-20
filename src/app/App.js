import React, { Component } from 'react';
import vegaEmbed from 'vega-embed';
import Grafica from './grafica.js'
import './css/react-datepicker.css';
import './style.css';


class App extends Component {

  /** function Papa.parse((file url of file), {
   * download:true
    complete: function(results) {
      console.log("Finished:", results.data);
      create a graph here 
    }
  });**/
  handleChange(e) {
    const value = e.divTargetvalue
    this.setState({
      datos: value
    });
  }
  
  render() {
 
    return (
      <div>
      <nav className="light-blue ">
          <div className="container">
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">Test </a>
            </div>
          </div>
        </nav>
        <div></div>
        <Grafica/><div id = "vis"></div>
        <br>
        </br>
        <textArea 
        cols= "40"
        rows = "20"
        onChange = {this.handleChange}
        value = {this.state.value}
        >
        </textArea>
        <button onClick={() => {
          var obj = {
            x: "John",
            y: {"field": "Also", "inf": "hola"}
          };
          this.divTargetvalue=JSON.stringify(obj, null,2);
        }} className="btn light-blue ">Submit</button>
        </div>
    )
  }
}

export default App;
