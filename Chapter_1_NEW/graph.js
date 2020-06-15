let svg;
let xScale, yScale;
let widthD3, heightD3;

d3load = () => {
  let dataset = [];
  let maxIndex = 0;
  for (let i = 0; i < 1000; i+=0.5) {
    dataset[i] = {
      x: i,
      y: prob_1s(i)
    };

    if (dataset[i].y > dataset[maxIndex].y) {
      maxIndex = i;
    }
  }

  heightD3 = 400;
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
    .attr('r', '1px')
    .attr('fill', 'none');

  // svg.selectAll('.dot')
  //   .transition()
  //   .delay((d, i) => 2.5 * i)
  //   .duration(2.5)
  //   .attr('fill', '#FFF7AE');

  let points = [
    [dataset[maxIndex].x, dataset[maxIndex].y],
    [dataset[maxIndex].x, 0]
  ];

  svg.append('line')
    .attr('x1', xScale(points[0][0]))
    .attr('y1', yScale(points[0][1]))
    .attr('x2', xScale(points[1][0]))
    .attr('y2', yScale(points[1][1]))
    .style('stroke', '#94A3F3')
    .style('stroke-width', '1px');

  svg.append("text")
    .attr("transform", `translate(${xScale(points[0][0]) + 15}, ${heightD3/4})`)
    .attr('fill', '#94A3F3')
    .style("text-anchor", "left")
    .text("Bohr Radius");

  svg.append('line')
    .attr('class', 'selection-line')
    .attr('x1', xScale(0))
    .attr('y1', yScale(0))
    .attr('x2', xScale(0))
    .attr('y2', yScale(heightD3))
    .style('stroke', 'white')
    .style('stroke-width', '1px');

    svg.append('rect')
      .attr('height', '10px')
      .attr('width', '10px')
      .attr('fill', '#FFF7AE')
      .attr('x', widthD3-100)
      .attr('y', 100);

    svg.append('text')
      .text('1s')
      .attr('fill', '#FFF7AE')
      .attr('x', widthD3-80)
      .attr('y', 100)
      .attr('alignment-baseline', 'hanging');
}

drawGraph = (radius) => {
  if (svg != undefined) {
    svg.selectAll('.dot')
      .attr('fill', d => {
        if (d.x < radius) {
          return '#FFF7AE';
        } else {
          return 'none';
        }
      })
      .attr('opacity', d => {
        if (sceneCount == 3 || sceneCount == 4) {
          return '0.5';
        } else {
          return '1.0';
        }
      });
  }     
}

showSelection = (d,fn) => {
  if (svg != undefined) {
    svg.select('.selection-line')
      .attr('x1', xScale(d))
      .attr('y1', yScale(0))
      .attr('x2', xScale(d))
      .attr('y2', yScale(fn(d)))
  }
}

update = () => {
  let dataset2 = [];
  for (let i = 0; i < 1000; i+=0.5) {
    dataset2[i] = {
      x: i,
      y: prob_2s(i)
    }
  }

  svg.selectAll('.s2')
  .data(dataset2)
  .enter()
  .append('circle')
  .attr('class', 's2')
  .attr('cx', (d, i) => xScale(d.x))
  .attr('cy', (d, i) => yScale(d.y))
  .attr('r', '1px')
  .attr('fill', 'none');

  showSelection(0, prob_2s);

  svg.append('rect')
      .attr('height', '10px')
      .attr('width', '10px')
      .attr('fill', 'white')
      .attr('x', widthD3 - 100)
      .attr('y', 130);

    svg.append('text')
      .text('2s')
      .attr('fill', 'white')
      .attr('x', widthD3 - 80)
      .attr('y', 130)
      .attr('alignment-baseline', 'hanging');
}

drawGraph2 = (radius) => {
  if (svg != undefined) {
  svg.selectAll('.s2')
    .attr('fill', d => {
      if (d.x < radius) {
        return 'white';
      } else {
        return 'none';
      }
    })
    .attr('opacity', '1.0')
    .attr('opacity', d => {
        if (sceneCount == 1 || sceneCount == 2 || sceneCount == 4) {
          return '0.1';
        } else {
          return '1.0';
        }
      });
  }
}

update2p = () => {
  let dataset3 = [];
  for (let i = 0; i < 1000; i+=0.5) {
    dataset3[i] = {
      x: i,
      y: total_prob_2p(i)
    }
  }

  svg.selectAll('.p2')
  .data(dataset3)
  .enter()
  .append('circle')
  .attr('class', 'p2')
  .attr('cx', (d, i) => xScale(d.x))
  .attr('cy', (d, i) => yScale(d.y))
  .attr('r', '1px')
  .attr('fill', 'none');

  showSelection(0, total_prob_2p);

  svg.append('rect')
    .attr('height', '10px')
    .attr('width', '10px')
    .attr('fill', '#EA9FA2')
    .attr('x', widthD3-100)
    .attr('y', 160);

  svg.append('text')
    .text('2p')
    .attr('fill', '#EA9FA2')
    .attr('x', widthD3-80)
    .attr('y', 160)
    .attr('alignment-baseline', 'hanging');
}

drawGraph2p = (radius) => {
  if (svg != undefined) {
  svg.selectAll('.p2')
    .attr('fill', d => {
      if (d.x < radius) {
        return '#EA9FA2';
      } else {
        return 'none';
      }
    });
  }
}