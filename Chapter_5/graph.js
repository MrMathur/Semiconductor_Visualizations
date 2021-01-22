let zoomed = false;

colors = {
  green: '#6ECF7F',
  yellow: '#FFF7AE',
  red: '#EA9FA2'
}

d3onload = () => {
  heightD3 = 500,
    widthD3 = 250;

  svg = d3.selectAll('#d3-viz')
    .attr('height', heightD3)
    .attr('width', widthD3)
    .attr('transform', 'translate(-60,0)');

  yScale = d3.scaleLinear()
    .domain([-13.6, 0])
    .range([heightD3 - 60, 30]);

  xScale = d3.scaleLinear()
    .domain([-500, 500])
    .range([30, widthD3 - 30]);

  let xAxis = d3.axisBottom()
    .scale(xScale)
    .tickValues([]);

  let yAxis = d3.axisLeft()
    .scale(yScale)
    .tickValues([]);

  svg.append('line')
    // .attr('transform', `translate()`)
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 2)
    .attr('x1', 58)
    .attr('y1', yScale(-0.85))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(-0.85));

  svg.append('line')
    // .attr('transform', `translate()`)
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 2)
    .attr('x1', 58)
    .attr('y1', yScale(-1.7))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(-1.7));

  svg.append('line')
    // .attr('transform', `translate()`)
    .attr('stroke', '#6ECF7F')
    .attr('stroke-width', 2)
    .attr('x1', 58)
    .attr('y1', yScale(-3.4))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(-3.4));

  svg.append('line')
    // .attr('transform', `translate()`)
    .attr('stroke', '#6ECF7F')
    .attr('stroke-width', 2)
    .attr('x1', 58)
    .attr('y1', yScale(-6.8))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(-6.8));

  svg.append('line')
    // .attr('transform', `translate()`)
    .attr('stroke', '#FFF7AE')
    .attr('stroke-width', 2)
    .attr('x1', 58)
    .attr('y1', yScale(-13.6))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(-13.6));

  // svg.append("text")
  //   .attr("transform",
  //     `translate(${(widthD3 / 2) + 50},${(yScale(-13.6) - 10)} )`)
  //   .attr('class', 'label')
  //   .style("text-anchor", "middle")
  //   .text("1s Orbital");

  // svg.append("text")
  //   .attr("transform",
  //     `translate(${(widthD3 / 2)+ 50},${(yScale(-6.8) - 10)} )`)
  //   .attr('class', 'label')
  //   .style("text-anchor", "middle")
  //   .text("2s Orbital");

  // svg.append("text")
  //   .attr("transform",
  //     `translate(${(widthD3 / 2)+ 50},${(yScale(-3.4) - 10)} )`)
  //   .attr('class', 'label')
  //   .style("text-anchor", "middle")
  //   .text("2p Orbital");

  svg.append('rect')
    .attr('id', 'orbital-1s')
    .attr('fill', 'none')
    .attr('stroke', '#FFF7AE')
    .attr('stroke-width', 1)
    .attr('x', widthD3 / 4)
    .attr('y', yScale(-13.6) - 21)
    .attr('width', 20)
    .attr('height', 20);
  svg.append('rect')
    .attr('id', 'orbital-2s')
    .attr('fill', 'none')
    .attr('stroke', '#6ECF7F')
    .attr('stroke-width', 1)
    .attr('x', widthD3 / 4)
    .attr('y', yScale(-6.8) - 21)
    .attr('width', 20)
    .attr('height', 20);
  svg.append('rect')
    .attr('id', 'orbital-2px')
    .attr('fill', 'none')
    .attr('stroke', '#6ECF7F')
    .attr('stroke-width', 1)
    .attr('x', widthD3 / 4)
    .attr('y', yScale(-3.4) - 21)
    .attr('width', 20)
    .attr('height', 20);
  svg.append('rect')
    .attr('id', 'orbital-2py')
    .attr('fill', 'none')
    .attr('stroke', '#6ECF7F')
    .attr('stroke-width', 1)
    .attr('x', widthD3 / 4 + 20)
    .attr('y', yScale(-3.4) - 21)
    .attr('width', 20)
    .attr('height', 20);
  svg.append('rect')
    .attr('id', 'orbital-2pz')
    .attr('fill', 'none')
    .attr('stroke', '#6ECF7F')
    .attr('stroke-width', 1)
    .attr('x', widthD3 / 4 - 20)
    .attr('y', yScale(-3.4) - 21)
    .attr('width', 20)
    .attr('height', 20);

  svg.append('rect')
    .attr('id', 'orbital-3s')
    .attr('fill', 'none')
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 1)
    .attr('x', widthD3 / 4)
    .attr('y', yScale(-1.7) - 21)
    .attr('width', 20)
    .attr('height', 20);

  svg.append('rect')
    .attr('id', 'orbital-3p')
    .attr('fill', 'none')
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 1)
    .attr('x', widthD3 / 4)
    .attr('y', yScale(-0.85) - 21)
    .attr('width', 20)
    .attr('height', 20);

  svg.append('rect')
    .attr('id', 'orbital-3p')
    .attr('fill', 'none')
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 1)
    .attr('x', widthD3 / 4 - 20)
    .attr('y', yScale(-0.85) - 21)
    .attr('width', 20)
    .attr('height', 20);

  svg.append('rect')
    .attr('id', 'orbital-3p')
    .attr('fill', 'none')
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 1)
    .attr('x', widthD3 / 4 + 20)
    .attr('y', yScale(-0.85) - 21)
    .attr('width', 20)
    .attr('height', 20);

  svg.append('line')
    .attr('id', 'electron')
    .attr('stroke', '#FFF')
    .attr('stroke-width', '2px')
    .attr('x1', widthD3 / 4 + 7)
    .attr('x2', widthD3 / 4 + 7)
    .attr('y1', yScale(-1.7) - 15)
    .attr('y2', yScale(-1.7) - 5);

  svg.append('line')
    .attr('id', 'electron')
    .attr('stroke', '#FFF')
    .attr('stroke-width', '2px')
    .attr('x1', widthD3 / 4 + 13)
    .attr('x2', widthD3 / 4 + 13)
    .attr('y1', yScale(-1.7) - 15)
    .attr('y2', yScale(-1.7) - 5);

  svg.append('line')
    .attr('id', 'electron')
    .attr('stroke', '#FFF')
    .attr('stroke-width', '2px')
    .attr('x1', widthD3 / 4 + 7)
    .attr('x2', widthD3 / 4 + 7)
    .attr('y1', yScale(-0.85) - 15)
    .attr('y2', yScale(-0.85) - 5);

  svg.append('line')
    .attr('id', 'electron')
    .attr('stroke', '#FFF')
    .attr('stroke-width', '2px')
    .attr('x1', widthD3 / 4 - 13)
    .attr('x2', widthD3 / 4 - 13)
    .attr('y1', yScale(-0.85) - 15)
    .attr('y2', yScale(-0.85) - 5);

  svg.append('line')
    .attr('id', 'electron')
    .attr('stroke', '#FFF')
    .attr('stroke-width', '2px')
    .attr('x1', widthD3 / 4 + 7)
    .attr('x2', widthD3 / 4 + 7)
    .attr('y1', yScale(-13.6) - 15)
    .attr('y2', yScale(-13.6) - 5);

  svg.append('line')
    .attr('id', 'electron')
    .attr('stroke', '#FFF')
    .attr('stroke-width', '2px')
    .attr('x1', widthD3 / 4 + 13)
    .attr('x2', widthD3 / 4 + 13)
    .attr('y1', yScale(-13.6) - 15)
    .attr('y2', yScale(-13.6) - 5);

  svg.append('line')
    .attr('id', 'electron')
    .attr('stroke', '#FFF')
    .attr('stroke-width', '2px')
    .attr('x1', widthD3 / 4 + 13)
    .attr('x2', widthD3 / 4 + 13)
    .attr('y1', yScale(-6.8) - 15)
    .attr('y2', yScale(-6.8) - 5);

  svg.append('line')
    .attr('id', 'electron')
    .attr('stroke', '#FFF')
    .attr('stroke-width', '2px')
    .attr('x1', widthD3 / 4 + 7)
    .attr('x2', widthD3 / 4 + 7)
    .attr('y1', yScale(-6.8) - 15)
    .attr('y2', yScale(-6.8) - 5);

  svg.append('line')
    .attr('id', 'electron')
    .attr('stroke', '#FFF')
    .attr('stroke-width', '2px')
    .attr('x1', widthD3 / 4 + 13)
    .attr('x2', widthD3 / 4 + 13)
    .attr('y1', yScale(-3.4) - 15)
    .attr('y2', yScale(-3.4) - 5);

  svg.append('line')
    .attr('id', 'electron')
    .attr('stroke', '#FFF')
    .attr('stroke-width', '2px')
    .attr('x1', widthD3 / 4 + 7)
    .attr('x2', widthD3 / 4 + 7)
    .attr('y1', yScale(-3.4) - 15)
    .attr('y2', yScale(-3.4) - 5);

  svg.append('line')
    .attr('id', 'electron')
    .attr('stroke', '#FFF')
    .attr('stroke-width', '2px')
    .attr('x1', widthD3 / 4 + 33)
    .attr('x2', widthD3 / 4 + 33)
    .attr('y1', yScale(-3.4) - 15)
    .attr('y2', yScale(-3.4) - 5);

  svg.append('line')
    .attr('id', 'electron')
    .attr('stroke', '#FFF')
    .attr('stroke-width', '2px')
    .attr('x1', widthD3 / 4 + 27)
    .attr('x2', widthD3 / 4 + 27)
    .attr('y1', yScale(-3.4) - 15)
    .attr('y2', yScale(-3.4) - 5);

  svg.append('line')
    .attr('id', 'electron')
    .attr('stroke', '#FFF')
    .attr('stroke-width', '2px')
    .attr('x1', widthD3 / 4 - 13)
    .attr('x2', widthD3 / 4 - 13)
    .attr('y1', yScale(-3.4) - 15)
    .attr('y2', yScale(-3.4) - 5);

  svg.append('line')
    .attr('id', 'electron')
    .attr('stroke', '#FFF')
    .attr('stroke-width', '2px')
    .attr('x1', widthD3 / 4 - 7)
    .attr('x2', widthD3 / 4 - 7)
    .attr('y1', yScale(-3.4) - 15)
    .attr('y2', yScale(-3.4) - 5);

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
    .text("Energy");
}

