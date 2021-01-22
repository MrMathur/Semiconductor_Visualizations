colors = {
  green: '#6ECF7F',
  yellow: '#FFF7AE',
  red: '#EA9FA2'
}

valuesToShow = {
  "te": true,
  "be": true,
  "eer": true,
  "ppr": true,
}

Unn = [];
Uee = [];
Ubo = [];
Te = [];

for (let i = 1; i < 26; i += 0.5) {
  Unn.push({
    x: i,
    y: 100 / i
  });

  Uee.push({
    x: i,
    y: 100 / (Math.sqrt(i * i + 1))
  });

  let a = -2 / i * (1 - (1 + i) * Math.exp(-i));
  let b = -2 * (1 + i) * Math.exp(-i);
  let s = Math.exp(-i) * (1 + i + i * i / 3);
  let e = 1 + (a + b) / (1 + s);

  Ubo.push({
    x: i,
    y: 100 * e
  })

  
  Te = Ubo;
}

d3onload = () => {
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

  // svg.append('g')
  //   .call(xAxis)
  //   .attr('transform', `translate(0,0)`)
  //   .attr('class', 'axis');

  // svg.append('line')
  //   // .attr('transform', `translate()`)
  //   .attr('stroke', '#EA9FA2')
  //   .attr('stroke-width', 2)
  //   .attr('x1', 58)
  //   .attr('y1', yScale(-1.51))
  //   .attr('x2', widthD3 - 58)
  //   .attr('y2', yScale(-1.51));

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
    .attr('stroke', '#FFF7AE')
    .attr('stroke-width', 2)
    .attr('x1', 58)
    .attr('y1', yScale(-13.6))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(-13.6));

  svg.append("text")
    .attr("transform",
      `translate(${(widthD3 / 2) + 50},${(yScale(-13.6) - 10)} )`)
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("n = 1");

  svg.append("text")
    .attr("transform",
      `translate(${(widthD3 / 2)+ 50},${(yScale(-3.4) - 10)} )`)
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("n = 2");

  // svg.append("text")
  //   .attr("transform",
  //     `translate(${(widthD3 / 2)+ 50},${(yScale(-1.51) - 10)} )`)
  //   .attr('class', 'label')
  //   .style("text-anchor", "middle")
  //   .text("2p Orbital");

  svg.append("text")
    .attr("transform",
      `translate(${56},${(yScale(-13.6) - 10)} )`)
    .attr('class', 'label')
    .style("text-anchor", "end")
    .text("-13.6eV");

  svg.append("text")
    .attr("transform",
      `translate(${56},${(yScale(-3.4) - 10)} )`)
    .attr('class', 'label')
    .style("text-anchor", "end")
    .text("-3.4eV");

  // svg.append("text")
  //   .attr("transform",
  //     `translate(${56},${(yScale(-1.51) - 10)} )`)
  //   .attr('class', 'label')
  //   .style("text-anchor", "end")
  //   .text("-1.51eV");

  svg.append('rect')
    .attr('fill', 'none')
    .attr('stroke', '#FFF7AE')
    .attr('stroke-width', 2)
    .attr('x', widthD3 / 4)
    .attr('y', yScale(-13.6) - 31)
    .attr('width', 30)
    .attr('height', 30);
  svg.append('rect')
    .attr('fill', 'none')
    .attr('stroke', '#6ECF7F')
    .attr('stroke-width', 2)
    .attr('x', widthD3 / 4 + 30)
    .attr('y', yScale(-3.4) - 31)
    .attr('width', 30)
    .attr('height', 30);
  svg.append('rect')
    .attr('fill', 'none')
    .attr('stroke', '#6ECF7F')
    .attr('stroke-width', 2)
    .attr('x', widthD3 / 4 + 60)
    .attr('y', yScale(-3.4) - 31)
    .attr('width', 30)
    .attr('height', 30);
  svg.append('rect')
    .attr('fill', 'none')
    .attr('stroke', '#6ECF7F')
    .attr('stroke-width', 2)
    .attr('x', widthD3 / 4 - 30)
    .attr('y', yScale(-3.4) - 31)
    .attr('width', 30)
    .attr('height', 30);
  svg.append('rect')
    .attr('fill', 'none')
    .attr('stroke', '#6ECF7F')
    .attr('stroke-width', 2)
    .attr('x', widthD3 / 4)
    .attr('y', yScale(-3.4) - 31)
    .attr('width', 30)
    .attr('height', 30);
  // svg.append('rect')
  //   .attr('fill', 'none')
  //   .attr('stroke', '#EA9FA2')
  //   .attr('stroke-width', 2)
  //   .attr('x', widthD3 / 4)
  //   .attr('y', yScale(-1.51) - 31)
  //   .attr('width', 30)
  //   .attr('height', 30);
  // svg.append('rect')
  //   .attr('fill', 'none')
  //   .attr('stroke', '#EA9FA2')
  //   .attr('stroke-width', 2)
  //   .attr('x', widthD3 / 4 + 30)
  //   .attr('y', yScale(-1.51) - 31)
  //   .attr('width', 30)
  //   .attr('height', 30);
  // svg.append('rect')
  //   .attr('fill', 'none')
  //   .attr('stroke', '#EA9FA2')
  //   .attr('stroke-width', 2)
  //   .attr('x', widthD3 / 4 - 30)
  //   .attr('y', yScale(-1.51) - 31)
  //   .attr('width', 30)
  //   .attr('height', 30);

  svg.append('line')
    .attr('id', 'electron')
    .attr('stroke', '#FFF7AE')
    .attr('stroke-width', '2px')
    .attr('x1', widthD3 / 4 + 15)
    .attr('x2', widthD3 / 4 + 15)
    .attr('y1', yScale(-13.6) - 25)
    .attr('y2', yScale(-13.6) - 5);

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

  // svg.append('rect')
  //   .attr('id', 'energy-rect')
  //   .attr('x', widthD3 / 2)
  //   .attr('y', heightD3 / 2)
  //   .attr('width', 30)
  //   .attr('height', barYScale(50))
  //   .attr('fill', 'white');

  // svg.append('text')
  //   .attr('id', 'energy-text')
  //   .attr('x', widthD3 / 2)
  //   .attr('y', heightD3 / 2 + barYScale(50) + 20)
  //   .text('-13.6eV')
  //   .attr('fill', 'white');

}

