import React from 'react';
import ReactDOM from 'react-dom';
import Plot from '../../node_modules/react-plotly.js/react-plotly';
import _ from 'lodash';

import 'react-broad-bootstrap/dist/theme.css'

import './scatter_plot.css';

class ScatterPlot extends React.Component {
    render() {
        return (
            <Plot
                config={
                    {
                        displayModeBar: false
                    }
                }
                data={[
                    {
                        mode: 'markers',
                        type: 'scatter',
                        x: this.props.x,
                        y: this.props.y
                    },
                ]}
                layout={
                    {
                        title: this.props.title,
                        width: 500,
                        height: 500,
                        xaxis: {
                            // autotick: false,
                            // dtick: 50,
                            showgrid: false,
                        },
                        yaxis: {
                            // autotick: false,
                            // dtick: 50,
                            showgrid: false,
                        }
                    }
                }
            />
        );
    }
}

export default ScatterPlot;
