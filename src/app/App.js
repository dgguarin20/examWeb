import React, { Component } from 'react';
import vegaEmbed, { vega } from 'vega-embed';
import * as Papa from 'papaparse';

import './style.css';
import ReactFileReader from 'react-file-reader';


class App extends Component {

  /** function Papa.parse((file url of file), {
   * download:true
    complete: function(results) {
      console.log("Finished:", results.data);
      create a graph here 
    }
  });**/
  constructor(props)
  {
    super(props);
    this.state = {
       datos:{
        a: "algo",
        b: 20
      },
      vegaa : this.props.vegaa
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.letschangeit = this.letschangeit.bind(this);
    
  }


  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      s: value
    });
  }
  handleGraph(e)
  {

  }
 
  handleClick(e) {
    const file = e.target.files[0];
    console.log(file);
    
     Papa.parse(file, {
      complete: this.letschangeit
    });
    console.log(this.state.datos);
    this.componentDidMount();
}

  letschangeit(result)
  {
    console.log(result.data);
    
   // this.state.datos.push.apply(this.state.datos,result.data)
    this.setState( {
      datos : result.data
      /**datos: {
        a: "nose",
        b: 10
      }}**/}
    )
    console.log(this.state.datos);
  }

componentDidMount()
	{
    try{
	var info = {
      background: "#ffffff",
      axis: {
        labelFont: "serif",
        labelFontSize: 16,
        tickWidth: 3,
        tickColor: "blue"
      }
 
    };
    var valores = this.state.datos
    var primerValor = JSON.stringify(valores, null,2);
    console.log(valores)
    var spec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
      "description": "graph",
      "data": {
        "values": valores,
        "name": "valor"
      },
      "mark": "bar",
      "encoding": {
        "x": {"field": "a", "type": "ordinal"},
        "y": {"field": "b", "type": "quantitative"}
      }
    }
    const embed_opt = {"mode": "vega-lite"}; 
    const vegaa = vegaEmbed(this.div, spec, {defaultStyle:true}, embed_opt)
    .catch(error => console.log(error))
    .then((result) => {      
     //var changeSet = vega.changeset().remove('valor').insert(valores);
     //result.view.change('valor', changeSet).run();
     const prueba = result.view.insert('valor', valores).run();
     this.setState({
       vegaa:vegaa
     });

    })
  } 
  catch(error)
  {
    console.log("error")
  }
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
        <div className = "row">
        <div className="graph" ref={(div) => this.div=div}>div</div>
        </div>
        <br>
        </br>
        <div className = "row">
        <div className = "col s6">
        <textArea name = "s" onChange={this.handleChange} value = {this.state.s} >
        nose inserta algo
        </textArea>

        <button onClick={() => {
          var obj = {
            x: "John",
            y: {"field": "Also", "inf": "hola"}
          };
          this.divTargetvalue=JSON.stringify(this.state.s, null,2);

        }} className="btn light-blue ">Graficar</button>
        <br></br>
        <br></br>
        <div className = "row">
          <div className="add-media" >
                    <input type="file" name= "inputcsv" onChange = {this.handleClick.bind(this)}/>
          </div>
          </div>
        </div>
        </div>
        </div>
    )
  }
}

export default App;
