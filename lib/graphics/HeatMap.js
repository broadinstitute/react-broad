import React from 'react';
import Plot from '../../node_modules/react-plotly.js/react-plotly';

import './heat_map.css';

class HeatMap extends React.Component {
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
                        type: 'heatmap',
                        x: this.props.x,
                        y: this.props.y,
                        z: this.props.z
                    },
                ]}
                layout={
                    {
                        height: 500,
                        title: this.props.title,
                        width: 500,
                    }
                }
            />
        );
    }
}

export default HeatMap;
