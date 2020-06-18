let graph_1s_dash = i => 4 / 22500 * i * i * Math.exp(-i / 150) * Math.exp(-i / 150);

let graph_1s = i => 4 / 2500 * i * i * Math.exp(-i / 50) * Math.exp(-i / 50);

let graph_2s = i => i / 100 * i / 50 * (1 - i / 100) * (1 - i / 100) * Math.exp(-i / 50);

let graph_2p = i => i * i * i * i * Math.exp(-i / 50) / (50 * 50 * 50 * 50 * 24);

d3load = () => {
  let dataset = [];
  let maxIndex = 0;
  for (let i = 0; i < 800; i++) {
    dataset[i] = {
      x: i,
      y: graph_1s_dash(i)
    };

    if (dataset[i].y > dataset[maxIndex].y) {
      maxIndex = i;
    }
  }

  heightD3 = 400,
    widthD3 = 500;

  svg = d3.selectAll('#d3-viz')
    .attr('height', heightD3)
    .attr('width', widthD3)
    .attr('transform', 'translate(-60,0)');

  // svg.append('rect')
  //   .attr('width', '100%')
  //   .attr('height', '100%')
  //   .attr('fill', 'pink');

  xScale = d3.scaleLinear()
    .domain(d3.extent(dataset, d => d.x))
    .range([60, widthD3 - 30]);

  yScale = d3.scaleLinear()
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
    .delay((d, i) => 2.5 * i)
    .duration(2.5)
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

  svg.append('line')
    .attr('id', 'selection')
    .attr('stroke', 'none');
}

update = d => {
  svg.select('#selection')
    .attr('x1', xScale(d))
    .attr('y1', yScale(0))
    .attr('x2', xScale(d))
    .attr('y2', yScale(graph_1s_dash(d)))
    .style('stroke', 'white')
    .style('stroke-width', '2px');
}

mainGraph1s = () => {
  dataset1s = [];
  let maxIndex = 0;
  for (let i = 0; i < 600; i++) {
    dataset1s[i] = {
      x: i,
      y: 4 / 2500 * i * i * Math.exp(-i / 50) * Math.exp(-i / 50)
    };

    if (dataset1s[i].y > dataset1s[maxIndex].y) {
      maxIndex = i;
    }
  }

  heightD3 = 400,
    widthD3 = 500;

  svg1s = d3.selectAll('#d3-viz-final')
    .attr('height', heightD3)
    .attr('width', widthD3)
    .attr('transform', 'translate(-60,0)');

  // svg.append('rect')
  //   .attr('width', '100%')
  //   .attr('height', '100%')
  //   .attr('fill', 'pink');

  xScale = d3.scaleLinear()
    .domain(d3.extent(dataset1s, d => d.x))
    .range([60, widthD3 - 30]);

  yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset1s, d => d.y)])
    .range([heightD3 - 60, 30]);

  let xAxis = d3.axisBottom()
    .scale(xScale)
    .tickValues([]);

  let yAxis = d3.axisLeft()
    .scale(yScale)
    .tickValues([]);

  svg1s.append('g')
    .call(xAxis)
    .attr('transform', `translate(0,${heightD3-58})`)
    .attr('class', 'axis');

  svg1s.append("text")
    .attr("transform",
      "translate(" + (widthD3 / 2) + " ," +
      (heightD3 - 30) + ")")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Distance from Nucleus");

  svg1s.append('g')
    .call(yAxis)
    .attr('transform', `translate(58,0)`)
    .attr('class', 'axis');

  svg1s.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 30)
    .attr("x", 0 - (heightD3 / 2))
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("No. of Measurements");

  svg1s.selectAll('.dot')
    .data(dataset1s)
    .enter()
    .append('circle')
    .attr('class', 'dot')
    .attr('cx', (d, i) => xScale(d.x))
    .attr('cy', (d, i) => yScale(d.y))
    .attr('r', '2px')
    .attr('fill', 'none');

  svg1s.selectAll('.dot')
    .transition()
    .delay((d, i) => 2.5 * i)
    .duration(2.5)
    .attr('fill', '#FFF7AE');

  points = [
    [dataset1s[maxIndex].x, dataset1s[maxIndex].y],
    [dataset1s[maxIndex].x, 0]
  ];

  svg1s.append('line')
    .attr('x1', xScale(points[0][0]))
    .attr('y1', yScale(points[0][1]))
    .attr('x2', xScale(points[1][0]))
    .attr('y2', yScale(points[1][1]))
    .style('stroke', 'white')
    .style('stroke-width', '2px');

  svg1s.append("text")
    .attr("transform", `translate(${xScale(points[0][0]) + 15}, ${heightD3/2})`)
    .attr('class', 'label')
    .style("text-anchor", "left")
    .text("Bohr Radius");

  svg1s.append('line')
    .attr('id', 'selection')
    .attr('stroke', 'none');

  svg1s.append('rect')
    .attr('x', xScale(500))
    .attr('y', 100)
    .attr('height', 16)
    .attr('width', 16)
    .attr('fill', '#FFF7AE');

  svg1s.append("text")
    .attr("transform", `translate(${xScale(530)}, ${116})`)
    .attr('class', 'label')
    .style("text-anchor", "left")
    .text("1s");
}

