sceneCount = 0;

let positive_charge, negative_charge, zero_potential, temp;
let theta = 0;

let photons = [];
let orbital_to_show;

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
    y: height / 2 - 200,
    w: 40,
    h: 400,
    transparency: 0
  }

  orbital_to_show = {
    x: width / 2,
    y: height / 2,
    orbital_radius: 50,
    energy: 10
  }

  sliderRect = {
    x: width / 4 - 80,
    y: height / 2 + 50 - 15,
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



    if (mouseIsPressed) {
      potentialChange(width, (negative_charge.x - 2 * width / 3));
      negative_charge.x = lerp(negative_charge.x, mouseX, 0.01);

      let f = 2000000 / ((negative_charge.x - positive_charge.x) * (negative_charge.x - positive_charge.x));

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
      line(2 * width / 3, height / 2 - 10, 2 * width / 3, height / 2 + 10);

      noStroke();
      fill(255, 255, 255);
      textSize(16);
      text('Zero P.E.', 2 * width / 3, negative_charge.y + 20);

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

    stroke(255);
    strokeWeight(2);
    drawingContext.setLineDash([5, 15]);
    line(positive_charge.x, positive_charge.y, negative_charge.x, negative_charge.y);
    noFill();
    stroke(255, 255, 255, 100);
    ellipse(width / 2, height / 2, negative_charge.radius * 2, negative_charge.radius * 2);
    drawingContext.setLineDash([]);


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

      let v0 = createVector(x1, y1);
      let v1 = createVector(mouseX - x1, mouseY - y1);
      drawArrow(v0, v1, color(50, 50, 240));
      let d = int(dist(positive_charge.x, positive_charge.y, negative_charge.x, negative_charge.y));
      let f = 2000000 / ((d + 1) * (d + 1));
      let v2 = createVector(f * cos(negative_charge.theta), f * sin(negative_charge.theta));
      drawArrow(v0, v2, color(150, 150, 0));

      noStroke();
      fill(50, 50, 240);
      textAlign(CENTER, CENTER);
      textSize(16);
      textFont('Bai Jamjuree');
      text('Displacement of electron', mouseX, mouseY + 50);
      fill(150, 150, 0);
      text('Applied external force', negative_charge.x + f / 2 * cos(negative_charge.theta), negative_charge.y + f / 2 * sin(negative_charge.theta));

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

  } else if (sceneCount == 4) {
    positive_charge.x = width / 2;
    noFill();
    stroke(255);
    rect(width / 4 - 50, height / 2 + 100, 100, 40);
    textAlign(CENTER, CENTER);
    textSize(16);
    noStroke();
    fill(255);
    text('Emit photons', width / 4, height / 2 + 120);


    noFill();
    stroke(255);
    line(width / 4 - 80, height / 2 + 50, width / 4 + 80, height / 2 + 50);
    line(width / 4, height / 2 + 50 + 10, width / 4, height / 2 + 50 - 10);
    noStroke();
    fill(255);
    rect(sliderRect.x, sliderRect.y, sliderRect.w, sliderRect.h);

    let eValue = map(sliderRect.x, width / 4, width / 4 + 80, 10.2, 20);
    textAlign(CENTER, CENTER);
    textSize(16);
    noStroke();
    fill(255);
    text(eValue.toFixed(1) + ' eV', sliderRect.x, sliderRect.y - 15);

    for (let i = 1; i < 160; i++) {
      let colors = wavelengthToColor(i + 380);
      fill(colors[1] * 255, colors[2] * 255, colors[3] * 255, colors[4] * 255);
      rect(width / 4 - 80 + i, sliderRect.y + 40, 1, 5);
    }


    if (mouseIsPressed && mouseX < 250 && mouseY > height / 2 + 120) {
      if (add) {
        photons.push({
          x: 0,
          y: height / 2,
          wavelength: map(sliderRect.x, width / 4 - 80, width / 4 + 80, 380, 540),
          show: true,
          check: true
        });
        add = false;
        screen.transparency = 0;
      }
    } else {
      add = true;
    }

    if (mouseIsPressed && mouseX < width / 4 + 80 && mouseY < height / 2 + 65) {
      sliderRect.x = mouseX - 5;
    }

    for (let photon of photons) {
      if (photon.show) {
        // let color = wavelengthToColor(photon.wavelength);
        // fill(color[1] * 255, color[2] * 255, color[3] * 255, color[4] * 255);
        // noStroke();
        // ellipse(photon.x, photon.y, 10, 10);

        createWavePacket(photon);

      }
      photon.x += 3;

      let d = abs(photon.wavelength - 470);

      if (photon.x >= screen.x && d > 10) {
        screen.transparency = photon.wavelength;
        photon.show = false;
      } else if (photon.x >= screen.x && photon.check == false) {
        screen.transparency = photon.wavelength;
        photon.show = false;
      }

      if (photon.x >= positive_charge.x && d <= 10 && photon.show == true && photon.check == true) {
        orbital_to_show.orbital_radius = 150;
        photon.show = false;
        initTime = second();
        destTime = initTime + 4 * random();
        console.log(initTime, destTime);
      }
    }

    fill(negative_charge.color);
    noStroke();
    ellipse(orbital_to_show.x, orbital_to_show.y, orbital_to_show.orbital_radius, orbital_to_show.orbital_radius);
    fill(positive_charge.color);
    ellipse(positive_charge.x, positive_charge.y, 10, 10);

    if (orbital_to_show.orbital_radius == 150 && second() > destTime) {
      orbital_to_show.orbital_radius = 50;
      photons.push({
        x: width / 2,
        y: height / 2,
        wavelength: 380 + 80,
        show: true,
        check: false
      });
    }

    // if (orbital_to_show.orbital_radius > 50) {
    //   orbital_to_show.x += random(-2, 2);
    // }

    let color = wavelengthToColor(screen.transparency);
    fill(color[1] * 255, color[2] * 255, color[3] * 255);
    stroke(255);
    rect(screen.x, screen.y, screen.w, screen.h);

    textSize(16);
    textFont('Bai Jamjuree');
    textAlign(CENTER, CENTER);
    if (orbital_to_show.orbital_radius < 150) {
      fill(255);
      noStroke();
      text('1s', width / 2, height / 2 + 200);
      changeD3(50);
    } else {
      fill(255, 0, 0);
      noStroke();
      text('Unstable 2s', width / 2, height / 2 + 200);
      changeD3(25);
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