d3update = a => {
  d3clear();
  d3.selectAll(`#orbital-${a}`)
    .attr('fill', 'white')
    .attr('opacity', '0.4');
}

d3clear = () => {

  d3.selectAll('rect')
    .attr('fill', 'none')
    .attr('opacity', '1');
}

d3zoom = () => {
  heightD3 = 500,
    widthD3 = 500;

  svg = d3.selectAll('#d3-viz2')
    .attr('height', heightD3)
    .attr('width', widthD3)
    .attr('transform', 'translate(-60,0)');

  yScale = d3.scaleLinear()
    .domain([-2, 0])
    .range([heightD3 - 60, 30]);

  xScale = d3.scaleLinear()
    .domain([-500, 500])
    .range([30, widthD3 - 30]);

  let xAxis = d3.axisBottom()
    .scale(xScale)
    .tickValues([]);

  let yAxis = d3.axisLeft()
    .scale(yScale)
    .tickValues([]);
  let yAxisR = d3.axisRight()
    .scale(yScale)
    .tickValues([]);

  svg.append('line')
    // .attr('transform', `translate()`)
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 2)
    .attr('x1', 58)
    .attr('y1', yScale(-0.85))
    .attr('x2', widthD3 / 2 - 58)
    .attr('y2', yScale(-0.85));

  svg.append('line')
    // .attr('transform', `translate()`)
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 2)
    .attr('x1', 58)
    .attr('y1', yScale(-1.7))
    .attr('x2', widthD3 / 2 - 58)
    .attr('y2', yScale(-1.7));

  svg.append('line')
    // .attr('transform', `translate()`)
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 2)
    .attr('x1', widthD3 / 2 + 58)
    .attr('y1', yScale(-0.85))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(-0.85));

  svg.append('line')
    // .attr('transform', `translate()`)
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 2)
    .attr('x1', widthD3 / 2 + 58)
    .attr('y1', yScale(-1.7))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(-1.7));

  svg.append('rect')
    .attr('id', 'orbital-3s')
    .attr('fill', 'none')
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 1)
    .attr('x', widthD3 / 4)
    .attr('y', yScale(-1.7) - 21)
    .attr('width', 20)
    .attr('height', 20);

  svg.append('rect')
    .attr('id', 'orbital-3p')
    .attr('fill', 'none')
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 1)
    .attr('x', widthD3 / 4)
    .attr('y', yScale(-0.85) - 21)
    .attr('width', 20)
    .attr('height', 20);

  svg.append('rect')
    .attr('id', 'orbital-3p')
    .attr('fill', 'none')
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 1)
    .attr('x', widthD3 / 4 - 20)
    .attr('y', yScale(-0.85) - 21)
    .attr('width', 20)
    .attr('height', 20);

  svg.append('rect')
    .attr('id', 'orbital-3p')
    .attr('fill', 'none')
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 1)
    .attr('x', widthD3 / 4 + 20)
    .attr('y', yScale(-0.85) - 21)
    .attr('width', 20)
    .attr('height', 20);

  svg.append('line')
    .attr('id', 'electron')
    .attr('stroke', '#FFF')
    .attr('stroke-width', '2px')
    .attr('x1', widthD3 / 4 + 7)
    .attr('x2', widthD3 / 4 + 7)
    .attr('y1', yScale(-1.7) - 15)
    .attr('y2', yScale(-1.7) - 5);

  svg.append('line')
    .attr('id', 'electron')
    .attr('stroke', '#FFF')
    .attr('stroke-width', '2px')
    .attr('x1', widthD3 / 4 + 13)
    .attr('x2', widthD3 / 4 + 13)
    .attr('y1', yScale(-1.7) - 15)
    .attr('y2', yScale(-1.7) - 5);

  svg.append('line')
    .attr('id', 'electron')
    .attr('stroke', '#FFF')
    .attr('stroke-width', '2px')
    .attr('x1', widthD3 / 4 + 7)
    .attr('x2', widthD3 / 4 + 7)
    .attr('y1', yScale(-0.85) - 15)
    .attr('y2', yScale(-0.85) - 5);

  svg.append('line')
    .attr('id', 'electron')
    .attr('stroke', '#FFF')
    .attr('stroke-width', '2px')
    .attr('x1', widthD3 / 4 - 13)
    .attr('x2', widthD3 / 4 - 13)
    .attr('y1', yScale(-0.85) - 15)
    .attr('y2', yScale(-0.85) - 5);


  svg.append('g')
    .call(yAxis)
    .attr('transform', `translate(58,0)`)
    .attr('class', 'axis');

  svg.append('g')
    .call(yAxisR)
    .attr('transform', `translate(${widthD3 - 58},0)`)
    .attr('class', 'axis');

  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 30)
    .attr("x", 0 - (heightD3 / 2))
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Energy");

  svg.append("text")
    // .attr("transform", "rotate(-90)")
    .attr("y", yScale(-0.85) - 20)
    .attr("x", widthD3 / 2)
    .attr('text-anchor', 'middle')
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("3p Orbital");

  svg.append("text")
    // .attr("transform", "rotate(-90)")
    .attr("y", yScale(-1.7) - 20)
    .attr("x", widthD3 / 2)
    .attr('text-anchor', 'middle')
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("3s Orbital");

  svg.append('rect')
    .attr('id', 'orbital-3s')
    .attr('fill', 'none')
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 1)
    .attr('x', 3 * widthD3 / 4)
    .attr('y', yScale(-1.7) - 21)
    .attr('width', 20)
    .attr('height', 20);

  svg.append('rect')
    .attr('id', 'orbital-3p')
    .attr('fill', 'none')
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 1)
    .attr('x', 3 * widthD3 / 4)
    .attr('y', yScale(-0.85) - 21)
    .attr('width', 20)
    .attr('height', 20);

  svg.append('rect')
    .attr('id', 'orbital-3p')
    .attr('fill', 'none')
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 1)
    .attr('x', 3 * widthD3 / 4 + 20)
    .attr('y', yScale(-0.85) - 21)
    .attr('width', 20)
    .attr('height', 20);

  svg.append('rect')
    .attr('id', 'orbital-3p')
    .attr('fill', 'none')
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 1)
    .attr('x', 3 * widthD3 / 4 - 20)
    .attr('y', yScale(-0.85) - 21)
    .attr('width', 20)
    .attr('height', 20);

  svg.append('line')
    .attr('id', 'electron')
    .attr('stroke', '#FFF')
    .attr('stroke-width', '2px')
    .attr('x1', 3 * widthD3 / 4 + 7)
    .attr('x2', 3 * widthD3 / 4 + 7)
    .attr('y1', yScale(-1.7) - 15)
    .attr('y2', yScale(-1.7) - 5);

  svg.append('line')
    .attr('id', 'electron')
    .attr('stroke', '#FFF')
    .attr('stroke-width', '2px')
    .attr('x1', 3 * widthD3 / 4 + 13)
    .attr('x2', 3 * widthD3 / 4 + 13)
    .attr('y1', yScale(-1.7) - 15)
    .attr('y2', yScale(-1.7) - 5);

  svg.append('line')
    .attr('id', 'electron')
    .attr('stroke', '#FFF')
    .attr('stroke-width', '2px')
    .attr('x1', 3 * widthD3 / 4 - 13)
    .attr('x2', 3 * widthD3 / 4 - 13)
    .attr('y1', yScale(-0.85) - 15)
    .attr('y2', yScale(-0.85) - 5);

  svg.append('line')
    .attr('id', 'electron')
    .attr('stroke', '#FFF')
    .attr('stroke-width', '2px')
    .attr('x1', 3 * widthD3 / 4 + 7)
    .attr('x2', 3 * widthD3 / 4 + 7)
    .attr('y1', yScale(-0.85) - 15)
    .attr('y2', yScale(-0.85) - 5);
}