updateMain = d => {
  svg1s.select('#selection')
    .attr('x1', xScale(d))
    .attr('y1', yScale(0))
    .attr('x2', xScale(d))
    .attr('y2', yScale(graph_1s(d)))
    .style('stroke', 'white')
    .style('stroke-width', '2px');
}

mainGraph2s = () => {
  dataset = [];
  let maxIndex = 0;
  for (let i = 0; i < 600; i++) {
    dataset[i] = {
      x: i,
      y: graph_2s(i)
    };

    // if (dataset[i].y > dataset[maxIndex].y) {
    //   maxIndex = i;
    // }
  }

  heightD3 = 400,
    widthD3 = 500;

  svg2s = d3.selectAll('#d3-viz-final-2s')
    .attr('height', heightD3)
    .attr('width', widthD3)
    .attr('transform', 'translate(-60,0)');

  // svg.append('rect')
  //   .attr('width', '100%')
  //   .attr('height', '100%')
  //   .attr('fill', 'pink');

  // xScale = d3.scaleLinear()
  //   .domain(d3.extent(dataset, d => d.x))
  //   .range([60, widthD3 - 30]);

  // yScale = d3.scaleLinear()
  //   .domain([0, d3.max(dataset, d => d.y)])
  //   .range([heightD3 - 60, 30]);

  let xAxis = d3.axisBottom()
    .scale(xScale)
    .tickValues([]);

  let yAxis = d3.axisLeft()
    .scale(yScale)
    .tickValues([]);

  svg2s.append('g')
    .call(xAxis)
    .attr('transform', `translate(0,${heightD3-58})`)
    .attr('class', 'axis');

  svg2s.append("text")
    .attr("transform",
      "translate(" + (widthD3 / 2) + " ," +
      (heightD3 - 30) + ")")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Distance from Nucleus");

  svg2s.append('g')
    .call(yAxis)
    .attr('transform', `translate(58,0)`)
    .attr('class', 'axis');

  svg2s.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 30)
    .attr("x", 0 - (heightD3 / 2))
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("No. of Measurements");

  svg2s.selectAll('.dot')
    .data(dataset)
    .enter()
    .append('circle')
    .attr('class', 'dot')
    .attr('cx', (d, i) => xScale(d.x))
    .attr('cy', (d, i) => yScale(d.y))
    .attr('r', '2px')
    .attr('fill', 'none');

  svg2s.selectAll('.dot1s')
    .data(dataset1s)
    .enter()
    .append('circle')
    .attr('class', 'dot1s')
    .attr('cx', (d, i) => xScale(d.x))
    .attr('cy', (d, i) => yScale(d.y))
    .attr('r', '2px')
    .attr('fill', 'none');

  svg2s.selectAll('.dot')
    .transition()
    .delay((d, i) => 2.5 * i)
    .duration(2.5)
    .attr('fill', '#6ECF7F');

  svg2s.selectAll('.dot1s')
    .transition()
    .delay((d, i) => 2.5 * i)
    .duration(2.5)
    .attr('fill', '#FFF7AE')
    .attr('opacity', 0.1);

  // let points = [
  //   [dataset[maxIndex].x, dataset[maxIndex].y],
  //   [dataset[maxIndex].x, 0]
  // ];

  svg2s.append('line')
    .attr('x1', xScale(points[0][0]))
    .attr('y1', yScale(points[0][1]))
    .attr('x2', xScale(points[1][0]))
    .attr('y2', yScale(points[1][1]))
    .style('stroke', 'white')
    .style('stroke-width', '2px');

  svg2s.append("text")
    .attr("transform", `translate(${xScale(points[0][0]) + 15}, ${heightD3/2})`)
    .attr('class', 'label')
    .style("text-anchor", "left")
    .text("Bohr Radius");

  svg2s.append('line')
    .attr('id', 'selection')
    .attr('stroke', 'none');

  svg2s.append('rect')
    .attr('x', xScale(500))
    .attr('y', 100)
    .attr('height', 16)
    .attr('width', 16)
    .attr('fill', '#FFF7AE');

  svg2s.append("text")
    .attr("transform", `translate(${xScale(530)}, ${116})`)
    .attr('class', 'label')
    .style("text-anchor", "left")
    .text("1s");

  svg2s.append('rect')
    .attr('x', xScale(500))
    .attr('y', 130)
    .attr('height', 16)
    .attr('width', 16)
    .attr('fill', '#6ECF7F');

  svg2s.append("text")
    .attr("transform", `translate(${xScale(530)}, ${146})`)
    .attr('class', 'label')
    .style("text-anchor", "left")
    .text("2s");
}

