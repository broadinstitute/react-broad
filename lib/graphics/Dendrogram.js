import React from 'react';
import Plot from '../../node_modules/react-plotly.js/react-plotly';

import 'react-broad-bootstrap/dist/theme.css'

import './dendrogram.css';

class Dendrogram extends React.Component {
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

export default Dendrogram;





/*var trace4 = {*/
/*x: ["a", "b", "c", "d", "e", "f", "g", "h", "i"],*/
/*y: ["j", "k", "l", "m", "n", "o", "p", "q", "r"],*/
/*z: [[ 0.36302893,  0.81922275,  0.62535139,  0.71760993,  0.95140291,*/
/*0.4536749 ,  0.49746811,  0.01995444,  0.13460071],*/
/*[ 0.1544798 ,  0.45820029,  0.01731654,  0.31101884,  0.60134945,*/
/*0.2688729 ,  0.92582008,  0.74450414,  0.7257439 ],*/
/*[ 0.81631237,  0.86448502,  0.02365862,  0.12450014,  0.01199141,*/
/*0.28777051,  0.87752234,  0.88392796,  0.01539843],*/
/*[ 0.47185932,  0.54865427,  0.30106964,  0.70604805,  0.11485937,*/
/*0.30818487,  0.88823697,  0.40256994,  0.8292246 ],*/
/*[ 0.54508092,  0.00561666,  0.8477059 ,  0.56140296,  0.76444769,*/
/*0.7943268 ,  0.25074342,  0.87516813,  0.06276979],*/
/*[ 0.82886595,  0.441133  ,  0.65962726,  0.68670979,  0.7947378 ,*/
/*0.5439889 ,  0.32177642,  0.66623375,  0.55437692],*/
/*[ 0.02646721,  0.08693012,  0.88345258,  0.80301916,  0.35234542,*/
/*0.2602384 ,  0.00920131,  0.01215683,  0.08359933],*/
/*[ 0.44785688,  0.29762269,  0.77532637,  0.9381798 ,  0.98927004,*/
/*0.2995358 ,  0.70424585,  0.28169305,  0.48223568],*/
/*[ 0.24447678,  0.5898344 ,  0.44116923,  0.82052813,  0.80428493,*/
/*0.34091793,  0.98052568,  0.45171405,  0.94542779]],*/
/*type: 'heatmap',*/
/*xaxis: 'x',*/
/*yaxis: 'y',*/
/*};*/


/*dendrogramUP = {'data': [{'yaxis': 'y2', 'y': [ 0.        ,  0.82173426,  0.82173426,  0.        ], 'mode': 'lines', 'xaxis': 'x', 'marker': {'color': 'rgb(61,153,112)'}, 'x': [  5.,   5.,  15.,  15.], 'type': 'scatter'}, {'yaxis': 'y2', 'y': [ 0.        ,  0.77955946,  0.77955946,  0.        ], 'mode': 'lines', 'xaxis': 'x', 'marker': {'color': 'rgb(61,153,112)'}, 'x': [ 35.,  35.,  45.,  45.], 'type': 'scatter'}, {'yaxis': 'y2', 'y': [ 0.        ,  1.17208582,  1.17208582,  0.77955946], 'mode': 'lines', 'xaxis': 'x', 'marker': {'color': 'rgb(61,153,112)'}, 'x': [ 25.,  25.,  40.,  40.], 'type': 'scatter'}, {'yaxis': 'y2', 'y': [ 0.82173426,  1.36246313,  1.36246313,  1.17208582], 'mode': 'lines', 'xaxis': 'x', 'marker': {'color': 'rgb(61,153,112)'}, 'x': [ 10. ,  10. ,  32.5,  32.5], 'type': 'scatter'}, {'yaxis': 'y2', 'y': [ 0.        ,  0.76612453,  0.76612453,  0.        ], 'mode': 'lines', 'xaxis': 'x', 'marker': {'color': 'rgb(255,65,54)'}, 'x': [ 75.,  75.,  85.,  85.], 'type': 'scatter'}, {'yaxis': 'y2', 'y': [ 0.        ,  0.84423537,  0.84423537,  0.76612453], 'mode': 'lines', 'xaxis': 'x', 'marker': {'color': 'rgb(255,65,54)'}, 'x': [ 65.,  65.,  80.,  80.], 'type': 'scatter'}, {'yaxis': 'y2', 'y': [ 0.        ,  1.65955591,  1.65955591,  0.84423537], 'mode': 'lines', 'xaxis': 'x', 'marker': {'color': 'rgb(0,116,217)'}, 'x': [ 55. ,  55. ,  72.5,  72.5], 'type': 'scatter'}, {'yaxis': 'y2', 'y': [ 1.36246313,  2.0157622 ,  2.0157622 ,  1.65955591], 'mode': 'lines', 'xaxis': 'x', 'marker': {'color': 'rgb(0,116,217)'}, 'x': [ 21.25,  21.25,  63.75,  63.75], 'type': 'scatter'}], 'layout': {'width': '100%', 'showlegend': false, 'xaxis': {'showticklabels': true, 'tickmode': 'array', 'ticks': 'outside', 'showgrid': false, 'mirror': 'allticks', 'zeroline': false, 'showline': true, 'ticktext': ['e', 'f', 'g', 'a', 'h', 'c', 'b', 'd', 'i'], 'rangemode': 'tozero', 'type': 'linear', 'tickvals': [5.0, 15.0, 25.0, 35.0, 45.0, 55.0, 65.0, 75.0, 85.0]}, 'yaxis': {'showticklabels': true, 'ticks': 'outside', 'showgrid': false, 'mirror': 'allticks', 'zeroline': false, 'showline': true, 'rangemode': 'tozero', 'type': 'linear'}, 'hovermode': 'closest', 'autosize': false, 'height': '100%'}}*/

/*dendrogramRIGHT = {'data': [{'yaxis': 'y', 'y': [ -5.,  -5., -15., -15.], 'mode': 'lines', 'xaxis': 'x2', 'marker': {'color': 'rgb(61,153,112)'}, 'x': [ 0.        ,  0.82173426,  0.82173426,  0.        ], 'type': 'scatter'}, {'yaxis': 'y', 'y': [-35., -35., -45., -45.], 'mode': 'lines', 'xaxis': 'x2', 'marker': {'color': 'rgb(61,153,112)'}, 'x': [ 0.        ,  0.77955946,  0.77955946,  0.        ], 'type': 'scatter'}, {'yaxis': 'y', 'y': [-25., -25., -40., -40.], 'mode': 'lines', 'xaxis': 'x2', 'marker': {'color': 'rgb(61,153,112)'}, 'x': [ 0.        ,  1.17208582,  1.17208582,  0.77955946], 'type': 'scatter'}, {'yaxis': 'y', 'y': [-10. , -10. , -32.5, -32.5], 'mode': 'lines', 'xaxis': 'x2', 'marker': {'color': 'rgb(61,153,112)'}, 'x': [ 0.82173426,  1.36246313,  1.36246313,  1.17208582], 'type': 'scatter'}, {'yaxis': 'y', 'y': [-75., -75., -85., -85.], 'mode': 'lines', 'xaxis': 'x2', 'marker': {'color': 'rgb(255,65,54)'}, 'x': [ 0.        ,  0.76612453,  0.76612453,  0.        ], 'type': 'scatter'}, {'yaxis': 'y', 'y': [-65., -65., -80., -80.], 'mode': 'lines', 'xaxis': 'x2', 'marker': {'color': 'rgb(255,65,54)'}, 'x': [ 0.        ,  0.84423537,  0.84423537,  0.76612453], 'type': 'scatter'}, {'yaxis': 'y', 'y': [-55. , -55. , -72.5, -72.5], 'mode': 'lines', 'xaxis': 'x2', 'marker': {'color': 'rgb(0,116,217)'}, 'x': [ 0.        ,  1.65955591,  1.65955591,  0.84423537], 'type': 'scatter'}, {'yaxis': 'y', 'y': [-21.25, -21.25, -63.75, -63.75], 'mode': 'lines', 'xaxis': 'x2', 'marker': {'color': 'rgb(0,116,217)'}, 'x': [ 1.36246313,  2.0157622 ,  2.0157622 ,  1.65955591], 'type': 'scatter'}], 'layout': {'width': '100%', 'showlegend': false, 'xaxis': {'showticklabels': true, 'ticks': 'outside', 'showgrid': false, 'mirror': 'allticks', 'zeroline': false, 'showline': true, 'rangemode': 'tozero', 'type': 'linear'}, 'yaxis': {'showticklabels': true, 'tickmode': 'array', 'ticks': 'outside', 'showgrid': false, 'mirror': 'allticks', 'zeroline': false, 'showline': true, 'ticktext': ['n', 'o', 'p', 'j', 'q', 'l', 'k', 'm', 'r'], 'rangemode': 'tozero', 'type': 'linear', 'tickvals': [-5.0, -15.0, -25.0, -35.0, -45.0, -55.0, -65.0, -75.0, -85.0]}, 'hovermode': 'closest', 'autosize': false, 'height': '100%'}}*/

/*var layout2 = {*/

/*yaxis: {domain: [0, 0.70],*/
/*mirror: false,*/
/*showgrid: false,*/
/*showline: false,*/
/*zeroline: false,*/
/*showticklabels: true,*/
/*ticks:"",*/
/*ticktext: ['n', 'o', 'p', 'j', 'q', 'l', 'k', 'm', 'r'],*/
/*tickvals: [-5.0, -15.0, -25.0, -35.0, -45.0, -55.0, -65.0, -75.0, -85.0]*/
/*},*/
/*xaxis: {domain: [0, 0.70],*/
/*mirror: false,*/
/*showgrid: false,*/
/*showline: false,*/
/*zeroline: false,*/
/*showticklabels: true,*/
/*ticks:"",*/
/*ticktext: ['n', 'o', 'p', 'j', 'q', 'l', 'k', 'm', 'r'],*/
/*tickvals: [5.0, 15.0, 25.0, 35.0, 45.0, 55.0, 65.0, 75.0, 85.0]*/
/*},*/
/*xaxis2: {domain: [0.75, 1],*/
/*mirror: false,*/
/*showgrid: false,*/
/*showline: false,*/
/*zeroline: false,*/
/*showticklabels: false,*/
/*ticks:"",*/
/*ticktext: ['n', 'o', 'p', 'j', 'q', 'l', 'k', 'm', 'r'],},*/
/*yaxis2: {domain:[0.75, 1],*/
/*mirror: false,*/
/*showgrid: false,*/
/*showline: false,*/
/*zeroline: false,*/
/*showticklabels: false,*/
/*ticks:"",*/
/*ticktext: ['n', 'o', 'p', 'j', 'q', 'l', 'k', 'm', 'r'],},*/
/*showlegend: false,*/
/*margin: {l: 30, r: 30, b: 30, t: 30},*/
/*};*/


/*data = dendrogramUP['data']*/
/*data = data.concat(dendrogramRIGHT['data'])*/

/*trace4['x'] = dendrogramUP['layout']['xaxis']['tickvals']*/
/*trace4['y'] = dendrogramRIGHT['layout']['yaxis']['tickvals']*/
/*data = data.concat(trace4)*/






/*Plotly.newPlot('myDiv', data, layout2);*/