changeD3 = (val) => {
  if (val == -1.51 && con == false) {
    let r = [-30, 0, 30];
    let i = Math.floor(Math.random() * r.length)
    x = widthD3 / 4 + 15 + r[i];
    con = true;
  } else if (val != -1.51) {
    x = widthD3 / 4 + 15;
    con = false;
  }

  svg.select('#electron')
    .transition()
    .duration(100)
    .attr('stroke', '#FFF7AE')
    .attr('stroke-width', '4px')
    .attr('x1', x)
    .attr('x2', x)
    .attr('y1', yScale(val) - 25)
    .attr('y2', yScale(val) - 5);
}

reset = () => {
  svg.select('#electron')
    .transition()
    .duration(100)
    .attr('stroke', '#FFF7AE')
    .attr('stroke-width', '2px');
}

d3onload2 = () => {
  heightD3 = 400,
    widthD3 = 500;

  svg2 = d3.selectAll('#d3-viz2')
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

  let yAxis2 = d3.axisRight()
    .scale(yScale)
    .tickValues([]);


  svg2.append('line')
    .attr('stroke', colors.green)
    .attr('stroke-width', 2)
    .attr('x1', 58)
    .attr('y1', yScale(-3.4))
    .attr('x2', widthD3 / 2 - 29)
    .attr('y2', yScale(-3.4));

  svg2.append('line')
    .attr('stroke', colors.yellow)
    .attr('stroke-width', 2)
    .attr('x1', 58)
    .attr('y1', yScale(-13.6))
    .attr('x2', widthD3 / 2 - 29)
    .attr('y2', yScale(-13.6));

  svg2.append('line')
    .attr('stroke', colors.green)
    .attr('stroke-width', 2)
    .attr('x1', widthD3 / 2 + 29)
    .attr('y1', yScale(-3.4))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(-3.4));

  svg2.append('line')
    .attr('stroke', colors.yellow)
    .attr('stroke-width', 2)
    .attr('x1', widthD3 / 2 + 29)
    .attr('y1', yScale(-13.6))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(-13.6));

  svg2.append("text")
    .attr("transform",
      `translate(${56},${(yScale(-13.6) - 10)} )`)
    .attr('class', 'label')
    .style("text-anchor", "end")
    .text("1s");

  svg2.append("text")
    .attr("transform",
      `translate(${56},${(yScale(-3.4) - 10)} )`)
    .attr('class', 'label')
    .style("text-anchor", "end")
    .text("2s");

  svg2.append("text")
    .attr("transform",
      `translate(${widthD3 - 36},${(yScale(-13.6) - 10)} )`)
    .attr('class', 'label')
    .text("1s");

  svg2.append("text")
    .attr("transform",
      `translate(${widthD3/4 - 15},${(yScale(-3.4) - 40)} )`)
    .attr('class', 'label')
    .style("text-anchor", "end")
    .text("2s");

  svg2.append("text")
    .attr("transform",
      `translate(${widthD3/4 + 45},${(yScale(-3.4) - 40)} )`)
    .attr('class', 'label')
    .text("2p");

  svg2.append("text")
    .attr("transform",
      `translate(${3*widthD3/4 + 15},${(yScale(-3.4) - 40)} )`)
    .attr('class', 'label')
    .text("2s");

  svg2.append("text")
    .attr("transform",
      `translate(${3*widthD3/4 - 45},${(yScale(-3.4) - 40)} )`)
    .attr('class', 'label')
    .text("2p");

  svg2.append('rect')
    .attr('fill', 'none')
    .attr('stroke', colors.yellow)
    .attr('stroke-width', 2)
    .attr('x', widthD3 / 4)
    .attr('y', yScale(-13.6) - 31)
    .attr('width', 30)
    .attr('height', 30);
  svg2.append('rect')
    .attr('fill', 'none')
    .attr('stroke', colors.green)
    .attr('stroke-width', 2)
    .attr('x', widthD3 / 4)
    .attr('y', yScale(-3.4) - 31)
    .attr('width', 30)
    .attr('height', 30);
  svg2.append('rect')
    .attr('fill', 'none')
    .attr('stroke', colors.green)
    .attr('stroke-width', 2)
    .attr('x', widthD3 / 4 - 30)
    .attr('y', yScale(-3.4) - 31)
    .attr('width', 30)
    .attr('height', 30);
  svg2.append('rect')
    .attr('fill', 'none')
    .attr('stroke', colors.green)
    .attr('stroke-width', 2)
    .attr('x', widthD3 / 4 + 30)
    .attr('y', yScale(-3.4) - 31)
    .attr('width', 30)
    .attr('height', 30);
  svg2.append('rect')
    .attr('fill', 'none')
    .attr('stroke', colors.green)
    .attr('stroke-width', 2)
    .attr('x', widthD3 / 4 + 60)
    .attr('y', yScale(-3.4) - 31)
    .attr('width', 30)
    .attr('height', 30);

  svg2.append('line')
    .attr('id', 'electron')
    .attr('stroke', '#FFF7AE')
    .attr('stroke-width', '2px')
    .attr('x1', widthD3 / 4 + 15)
    .attr('x2', widthD3 / 4 + 15)
    .attr('y1', yScale(-13.6) - 25)
    .attr('y2', yScale(-13.6) - 5);

  svg2.append('g')
    .call(yAxis)
    .attr('transform', `translate(58,0)`)
    .attr('class', 'axis');

  svg2.append('g')
    .call(yAxis2)
    .attr('transform', `translate(${widthD3-58},0)`)
    .attr('class', 'axis');

  svg2.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 30)
    .attr("x", 0 - (heightD3 / 2))
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Energy");

  svg2.append("text")
    .attr("transform", "rotate(90)")
    .attr("y", -widthD3 + 30)
    .attr("x", 0 + (heightD3 / 2))
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Energy");

  svg2.append('rect')
    .attr('fill', 'none')
    .attr('stroke', colors.yellow)
    .attr('stroke-width', 2)
    .attr('x', 3 * widthD3 / 4 - 30)
    .attr('y', yScale(-13.6) - 31)
    .attr('width', 30)
    .attr('height', 30);
  svg2.append('rect')
    .attr('fill', 'none')
    .attr('stroke-width', 2)
    .attr('stroke', colors.green)
    .attr('x', 3 * widthD3 / 4 - 30)
    .attr('y', yScale(-3.4) - 31)
    .attr('width', 30)
    .attr('height', 30);
  svg2.append('rect')
    .attr('fill', 'none')
    .attr('stroke-width', 2)
    .attr('stroke', colors.green)
    .attr('x', 3 * widthD3 / 4 - 60)
    .attr('y', yScale(-3.4) - 31)
    .attr('width', 30)
    .attr('height', 30);
  svg2.append('rect')
    .attr('fill', 'none')
    .attr('stroke-width', 2)
    .attr('stroke', colors.green)
    .attr('x', 3 * widthD3 / 4 - 90)
    .attr('y', yScale(-3.4) - 31)
    .attr('width', 30)
    .attr('height', 30);
  svg2.append('rect')
    .attr('fill', 'none')
    .attr('stroke-width', 2)
    .attr('stroke', colors.green)
    .attr('x', 3 * widthD3 / 4)
    .attr('y', yScale(-3.4) - 31)
    .attr('width', 30)
    .attr('height', 30);

  svg2.append('line')
    .attr('id', 'electron2')
    .attr('stroke', '#FFF7AE')
    .attr('stroke-width', '2px')
    .attr('x1', 3 * widthD3 / 4 - 15)
    .attr('x2', 3 * widthD3 / 4 - 15)
    .attr('y1', yScale(-13.6) - 25)
    .attr('y2', yScale(-13.6) - 5);

}

