sceneCount = 0;

let positive_charge, negative_charge, zero_potential, temp;
let theta = 0;

let photons = [];
let orbital_to_show;

let photon, photon1, photon2;

let add = true;

let sliderRect;
let screen;
let call = 1;

let initTime, destTime;

setup = () => {
  let canvas = createCanvas(2 * windowWidth / 3, windowHeight);
  canvas.parent('visualization');

  screen = {
    x: 3 * width / 4,
    y: height / 2,
    w: 150,
    h: 400,
    transparency: 0
  }

  orbital_to_show = {
    x: width / 3,
    y: height / 2,
    orbital_radius: 50,
    energy: 10
  }

  sliderRect = {
    x: width / 4 - 80,
    y: height / 2 + 150,
    w: 10,
    h: 30
  }

  positive_charge = {
    x: width / 3,
    y: height / 2,
    r: 20,
    color: color(110, 207, 127)
  }

  negative_charge = {
    x: 2 * width / 3,
    y: height / 2,
    r: 20,
    color: color(255, 247, 174),
    theta: 0,
    radius: int(dist(2 * width / 3, height / 2, width / 2, height / 2))
  }

  zero_potential = {
    x: 2 * width / 3,
    y: height / 2,
    r: 10,
    color: color(255, 255, 255, 150)
  }

  temp = {
    x: 2 * width / 3,
    y: height / 2,
    r: 10,
    color: color(255, 247, 174, 100)
  }

  photon = {
    x: 0,
    y: height / 2,
    wavelength: map(sliderRect.x, width / 4 - 80, width / 4 + 80, 380, 540),
    show: true,
    check: true
  }

  photon1 = {
    x: positive_charge.x,
    y: height / 2,
    wavelength: map(sliderRect.x, width / 4 - 80, width / 4 + 80, 380, 540),
    show: false,
    check: false
  }

  photon2 = {
    x: positive_charge.x,
    y: height / 2,
    wavelength: map(sliderRect.x, width / 4 - 80, width / 4 + 80, 380, 540),
    show: false,
    check: false
  }

}