d3sp3 = () => {
  heightD3 = 500,
    widthD3 = 500;

  svg = d3.selectAll('#d3-viz3')
    .attr('height', heightD3)
    .attr('width', widthD3)
    .attr('transform', 'translate(-60,0)');

  yScale = d3.scaleLinear()
    .domain([-2, 0])
    .range([heightD3 - 60, 30]);

  xScale = d3.scaleLinear()
    .domain([-500, 500])
    .range([30, widthD3 - 30]);

  let xAxis = d3.axisBottom()
    .scale(xScale)
    .tickValues([]);

  let yAxis = d3.axisLeft()
    .scale(yScale)
    .tickValues([]);
  let yAxisR = d3.axisRight()
    .scale(yScale)
    .tickValues([]);

  svg.append('line')
    // .attr('transform', `translate()`)
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 2)
    .attr('x1', 58)
    .attr('y1', yScale(-1.275))
    .attr('x2', widthD3 / 2 - 58)
    .attr('y2', yScale(-1.275));

  svg.append('line')
    // .attr('transform', `translate()`)
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 2)
    .attr('x1', widthD3 / 2 + 58)
    .attr('y1', yScale(-1.275))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(-1.275));

  svg.append('rect')
    .attr('id', 'orbital-3s')
    .attr('fill', 'none')
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 1)
    .attr('x', widthD3 / 4 - 40)
    .attr('y', yScale(-1.275) - 21)
    .attr('width', 20)
    .attr('height', 20);

  svg.append('rect')
    .attr('id', 'orbital-3p')
    .attr('fill', 'none')
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 1)
    .attr('x', widthD3 / 4)
    .attr('y', yScale(-1.275) - 21)
    .attr('width', 20)
    .attr('height', 20);

  svg.append('rect')
    .attr('id', 'orbital-3p')
    .attr('fill', 'none')
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 1)
    .attr('x', widthD3 / 4 - 20)
    .attr('y', yScale(-1.275) - 21)
    .attr('width', 20)
    .attr('height', 20);

  svg.append('rect')
    .attr('id', 'orbital-3p')
    .attr('fill', 'none')
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 1)
    .attr('x', widthD3 / 4 + 20)
    .attr('y', yScale(-1.275) - 21)
    .attr('width', 20)
    .attr('height', 20);

  svg.append('line')
    .attr('id', 'electron')
    .attr('stroke', '#FFF')
    .attr('stroke-width', '2px')
    .attr('x1', widthD3 / 4 + 7)
    .attr('x2', widthD3 / 4 + 7)
    .attr('y1', yScale(-1.275) - 15)
    .attr('y2', yScale(-1.275) - 5);
  svg.append('line')
    .attr('id', 'electron')
    .attr('stroke', '#FFF')
    .attr('stroke-width', '2px')
    .attr('x1', widthD3 / 4 + 7 - 40)
    .attr('x2', widthD3 / 4 + 7 - 40)
    .attr('y1', yScale(-1.275) - 15)
    .attr('y2', yScale(-1.275) - 5);
  svg.append('line')
    .attr('id', 'electron')
    .attr('stroke', '#FFF')
    .attr('stroke-width', '2px')
    .attr('x1', widthD3 / 4 + 7 - 20)
    .attr('x2', widthD3 / 4 + 7 - 20)
    .attr('y1', yScale(-1.275) - 15)
    .attr('y2', yScale(-1.275) - 5);
  svg.append('line')
    .attr('id', 'electron')
    .attr('stroke', '#FFF')
    .attr('stroke-width', '2px')
    .attr('x1', widthD3 / 4 + 7 + 20)
    .attr('x2', widthD3 / 4 + 7 + 20)
    .attr('y1', yScale(-1.275) - 15)
    .attr('y2', yScale(-1.275) - 5);


  svg.append('g')
    .call(yAxis)
    .attr('transform', `translate(58,0)`)
    .attr('class', 'axis');

  svg.append('g')
    .call(yAxisR)
    .attr('transform', `translate(${widthD3 - 58},0)`)
    .attr('class', 'axis');

  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 30)
    .attr("x", 0 - (heightD3 / 2))
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Energy");

  svg.append("text")
    // .attr("transform", "rotate(-90)")
    .attr("y", yScale(-1.275) - 20)
    .attr("x", widthD3 / 2)
    .attr('text-anchor', 'middle')
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("sp3 Orbital");

  svg.append('rect')
    .attr('id', 'orbital-3s')
    .attr('fill', 'none')
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 1)
    .attr('x', 3 * widthD3 / 4 - 40)
    .attr('y', yScale(-1.275) - 21)
    .attr('width', 20)
    .attr('height', 20);

  svg.append('rect')
    .attr('id', 'orbital-3p')
    .attr('fill', 'none')
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 1)
    .attr('x', 3 * widthD3 / 4)
    .attr('y', yScale(-1.275) - 21)
    .attr('width', 20)
    .attr('height', 20);

  svg.append('rect')
    .attr('id', 'orbital-3p')
    .attr('fill', 'none')
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 1)
    .attr('x', 3 * widthD3 / 4 + 20)
    .attr('y', yScale(-1.275) - 21)
    .attr('width', 20)
    .attr('height', 20);

  svg.append('rect')
    .attr('id', 'orbital-3p')
    .attr('fill', 'none')
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 1)
    .attr('x', 3 * widthD3 / 4 - 20)
    .attr('y', yScale(-1.275) - 21)
    .attr('width', 20)
    .attr('height', 20);

  svg.append('line')
    .attr('id', 'electron')
    .attr('stroke', '#FFF')
    .attr('stroke-width', '2px')
    .attr('x1', 3 * widthD3 / 4 + 7)
    .attr('x2', 3 * widthD3 / 4 + 7)
    .attr('y1', yScale(-1.275) - 15)
    .attr('y2', yScale(-1.275) - 5);
  svg.append('line')
    .attr('id', 'electron')
    .attr('stroke', '#FFF')
    .attr('stroke-width', '2px')
    .attr('x1', 3 * widthD3 / 4 + 7 - 20)
    .attr('x2', 3 * widthD3 / 4 + 7 - 20)
    .attr('y1', yScale(-1.275) - 15)
    .attr('y2', yScale(-1.275) - 5);
  svg.append('line')
    .attr('id', 'electron')
    .attr('stroke', '#FFF')
    .attr('stroke-width', '2px')
    .attr('x1', 3 * widthD3 / 4 + 7 - 40)
    .attr('x2', 3 * widthD3 / 4 + 7 - 40)
    .attr('y1', yScale(-1.275) - 15)
    .attr('y2', yScale(-1.275) - 5);
  svg.append('line')
    .attr('id', 'electron')
    .attr('stroke', '#FFF')
    .attr('stroke-width', '2px')
    .attr('x1', 3 * widthD3 / 4 + 7 + 20)
    .attr('x2', 3 * widthD3 / 4 + 7 + 20)
    .attr('y1', yScale(-1.275) - 15)
    .attr('y2', yScale(-1.275) - 5);

}

