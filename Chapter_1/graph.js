d3load = () => {
  let dataset = [];
  for (let i = 0; i < 400; i++) {
    dataset[i] = i / 100 * Math.exp(-i / 100);
  }

  const heightD3 = 500,
    widthD3 = 400;

  let svg = d3.selectAll('#d3-viz')
    .attr('height', widthD3)
    .attr('width', heightD3);

  // svg.append('rect')
  //   .attr('width', '100%')
  //   .attr('height', '100%')
  //   .attr('fill', 'white');

  let xScale = d3.scaleLinear()
    .domain([0, 350])
    .range([15, widthD3 - 15]);

  let yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, d => d)])
    .range([heightD3 - 50, 5]);

  svg.selectAll('.dot')
    .data(dataset)
    .enter()
    .append('circle')
    .attr('class', 'dot')
    .attr('cx', (d, i) => xScale(i))
    .attr('cy', (d, i) => yScale(d))
    .attr('r', '2px')
    .attr('fill', 'red');

  let points = [
    [xScale(dataset.indexOf(Math.max(...dataset))), yScale(0)],
    [xScale(dataset.indexOf(Math.max(...dataset))), yScale(Math.max(...dataset))]
  ];

  svg.append('line')
    .attr('x1', points[0][0])
    .attr('y1', points[0][1])
    .attr('x2', points[1][0])
    .attr('y2', points[1][1])
    .style('stroke', 'white')
    .style('stroke-width', '2');

}