draw = () => {
  background(18);

  if (sceneCount == 1) {
    // stroke(255);
    // strokeWeight(2);
    // drawingContext.setLineDash([5, frameCount % 15]);
    // line(positive_charge.x, positive_charge.y, negative_charge.x, negative_charge.y);
    // drawingContext.setLineDash([]);

    fill(positive_charge.color);
    noStroke();
    ellipse(positive_charge.x, positive_charge.y, positive_charge.r, positive_charge.r);

    negative_charge = {
      x: 2 * width / 3,
      y: height / 2,
      r: 20,
      color: color(255, 247, 174),
      theta: 0,
      radius: int(dist(2 * width / 3, height / 2, width / 2, height / 2))
    }

    textSize(16);
    textFont('Bai Jamjuree');
    textAlign(CENTER, CENTER);
    noStroke();
    text('Proton', positive_charge.x, positive_charge.y + 50);

    fill(negative_charge.color);
    noStroke();
    ellipse(negative_charge.x, negative_charge.y, negative_charge.r, negative_charge.r);


    stroke(50);
    strokeWeight(2);
    line(positive_charge.x - 5, positive_charge.y, positive_charge.x + 5, positive_charge.y);
    line(positive_charge.x, positive_charge.y - 5, positive_charge.x, positive_charge.y + 5);

    stroke(50);
    strokeWeight(2);
    line(negative_charge.x - 5, negative_charge.y, negative_charge.x + 5, negative_charge.y);

    text('Electron', negative_charge.x, negative_charge.y + 50);


  } else if (sceneCount == 2) {

    positive_charge.x = lerp(positive_charge.x, width / 3, 0.05);

    negative_charge = {
      x: 2 * width / 3,
      y: height / 2,
      r: 20,
      color: color(255, 247, 174),
      theta: 0,
      radius: int(dist(2 * width / 3, height / 2, width / 2, height / 2))
    }

    stroke(255);
    strokeWeight(2);
    drawingContext.setLineDash([5, 15]);
    line(positive_charge.x, positive_charge.y, negative_charge.x, negative_charge.y);
    drawingContext.setLineDash([]);

    line(width / 2, height / 2, width / 2 + 10, height / 2 - 10);
    line(width / 2, height / 2, width / 2 + 10, height / 2 + 10);

    fill(positive_charge.color);
    noStroke();
    ellipse(positive_charge.x, positive_charge.y, positive_charge.r, positive_charge.r);

    fill(negative_charge.color);
    noStroke();
    ellipse(negative_charge.x, negative_charge.y, negative_charge.r, negative_charge.r);


    textSize(16);
    textFont('Bai Jamjuree');
    textAlign(CENTER, CENTER);
    fill(positive_charge.color);
    text('Proton', positive_charge.x, positive_charge.y + 50);

    fill(negative_charge.color);
    noStroke();
    ellipse(negative_charge.x, negative_charge.y, negative_charge.r, negative_charge.r);
    text('Electron', negative_charge.x, negative_charge.y + 50);

    textSize(32);
    fill(255);
    textAlign(CENTER, CENTER);
    text("Coulomb forces", width / 2, height / 2 + 100);

    stroke(50);
    strokeWeight(2);
    line(positive_charge.x - 5, positive_charge.y, positive_charge.x + 5, positive_charge.y);
    line(positive_charge.x, positive_charge.y - 5, positive_charge.x, positive_charge.y + 5);

    stroke(50);
    strokeWeight(2);
    line(negative_charge.x - 5, negative_charge.y, negative_charge.x + 5, negative_charge.y);

  } else if (sceneCount == 2.5) {

    positive_charge.x = lerp(positive_charge.x, width / 3, 0.05);



    if (call == 1) {
      potentialEnergyGraph(width, (negative_charge.x - 2 * width / 3));
      call = 0;
    }
    // negative_charge = {
    //   x: 2 * width / 3,
    //   y: height / 2,
    //   r: 20,
    //   color: color(255, 247, 174),
    //   theta: 0,
    //   radius: int(dist(2 * width / 3, height / 2, width / 2, height / 2))
    // }


    stroke(255);
    strokeWeight(2);
    line(2 * width / 3, height / 2 - 10, 2 * width / 3, height / 2 + 10);

    noStroke();
    fill(255, 255, 255);
    textSize(16);
    text('Zero P.E.', 2 * width / 3, negative_charge.y + 20);

    if (mouseIsPressed) {
      potentialChange(width, (negative_charge.x - 2 * width / 3));
      negative_charge.x = lerp(negative_charge.x, mouseX, 0.01);

      let f = constrain(7500000 / ((negative_charge.x - positive_charge.x) * (negative_charge.x - positive_charge.x)), 0, width / 3);

      let v0 = createVector(negative_charge.x, negative_charge.y);
      // let v1 = createVector(-positive_charge.x - positive_charge.r / 2 + negative_charge.x, -positive_charge.y + negative_charge.y);


      fill(150, 150, 0);
      textSize(16);
      text('Applied external force', 2 * width / 3, negative_charge.y + 40);

      fill(255, 255, 255);
      textSize(16);
      text('Coulomb force', positive_charge.x, negative_charge.y + 40);
      // let v0 = createVector(negative_charge.x, negative_charge.y);
      let v2 = createVector(-f, 0);
      let v1 = createVector(f, 0);
      drawArrow(v0, v2, color(255, 255, 255));
      drawArrow(v0, v1, color(150, 150, 0));
    } else {

      stroke(255);
      strokeWeight(2);
      drawingContext.setLineDash([5, 15]);
      line(2 * width / 3, height / 2, negative_charge.x, negative_charge.y);
      drawingContext.setLineDash([]);
    }

    stroke(255);
    strokeWeight(2);
    // drawingContext.setLineDash([5, 15]);
    // line(positive_charge.x, positive_charge.y, negative_charge.x, negative_charge.y);
    // drawingContext.setLineDash([]);

    // line(width / 2, height / 2, width / 2 + 10, height / 2 - 10);
    // line(width / 2, height / 2, width / 2 + 10, height / 2 + 10);

    fill(positive_charge.color);
    noStroke();
    ellipse(positive_charge.x, positive_charge.y, positive_charge.r, positive_charge.r);

    fill(negative_charge.color);
    noStroke();
    ellipse(negative_charge.x, negative_charge.y, negative_charge.r, negative_charge.r);

    stroke(50);
    strokeWeight(2);
    line(positive_charge.x - 5, positive_charge.y, positive_charge.x + 5, positive_charge.y);
    line(positive_charge.x, positive_charge.y - 5, positive_charge.x, positive_charge.y + 5);


    stroke(50);
    strokeWeight(2);
    line(negative_charge.x - 5, negative_charge.y, negative_charge.x + 5, negative_charge.y);

    noStroke();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(24);
    textFont('Bai Jamjuree');
    text('Click at any point to apply external force to electron', width / 2, height / 2 + 250);

  } else if (sceneCount == 3) {
    let energies = [];
    let av = 100000 / (negative_charge.radius * negative_charge.radius * negative_charge.radius);
    positive_charge.x = lerp(positive_charge.x, width / 2, 0.05);

    fill(positive_charge.color);
    ellipse(positive_charge.x, positive_charge.y, positive_charge.r, positive_charge.r);
    fill(negative_charge.color);
    ellipse(negative_charge.x, negative_charge.y, negative_charge.r, negative_charge.r);

    stroke(50);
    strokeWeight(2);
    line(positive_charge.x - 5, positive_charge.y, positive_charge.x + 5, positive_charge.y);
    line(positive_charge.x, positive_charge.y - 5, positive_charge.x, positive_charge.y + 5);

    stroke(50);
    strokeWeight(2);
    line(negative_charge.x - 5, negative_charge.y, negative_charge.x + 5, negative_charge.y);

    if (mouseIsPressed) {

      negative_charge.x = lerp(negative_charge.x, mouseX, 0.06);
      negative_charge.y = lerp(negative_charge.y, mouseY, 0.06);

      let x1 = negative_charge.x;
      let y1 = negative_charge.y;
      let x2 = lerp(negative_charge.x, mouseX, 0.5);
      let y2 = lerp(negative_charge.y, mouseY, 0.5);

      // let v0 = createVector(x1, y1);
      // let v1 = createVector(mouseX - x1, mouseY - y1);
      // // drawArrow(v0, v1, color(50, 50, 240));
      // let d = int(dist(positive_charge.x, positive_charge.y, negative_charge.x, negative_charge.y));
      // let f = 7500000 / ((d + 1) * (d + 1));
      // let v2 = createVector(-f * cos(negative_charge.theta), -f * sin(negative_charge.theta));
      // drawArrow(v0, v2, color(150, 150, 0));

      // let v1 = createVector(mouseX - x1, mouseY - y1);
      // // drawArrow(v0, v1, color(50, 50, 240));
      let d = int(dist(positive_charge.x, positive_charge.y, negative_charge.x, negative_charge.y));
      let f = 1500000 / ((d + 1) * (d + 1));
      let v0 = createVector(x1 + f * cos(negative_charge.theta), y1 + f * sin(negative_charge.theta));
      let v2 = createVector(-f * cos(negative_charge.theta), -f * sin(negative_charge.theta));
      drawArrow(v0, v2, color(150, 150, 0));

      noStroke();
      fill(50, 50, 240);
      textAlign(CENTER, CENTER);
      textSize(16);
      textFont('Bai Jamjuree');
      // text('Displacement of electron', mouseX, mouseY + 50);
      fill(150, 150, 0);
      text('Coulomb Force', negative_charge.x + f / 2 * cos(negative_charge.theta), negative_charge.y + f / 2 * sin(negative_charge.theta));

      // stroke(50, 50, 240);
      // strokeWeight(3);
      // stroke(50, 50, 240);
      // line(x1, y1, x2, y2);
      // stroke(150, 150, 0);
      // line(negative_charge.x, negative_charge.y, negative_charge.x + 100 * cos(negative_charge.theta), negative_charge.y + 100 * sin(negative_charge.theta));
      // noStroke();

      negative_charge.radius = int(dist(negative_charge.x, negative_charge.y, width / 2, height / 2));
      if (mouseY >= height / 2) {
        negative_charge.theta = acos((negative_charge.x - width / 2) / negative_charge.radius);
      } else if (mouseX > width / 2) {
        negative_charge.theta = asin((negative_charge.y - height / 2) / negative_charge.radius);
      } else {
        negative_charge.theta = acos((-negative_charge.x + width / 2) / negative_charge.radius) + PI;
      }
    } else {
      negative_charge.x = width / 2 + negative_charge.radius * cos(negative_charge.theta);
      negative_charge.y = height / 2 + negative_charge.radius * sin(negative_charge.theta);
      negative_charge.theta += av;

      stroke(255);
      strokeWeight(2);
      drawingContext.setLineDash([5, 15]);
      line(positive_charge.x, positive_charge.y, negative_charge.x, negative_charge.y);
      noFill();
      stroke(255, 255, 255, 100);
      ellipse(width / 2, height / 2, negative_charge.radius * 2, negative_charge.radius * 2);
      drawingContext.setLineDash([]);
    }


    noStroke();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(24);
    textFont('Bai Jamjuree');
    text('Click at any point to apply external force to electron', width / 2, height / 2 + 250);

    // fill(255);
    // noStroke();
    // textAlign(CENTER, CENTER);
    // textFont('Bai Jamjuree');
    // textSize(16);
    // text(`Speed: ${floor(av*negative_charge.radius*100)/100}`, width / 2, height / 2 + 100);
    // text(`K.E.`, 3 * width / 4 - 20, height / 2);
    // text(`P.E.`, 3 * width / 4 + 60, height / 2);
    // text(`T.E.`, 3 * width / 4 + 140, height / 2);

    let pe = -10000 / negative_charge.radius;
    energies.push({
      type: 1,
      value: pe
    });
    let ke = av * negative_charge.radius * av * negative_charge.radius;
    energies.push({
      type: 2,
      value: ke
    });
    let te = pe + ke;
    energies.push({
      type: 3,
      value: te
    });
    drawEnergies(energies);


    // fill(255);
    // rect(3 * width / 4, height / 2 - ke, 40, ke);
    // rect(3 * width / 4 + 80, height / 2 - pe, 40, pe);
    // rect(3 * width / 4 + 160, height / 2 - pe - ke, 40, pe + ke);

  } else if (sceneCount == 3.5) {
    let energies = [];
    let av = 100000 / (negative_charge.radius * negative_charge.radius * negative_charge.radius);
    positive_charge.x = lerp(positive_charge.x, width / 2, 0.05);

    fill(positive_charge.color);
    ellipse(positive_charge.x, positive_charge.y, positive_charge.r, positive_charge.r);
    fill(negative_charge.color);
    ellipse(negative_charge.x, negative_charge.y, negative_charge.r, negative_charge.r);

    stroke(50);
    strokeWeight(2);
    line(positive_charge.x - 5, positive_charge.y, positive_charge.x + 5, positive_charge.y);
    line(positive_charge.x, positive_charge.y - 5, positive_charge.x, positive_charge.y + 5);

    stroke(50);
    strokeWeight(2);
    line(negative_charge.x - 5, negative_charge.y, negative_charge.x + 5, negative_charge.y);

    // if (mouseIsPressed) {

    //   negative_charge.x = lerp(negative_charge.x, mouseX, 0.06);
    //   negative_charge.y = lerp(negative_charge.y, mouseY, 0.06);

    //   let x1 = negative_charge.x;
    //   let y1 = negative_charge.y;
    //   let x2 = lerp(negative_charge.x, mouseX, 0.5);
    //   let y2 = lerp(negative_charge.y, mouseY, 0.5);

    //   // let v0 = createVector(x1, y1);
    //   // let v1 = createVector(mouseX - x1, mouseY - y1);
    //   // // drawArrow(v0, v1, color(50, 50, 240));
    //   // let d = int(dist(positive_charge.x, positive_charge.y, negative_charge.x, negative_charge.y));
    //   // let f = 7500000 / ((d + 1) * (d + 1));
    //   // let v2 = createVector(-f * cos(negative_charge.theta), -f * sin(negative_charge.theta));
    //   // drawArrow(v0, v2, color(150, 150, 0));

    //   // let v1 = createVector(mouseX - x1, mouseY - y1);
    //   // // drawArrow(v0, v1, color(50, 50, 240));
    //   let d = int(dist(positive_charge.x, positive_charge.y, negative_charge.x, negative_charge.y));
    //   let f = 1500000 / ((d + 1) * (d + 1));
    //   let v0 = createVector(x1 + f * cos(negative_charge.theta), y1 + f * sin(negative_charge.theta));
    //   let v2 = createVector(-f * cos(negative_charge.theta), -f * sin(negative_charge.theta));
    //   drawArrow(v0, v2, color(150, 150, 0));

    //   noStroke();
    //   fill(50, 50, 240);
    //   textAlign(CENTER, CENTER);
    //   textSize(16);
    //   textFont('Bai Jamjuree');
    //   // text('Displacement of electron', mouseX, mouseY + 50);
    //   fill(150, 150, 0);
    //   text('Coulomb Force', negative_charge.x + f / 2 * cos(negative_charge.theta), negative_charge.y + f / 2 * sin(negative_charge.theta));

    //   // stroke(50, 50, 240);
    //   // strokeWeight(3);
    //   // stroke(50, 50, 240);
    //   // line(x1, y1, x2, y2);
    //   // stroke(150, 150, 0);
    //   // line(negative_charge.x, negative_charge.y, negative_charge.x + 100 * cos(negative_charge.theta), negative_charge.y + 100 * sin(negative_charge.theta));
    //   // noStroke();

    //   negative_charge.radius = int(dist(negative_charge.x, negative_charge.y, width / 2, height / 2));
    //   if (mouseY >= height / 2) {
    //     negative_charge.theta = acos((negative_charge.x - width / 2) / negative_charge.radius);
    //   } else if (mouseX > width / 2) {
    //     negative_charge.theta = asin((negative_charge.y - height / 2) / negative_charge.radius);
    //   } else {
    //     negative_charge.theta = acos((-negative_charge.x + width / 2) / negative_charge.radius) + PI;
    //   }
    // } else {
    negative_charge.x = width / 2 + negative_charge.radius * cos(negative_charge.theta);
    negative_charge.y = height / 2 + negative_charge.radius * sin(negative_charge.theta);
    negative_charge.theta += av;

    stroke(255);
    strokeWeight(2);
    drawingContext.setLineDash([5, 15]);
    line(positive_charge.x, positive_charge.y, negative_charge.x, negative_charge.y);
    noFill();
    stroke(255, 255, 255, 100);
    ellipse(width / 2, height / 2, negative_charge.radius * 2, negative_charge.radius * 2);
    drawingContext.setLineDash([]);
    // }


    noStroke();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(24);
    textFont('Bai Jamjuree');
    text('Click at any point to apply external force to electron', width / 2, height / 2 + 250);

    // fill(255);
    // noStroke();
    // textAlign(CENTER, CENTER);
    // textFont('Bai Jamjuree');
    // textSize(16);
    // text(`Speed: ${floor(av*negative_charge.radius*100)/100}`, width / 2, height / 2 + 100);
    // text(`K.E.`, 3 * width / 4 - 20, height / 2);
    // text(`P.E.`, 3 * width / 4 + 60, height / 2);
    // text(`T.E.`, 3 * width / 4 + 140, height / 2);

    let pe = -10000 / negative_charge.radius;
    energies.push({
      type: 1,
      value: pe
    });
    let ke = av * negative_charge.radius * av * negative_charge.radius;
    energies.push({
      type: 2,
      value: ke
    });
    let te = pe + ke;
    energies.push({
      type: 3,
      value: te
    });
    drawEnergies(energies);

    let color = wavelengthToColor(screen.transparency);
    fill(color[1] * 255, color[2] * 255, color[3] * 255);
    stroke(255, 255, 255, 50);
    beginShape();
    vertex(screen.x - screen.w / 2, screen.y - screen.h / 2 - 20);
    vertex(screen.x + screen.w / 2, screen.y - screen.h / 2 + 20);
    vertex(screen.x + screen.w / 2, screen.y + screen.h / 2 + 20);
    vertex(screen.x - screen.w / 2, screen.y + screen.h / 2 - 20);
    vertex(screen.x - screen.w / 2, screen.y - screen.h / 2 - 20);
    endShape();

    noFill();
    stroke(255);
    line(width / 4 - 80, sliderRect.y + sliderRect.h / 2, width / 4 + 320, sliderRect.y + sliderRect.h / 2);
    noStroke();
    fill(255);
    rect(sliderRect.x, sliderRect.y, sliderRect.w, sliderRect.h);

    let lambda = map(sliderRect.x, width / 4 - 80, width / 4 - 80 + 400, 0.380, 0.780);
    let eValue = 1.2398 / lambda;
    textAlign(CENTER, CENTER);
    textSize(16);
    noStroke();
    fill(255);
    text(eValue.toFixed(1) + ' eV', sliderRect.x, sliderRect.y - 15);

    for (let i = 1; i < 400; i++) {
      let colors = wavelengthToColor(i + 380);
      fill(colors[1] * 255, colors[2] * 255, colors[3] * 255, colors[4] * 255);
      rect(width / 4 - 80 + i, sliderRect.y + 40, 1, 8);
    }

    if (mouseIsPressed) {
      sliderRect.x = constrain(mouseX - 5, width / 4 - 80, width / 4 + 310);
    }



    if (photon.show) {
      createWavePacket(photon);
      photon.x += 3;
    }
    noStroke();

    if (photon.x > positive_charge.x) {
      photon = {
        x: 0,
        y: height / 2,
        wavelength: map(sliderRect.x, width / 4 - 80, width / 4 + 80, 380, 540),
        show: true,
        check: true
      }
      let increase = floor(photon.wavelength / 50);
      negative_charge.radius += increase;
    }

    // fill(255);
    // rect(3 * width / 4, height / 2 - ke, 40, ke);
    // rect(3 * width / 4 + 80, height / 2 - pe, 40, pe);
    // rect(3 * width / 4 + 160, height / 2 - pe - ke, 40, pe + ke);

  } else if (sceneCount == 4) {
    positive_charge.x = width / 3;

    let color = wavelengthToColor(screen.transparency);
    fill(color[1] * 255, color[2] * 255, color[3] * 255);
    stroke(255, 255, 255, 50);
    beginShape();
    vertex(screen.x - screen.w / 2, screen.y - screen.h / 2 - 20);
    vertex(screen.x + screen.w / 2, screen.y - screen.h / 2 + 20);
    vertex(screen.x + screen.w / 2, screen.y + screen.h / 2 + 20);
    vertex(screen.x - screen.w / 2, screen.y + screen.h / 2 - 20);
    vertex(screen.x - screen.w / 2, screen.y - screen.h / 2 - 20);
    endShape();
    // rect(screen.x, screen.y, screen.w, screen.h);

    noStroke();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(24);
    textFont('Bai Jamjuree');
    text('Change wavelength of photon', width / 2, height / 2 + 250);
    // noFill();
    // stroke(255);
    // rect(width / 4 - 50, height / 2 + 100, 100, 40);
    // textAlign(CENTER, CENTER);
    // textSize(16);
    // noStroke();
    // fill(255);
    // text('Emit photons', width / 4, height / 2 + 120);


    noFill();
    stroke(255);
    line(width / 4 - 80, sliderRect.y + sliderRect.h / 2, width / 4 + 320, sliderRect.y + sliderRect.h / 2);
    noStroke();
    fill(255);
    rect(sliderRect.x, sliderRect.y, sliderRect.w, sliderRect.h);

    if (orbital_to_show.orbital_radius == 50) {
      stroke(255);
      line(width / 4 + 54.6, sliderRect.y + sliderRect.h / 2 + 10, width / 4 + 54.6, sliderRect.y + sliderRect.h / 2 - 10);
      line(width / 4 + 100, sliderRect.y + sliderRect.h / 2 + 10, width / 4 + 100, sliderRect.y + sliderRect.h / 2 - 10);
      stroke(255, 255, 255, 50);
      line(width / 4 + 150, sliderRect.y + sliderRect.h / 2 + 10, width / 4 + 150, sliderRect.y + sliderRect.h / 2 - 10);
    } else if (orbital_to_show.orbital_radius == 150) {
      stroke(255, 255, 255, 50);
      line(width / 4 + 54.6, sliderRect.y + sliderRect.h / 2 + 10, width / 4 + 54.6, sliderRect.y + sliderRect.h / 2 - 10);
      line(width / 4 + 100, sliderRect.y + sliderRect.h / 2 + 10, width / 4 + 100, sliderRect.y + sliderRect.h / 2 - 10);
      stroke(255);
      line(width / 4 + 150, sliderRect.y + sliderRect.h / 2 + 10, width / 4 + 150, sliderRect.y + sliderRect.h / 2 - 10);
    } else {
      stroke(255, 255, 255, 50);
      line(width / 4 + 54.6, sliderRect.y + sliderRect.h / 2 + 10, width / 4 + 54.6, sliderRect.y + sliderRect.h / 2 - 10);
      line(width / 4 + 100, sliderRect.y + sliderRect.h / 2 + 10, width / 4 + 100, sliderRect.y + sliderRect.h / 2 - 10);
      line(width / 4 + 150, sliderRect.y + sliderRect.h / 2 + 10, width / 4 + 150, sliderRect.y + sliderRect.h / 2 - 10);
    }

    let lambda = map(sliderRect.x, width / 4 - 80, width / 4 - 80 + 400, 0.380, 0.780);
    let eValue = 1.2398 / lambda;
    textAlign(CENTER, CENTER);
    textSize(16);
    noStroke();
    fill(255);
    text(eValue.toFixed(1) + ' eV', sliderRect.x, sliderRect.y - 15);

    for (let i = 1; i < 400; i++) {
      let colors = wavelengthToColor(i + 380);
      fill(colors[1] * 255, colors[2] * 255, colors[3] * 255, colors[4] * 255);
      rect(width / 4 - 80 + i, sliderRect.y + 40, 1, 8);
    }


    // if (mouseIsPressed && mouseX < 250 && mouseY > height / 2 + 120) {
    //   if (add) {
    //     photons.push({
    //       x: 0,
    //       y: height / 2,
    //       wavelength: map(sliderRect.x, width / 4 - 80, width / 4 + 80, 380, 540),
    //       show: true,
    //       check: true
    //     });
    //     add = false;
    //     screen.transparency = 0;
    //   }
    // } else {
    //   add = true;
    // }

    if (mouseIsPressed) {
      sliderRect.x = constrain(mouseX - 5, width / 4 - 80, width / 4 + 310);
    }

    if (photon.show) {
      createWavePacket(photon);
      photon.x += 3;
    }
    if (photon1.show) {
      createWavePacket(photon1);
      photon1.x += 3;
    }
    if (photon2.show) {
      createWavePacket(photon2);
      photon2.x += 3;
    }


    if (photon.x >= screen.x) {
      screen.transparency = photon.wavelength;
      photon = {
        x: 0,
        y: height / 2,
        wavelength: map(sliderRect.x, width / 4 - 80, width / 4 + 80, 380, 540),
        show: true,
        check: true
      }
    }
    if (photon1.x >= screen.x) {
      screen.transparency = photon1.wavelength;
      photon1 = {
        x: 0,
        y: height / 2,
        wavelength: map(sliderRect.x, width / 4 - 80, width / 4 + 80, 380, 540),
        show: false,
        check: true
      }
    }
    if (photon2.x >= screen.x) {
      screen.transparency = photon2.wavelength;
      photon2 = {
        x: 0,
        y: height / 2,
        wavelength: map(sliderRect.x, width / 4 - 80, width / 4 + 80, 380, 540),
        show: false,
        check: true
      }
    }

    if (abs(photon.x - positive_charge.x) < 5 && photon.check) {
      if (orbital_to_show.orbital_radius == 50) {
        if (abs(photon.wavelength - 514) < 10) {
          orbital_to_show.orbital_radius = 150;
          photon = {
            x: 0,
            y: height / 2,
            wavelength: map(sliderRect.x, width / 4 - 80, width / 4 + 80, 380, 540),
            show: true,
            check: true
          }
          destTime = second() + random(5, 10);

        } else if (abs(photon.wavelength - 564) < 10) {
          orbital_to_show.orbital_radius = 200;
          photon = {
            x: 0,
            y: height / 2,
            wavelength: map(sliderRect.x, width / 4 - 80, width / 4 + 80, 380, 540),
            show: true,
            check: true
          }
          destTime = second() + random(2, 4);

        }
      } else if (orbital_to_show.orbital_radius == 150 && abs(photon.wavelength - 614) < 10) {
        orbital_to_show.orbital_radius = 200;
        photon = {
          x: 0,
          y: height / 2,
          wavelength: map(sliderRect.x, width / 4 - 80, width / 4 + 80, 380, 540),
          show: true,
          check: true
        }
        destTime = second() + random(2, 4);
      }
    }


    // }

    if (orbital_to_show.orbital_radius <= 150) {
      fill(negative_charge.color);
      noStroke();
      ellipse(orbital_to_show.x, orbital_to_show.y, orbital_to_show.orbital_radius, orbital_to_show.orbital_radius);
    } else {
      fill(negative_charge.color);
      noStroke();
      ellipse(orbital_to_show.x, orbital_to_show.y - 40, 100, 75);
      ellipse(orbital_to_show.x, orbital_to_show.y + 40, 100, 75);
    }
    fill(positive_charge.color);
    ellipse(positive_charge.x, positive_charge.y, 10, 10);

    if (orbital_to_show.orbital_radius == 150 && second() > destTime) {
      orbital_to_show.orbital_radius = 50;
      photon1 = {
        x: positive_charge.x,
        y: height / 2,
        wavelength: 514,
        show: true,
        check: false
      }
    } else if (orbital_to_show.orbital_radius == 200 && second() > destTime) {
      if (random(0, 1) < 0.5) {
        orbital_to_show.orbital_radius = 50;
        photon2 = {
          x: positive_charge.x,
          y: height / 2,
          wavelength: 564,
          show: true,
          check: false
        }
      } else {
        orbital_to_show.orbital_radius = 150;
        initTime = second();
        destTime = initTime + random(3, 5);
        photon2 = {
          x: positive_charge.x,
          y: height / 2,
          wavelength: 614,
          show: true,
          check: false
        }
      }
    }

    // if (orbital_to_show.orbital_radius > 50) {
    //   orbital_to_show.x += random(-2, 2);
    // }



    textSize(16);
    textFont('Bai Jamjuree');
    textAlign(CENTER, CENTER);
    if (orbital_to_show.orbital_radius < 150) {
      fill(255);
      noStroke();
      text('1s Orbital', positive_charge.x, positive_charge.y - 200);
      changeD3(-13.6);
    } else if (orbital_to_show.orbital_radius == 150) {
      fill(234, 159, 162);
      noStroke();
      text('Unstable 2s Orbital', positive_charge.x, positive_charge.y - 200);
      changeD3(-3.4);
    } else {
      fill(234, 159, 162);
      noStroke();
      text('Unstable 2p Orbital', positive_charge.x, positive_charge.y - 200);
      changeD3(-1.51);
    }
  }
}

