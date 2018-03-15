import React from 'react';
import Plot from '../../node_modules/react-plotly.js/react-plotly';

import 'react-broad-bootstrap/dist/theme.css'

import './qq_plot.css';

class QQPlot extends React.Component {
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
                            showgrid: false,
                        },
                        yaxis: {
                            showgrid: false,
                        }
                    }
                }
            />
        );
    }
}

export default QQPlot;