d3split = () => {
  heightD3 = 500,
    widthD3 = 500;

  svg = d3.selectAll('#d3-viz4')
    .attr('height', heightD3)
    .attr('width', widthD3)
    .attr('transform', 'translate(-60,0)');

  yScale = d3.scaleLinear()
    .domain([-2, 0])
    .range([heightD3 - 60, 30]);

  xScale = d3.scaleLinear()
    .domain([-500, 500])
    .range([30, widthD3 - 30]);

  let xAxis = d3.axisBottom()
    .scale(xScale)
    .tickValues([]);

  let yAxis = d3.axisLeft()
    .scale(yScale)
    .tickValues([]);

  svg.append('line')
    .attr('id', 'sigmastar')
    // .attr('transform', `translate()`)
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 2)
    .attr('x1', 58)
    .attr('y1', yScale(-1))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(-1));

  svg.append('line')
    .attr('id', 'sigma')
    // .attr('transform', `translate()`)
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 2)
    .attr('x1', 58)
    .attr('y1', yScale(-1.275 - 0.275))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(-1.275 - 0.275));

  svg.append('rect')
    .attr('id', 'orbital-3s')
    .attr('fill', 'none')
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 1)
    .attr('x', widthD3 / 4)
    .attr('y', yScale(-1.55) - 21)
    .attr('width', 20)
    .attr('height', 20);

  svg.append('rect')
    .attr('id', 'orbital-3p')
    .attr('fill', 'none')
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 1)
    .attr('x', widthD3 / 4)
    .attr('y', yScale(-1) - 21)
    .attr('width', 20)
    .attr('height', 20);


  svg.append('line')
    .attr('id', 'electron')
    .attr('stroke', '#FFF')
    .attr('stroke-width', '2px')
    .attr('x1', widthD3 / 4 + 7)
    .attr('x2', widthD3 / 4 + 7)
    .attr('y1', yScale(-1.55) - 15)
    .attr('y2', yScale(-1.55) - 5);

  svg.append('line')
    .attr('id', 'electron')
    .attr('stroke', '#FFF')
    .attr('stroke-width', '2px')
    .attr('x1', widthD3 / 4 + 13)
    .attr('x2', widthD3 / 4 + 13)
    .attr('y1', yScale(-1.55) - 15)
    .attr('y2', yScale(-1.55) - 5);

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
    .text("Energy");

  svg.append("text")
    .attr('id', 'sigma-text')
    .attr("y", yScale(-1.55) - 20)
    .attr("x", 3 * widthD3 / 4)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("σ");

  svg.append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", yScale(-1) - 20)
    .attr("x", 3 * widthD3 / 4)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("σ*");
}