updateMain2s = d => {
  svg2s.select('#selection')
    .attr('x1', xScale(d))
    .attr('y1', yScale(0))
    .attr('x2', xScale(d))
    .attr('y2', yScale(graph_2s(d)))
    .style('stroke', 'white')
    .style('stroke-width', '2px');
}

mainGraph2p = () => {
  dataset2p = [];
  let maxIndex = 0;
  for (let i = 0; i < 600; i++) {
    dataset2p[i] = {
      x: i,
      y: graph_2p(i)
    };

    // if (dataset[i].y > dataset[maxIndex].y) {
    //   maxIndex = i;
    // }
  }

  heightD3 = 400,
    widthD3 = 500;

  svg2p = d3.selectAll('#d3-viz-final-2p')
    .attr('height', heightD3)
    .attr('width', widthD3)
    .attr('transform', 'translate(-60,0)');

  // svg.append('rect')
  //   .attr('width', '100%')
  //   .attr('height', '100%')
  //   .attr('fill', 'pink');

  // xScale = d3.scaleLinear()
  //   .domain(d3.extent(dataset, d => d.x))
  //   .range([60, widthD3 - 30]);

  // yScale = d3.scaleLinear()
  //   .domain([0, d3.max(dataset, d => d.y)])
  //   .range([heightD3 - 60, 30]);

  let xAxis = d3.axisBottom()
    .scale(xScale)
    .tickValues([]);

  let yAxis = d3.axisLeft()
    .scale(yScale)
    .tickValues([]);

  svg2p.append('g')
    .call(xAxis)
    .attr('transform', `translate(0,${heightD3-58})`)
    .attr('class', 'axis');

  svg2p.append("text")
    .attr("transform",
      "translate(" + (widthD3 / 2) + " ," +
      (heightD3 - 30) + ")")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Distance from Nucleus");

  svg2p.append('g')
    .call(yAxis)
    .attr('transform', `translate(58,0)`)
    .attr('class', 'axis');

  svg2p.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 30)
    .attr("x", 0 - (heightD3 / 2))
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("No. of Measurements");

  svg2p.selectAll('.dot')
    .data(dataset)
    .enter()
    .append('circle')
    .attr('class', 'dot')
    .attr('cx', (d, i) => xScale(d.x))
    .attr('cy', (d, i) => yScale(d.y))
    .attr('r', '2px')
    .attr('fill', 'none');

  svg2p.selectAll('.dot1s')
    .data(dataset1s)
    .enter()
    .append('circle')
    .attr('class', 'dot1s')
    .attr('cx', (d, i) => xScale(d.x))
    .attr('cy', (d, i) => yScale(d.y))
    .attr('r', '2px')
    .attr('fill', 'none');

  svg2p.selectAll('.dot')
    .transition()
    .delay((d, i) => 2.5 * i)
    .duration(2.5)
    .attr('fill', '#6ECF7F')
    .attr('opacity', 0.1);

  svg2p.selectAll('.dot1s')
    .transition()
    .delay((d, i) => 2.5 * i)
    .duration(2.5)
    .attr('fill', '#FFF7AE')
    .attr('opacity', 0.1);

  svg2p.selectAll('.dot2p')
    .data(dataset2p)
    .enter()
    .append('circle')
    .attr('class', 'dot2p')
    .attr('cx', (d, i) => xScale(d.x))
    .attr('cy', (d, i) => yScale(d.y))
    .attr('r', '2px')
    .attr('fill', 'none');

  svg2p.selectAll('.dot2p')
    .transition()
    .delay((d, i) => 2.5 * i)
    .duration(2.5)
    .attr('fill', '#EA9FA2');

  // let points = [
  //   [dataset[maxIndex].x, dataset[maxIndex].y],
  //   [dataset[maxIndex].x, 0]
  // ];

  svg2p.append('line')
    .attr('x1', xScale(points[0][0]))
    .attr('y1', yScale(points[0][1]))
    .attr('x2', xScale(points[1][0]))
    .attr('y2', yScale(points[1][1]))
    .style('stroke', 'white')
    .style('stroke-width', '2px');

  svg2p.append("text")
    .attr("transform", `translate(${xScale(points[0][0]) + 15}, ${heightD3/2})`)
    .attr('class', 'label')
    .style("text-anchor", "left")
    .text("Bohr Radius");

  svg2p.append('line')
    .attr('id', 'selection')
    .attr('stroke', 'none');

  svg2p.append('rect')
    .attr('x', xScale(500))
    .attr('y', 100)
    .attr('height', 16)
    .attr('width', 16)
    .attr('fill', '#FFF7AE');

  svg2p.append("text")
    .attr("transform", `translate(${xScale(530)}, ${116})`)
    .attr('class', 'label')
    .style("text-anchor", "left")
    .text("1s");

  svg2p.append('rect')
    .attr('x', xScale(500))
    .attr('y', 130)
    .attr('height', 16)
    .attr('width', 16)
    .attr('fill', '#6ECF7F');

  svg2p.append("text")
    .attr("transform", `translate(${xScale(530)}, ${146})`)
    .attr('class', 'label')
    .style("text-anchor", "left")
    .text("2s");

  svg2p.append('rect')
    .attr('x', xScale(500))
    .attr('y', 160)
    .attr('height', 16)
    .attr('width', 16)
    .attr('fill', '#EA9FA2');

  svg2p.append("text")
    .attr("transform", `translate(${xScale(530)}, ${176})`)
    .attr('class', 'label')
    .style("text-anchor", "left")
    .text("2px");
}

updateMain2p = d => {
  svg2p.select('#selection')
    .attr('x1', xScale(d))
    .attr('y1', yScale(0))
    .attr('x2', xScale(d))
    .attr('y2', yScale(graph_2p(d)))
    .style('stroke', 'white')
    .style('stroke-width', '2px');
}