d3onload5 = () => {
  heightD3 = 400,
    widthD3 = 500;

  svg5 = d3.selectAll('#d3-viz5')
    .attr('height', heightD3)
    .attr('width', widthD3)
    .attr('transform', 'translate(-60,0)');


  yScale = d3.scaleLinear()
    .domain([-14, 0])
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

  svg5.append('line')
    .attr('id', 'down_2p')
    .attr('stroke', colors.red)
    .attr('stroke-width', 2)
    .attr('x1', 58)
    .attr('y1', yScale(-1.51 + 1.6))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(-1.51 + 1.6));

  svg5.append('line')
    .attr('id', 'up_2p')
    .attr('stroke', colors.red)
    .attr('stroke-width', 2)
    .attr('x1', 58)
    .attr('y1', yScale(-1.51 - 1.6))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(-1.51 - 1.6));

  svg5.append('line')
    .attr('id', 'down_1s')
    .attr('stroke-width', 2)
    .attr('stroke', colors.yellow)
    .attr('x1', 58)
    .attr('y1', yScale(-13.6 + 0.4))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(-13.6 + 0.4));

  svg5.append('line')
    .attr('id', 'up_1s')
    .attr('stroke', colors.yellow)
    .attr('stroke-width', 2)
    .attr('x1', 58)
    .attr('y1', yScale(-13.6 - 0.4))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(-13.6 - 0.4));

  svg5.append("text")
    .attr("transform",
      `translate(${56},${(yScale(-13.6) + 5)} )`)
    .attr('class', 'label')
    .style("text-anchor", "end")
    .text("1s");

  svg5.append("text")
    .attr("transform",
      `translate(${56},${(yScale(-1.51) + 5)} )`)
    .attr('class', 'label')
    .style("text-anchor", "end")
    .text("2s, 2p");

  svg5.append('g')
    .call(yAxis)
    .attr('transform', `translate(58,0)`)
    .attr('class', 'axis');

  svg5.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 30)
    .attr("x", 0 - (heightD3 / 2))
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Energy");



  svg5.append('line')
    .attr('id', 'arrow_2p')
    .attr('stroke', colors.red)
    .attr('stroke-width', 2)
    .attr('x1', 3 * widthD3 / 4 - 20)
    .attr('y1', yScale(-1.51 + 0.8))
    .attr('x2', 3 * widthD3 / 4 - 20)
    .attr('y2', yScale(-1.51 - 0.8));

  svg5.append('line')
    .attr('id', 'arrow_2p_left_up')
    .attr('stroke', colors.red)
    .attr('stroke-width', 1)
    .attr('x1', 3 * widthD3 / 4 - 20)
    .attr('y1', yScale(-13.6 + 0.8))
    .attr('x2', 3 * widthD3 / 4 - 20 - 3)
    .attr('y2', yScale(-13.6 + 0.8) + 3);

  svg5.append('line')
    .attr('id', 'arrow_2p_right_up')
    .attr('stroke', colors.red)
    .attr('stroke-width', 1)
    .attr('x1', 3 * widthD3 / 4 - 20)
    .attr('y1', yScale(-13.6 + 0.8))
    .attr('x2', 3 * widthD3 / 4 - 20 + 3)
    .attr('y2', yScale(-13.6 + 0.8) + 3);

  svg5.append('line')
    .attr('id', 'arrow_2p_left_down')
    .attr('stroke', colors.red)
    .attr('stroke-width', 1)
    .attr('x1', 3 * widthD3 / 4 - 20)
    .attr('y1', yScale(-13.6 - 0.8))
    .attr('x2', 3 * widthD3 / 4 - 20 - 3)
    .attr('y2', yScale(-13.6 - 0.8) - 3);

  svg5.append('line')
    .attr('id', 'arrow_2p_right_down')
    .attr('stroke', colors.red)
    .attr('stroke-width', 1)
    .attr('x1', 3 * widthD3 / 4 - 20)
    .attr('y1', yScale(-13.6 - 0.8))
    .attr('x2', 3 * widthD3 / 4 - 20 + 3)
    .attr('y2', yScale(-13.6 - 0.8) - 3);

  svg5.append('line')
    .attr('id', 'arrow_1s')
    .attr('stroke', colors.yellow)
    .attr('stroke-width', 2)
    .attr('x1', 3 * widthD3 / 4 + 20)
    .attr('y1', yScale(-13.6 + 0.8))
    .attr('x2', 3 * widthD3 / 4 + 20)
    .attr('y2', yScale(-13.6 - 0.8));

  svg5.append('line')
    .attr('id', 'arrow_1s_left_up')
    .attr('stroke', colors.yellow)
    .attr('stroke-width', 1)
    .attr('x1', 3 * widthD3 / 4 + 20)
    .attr('y1', yScale(-13.6 + 0.8))
    .attr('x2', 3 * widthD3 / 4 + 20 - 3)
    .attr('y2', yScale(-13.6 + 0.8) + 3);

  svg5.append('line')
    .attr('id', 'arrow_1s_right_up')
    .attr('stroke', colors.yellow)
    .attr('stroke-width', 1)
    .attr('x1', 3 * widthD3 / 4 + 20)
    .attr('y1', yScale(-13.6 + 0.8))
    .attr('x2', 3 * widthD3 / 4 + 20 + 3)
    .attr('y2', yScale(-13.6 + 0.8) + 3);

  svg5.append('line')
    .attr('id', 'arrow_1s_left_down')
    .attr('stroke', colors.yellow)
    .attr('stroke-width', 1)
    .attr('x1', 3 * widthD3 / 4 + 20)
    .attr('y1', yScale(-13.6 - 0.8))
    .attr('x2', 3 * widthD3 / 4 + 20 - 3)
    .attr('y2', yScale(-13.6 - 0.8) - 3);

  svg5.append('line')
    .attr('id', 'arrow_1s_right_down')
    .attr('stroke', colors.yellow)
    .attr('stroke-width', 1)
    .attr('x1', 3 * widthD3 / 4 + 20)
    .attr('y1', yScale(-13.6 - 0.8))
    .attr('x2', 3 * widthD3 / 4 + 20 + 3)
    .attr('y2', yScale(-13.6 - 0.8) - 3);
}