updateSplit = val => {
  svg = d3.selectAll('#d3-viz4');

  yScale = d3.scaleLinear()
    .domain([-4, 4])
    .range([heightD3 - 60, 30]);

  xScale = d3.scaleLinear()
    .domain([-500, 500])
    .range([30, widthD3 - 30]);

  svg.select('#sigmastar')
    .attr('y1', yScale(-1 + val))
    .attr('y2', yScale(-1 + val));

  svg.select('#sigma')
    .attr('y1', yScale(-1.25 - val))
    .attr('y2', yScale(-1.25 - val));

  svg.select('#sigma-text')
    .attr("y", yScale(-1.25 - val) - 20);

  svg.select('#sigmastar-text')
    .attr("y", yScale(-1 + val) - 20);

  svg.selectAll('#orbital-3s')
    .attr('y', yScale(-1 + val) - 21);

  svg.selectAll('#orbital-3p')
    .attr('y', yScale(-1.25 - val) - 21);

  svg.selectAll('#electron')
    .attr('y1', yScale(-1.25 - val) - 15)
    .attr('y2', yScale(-1.25 - val) - 5);
}

d3fourlevels = () => {
  heightD3 = 500,
    widthD3 = 500;

  svg = d3.selectAll('#d3-viz5')
    .attr('height', heightD3)
    .attr('width', widthD3)
    .attr('transform', 'translate(-60,0)');

  yScale = d3.scaleLinear()
    .domain([-50, 50])
    .range([heightD3 - 60, 30]);

  xScale = d3.scaleLinear()
    .domain([-500, 500])
    .range([30, widthD3 - 30]);

  let xAxis = d3.axisBottom()
    .scale(xScale)
    .tickValues([]);

  let yAxis = d3.axisLeft()
    .scale(yScale)
    .tickValues([]);

  svg.append('line')
    .attr('id', 'sigmastar')
    // .attr('transform', `translate()`)
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 2)
    .attr('x1', 58)
    .attr('y1', yScale(-10))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(-10));
  svg.append('line')
    .attr('id', 'sigmastar')
    // .attr('transform', `translate()`)
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 2)
    .attr('x1', 58)
    .attr('y1', yScale(-20))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(-20));
  svg.append('line')
    .attr('id', 'sigmastar')
    // .attr('transform', `translate()`)
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 2)
    .attr('x1', 58)
    .attr('y1', yScale(-30))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(-30));
  svg.append('line')
    .attr('id', 'sigmastar')
    // .attr('transform', `translate()`)
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 2)
    .attr('x1', 58)
    .attr('y1', yScale(-40))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(-40));

  svg.append('line')
    .attr('id', 'sigma')
    // .attr('transform', `translate()`)
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 2)
    .attr('x1', 58)
    .attr('y1', yScale(10))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(10));
  svg.append('line')
    .attr('id', 'sigma')
    // .attr('transform', `translate()`)
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 2)
    .attr('x1', 58)
    .attr('y1', yScale(20))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(20));
  svg.append('line')
    .attr('id', 'sigma')
    // .attr('transform', `translate()`)
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 2)
    .attr('x1', 58)
    .attr('y1', yScale(30))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(30));
  svg.append('line')
    .attr('id', 'sigma')
    // .attr('transform', `translate()`)
    .attr('stroke', '#EA9FA2')
    .attr('stroke-width', 2)
    .attr('x1', 58)
    .attr('y1', yScale(40))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(40));


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
    .text("Energy");

  svg.append("text")
    .attr('id', 'sigma-text')
    .attr("y", yScale(5))
    .attr("x", 3 * widthD3 / 4)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("σ*");

  svg.append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", yScale(-5))
    .attr("x", 3 * widthD3 / 4)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("σ");
}

