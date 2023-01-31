import React, { useState } from 'react';
import { scaleLinear } from 'd3-scale';
import { extent } from 'd3-array';
import AxisLeft from './AxisLeft';
import AxisBottom from './AxisBottom';
import styles from './ContributionChart.module.css'
function ContributionChart() {
  const [data, setData] = useState([
    { x: 76.4, y: 0.15 },
    { x: 89.2, y: 0.39 },
    { x: 115.1, y: 3.15 },
    { x: 148.5, y: 5.40},
    { x: 118.0, y: 3.30 },
    { x: 138.8, y: 5.07},
    { x: 152.0, y: 5.76},
    { x: 164.7, y: 7.29},
    { x: 167.3, y: 7.11},
    { x: 131.4, y: 3.32},
    { x: 143.2, y: 3.23},
    { x: 140.7, y: 5.82},
    { x: 167.6, y: 6.56},
    { x: 120.3, y: 3.52},
    { x: 148.9, y: 6.32},
    { x: 138.8, y: 4.92},
    { x: 155.9, y: 6.14},
    { x: 145.4, y: 5.15},

  ]);
  const w = 400,
    h = 400,
    margin = {
      top: 40,
      bottom: 40,
      left: 40,
      right: 40,
    };

  const width = w - margin.right - margin.left,
    height = h - margin.top - margin.bottom;

  const xScale = scaleLinear()
    .domain(extent(data, (d) => d.x))
    .range([0, width]);

  const yScale = scaleLinear()
    .domain(extent(data, (d) => d.y))
    .range([height, 0]);

  const circles = data.map((d, i) => (
    <circle
      key={i}
      r={5}
      cx={xScale(d.x)}
      cy={yScale(d.y)}
      style={{ fill: 'red' }}
    />
  ));

  return (
    <div>
      <h3 className={styles.chartName}> 연도별 wrc/war</h3>
      <svg width={w} height={h}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          <AxisLeft yScale={yScale} width={width} />
          <AxisBottom xScale={xScale} height={height} />
          {circles}
        </g>
      </svg>
    </div>
  );
}

export default ContributionChart;