d3onload5and5 = () => {
  heightD3 = 500,
    widthD3 = 400;

  svg5and5 = d3.selectAll('#d3-viz5-5')
    .attr('height', heightD3)
    .attr('width', widthD3)
    .attr('transform', 'translate(-60,0)');

  let yScale = d3.scaleLinear()
    .domain([0, 120])
    .range([heightD3 - 60, 30]);

  let xScale = d3.scaleLinear()
    .domain([0, 25])
    .range([30, widthD3 - 30]);

  let xAxis = d3.axisBottom()
    .scale(xScale)
    .tickValues([]);

  let yAxis = d3.axisLeft()
    .scale(yScale)
    .tickValues([]);

  svg5and5.append('g')
    .call(yAxis)
    .attr('transform', `translate(30,0)`)
    .attr('class', 'axis');

  svg5and5.append('g')
    .call(xAxis)
    .attr('transform', `translate(0,${heightD3-58})`)
    .attr('class', 'axis');

  svg5and5
    .append('path')
    .datum(Unn)
    .attr('class', 'unn')
    .attr("fill", "none")
    .attr("stroke", colors.red)
    .attr("stroke-width", 1)
    .attr("d", d3.line()
      .x(function (d) {
        return xScale(d.x)
      })
      .y(function (d) {
        return yScale(d.y)
      })
    );

  svg5and5
    .append('path')
    .datum(Uee)
    .attr('class', 'uee')
    .attr("fill", "none")
    .attr("stroke", colors.green)
    .attr("stroke-width", 1)
    .attr("d", d3.line()
      .x(function (d) {
        return xScale(d.x)
      })
      .y(function (d) {
        return yScale(d.y)
      })
    );

  svg5and5
    .append('path')
    .datum(Ubo)
    .attr('class', 'ubo')
    .attr("fill", "none")
    .attr("stroke", colors.yellow)
    .attr("stroke-width", 1)
    .attr("d", d3.line()
      .x(function (d) {
        return xScale(d.x)
      })
      .y(function (d) {
        return yScale(d.y)
      })
    );

  svg5and5
    .append('path')
    .datum(Te)
    .attr('class', 'te')
    .attr("fill", "none")
    .attr("stroke", "white")
    .attr("stroke-width", 2)
    .attr("d", d3.line()
      .x(function (d) {
        return xScale(d.x)
      })
      .y(function (d) {
        return yScale(d.y)
      })
    );

  svg5and5.append('line')
    .attr('id', 'currentpos')
    .attr('x1', xScale(20))
    .attr('x2', xScale(20))
    .attr('y1', yScale(200))
    .attr('y2', yScale(0))
    .attr('stroke', 'white');

  svg5and5.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", -0)
    .attr("x", 0 - (heightD3 / 2))
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Energy");

  svg5and5.append("text")
    .attr("y", yScale(-5))
    .attr("x", (widthD3 / 2))
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Distance between Atoms");
}