updatefourlevels = (orbitalCount) => {
  d3.select('#d3-viz5').selectAll('#sigma').remove();
  d3.select('#d3-viz5').selectAll('#sigmastar').remove();

  yScalePlus = d3.scaleLinear()
    .domain([(orbitalCount + 2) * 10, 10])
    .range([heightD3 - 60, heightD3 / 2 + 15]);

  yScaleMinus = d3.scaleLinear()
    .domain([-10, -(orbitalCount + 2) * 10])
    .range([heightD3 / 2 - 45, 30]);

  for (let i = 1; i <= orbitalCount; i++) {
    d3.select('#d3-viz5')
      .append('line')
      .attr('id', 'sigma')
      .attr('stroke', '#EA9FA2')
      .attr('stroke-width', 2)
      .attr('x1', 58)
      .attr('y1', yScalePlus(i * 10))
      .attr('x2', widthD3 - 58)
      .attr('y2', yScalePlus(i * 10))
      .on('mouseover', function () {
        d3.select(this).attr('stroke-width', 4);
        // d3.select('#d3-viz5').selectAll('circle').attr('opacity', 0.2);

        d3.select('#d3-viz5')
          .append('line')
          .attr('class', 'electron')
          .attr('stroke-width', 4)
          .attr('stroke', colors.yellow)
          .attr('x1', widthD3 / 3)
          .attr('x2', widthD3 / 3)
          .attr('y1', yScalePlus(i * 10) - 10)
          .attr('y2', yScalePlus(i * 10) + 10);

        d3.select('#d3-viz5')
          .append('line')
          .attr('class', 'electron')
          .attr('stroke-width', 4)
          .attr('stroke', colors.yellow)
          .attr('x1', 2 * widthD3 / 3)
          .attr('x2', 2 * widthD3 / 3)
          .attr('y1', yScalePlus(i * 10) - 10)
          .attr('y2', yScalePlus(i * 10) + 10);

        d3.select('#d3-viz5')
          .append('text')
          .attr('id', 'text-label')
          .text("2 electrons in this level")
          .attr('fill', 'white')
          .attr('text-anchor', 'middle')
          .attr('transform', `translate(${widthD3/2},${heightD3/2})`);
      })
      .on('mouseout', function () {
        d3.select(this).attr('stroke-width', 2);
        // d3.select('#d3-viz5').selectAll('circle').attr('opacity', 1);
        d3.select('#d3-viz5').selectAll('.electron').remove();

        d3.select('#d3-viz5').select('#text-label').remove();
      });

    // d3.select('#d3-viz5')
    //   .append('circle')
    //   .attr('id', 'sigma')
    //   .attr('fill', colors.yellow)
    //   .attr('cx', widthD3 / 3)
    //   .attr('cy', yScalePlus(i * 10))
    //   .attr('r', 4);

    // d3.select('#d3-viz5')
    //   .append('circle')
    //   .attr('id', 'sigma')
    //   .attr('fill', colors.yellow)
    //   .attr('cx', 2 * widthD3 / 3)
    //   .attr('cy', yScalePlus(i * 10))
    //   .attr('r', 4);

    d3.select('#d3-viz5')
      .append('line')
      .attr('id', 'sigmastar')
      .attr('stroke', '#EA9FA2')
      .attr('stroke-width', 2)
      .attr('x1', 58)
      .attr('y1', yScaleMinus(-i * 10))
      .attr('x2', widthD3 - 58)
      .attr('y2', yScaleMinus(-i * 10))
      .on('mouseover', function () {
        d3.select(this).attr('stroke-width', 4);

        d3.select('#d3-viz5')
          .append('text')
          .attr('id', 'text-label')
          .text("0 electrons in this level")
          .attr('fill', 'white')
          .attr('text-anchor', 'middle')
          .attr('transform', `translate(${widthD3/2},${heightD3/2})`);
      })
      .on('mouseout', function () {
        d3.select(this).attr('stroke-width', 2);

        d3.select('#d3-viz5').select('#text-label').remove();
      });
  }
}

