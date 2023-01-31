import * as d3 from 'd3';
import { useEffect } from 'react';
import styles from './HomerunChart.module.css';

const HomerunChart = () => {
  const data = [2, 4, 5, 3, 6, 7];

  const w = 700;
  const h = 400;

  const margin = { top: 20, right: 10, bottom: 20, left: 10 };

  useEffect(() => {
    const svg = d3.select('svg').attr('width', w).attr('height', h);

    const x = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([margin.left, w - margin.right]);

    const y = d3
      .scaleBand()
      .domain(data, (_, i) => i)
      .range([h - margin.top, margin.bottom])
      .padding(0.3);

    const bar = svg.selectAll('g').data(data).enter().append('g');

    bar
      .append('rect')
      .attr('x', x(0))
      .attr('width', (d) => x(d))
      .attr('y', (d) => y(d))
      .attr('height', y.bandwidth())
      .attr('fill', 'steelblue')
      .style('filter', 'drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7))');

    bar
      .append('text')
      // .attr('x', (d) => x(d) - 5)
      .attr('y', (d) => y(d) + y.bandwidth() * 0.5)
      .attr('dy', '0.35em')
      .style('fill', 'white')
      .text((d, i) => `${i + 4}월: ${d}`);


    svg
      .append('g')
      .attr('class', 'axis')
      .attr('transform', `translate(0, ${h - margin.bottom})`)
      .call(d3.axisBottom(x));

    svg.append('g').call(d3.axisLeft(y));
  });
  return (
    <div className={styles.wrap}>
      <h3>2022 시즌 월별 홈런 갯수</h3>
      <svg></svg>
    </div>
  );
};

export default HomerunChart;