update5 = dist => {

  w = d3.scaleLinear()
    .domain([0, 1000])
    .range([1000, 0]);

  d3.selectAll('#up_1s')
    .attr('x1', 58)
    .attr('y1', yScale(-13.6 - (800 - dist) / 2000))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(-13.6 - (800 - dist) / 2000));

  d3.selectAll('#down_1s')
    .attr('x1', 58)
    .attr('y1', yScale(-13.6 + (800 - dist) / 2000))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(-13.6 + (800 - dist) / 2000));

  d3.selectAll('#up_2p')
    .attr('x1', 58)
    .attr('y1', yScale(-1.51 - (800 - dist) / 500))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(-1.51 - (800 - dist) / 500));

  d3.selectAll('#down_2p')
    .attr('x1', 58)
    .attr('y1', yScale(-1.51 + (800 - dist) / 500))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(-1.51 + (800 - dist) / 500));

  d3.selectAll('#up_2s')
    .attr('x1', 58)
    .attr('y1', yScale(-3.4 - (800 - dist) / 1000))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(-3.4 - (800 - dist) / 1000));

  d3.selectAll('#down_2s')
    .attr('x1', 58)
    .attr('y1', yScale(-3.4 + (800 - dist) / 1000))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(-3.4 + (800 - dist) / 1000));

  d3.selectAll('.orb_rects')
    .remove();

  svg5.append('rect')
    .attr('class', 'orb_rects')
    .attr('x', widthD3 / 2 - 5)
    .attr('y', yScale(-1.51 + (800 - dist) / 500) - 11)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', 'none')
    .attr('stroke', colors.red)
    .attr('stroke-width', 2);

  svg5.append('rect')
    .attr('class', 'orb_rects')
    .attr('x', widthD3 / 2 + 6)
    .attr('y', yScale(-1.51 + (800 - dist) / 500) - 11)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', 'none')
    .attr('stroke', colors.red)
    .attr('stroke-width', 2);

  svg5.append('rect')
    .attr('class', 'orb_rects')
    .attr('x', widthD3 / 2 - 16)
    .attr('y', yScale(-1.51 + (800 - dist) / 500) - 11)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', 'none')
    .attr('stroke', colors.red)
    .attr('stroke-width', 2);

  svg5.append('rect')
    .attr('class', 'orb_rects')
    .attr('x', widthD3 / 2 + 17)
    .attr('y', yScale(-1.51 + (800 - dist) / 500) - 11)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', 'none')
    .attr('stroke', colors.red)
    .attr('stroke-width', 2);

  svg5.append('rect')
    .attr('class', 'orb_rects')
    .attr('x', widthD3 / 2 - 5)
    .attr('y', yScale(-1.51 - (800 - dist) / 500))
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', 'none')
    .attr('stroke', colors.red)
    .attr('stroke-width', 2);

  svg5.append('rect')
    .attr('class', 'orb_rects')
    .attr('x', widthD3 / 2 + 6)
    .attr('y', yScale(-1.51 - (800 - dist) / 500))
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', 'none')
    .attr('stroke', colors.red)
    .attr('stroke-width', 2);

  svg5.append('rect')
    .attr('class', 'orb_rects')
    .attr('x', widthD3 / 2 + 17)
    .attr('y', yScale(-1.51 - (800 - dist) / 500))
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', 'none')
    .attr('stroke', colors.red)
    .attr('stroke-width', 2);

  svg5.append('rect')
    .attr('class', 'orb_rects')
    .attr('x', widthD3 / 2 - 16)
    .attr('y', yScale(-1.51 - (800 - dist) / 500))
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', 'none')
    .attr('stroke', colors.red)
    .attr('stroke-width', 2);

  svg5.append('rect')
    .attr('class', 'orb_rects')
    .attr('x', widthD3 / 2 - 15)
    .attr('y', yScale(-13.6 - (800 - dist) / 2000))
    .attr('width', 30)
    .attr('height', 30)
    .attr('fill', 'none')
    .attr('stroke', colors.yellow)
    .attr('stroke-width', 2);

  svg5.append('rect')
    .attr('class', 'orb_rects')
    .attr('x', widthD3 / 2 - 15)
    .attr('y', yScale(-13.6 + (800 - dist) / 2000) - 31)
    .attr('width', 30)
    .attr('height', 30)
    .attr('fill', 'none')
    .attr('stroke', colors.yellow)
    .attr('stroke-width', 2);

  svg5.append('line')
    .attr('class', 'orb_rects')
    .attr('x1', widthD3 / 2 - 4)
    .attr('x2', widthD3 / 2 - 4)
    .attr('y1', yScale(-13.6 - (800 - dist) / 2000) + 5)
    .attr('y2', yScale(-13.6 - (800 - dist) / 2000) + 25)
    .attr('stroke', '#FFF7AE')
    .attr('stroke-width', '2px');

  svg5.append('line')
    .attr('class', 'orb_rects')
    .attr('x1', widthD3 / 2 + 4)
    .attr('x2', widthD3 / 2 + 4)
    .attr('y1', yScale(-13.6 - (800 - dist) / 2000) + 5)
    .attr('y2', yScale(-13.6 - (800 - dist) / 2000) + 25)
    .attr('stroke', '#FFF7AE')
    .attr('stroke-width', '2px');

  svg5.select('#arrow_1s')
    .attr('y1', yScale(-13.6 + (800 - dist) / 2000))
    .attr('y2', yScale(-13.6 - (800 - dist) / 2000));

  svg5.select('#arrow_2s')
    .attr('y1', yScale(-3.4 + (800 - dist) / 1000))
    .attr('y2', yScale(-3.4 - (800 - dist) / 1000));

  svg5.select('#arrow_2p')
    .attr('y1', yScale(-1.51 + (800 - dist) / 500))
    .attr('y2', yScale(-1.51 - (800 - dist) / 500));

  svg5.select('#arrow_1s_left_up')
    .attr('y1', yScale(-13.6 + (800 - dist) / 2000))
    .attr('y2', yScale(-13.6 + (800 - dist) / 2000) + 3);

  svg5.select('#arrow_1s_right_up')
    .attr('y1', yScale(-13.6 + (800 - dist) / 2000))
    .attr('y2', yScale(-13.6 + (800 - dist) / 2000) + 3);

  svg5.select('#arrow_1s_left_down')
    .attr('y1', yScale(-13.6 - (800 - dist) / 2000))
    .attr('y2', yScale(-13.6 - (800 - dist) / 2000) - 3);

  svg5.select('#arrow_1s_right_down')
    .attr('y1', yScale(-13.6 - (800 - dist) / 2000))
    .attr('y2', yScale(-13.6 - (800 - dist) / 2000) - 3);

  svg5.select('#arrow_2s_left_up')
    .attr('y1', yScale(-3.4 + (800 - dist) / 1000))
    .attr('y2', yScale(-3.4 + (800 - dist) / 1000) + 3);

  svg5.select('#arrow_2s_right_up')
    .attr('y1', yScale(-3.4 + (800 - dist) / 1000))
    .attr('y2', yScale(-3.4 + (800 - dist) / 1000) + 3);

  svg5.select('#arrow_2s_left_down')
    .attr('y1', yScale(-3.4 - (800 - dist) / 1000))
    .attr('y2', yScale(-3.4 - (800 - dist) / 1000) - 3);

  svg5.select('#arrow_2s_right_down')
    .attr('y1', yScale(-3.4 - (800 - dist) / 1000))
    .attr('y2', yScale(-3.4 - (800 - dist) / 1000) - 3);

  svg5.select('#arrow_2p_left_up')
    .attr('y1', yScale(-1.51 + (800 - dist) / 500))
    .attr('y2', yScale(-1.51 + (800 - dist) / 500) + 3);

  svg5.select('#arrow_2p_right_up')
    .attr('y1', yScale(-1.51 + (800 - dist) / 500))
    .attr('y2', yScale(-1.51 + (800 - dist) / 500) + 3);

  svg5.select('#arrow_2p_left_down')
    .attr('y1', yScale(-1.51 - (800 - dist) / 500))
    .attr('y2', yScale(-1.51 - (800 - dist) / 500) - 3);

  svg5.select('#arrow_2p_right_down')
    .attr('y1', yScale(-1.51 - (800 - dist) / 500))
    .attr('y2', yScale(-1.51 - (800 - dist) / 500) - 3);
}

