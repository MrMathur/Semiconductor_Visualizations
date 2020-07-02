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


  xScale = d3.scaleLinear()
    .domain([1, 3])
    .range([60, widthD3 - 30]);

  barScale = d3.scaleLinear()
    .domain([1, 3])
    .range([widthD3 / 4, 3 * widthD3 / 4]);

  yScale = d3.scaleLinear()
    .domain([0, 200000])
    .range([heightD3 - 60, 30]);

  barYScale = d3.scaleLinear()
    .domain([0, 200])
    .range([0, heightD3 / 2]);

  let xAxis = d3.axisBottom()
    .scale(xScale)
    .tickValues([]);

  let yAxis = d3.axisLeft()
    .scale(yScale)
    .tickValues([]);

  svg.append('g')
    .call(xAxis)
    .attr('transform', `translate(0,${heightD3/2})`)
    .attr('class', 'axis');

  svg.append("text")
    .attr("transform",
      "translate(" + (widthD3 / 4) + " ," +
      (heightD3 - 30) + ")")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Potential Energy");

  svg.append("text")
    .attr("transform",
      "translate(" + (widthD3 / 2) + " ," +
      (heightD3 - 30) + ")")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Kinetic Energy");

  svg.append("text")
    .attr("transform",
      "translate(" + 3 * (widthD3 / 4) + " ," +
      (heightD3 - 30) + ")")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Total Energy");

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

drawEnergies = (energies) => {
  svg.selectAll('.bars')
    .data(energies)
    .enter()
    .append('rect')
    .attr('class', 'bars')
    .attr('x', d => barScale(d.type))
    .attr('y', d => {
      if (d.value > 0) {
        return (heightD3 / 2 - barYScale(d.value));
      } else {
        return heightD3 / 2;
      }
    })
    .attr('height', d => {
      // if (d.value > 0) {
      //   yScale(d.value);
      // } else {
      //   yScale(-d.value);
      // }

      return barYScale(Math.abs(d.value));
    })
    .attr('width', 30)
    .attr('fill', 'white');

  svg.selectAll('.bars')
    .data(energies)
    .attr('x', d => barScale(d.type))
    .attr('y', d => {
      if (d.value > 0) {
        return (heightD3 / 2 - barYScale(d.value));
      } else {
        return heightD3 / 2;
      }
    })
    .attr('height', d => {
      // if (d.value > 0) {
      //   yScale(d.value);
      // } else {
      //   yScale(-d.value);
      // }

      return barYScale(Math.abs(d.value));
    })
    .attr('width', 30)
    .attr('fill', 'white');

  // svg.selectAll('.value-label')
  //   .data(energies)
  //   .attr('y', d => {
  //     if (d.value > 0) {
  //       return (heightD3 / 2 - barYScale(d.value)) - 10;
  //     } else {
  //       return heightD3 / 2 + barYScale(d.value) + 10;
  //     }
  //   })
  //   .text(d => `${d.value} eV`);

  svg.selectAll('.values')
    .data(energies)
    .enter()
    .append('text')
    .attr('class', 'values')
    .attr('x', d => barScale(d.type))
    .attr('y', d => {
      if (d.value > 0) {
        return (heightD3 / 2 - barYScale(d.value)) - 10;
      } else {
        return (heightD3 / 2 + barYScale(d.value)) + 10;
      }
    })
    .attr('fill', 'white')
    .text(d => `${d.value.toFixed(1)} eV`);

  svg.selectAll('.values')
    .data(energies)
    .attr('y', d => {
      if (d.value > 0) {
        return (heightD3 / 2 - barYScale(d.value)) - 10;
      } else {
        return (heightD3 / 2 + barYScale(d.value)) + 10;
      }
    })
    .text(d => `${d.value.toFixed(1)} eV`);
}

secondGraph = () => {

  heightD3 = 400,
    widthD3 = 500;

  svg = d3.selectAll('#sec-viz')
    .attr('height', heightD3)
    .attr('width', widthD3)
    .attr('transform', 'translate(-60,0)');

  // svg.append('rect')
  //   .attr('width', '100%')
  //   .attr('height', '100%')
  //   .attr('fill', 'pink');


  xScale = d3.scaleLinear()
    .domain([1, 3])
    .range([60, widthD3 - 30]);

  barScale = d3.scaleLinear()
    .domain([1, 3])
    .range([widthD3 / 4, 3 * widthD3 / 4]);

  yScale = d3.scaleLinear()
    .domain([0, 200000])
    .range([heightD3 - 60, 30]);

  barYScale = d3.scaleLinear()
    .domain([0, 200])
    .range([0, heightD3 / 2]);

  let xAxis = d3.axisBottom()
    .scale(xScale)
    .tickValues([]);

  let yAxis = d3.axisLeft()
    .scale(yScale)
    .tickValues([]);

  svg.append('g')
    .call(xAxis)
    .attr('transform', `translate(0,${heightD3/2})`)
    .attr('class', 'axis');

  svg.append("text")
    .attr("transform",
      "translate(" + (widthD3 / 2) + " ," +
      (heightD3 - 30) + ")")
    .attr('class', 'label')
    .style("text-anchor", "middle")
    .text("Total Energy");

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

  svg.append('rect')
    .attr('id', 'energy-rect')
    .attr('x', widthD3 / 2)
    .attr('y', heightD3 / 2)
    .attr('width', 30)
    .attr('height', barYScale(50))
    .attr('fill', 'white');

  svg.append('text')
    .attr('id', 'energy-text')
    .attr('x', widthD3 / 2)
    .attr('y', heightD3 / 2 + barYScale(50) + 20)
    .text('-13.6eV')
    .attr('fill', 'white');

}

changeD3 = () => {
  svg.select('#energy-rect')
    .attr('height', barYScale(25));

  svg.select('#energy-text')
    .attr('y', heightD3 / 2 + barYScale(25) + 20)
    .text('-3.4 eV')
}