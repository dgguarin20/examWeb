import React, { Component } from 'react';
import vegaEmbed from 'vega-embed';
import Grafica from './grafica.js'

class App extends Component {

  /** function Papa.parse((file url of file), {
   * download:true
    complete: function(results) {
      console.log("Finished:", results.data);
      create a graph here 
    }
  });**/

  render() {
 
    return (
      <div>
        <Grafica/><div id = "vis"></div>
        </div>
    )
  }
}

export default App;