update5and5 = dist => {

  let boxes = document.querySelectorAll('input');
  
  for (let box of boxes) {
    valuesToShow[box.value] = box.checked;
  }

  Te = [];
  for (let i = 1; i < 26; i += 0.5) {
    let te = {
      x: i,
      y: 0
    };
    if (valuesToShow["ppr"]) {
      let ppr = Unn.find(d => d.x == i);
      te.y += ppr.y;
    }

    if (valuesToShow["be"]) {
      let ubo = Ubo.find(d => d.x == i);
      te.y += ubo.y;
    }

    if (valuesToShow["eer"]) {
      let uee = Uee.find(d => d.x == i);
      te.y += uee.y;
    }

    Te.push(te);
  }

  w = d3.scaleLinear()
    .domain([0, 700])
    .range([0, 10]);

    let yScale = d3.scaleLinear()
    .domain([0, 120])
    .range([heightD3 - 60, 30]);

  let xScale = d3.scaleLinear()
    .domain([0, 25])
    .range([30, widthD3 - 30]);

  d3.select('#currentpos')
    .attr('x1', xScale(w(dist)))
    .attr('x2', xScale(w(dist)));

  svg5and5.selectAll('.unn')
    .attr("fill", "none")
    .attr("stroke", () => {
      if (valuesToShow["ppr"]) {
        return colors.red;
      } else {
        return 'none';
      }
    });

  // svg5and5.selectAll('.te')
  //   .attr("fill", "none")
  //   .attr("stroke", () => {
  //     if (valuesToShow["te"]) {
  //       return 'white';
  //     } else {
  //       return 'none';
  //     }
  //   });

  d3.selectAll('.te').remove();

  svg5and5
    .append('path')
    .datum(Te)
    .attr('class', 'te')
    .attr("fill", "none")
    .attr("stroke", "white")
    .attr("stroke-width", 2)
    .attr("d", d3.line()
      .x(function (d) {
        return xScale(d.x)
      })
      .y(function (d) {
        return yScale(d.y)
      })
    );

  svg5and5.selectAll('.uee')
    .attr("fill", "none")
    .attr("stroke", () => {
      if (valuesToShow["eer"]) {
        return colors.green;
      } else {
        return 'none';
      }
    });

  svg5and5.selectAll('.ubo')
    .attr("fill", "none")
    .attr("stroke", () => {
      if (valuesToShow["be"]) {
        return colors.yellow;
      } else {
        return 'none';
      }
    });

}

