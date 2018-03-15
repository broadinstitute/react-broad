import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import "react-broad-bootstrap/dist/theme.css"

import ScatterPlot from "../lib/graphics/ScatterPlot";
import Histogram from "../lib/graphics/Histogram";
import HeatMap from "../lib/graphics/HeatMap";
import QQPlot from "../lib/graphics/QQPlot"
import BoxPlot from "../lib/graphics/BoxPlot";

function random() {
    return Math.cos(2 * Math.PI * Math.random()) * Math.sqrt(-2 * Math.log(Math.random()))
}

const x = _.times(100, function() { return random(); });
const y = _.times(100, function() { return random(); });
const z = _.times(100, function() { return random(); });

const heat_map_x = ["a", "b", "c"];
const heat_map_y = ["a", "b", "c"];
const heat_map_z = [[1, 20, 30], [20, 1, 60], [30, 60, 1]];

storiesOf('Graphics', module)
    .add('Box plot', () => (
        <BoxPlot x={x} y={y} />
    ))
    .add('Dendrogram', () => (
        <Dendrogram x={x} y={y} />
    ))
    .add('Heat map', () => (
        <HeatMap x={heat_map_x} y={heat_map_y} z={heat_map_z} />
    ))
    .add('Histogram', () => (
        <Histogram x={x} />
    ))
    .add('Q-Q plot', () => (
        <QQPlot x={x} />
    ))
    .add('Scatter plot', () => (
        <ScatterPlot x={x} y={y} />
    ));