d3bands = () => {
  heightD3 = 500,
    widthD3 = 500;

  let svg = d3.selectAll('#d3-viz6')
    // .attr('height', heightD3)
    // .attr('width', widthD3)
    // .attr('viewBox', `0 0 ${widthD3} ${heightD3}`)
    .attr('transform', 'translate(-60,0)')
    .append('g')
    .attr('id', 'zoom-out')
    .attr('opacity', 1);

  svg.append('rect')
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('fill', '#121212');

  yScale = d3.scaleLinear()
    .domain([-2, 0])
    .range([heightD3 - 60, 30]);

  xScale = d3.scaleLinear()
    .domain([-500, 500])
    .range([30, widthD3 - 30]);

  let xAxis = d3.axisBottom()
    .scale(xScale)
    .tickValues([]);

  let yAxis = d3.axisLeft()
    .scale(yScale)
    .tickValues([]);

  d3.selectAll('#d3-viz6').append('g')
    .call(yAxis)
    .attr('transform', `translate(58,0)`)
    .attr('class', 'axis');

  d3.selectAll('#d3-viz6').append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 30)
    .attr("x", 0 - (heightD3 / 2))
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Energy");

  // svg.append('rect')
  //   .attr('x', 58)
  //   .attr('y', heightD3 / 2 - 45 - 150)
  //   .attr('width', widthD3 - 116)
  //   .attr('height', 150)
  //   .attr('fill', '#EA9FA2')
  //   .attr('opacity', 0.3);

  // svg.append('rect')
  //   .attr('x', 58)
  //   .attr('y', heightD3 / 2 + 15)
  //   .attr('width', widthD3 - 116)
  //   .attr('height', 150)
  //   .attr('fill', '#EA9FA2')
  //   .attr('opacity', 0.3);

  d3.selectAll('#d3-viz6').append("text")
    .attr('id', 'sigma-text')
    .attr("y", heightD3 / 2 - 5)
    .attr("x", 2 * widthD3 / 3)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("Valence Band");

  d3.selectAll('#d3-viz6').append("text")
    .attr('id', 'sigmastar-text')
    .attr("y", heightD3 / 2 - 15 - 20)
    .attr("x", 2 * widthD3 / 3)
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "start")
    .text("Conduction Band");

  let ryScale = d3.scaleLinear()
    .domain([0, 1])
    .range([heightD3 / 2 + 20, heightD3 / 2 + 160]);

  let rxScale = d3.scaleLinear()
    .domain([0, 1])
    .range([90, widthD3 - 90]);

  let numLines = 100;

  let yScalePlus = d3.scaleLinear()
    .domain([(numLines + 2) * 10, 10])
    .range([heightD3 - 60, heightD3 / 2 + 15]);

  let yScaleMinus = d3.scaleLinear()
    .domain([-10, -(numLines + 2) * 10])
    .range([heightD3 / 2 - 45, 30]);

  for (let i = 1; i <= numLines; i++) {
    d3.selectAll('#d3-viz6')
      .append('line')
      .attr('id', 'sigma')
      .attr('stroke', '#EA9FA2')
      .attr('stroke-width', 1)
      .attr('x1', 58)
      .attr('y1', yScalePlus(i * 10))
      .attr('x2', widthD3 - 58)
      .attr('y2', yScalePlus(i * 10));

    d3.selectAll('#d3-viz6')
      .append('line')
      .attr('id', 'sigmastar')
      .attr('stroke', '#EA9FA2')
      .attr('stroke-width', 1)
      .attr('x1', 58)
      .attr('y1', yScaleMinus(-i * 10))
      .attr('x2', widthD3 - 58)
      .attr('y2', yScaleMinus(-i * 10));

      d3.selectAll('#d3-viz6')
        .append('circle')
        .attr('id', 'electron')
        .attr('fill', colors.yellow)
        .attr('cx', function() {
          let x = Math.random()*heightD3;
          while(x < 58 || x > widthD3-58) {
            x = Math.random()*heightD3;
          }
          return x;
        })
        .attr('cy', yScalePlus(Math.random() * numLines * 10))
        .attr('r', 5);
  }

  $('#zoom').anythingZoomer({
    smallArea: 'small',
    clone: true,
    edge: 0,
    switchEvent: 'none'
  });

}