d3bonding = () => {
  heightD3 = 300,
    widthD3 = 500;

  svgbo = d3.selectAll('#d3-vizbo')
    .attr('height', heightD3)
    .attr('width', widthD3)
    .attr('transform', 'translate(-60,0)');

  yScale = d3.scaleLinear()
    .domain([-15, -13])
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

  svgbo.append('line')
    .attr('id', 'down_1s')
    .attr('stroke-width', 2)
    .attr('stroke', colors.yellow)
    .attr('x1', 58)
    .attr('y1', yScale(-13.6 - 0.4))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(-13.6 - 0.4));

  svgbo.append('line')
    .attr('id', 'up_1s')
    .attr('stroke', colors.yellow)
    .attr('stroke-width', 2)
    .attr('x1', 58)
    .attr('y1', yScale(-13.6 + 0.4))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(-13.6 + 0.4));

  svgbo.append("text")
    .attr("transform",
      `translate(${56},${(yScale(-13.6) + 5)} )`)
    .attr('class', 'label')
    .style("text-anchor", "end")
    .text("1s");

  svgbo.append("text")
    .attr("transform",
      `translate(${56},${(yScale(-1.51) + 5)} )`)
    .attr('class', 'label')
    .style("text-anchor", "end")
    .text("2s, 2p");

  svgbo.append('g')
    .call(yAxis)
    .attr('transform', `translate(58,0)`)
    .attr('class', 'axis');

  svgbo.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 30)
    .attr("x", 0 - (heightD3 / 2))
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Energy");

  svgbo.append('rect')
    .attr('id', 'orb_rects_down')
    .attr('x', widthD3 / 2 - 15)
    .attr('y', yScale(-13.6 - 0.4))
    .attr('width', 30)
    .attr('height', 30)
    .attr('fill', 'none')
    .attr('stroke', colors.yellow)
    .attr('stroke-width', 2);

  svgbo.append('rect')
    .attr('id', 'orb_rects_up')
    .attr('x', widthD3 / 2 - 15)
    .attr('y', yScale(-13.6 + 0.4) + -31)
    .attr('width', 30)
    .attr('height', 30)
    .attr('fill', 'none')
    .attr('stroke', colors.yellow)
    .attr('stroke-width', 2);

  svgbo.append('line')
    .attr('class', 'electron')
    .attr('stroke', colors.yellow)
    .attr('stroke-width', '2px')
    .attr('x1', widthD3 / 2 + 5)
    .attr('x2', widthD3 / 2 + 5)
    .attr('y1', yScale(-13.6 - 0.4) + 25)
    .attr('y2', yScale(-13.6 - 0.4) + 5);

  svgbo.append('line')
    .attr('class', 'electron')
    .attr('stroke', colors.yellow)
    .attr('stroke-width', '2px')
    .attr('x1', widthD3 / 2 - 5)
    .attr('x2', widthD3 / 2 - 5)
    .attr('y1', yScale(-13.6 - 0.4) + 25)
    .attr('y2', yScale(-13.6 - 0.4) + 5);
}

