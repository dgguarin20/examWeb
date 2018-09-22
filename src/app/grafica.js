import React, { Component } from 'react';
import vegaEmbed from 'vega-embed';

class Grafica extends Component {

componentDidMount()
	{
	var info = {
      background: "#ffffff",
      axis: {
        labelFont: "serif",
        labelFontSize: 16,
        tickWidth: 3,
        tickColor: "blue"
      }
 
    };
    var valores = {
        x: 10,
        y: 20
      };
    var primerValor = JSON.stringify(valores, null,2);

    var spec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
      "description": "graph",
      "data": {
        "values": valores
      },
      "mark": "bar",
      "encoding": {
        "x": {"field": "a", "type": "ordinal"},
        "y": {"field": "b", "type": "quantitative"}
      }
    }
    const embed_opt = {"mode": "vega-lite"}; 
    vegaEmbed('#vis', spec, {defaultStyle:true}, embed_opt).then(function (result) {
      console.log(result);
    }).catch(console.error);
	}

  render() {
 
    return (
      <div>
      </div>
    )
  }
}

export default Grafica;