// d3bandszoomed = () => {
//   heightD3 = 500,
//     widthD3 = 500;

//   let svg = d3.selectAll('#d3-viz6')
//     // .attr('height', heightD3)
//     // .attr('width', widthD3)
//     .attr('transform', 'translate(-60,0)')
//     .append('g')
//     .attr('id', 'zoom-in')
//     .attr('opacity', 0);

//   yScalePlus = d3.scaleLinear()
//     .domain([(5) * 10, 10])
//     .range([heightD3 - 60, heightD3 / 2 + 15]);

//   yScaleMinus = d3.scaleLinear()
//     .domain([-10, -(5) * 10])
//     .range([heightD3 / 2 - 45, 30]);

//   yScale = d3.scaleLinear()
//     .domain([-2, 0])
//     .range([heightD3 - 60, 30]);

//   xScale = d3.scaleLinear()
//     .domain([-500, 500])
//     .range([30, widthD3 - 30]);

//   let xAxis = d3.axisBottom()
//     .scale(xScale)
//     .tickValues([]);

//   let yAxis = d3.axisLeft()
//     .scale(yScale)
//     .tickValues([]);

//   for (let i = 1; i <= 4; i++) {
//     svg
//       .append('line')
//       .attr('id', 'sigma')
//       .attr('stroke', '#EA9FA2')
//       .attr('stroke-width', 2)
//       .attr('x1', 58)
//       .attr('y1', yScalePlus(i * 10))
//       .attr('x2', widthD3 - 58)
//       .attr('y2', yScalePlus(i * 10))
//       .on('mouseover', function () {
//         d3.select(this).attr('stroke-width', 4);
//         d3.select('#d3-viz5').selectAll('circle').attr('opacity', 0.2);

//         svg
//           .append('line')
//           .attr('class', 'electron')
//           .attr('stroke-width', 4)
//           .attr('stroke', colors.yellow)
//           .attr('x1', widthD3 / 3)
//           .attr('x2', widthD3 / 3)
//           .attr('y1', yScalePlus(i * 10) - 10)
//           .attr('y2', yScalePlus(i * 10) + 10);

//         svg
//           .append('line')
//           .attr('class', 'electron')
//           .attr('stroke-width', 4)
//           .attr('stroke', colors.yellow)
//           .attr('x1', 2 * widthD3 / 3)
//           .attr('x2', 2 * widthD3 / 3)
//           .attr('y1', yScalePlus(i * 10) - 10)
//           .attr('y2', yScalePlus(i * 10) + 10);
//       }).on('mouseout', function () {
//         d3.select(this).attr('stroke-width', 2);
//         svg.selectAll('circle').attr('opacity', 1);
//         svg.selectAll('.electron').remove();
//       });

//     svg
//       .append('circle')
//       .attr('id', 'sigma')
//       .attr('fill', colors.yellow)
//       .attr('cx', widthD3 / 3)
//       .attr('cy', yScalePlus(i * 10))
//       .attr('r', 4);

//     svg
//       .append('circle')
//       .attr('id', 'sigma')
//       .attr('fill', colors.yellow)
//       .attr('cx', 2 * widthD3 / 3)
//       .attr('cy', yScalePlus(i * 10))
//       .attr('r', 4);

//     svg
//       .append('line')
//       .attr('id', 'sigmastar')
//       .attr('stroke', '#EA9FA2')
//       .attr('stroke-width', 2)
//       .attr('x1', 58)
//       .attr('y1', yScaleMinus(-i * 10))
//       .attr('x2', widthD3 - 58)
//       .attr('y2', yScaleMinus(-i * 10));
//   }
// }

// toggleZoom = () => {
//   var val = document.querySelector('#zoom-check');

//   zoomed = (val.checked);

//   d3.selectAll('#d3-viz6')
//     .select('#zoom-in')
//     .attr('opacity', int(zoomed));

//   d3.selectAll('#d3-viz6')
//     .select('#zoom-out')
//     .attr('opacity', int(!zoomed));
// }