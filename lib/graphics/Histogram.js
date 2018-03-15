import React from 'react';
import Plot from '../../node_modules/react-plotly.js/react-plotly';

import './histogram.css';

class Histogram extends React.Component {
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
                        type: 'histogram',
                        x: this.props.x
                    },
                ]}
                layout={
                    {
                        height: 500,
                        title: this.props.title,
                        width: 500
                    }
                }
            />
        );
    }
}

export default Histogram;