d3antibonding = () => {
  heightD3 = 300,
    widthD3 = 500;

  svgab = d3.selectAll('#d3-vizab')
    .attr('height', heightD3)
    .attr('width', widthD3)
    .attr('transform', 'translate(-60,0)');

  yScale = d3.scaleLinear()
    .domain([-15, -13])
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

  svgab.append('line')
    .attr('id', 'down_1s')
    .attr('stroke-width', 2)
    .attr('stroke', colors.yellow)
    .attr('x1', 58)
    .attr('y1', yScale(-13.6 + 0.4))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(-13.6 + 0.4));

  svgab.append('line')
    .attr('id', 'up_1s')
    .attr('stroke', colors.yellow)
    .attr('stroke-width', 2)
    .attr('x1', 58)
    .attr('y1', yScale(-13.6 - 0.4))
    .attr('x2', widthD3 - 58)
    .attr('y2', yScale(-13.6 - 0.4));

  svgab.append("text")
    .attr("transform",
      `translate(${56},${(yScale(-13.6) + 5)} )`)
    .attr('class', 'label')
    .style("text-anchor", "end")
    .text("1s");

  svgab.append("text")
    .attr("transform",
      `translate(${56},${(yScale(-1.51) + 5)} )`)
    .attr('class', 'label')
    .style("text-anchor", "end")
    .text("2s, 2p");

  svgab.append('g')
    .call(yAxis)
    .attr('transform', `translate(58,0)`)
    .attr('class', 'axis');

  svgab.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 30)
    .attr("x", 0 - (heightD3 / 2))
    .attr("dy", "1em")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Energy");

  svgab.append('rect')
    .attr('id', 'orb_rects_down')
    .attr('x', widthD3 / 2 - 15)
    .attr('y', yScale(-13.6 - 0.4))
    .attr('width', 30)
    .attr('height', 30)
    .attr('fill', 'none')
    .attr('stroke', colors.yellow)
    .attr('stroke-width', 2);

  svgab.append('rect')
    .attr('id', 'orb_rects_up')
    .attr('x', widthD3 / 2 - 15)
    .attr('y', yScale(-13.6 + 0.4) + -31)
    .attr('width', 30)
    .attr('height', 30)
    .attr('fill', 'none')
    .attr('stroke', colors.yellow)
    .attr('stroke-width', 2);

  svgab.append('line')
    .attr('class', 'electron')
    .attr('stroke', colors.yellow)
    .attr('stroke-width', '2px')
    .attr('x1', widthD3 / 2 + 5)
    .attr('x2', widthD3 / 2 + 5)
    .attr('y1', yScale(-13.6 + 0.4) - 25)
    .attr('y2', yScale(-13.6 + 0.4) - 5);

  svgab.append('line')
    .attr('class', 'electron')
    .attr('stroke', colors.yellow)
    .attr('stroke-width', '2px')
    .attr('x1', widthD3 / 2 - 5)
    .attr('x2', widthD3 / 2 - 5)
    .attr('y1', yScale(-13.6 + 0.4) - 25)
    .attr('y2', yScale(-13.6 + 0.4) - 5);
}

updateBonding = a => {
  yScale = d3.scaleLinear()
    .domain([-15, -13])
    .range([heightD3 - 60, 30]);

  xScale = d3.scaleLinear()
    .domain([-500, 500])
    .range([30, widthD3 - 30]);

  svgbo.select('#down_1s')
    .attr('y1', yScale(-13.6 - a/400))
    .attr('y2', yScale(-13.6 - a/400));

  svgbo.select('#up_1s')
  .attr('y1', yScale(-13.6 + a/400))
  .attr('y2', yScale(-13.6 + a/400));

  svgbo.select('#orb_rects_down')
    .attr('y', yScale(-13.6 - a/400));

  svgbo.select('#orb_rects_up')
  .attr('y', yScale(-13.6 + a/400) - 31);

  svgbo.selectAll('.electron')
  .attr('y1', yScale(-13.6 - a/400) + 25)
  .attr('y2', yScale(-13.6 - a/400) + 5);
}

updateAntiBonding = a => {
  yScale = d3.scaleLinear()
    .domain([-15, -13])
    .range([heightD3 - 60, 30]);

  xScale = d3.scaleLinear()
    .domain([-500, 500])
    .range([30, widthD3 - 30]);

  svgab.select('#down_1s')
    .attr('y1', yScale(-13.6 - a/400))
    .attr('y2', yScale(-13.6 - a/400));

  svgab.select('#up_1s')
    .attr('y1', yScale(-13.6 + a/400))
    .attr('y2', yScale(-13.6 + a/400));

  svgab.select('#orb_rects_down')
    .attr('y', yScale(-13.6 - a/400));

  svgab.select('#orb_rects_up')
    .attr('y', yScale(-13.6 + a/400) - 31);

  svgab.selectAll('.electron')
  .attr('y1', yScale(-13.6 + a/400) - 25)
  .attr('y2', yScale(-13.6 + a/400) - 5);
}