function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}

// takes wavelength in nm and returns an rgba value
function wavelengthToColor(wavelength) {
  var r,
    g,
    b,
    alpha,
    colorSpace,
    wl = wavelength,
    gamma = 1;


  if (wl >= 380 && wl < 440) {
    R = -1 * (wl - 440) / (440 - 380);
    G = 0;
    B = 1;
  } else if (wl >= 440 && wl < 490) {
    R = 0;
    G = (wl - 440) / (490 - 440);
    B = 1;
  } else if (wl >= 490 && wl < 510) {
    R = 0;
    G = 1;
    B = -1 * (wl - 510) / (510 - 490);
  } else if (wl >= 510 && wl < 580) {
    R = (wl - 510) / (580 - 510);
    G = 1;
    B = 0;
  } else if (wl >= 580 && wl < 645) {
    R = 1;
    G = -1 * (wl - 645) / (645 - 580);
    B = 0.0;
  } else if (wl >= 645 && wl <= 780) {
    R = 1;
    G = 0;
    B = 0;
  } else {
    R = 0;
    G = 0;
    B = 0;
  }

  // intensty is lower at the edges of the visible spectrum.
  if (wl > 780 || wl < 380) {
    alpha = 0;
  } else if (wl > 700) {
    alpha = (780 - wl) / (780 - 700);
  } else if (wl < 420) {
    alpha = (wl - 380) / (420 - 380);
  } else {
    alpha = 1;
  }

  colorSpace = ["rgba(" + (R * 100) + "%," + (G * 100) + "%," + (B * 100) + "%, " + alpha + ")", R, G, B, alpha]

  // colorSpace is an array with 5 elements.
  // The first element is the complete code as a string.  
  // Use colorSpace[0] as is to display the desired color.  
  // use the last four elements alone or together to access each of the individual r, g, b and a channels.  

  return colorSpace;

}

createWavePacket = photon => {
  let lambda = photon.wavelength;
  let x = photon.x;
  noFill();
  let col = wavelengthToColor(lambda);
  stroke(col[1] * 255, col[2] * 255, col[3] * 255);
  strokeWeight(2);
  beginShape();
  for (let i = 0; i < lambda / 10; i++) {
    vertex(x - i, height / 2 + 10 * sin(10 * PI * i / lambda) * sin(100 * PI * i / lambda));
  }
  endShape();
}

keyPressed = () => {
  if (add && sceneCount == 4) {
    // photons.push({
    //   x: 0,
    //   y: height / 2,
    //   wavelength: map(sliderRect.x, width / 4 - 80, width / 4 + 80, 380, 540),
    //   show: true,
    //   check: true
    // });
    photon = {
      x: 0,
      y: height / 2,
      wavelength: map(sliderRect.x, width / 4 - 80, width / 4 + 80, 380, 540),
      show: true,
      check: true
    }
    add = false;
    screen.transparency = 0;
  } else {
    add = true;
  }
}