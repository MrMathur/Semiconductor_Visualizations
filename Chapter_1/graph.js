d3load = () => {
  let dataset = [];
  let maxIndex = 0;
  for (let i = 0; i < 400; i++) {
    dataset[i] = {
      x: i,
      y: i / 100 * Math.exp(-i / 100)
    };

    if (dataset[i].y > dataset[maxIndex].y) {
      maxIndex = i;
    }
  }

  console.table(dataset);

  const heightD3 = 400,
    widthD3 = 500;

  let svg = d3.selectAll('#d3-viz')
    .attr('height', heightD3)
    .attr('width', widthD3)
    .attr('transform', 'translate(-60,0)');

  // svg.append('rect')
  //   .attr('width', '100%')
  //   .attr('height', '100%')
  //   .attr('fill', 'pink');

  let xScale = d3.scaleLinear()
    .domain(d3.extent(dataset, d => d.x))
    .range([60, widthD3 - 30]);

  let yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, d => d.y)])
    .range([heightD3 - 60, 30]);

  let xAxis = d3.axisBottom()
    .scale(xScale)
    .tickValues([]);

  let yAxis = d3.axisLeft()
    .scale(yScale)
    .tickValues([]);

  svg.append('g')
    .call(xAxis)
    .attr('transform', `translate(0,${heightD3-58})`)
    .attr('class', 'axis');

  svg.append("text")
    .attr("transform",
      "translate(" + (widthD3 / 2) + " ," +
      (heightD3 - 30) + ")")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Distance from Nucleus");

  svg.append('g')
    .call(yAxis)
    .attr('transform', `translate(58,0)`)
    .attr('class', 'axis');

  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 30)
    .attr("x", 0 - (heightD3 / 2))
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("No. of Measurements");

  svg.selectAll('.dot')
    .data(dataset)
    .enter()
    .append('circle')
    .attr('class', 'dot')
    .attr('cx', (d, i) => xScale(d.x))
    .attr('cy', (d, i) => yScale(d.y))
    .attr('r', '2px')
    .attr('fill', 'none');

  svg.selectAll('.dot')
    .transition()
    .delay((d, i) => 5 * i)
    .duration(5)
    .attr('fill', '#FFF7AE');

  let points = [
    [dataset[maxIndex].x, dataset[maxIndex].y],
    [dataset[maxIndex].x, 0]
  ];

  svg.append('line')
    .attr('x1', xScale(points[0][0]))
    .attr('y1', yScale(points[0][1]))
    .attr('x2', xScale(points[1][0]))
    .attr('y2', yScale(points[1][1]))
    .style('stroke', 'white')
    .style('stroke-width', '2px');

  svg.append("text")
    .attr("transform", `translate(${xScale(points[0][0]) + 15}, ${heightD3/2})`)
    .attr('class', 'label')
    .style("text-anchor", "left")
    .text("Bohr Radius");
}