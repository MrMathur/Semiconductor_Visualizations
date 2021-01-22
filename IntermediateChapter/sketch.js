let nucleusX, nucleusY, nucleusR;
let sceneCount;

let sliderVal2 = 0;

let atom, atom1, atom2;

let selection, selection2, selection3, selection4, selection5 = [],
  selection6 = [];
let atoms = [];

let latticeAtoms = [];
let sx, sy;

let mx, my;

var globalOrbitalCount = 0;

let sliderVal = 50;

let releasePhoton = false;

let motionElectron = false;
let photon;

let latAtoms = [];

let currentElectron;

let holes = [];

function mouseClicked() {
  if (sceneCount == 1) {
    atom.checkClick();
  } else if (sceneCount == 2) {
    atom1.check();
    atom2.check();
  }
}

function setup() {
  let canvas = createCanvas(2 * windowWidth / 3, windowHeight);
  canvas.parent('visualization');

  photon = {
    x: 0,
    y: 0,
    xEnd: width,
    wavelength: 300,
    show: true,
    check: true
  }

  nucleusX = width / 2;
  nucleusY = height / 2;
  nucleusR = 30;

  atom = new Atom(nucleusX, nucleusY, nucleusR, 2, 2, 2, 2, 2, 2, 2);
  atom1 = new Atom(width / 3 - 50, nucleusY, nucleusR, 0, 0, 0, 0, 0, 2, 2);
  atom2 = new Atom(2 * width / 3 + 50, nucleusY, nucleusR, 0, 0, 0, 0, 0, 2, 2);
  sceneCount = 0;

  xLimit = ((int)(width / 180));
  yLimit = ((int)(height / 180));



  for (let i = -xLimit; i <= xLimit; i++) {
    latticeAtoms[i] = [];
    latAtoms[i] = [];
    let selected = false;
    for (let j = -yLimit; j <= yLimit; j++) {
      if ((i == 0 && (j == 1 || j == 0 || j == -1)) || (j == 0 && (i == 0 || i == -1 || i == 1))) {
        selected = true;
      } else {
        selected = false;
      }
      latticeAtoms[i][j] = new LatticeAtom(width / 2 + i * 90, height / 2 + j * 90, selected);
      latAtoms[i][j] = new latAtom(width / 2 + i * 90, height / 2 + j * 90);
    }
  }

  for (let i = 0; i < 1; i++) {
    let rx = width / 2 + floor(xLimit * (0.5 - random())) * 90,
      ry = height / 2 + floor(yLimit * (0.5 - random())) * 90,
      ex = floor(random() * 4);
    if (ex == 0) {
      holes.push({
        x: rx + 35,
        y: ry,
        dx: rx + 35,
        dy: ry,
        ox: rx + 35,
        oy: ry,
      });
    } else if (ex == 1) {
      holes.push({
        x: rx - 35,
        y: ry,
        dx: rx - 35,
        dy: ry,
        ox: rx - 35,
        oy: ry,
      });
    } else if (ex == 2) {
      holes.push({
        x: rx,
        y: ry + 35,
        dx: rx,
        dy: ry + 35,
        ox: rx,
        oy: ry + 35,
      });
    } else if (ex == 3) {
      holes.push({
        x: rx,
        y: ry - 35,
        dx: rx,
        dy: ry - 35,
        ox: rx,
        oy: ry - 35,
      });
    }
  }

  sx = 0, sy = 55;

  mx = -90, my = 55;

}

function draw() {
  background(18, 18, 18);

  if (mouseX > 0) {
    select('body').addClass('noselect');
  } else {
    if (select('body').hasClass('noselect')) {
      select('body').removeClass('noselect');
    }
  }

  if (sceneCount == 0.5) {
    translate(width / 2, height / 2);
    noStroke();
    for (let x = -xLimit * 90; x <= xLimit * 90; x += 90) {
      for (let y = -yLimit * 90; y < yLimit * 90; y += 90) {

        rx = abs(x);
        ry = abs(y);
        let opacity = map(sqrt(rx * rx + ry * ry) / 1.414, sqrt(width * width + height * height) / 5, 0, 0, 255);

        fill(255, 247, 174, opacity / 2);
        ellipse(x + 45, y, 90, 45);
        // ellipse(width / 2 - x - 45, height / 2 + y, 90, 45);
        // ellipse(width / 2 + x + 45, height / 2 - y, 90, 45);
        // ellipse(width / 2 - x - 45, height / 2 - y, 90, 45);
        ellipse(x, y + 45, 45, 90);
        // ellipse(width / 2 - x, height / 2 + y + 45, 45, 90);
        // ellipse(width / 2 + x, height / 2 - y - 45, 45, 90);
        // ellipse(width / 2 - x, height / 2 - y - 45, 45, 90);

        fill(148, 163, 243, opacity);
        ellipse(x, y, 30, 30);
        // ellipse(width / 2 - x, height / 2 + y, 30, 30);
        // ellipse(width / 2 + x, height / 2 - y, 30, 30);
        // ellipse(width / 2 - x, height / 2 - y, 30, 30);
      }
    }
    translate(-width / 2, -height / 2);

  } else if (sceneCount == 1) {
    translate(width / 2, height / 2);
    noStroke();
    for (let x = -xLimit * 90; x <= xLimit * 90; x += 90) {
      for (let y = -yLimit * 90; y < yLimit * 90; y += 90) {

        rx = abs(x);
        ry = abs(y);
        let opacity = map(sqrt(rx * rx + ry * ry) / 1.414, sqrt(width * width + height * height) / 5, 0, 0, 255);

        // fill(255, 247, 174, opacity / 2);
        // ellipse(x + 45, y, 90, 45);
        stroke(255, 255, 255, opacity / 2);
        line(x, y, x + 90, y);
        // ellipse(x, y + 45, 45, 90);
        line(x, y, x, y + 90);

        fill(255, 247, 174, opacity);
        ellipse(x + 35, y, 10, 10);
        ellipse(x + 55, y, 10, 10);
        ellipse(x, y + 35, 10, 10);
        ellipse(x, y + 55, 10, 10);

        noStroke();
        fill(148, 163, 243, opacity);
        ellipse(x, y, 30, 30);
      }
    }
    translate(-width / 2, -height / 2);
  } else if (sceneCount == 2) {

    // scale(2);
    for (let i = -xLimit; i <= xLimit; i++) {
      for (let j = -yLimit; j <= yLimit; j++) {
        latAtoms[i][j].showGrid();
        latAtoms[i][j].show();
        latAtoms[i][j].showElectrons();
      }
    }
    // scale(1 / 2);

    if (releasePhoton) {
      fill(255);
      // ellipse(photon.x,photon.y, 10,10);
      createWavePacket(photon);
      photon.x += 5;
      if (photon.x >= photon.xEnd) {
        releasePhoton = false;
        if (currentElectron) {
          currentElectron.selected = true;
          d3bands2Transition();
        }
      }
    }



  } else if (sceneCount == 3.5) {

    sliderVal = 90;

    translate(width / 2, height / 2);
    scale(2);
    noStroke();
    for (let x = -xLimit * 90; x <= xLimit * 90; x += 90) {
      for (let y = -yLimit * 90; y < yLimit * 90; y += 90) {
        rx = abs(x);
        ry = abs(y);
        let opacity = map(sqrt(rx * rx + ry * ry) / 1.414, sqrt(width * width + height * height) / 5, 0, 0, 255 / 3);

        stroke(255, 255, 255, opacity / 2);
        strokeWeight(1);
        line(x, y, x + 90, y);
        // ellipse(x, y + 45, 45, 90);
        line(x, y, x, y + 90);

        fill(255, 247, 174, opacity);
        noStroke();
        ellipse(x + 35, y, 10, 10);
        ellipse(x + 55, y, 10, 10);
        ellipse(x, y + 35, 10, 10);

        if (x == 0 && y == 0) {
          // fill(255, 247, 174, opacity / 2);
          // ellipse(x + 45, y, 90, 45);


          noFill();
          // noStroke();
          // fill(255, 247, 174, opacity*3);
          stroke(110, 207, 127);
          strokeWeight(2);
          ellipse(x, y + 55, 10, 10);
        } else if (x == -90 && y == 0) {
          noFill();
          // noStroke();
          // fill(255, 247, 174, opacity*3);
          stroke(110, 207, 127);
          strokeWeight(2);
          ellipse(x, y + 55, 10, 10);
        } else {

          fill(255, 247, 174, opacity);
          ellipse(x, y + 55, 10, 10);
        }

        noStroke();
        fill(148, 163, 243, opacity);
        ellipse(x, y, 30, 30);
      }
    }

    if (sliderVal <= 80) {
      sx = lerp(sx, 0, 0.4);
      sy = lerp(sy, 55, 0.4);
    } else {
      sx = lerp(sx, 0 + 45 + map(noise(frameCount / 10), 0, 1, -500, 500), 0.03);
      sy = lerp(sy, 45 + map(noise(frameCount / 10 + 1000), 0, 1, -500, 500), 0.03);
    }

    fill(255, 247, 174);
    // stroke(255);
    // strokeWeight(4);
    ellipse(sx, sy, 10, 10);

    fill(255, 247, 174);
    // stroke(255);
    // strokeWeight(4);
    ellipse(mx, my, 12, 12);

    noStroke();
    textFont('Bai Jamjuree');
    textAlign(CENTER, CENTER);

    if (motionElectron) {
      mx = lerp(mx, 0, 0.01);
      // my = lerp(my, 0, 0.4);

      fill(110, 207, 127);
      text("New Hole Created", -90, my + 30);
    } else {
      fill(255);
      text("Click on Electron to move", mx, my + 30);
    }

    scale(1 / 2);
    translate(-width / 2, -height / 2);
  } else if (sceneCount == 3) {

    sliderVal = 90;

    if (releasePhoton) {
      fill(255);
      // ellipse(photon.x,photon.y, 10,10);
      createWavePacket(photon);
      photon.x += 10;
      if (sliderVal2 <= 80 && photon.x >= width) {
        releasePhoton = false;
      } else if (sliderVal2 > 80 && photon.x >= width / 2) {
        releasePhoton = false;
      }
    }

    translate(width / 2, height / 2);
    scale(2);
    noStroke();
    for (let x = -xLimit * 90; x <= xLimit * 90; x += 90) {
      for (let y = -yLimit * 90; y < yLimit * 90; y += 90) {
        rx = abs(x);
        ry = abs(y);
        let opacity = map(sqrt(rx * rx + ry * ry) / 1.414, sqrt(width * width + height * height) / 5, 0, 0, 255 / 3);

        stroke(255, 255, 255, opacity / 2);
        strokeWeight(1);
        line(x, y, x + 90, y);
        // ellipse(x, y + 45, 45, 90);
        line(x, y, x, y + 90);

        fill(255, 247, 174, opacity);
        noStroke();
        ellipse(x + 35, y, 10, 10);
        ellipse(x + 55, y, 10, 10);
        ellipse(x, y + 35, 10, 10);

        if (x != 0 || y != 0) {
          // fill(255, 247, 174, opacity / 2);
          // ellipse(x + 45, y, 90, 45);
          fill(255, 247, 174, opacity);
          ellipse(x, y + 55, 10, 10);
        } else {
          noFill();
          // noStroke();
          // fill(255, 247, 174, opacity*3);
          stroke(110, 207, 127);
          strokeWeight(2);
          ellipse(x, y + 55, 10, 10);

          noStroke();
          fill(110, 207, 127);
          textFont('Bai Jamjuree');
          textAlign(CENTER, CENTER);
          text("Hole", x, y + 100);
        }

        noStroke();
        fill(148, 163, 243, opacity);
        ellipse(x, y, 30, 30);
      }
    }

    if (sliderVal <= 80) {
      sx = lerp(sx, 0, 0.4);
      sy = lerp(sy, 55, 0.4);
    } else {
      sx = lerp(sx, 0 + 45 + map(noise(frameCount / 10), 0, 1, -500, 500), 0.03);
      sy = lerp(sy, 45 + map(noise(frameCount / 10 + 1000), 0, 1, -500, 500), 0.03);
    }

    fill(255, 247, 174);
    // stroke(255);
    // strokeWeight(4);
    ellipse(sx, sy, 10, 10);
    noStroke();
    textFont('Bai Jamjuree');
    textAlign(CENTER, CENTER);
    text("Electron", 55, 100);

    scale(1 / 2);
    translate(-width / 2, -height / 2);
  } else if (sceneCount == 4) {


    resetRandom();
    sliderVal = 90;

    translate(width / 2, height / 2);
    scale(2);
    noStroke();
    for (let x = -xLimit * 90; x <= xLimit * 90; x += 90) {
      for (let y = -yLimit * 90; y < yLimit * 90; y += 90) {
        rx = abs(x);
        ry = abs(y);
        let opacity = map(sqrt(rx * rx + ry * ry) / 1.414, sqrt(width * width + height * height) / 5, 0, 0, 255 / 3);

        stroke(255, 255, 255, opacity / 2);
        strokeWeight(1);
        line(x, y, x + 90, y);
        // ellipse(x, y + 45, 45, 90);
        line(x, y, x, y + 90);

        fill(255, 247, 174, opacity);
        noStroke();
        ellipse(x + 35, y, 10, 10);
        ellipse(x + 55, y, 10, 10);
        ellipse(x, y + 35, 10, 10);

        if (x == -90 && y == 0) {
          noFill();
          // noStroke();
          // fill(255, 247, 174, opacity*3);
          stroke(110, 207, 127);
          strokeWeight(2);
          ellipse(x, y + 55, 10, 10);
        } else {

          fill(255, 247, 174, opacity);
          ellipse(x, y + 55, 10, 10);
        }

        noStroke();
        fill(148, 163, 243, opacity);
        ellipse(x, y, 30, 30);
      }
    }

    if (sliderVal <= 80) {
      sx = lerp(sx, 0, 0.4);
      sy = lerp(sy, 55, 0.4);
    } else {
      sx = lerp(sx, 0 + 45 + map(noise(frameCount / 10), 0, 1, -500, 500), 0.03);
      sy = lerp(sy, 45 + map(noise(frameCount / 10 + 1000), 0, 1, -500, 500), 0.03);
    }

    drawArrow(createVector(-10, 55), createVector(-70, 0), color(110, 207, 127));

    fill(255, 247, 174);
    // stroke(255);
    // strokeWeight(4);
    ellipse(sx, sy, 10, 10);

    noStroke();
    textFont('Bai Jamjuree');
    textAlign(CENTER, CENTER);
    fill(110, 207, 127);
    text("Path of hole", -45, my + 30);

    scale(1 / 2);
    translate(-width / 2, -height / 2);
  } else if (sceneCount == 5) {
    for (let i = -xLimit; i <= xLimit; i++) {
      for (let j = -yLimit; j <= yLimit; j++) {
        latAtoms[i][j].showGrid();
        latAtoms[i][j].show();
        latAtoms[i][j].showElectrons();
      }
    }

    if (frameCount % 1000 <= 5) {
      for (let i = 0; i < 1; i++) {
        let rx = width / 2 + floor(xLimit * (0.5 - random())) * 90,
          ry = height / 2 + floor(yLimit * (0.5 - random())) * 90,
          ex = floor(random() * 4);

        holes[i].ox = holes[i].x;
        holes[i].oy = holes[i].y;
        if (ex == 0) {
          holes[i].dx = rx + 35;
          holes[i].dy = ry;
        } else if (ex == 1) {
          holes[i].dx = rx - 35;
          holes[i].dy = ry;
        } else if (ex == 2) {
          holes[i].dx = rx;
          holes[i].dy = ry + 35;
        } else if (ex == 3) {
          holes[i].dx = rx;
          holes[i].dy = ry - 35;
        }
      }
    }

    for (let hole of holes) {
      fill(18);
      stroke(110, 207, 127);
      strokeWeight(2);
      ellipse(hole.x, hole.y, 10, 10);

      drawArrow(createVector(hole.ox - 5, hole.oy - 5), createVector(hole.x - hole.ox, hole.y - hole.oy), color(110, 207, 127, 50));

      // stroke(110, 207, 127, 50);
      // line(hole.ox - 5, hole.oy - 5, hole.x - 5, hole.y - 5);
      drawArrow(createVector(hole.dx + 5, hole.dy + 5), createVector(hole.ox - hole.dx, hole.oy - hole.dy), color(255, 247, 174, 50));
      // stroke(255, 247, 174, 50);
      // line(hole.dx + 5 , hole.dy + 5, hole.ox + 5, hole.oy + 5);

      noStroke();

      hole.x = lerp(hole.x, hole.dx, 0.006);
      hole.y = lerp(hole.y, hole.dy, 0.006);
    }
  } else if (sceneCount == 6) {
    translate(width / 2, height / 2);
    noStroke();
    for (let x = -xLimit * 90; x <= xLimit * 90; x += 90) {
      for (let y = -yLimit * 90; y < yLimit * 90; y += 90) {

        rx = abs(x);
        ry = abs(y);
        let opacity = map(sqrt(rx * rx + ry * ry) / 1.414, sqrt(width * width + height * height) / 5, 0, 0, 255);

        fill(255, 247, 174, opacity / 2);
        ellipse(x + 45, y, 90, 45);
        // ellipse(width / 2 - x - 45, height / 2 + y, 90, 45);
        // ellipse(width / 2 + x + 45, height / 2 - y, 90, 45);
        // ellipse(width / 2 - x - 45, height / 2 - y, 90, 45);
        ellipse(x, y + 45, 45, 90);
        // ellipse(width / 2 - x, height / 2 + y + 45, 45, 90);
        // ellipse(width / 2 + x, height / 2 - y - 45, 45, 90);
        // ellipse(width / 2 - x, height / 2 - y - 45, 45, 90);

        fill(148, 163, 243, opacity);
        ellipse(x, y, 30, 30);
        // ellipse(width / 2 - x, height / 2 + y, 30, 30);
        // ellipse(width / 2 + x, height / 2 - y, 30, 30);
        // ellipse(width / 2 - x, height / 2 - y, 30, 30);
      }
    }
    translate(-width / 2, -height / 2);
  }
}

class Electron {
  constructor(r, theta, type, nx, ny) {
    this.r = r;
    this.cr = 10;
    this.theta = theta;
    this.theta_vel = random(-0.001, 0.001);
    this.clicked = false;
    this.type = type;
    this.nx = nx;
    this.ny = ny;

    this.checkClicked = false;

    this.clickedSP3 = false;
  }

  show(angle) {
    this.add = 0;
    if (angle) {
      this.add += angle;
    }

    this.x = this.nx + this.r * cos(this.theta + this.add);
    this.y = this.ny + this.r * sin(this.theta + this.add);

    if (this.type != '3s' && this.type != '3p') {
      stroke(120, 120, 120);
      drawingContext.setLineDash([]);
      line(this.nx, this.ny, this.x, this.y);
    } else {
      stroke(120, 120, 120);
      drawingContext.setLineDash([5, 15]);
      line(this.nx, this.ny, this.x, this.y);
    }


    noStroke();
    if (this.clicked) {

      fill(255, 247, 174);
      ellipse(this.x, this.y, this.cr + 5, this.cr + 5);

      this.drawOrbital();
    } else {
      fill(255);
      ellipse(this.x, this.y, this.cr, this.cr);
    }

    if (this.clickedSP3) {

      fill(255, 247, 174);
      ellipse(this.x, this.y, this.cr + 5, this.cr + 5);

      this.drawSP3();
    } else {
      fill(255);
      ellipse(this.x, this.y, this.cr, this.cr);
    }

    if (!this.checkClicked) {
      d3clear();
    }
  }

  drawOrbital() {
    fill(255, 247, 174, 50);
    // stroke(255, 247, 174, 150)
    // strokeWeight(3);
    noStroke();
    drawingContext.setLineDash([]);
    if (this.type.includes('s')) {
      ellipse(this.nx, this.ny, this.r * 2, this.r * 2)
    } else {
      translate(this.nx, this.ny);
      rotate(this.theta + this.add);
      beginShape();
      for (let i = -PI / 2; i < PI / 2; i += 0.001) {
        let x = this.r * (i);
        let y = this.r * (i) * (i) * Math.sqrt(1 - i * i);
        vertex(x, y);
      }
      for (let i = PI / 2; i > -PI / 2; i -= 0.001) {
        let x = this.r * (i);
        let y = this.r * (i) * (i) * Math.sqrt(1 - i * i);
        vertex(x, -y);
      }
      endShape();
      rotate(-this.theta - this.add);
      translate(-this.nx, -this.ny);
    }
    if (this.checkClicked) {
      d3update(this.type);
      fill(255, 247, 174);
      textFont('Bai Jamjuree');
      textSize(28);
      textAlign(CENTER);
      text(this.type + ' Electrons', width / 2, height - 100);

      fill(255);
      textSize(16);
      textAlign(CENTER);
      text('Lorem ipsum dolor sit amet consectetur adipisicing elit.', width / 2, height - 75);
    }
  }

  update() {
    this.theta += this.theta_vel;
  }

  check() {
    let d = int(dist(this.x, this.y, mouseX, mouseY));
    if (d < this.cr) {
      this.clicked = true;
    } else {
      this.clicked = false;
    }
  }

  checkClick() {
    let d = int(dist(this.x, this.y, mouseX, mouseY));
    if (d < this.cr) {
      for (let item of selection) {
        if (this.type.includes(item.type)) {
          item.condition = 1;
        } else {
          item.condition = 0;
        }
      }
      this.checkClicked = true;
    } else {
      this.checkClicked = false;
    }
    return this.checkClicked;
  }

  checkSP3() {
    let d = int(dist(this.x, this.y, mouseX, mouseY));
    if (d < this.cr) {
      this.clickedSP3 = true;
    } else {
      this.clickedSP3 = false;
    }
  }

  drawSP3() {
    fill(255, 247, 174, 50);
    // stroke(255, 247, 174, 150)
    // strokeWeight(3);
    noStroke();
    drawingContext.setLineDash([]);

    translate(this.nx, this.ny);
    rotate(this.theta + this.add);
    beginShape();
    for (let i = 0; i < PI / 2; i += 0.001) {
      let x = this.r * (i);
      let y = this.r * (i) * (i) * Math.sqrt(1 - i * i);
      vertex(x, y);
    }
    for (let i = PI / 2; i > 0; i -= 0.001) {
      let x = this.r * (i);
      let y = this.r * (i) * (i) * Math.sqrt(1 - i * i);
      vertex(x, -y);
    }
    endShape();
    ellipse(-30, 0, 30, 30);
    rotate(-this.theta - this.add);
    translate(-this.nx, -this.ny);
  }

  moveTo(x, y) {
    this.nx = lerp(this.nx, x, 0.01);
    this.ny = lerp(this.ny, y, 0.01);
  }

}

class Nucleus {
  constructor(nucleusX, nucleusY, nucleusR) {
    this.nucleusX = nucleusX;
    this.nucleusY = nucleusY;
    this.nucleusR = nucleusR;
    this.clicked = false;

    this.protons = []
    this.neutrons = []
    for (let i = 0; i < 14; i++) {
      let xp = random(this.nucleusX - this.nucleusR / 2, this.nucleusX + this.nucleusR / 2);
      let yp = random(this.nucleusY - this.nucleusR / 2, this.nucleusY + this.nucleusR / 2);
      let xn = random(this.nucleusX - this.nucleusR / 2, this.nucleusX + this.nucleusR / 2);
      let yn = random(this.nucleusY - this.nucleusR / 2, this.nucleusY + this.nucleusR / 2);
      let r = 7;
      this.protons.push({
        x: xp,
        y: yp,
        r: r
      });
      this.neutrons.push({
        x: xn,
        y: yn,
        r: r
      })
    }
  }

  show() {
    fill(148, 163, 243);
    noStroke();
    if (this.clicked == false) {
      ellipse(this.nucleusX, this.nucleusY, this.nucleusR, this.nucleusR);
    } else {
      fill(255, 247, 174);
      textFont('Bai Jamjuree');
      textSize(28);
      textAlign(CENTER);
      text('Nucleus', width / 2, height - 100);

      fill(255);
      textSize(16);
      textAlign(CENTER);
      text('Lorem ipsum dolor sit amet consectetur adipisicing elit.', width / 2, height - 75);

      noFill();
      stroke(148, 163, 243);
      strokeWeight(3);
      ellipse(this.nucleusX, this.nucleusY, this.nucleusR * 3, this.nucleusR * 3);
      fill(110, 207, 127);
      noStroke();
      for (let i = 0; i < this.protons.length; i++) {
        ellipse(this.protons[i].x, this.protons[i].y, this.protons[i].r, this.protons[i].r)
      }
      fill(234, 159, 162);
      noStroke();
      for (let i = 0; i < this.neutrons.length; i++) {
        ellipse(this.neutrons[i].x, this.neutrons[i].y, this.neutrons[i].r, this.neutrons[i].r)
      }
    }
  }

  check() {
    let d = int(dist(this.nucleusX, this.nucleusY, mouseX, mouseY));
    if (d < this.nucleusR) {
      this.clicked = true;
    } else {
      this.clicked = false;
    }
  }

  moveTo(x, y) {
    this.nucleusX = lerp(this.nucleusX, x, 0.01);
    this.nucleusY = lerp(this.nucleusY, y, 0.01);

    for (let proton of this.protons) {
      proton.x = lerp(proton.x, x, 0.01);
    }
  }
}

class Atom {
  constructor(nucleusX, nucleusY, nucleusR, elec_1s, elec_2s, elec_2px, elec_2py, elec_2pz, elec_3s, elec_3p) {
    this.nucleus = new Nucleus(nucleusX, nucleusY, nucleusR);

    this.x = nucleusX;
    this.y = nucleusY;

    this.nucleusX = nucleusX;
    this.nucleusY = nucleusY;

    this.elec_1s = elec_1s;
    this.elec_2s = elec_2s;
    this.elec_2px = elec_2px;
    this.elec_2py = elec_2py;
    this.elec_2pz = elec_2pz;
    this.elec_3s = elec_3s;
    this.elec_3p = elec_3p;

    this.electrons = [];

    for (let i = 0; i < this.elec_1s; i++) {
      this.electrons.push(new Electron(40, i * PI + PI / 4 - PI / 3, '1s', nucleusX, nucleusY));
    }

    for (let i = 0; i < this.elec_2s; i++) {
      this.electrons.push(new Electron(70, i * PI - PI / 4 - PI / 3, '2s', nucleusX, nucleusY));
    }

    for (let i = 0; i < this.elec_2px; i++) {
      this.electrons.push(new Electron(100, i * PI - PI / 3, '2px', nucleusX, nucleusY));
    }

    for (let i = 0; i < this.elec_2py; i++) {
      this.electrons.push(new Electron(100, i * PI + PI / 2 - PI / 3, '2py', nucleusX, nucleusY));
    }

    for (let i = 0; i < this.elec_2pz; i++) {
      this.electrons.push(new Electron(80, i * PI + PI / 6 - PI / 3, '2pz', nucleusX, nucleusY));
    }

    for (let i = 0; i < this.elec_3s; i++) {
      this.electrons.push(new Electron(140, i * PI - PI / 6 - PI / 3, '3s', nucleusX, nucleusY));
    }

    for (let i = 0; i < this.elec_3s; i++) {
      this.electrons.push(new Electron(160, i * PI, '3p', nucleusX, nucleusY));
    }

    this.drawCon = true;
  }

  show(angle) {

    if (angle) {
      scale(0.5);
    }


    for (let electron of this.electrons) {
      if (this.drawCon) {
        electron.show(angle);
      } else {
        if (electron.checkClicked) {
          electron.drawOrbital();
        }
      }
    }


    this.nucleus.show();

    if (angle) {
      scale(1 / 0.5);
    }

  }

  check() {
    for (let electron of this.electrons) {
      electron.check();
    }

    this.nucleus.check();
  }

  checkClick() {
    let count = 0;
    for (let electron of this.electrons) {
      if (electron.checkClick()) {
        count++;
      }
    }
    if (count == 0) {
      this.drawCon = true;
    } else {
      this.drawCon = false;
    }
  }

  drawBox() {
    noFill();
    drawingContext.setLineDash([]);
    stroke(255);
    strokeWeight(1);
    rect(this.nucleus.nucleusX - 170, this.nucleus.nucleusY - 170, 340, 340);
  }

  checkSP3() {
    for (let electron of this.electrons) {
      electron.checkSP3();
    }
  }

  moveTo(x, y) {
    this.x = lerp(this.x, x, 0.01);
    this.y = lerp(this.y, y, 0.01);

    this.nucleus.moveTo(x, y);
    for (let electron of this.electrons) {
      electron.moveTo(x, y);
    }
  }

}

drawPOrbital = (a, b, c) => {
  beginShape();
  for (let i = -PI / 2; i < PI / 2; i += 0.001) {
    let x = c * (i);
    let y = c * (i) * (i) * Math.sqrt(1 - i * i);
    vertex(a + y, b + x);
  }
  for (let i = PI / 2; i > -PI / 2; i -= 0.001) {
    let x = c * (i);
    let y = c * (i) * (i) * Math.sqrt(1 - i * i);
    vertex(a - y, b + x);
  }
  endShape();
}

drawSP3Orbital = (a, b, c) => {

  fill(110, 207, 127);
  noStroke();
  beginShape();
  for (let i = -PI / 2; i < 0; i += 0.001) {
    let x = c * (i);
    let y = c * (i) * (i) * Math.sqrt(1 - i * i);
    vertex(a + y, b + x - 0.15 * c);
  }
  for (let i = 0; i > -PI / 2; i -= 0.001) {
    let x = c * (i);
    let y = c * (i) * (i) * Math.sqrt(1 - i * i);
    vertex(a - y, b + x - 0.15 * c);
  }
  endShape();
  fill(255, 247, 174);
  ellipse(a, b + 0.15 * c, 0.2 * c, 0.2 * c);
}

drawSP3OrbitalHalf = (a, b, c) => {

  fill(110, 207, 127);
  noStroke();
  beginShape();
  for (let i = -PI / 2; i < 0; i += 0.001) {
    let x = c * (i);
    let y = c * (i) * (i) * Math.sqrt(1 - i * i);
    vertex(a + y, b + x - 0.15 * c);
  }
  for (let i = 0; i > -PI / 2; i -= 0.001) {
    let x = c * (i);
    let y = c * (i) * (i) * Math.sqrt(1 - i * i);
    vertex(a - y, b + x - 0.15 * c);
  }
  endShape();
}

class LatticeAtom {
  constructor(x, y, selected) {
    this.x = x;
    this.y = y;

    this.selected = selected;
    this.boundary = false;

    this.r = 30;
  }

  mouseHover() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    return d < this.r;
  }

  show() {
    if (this.selected) {
      noStroke();
      fill(148, 163, 243, 255);
    } else if (this.boundary) {
      stroke(180);
      strokeWeight(2);
      drawingContext.setLineDash([8, 8]);
      fill(148, 163, 243, 50);
    } else {
      noStroke();
      fill(148, 163, 243, 10);
    }
    ellipse(this.x, this.y, 30, 30);
    drawingContext.setLineDash([, ]);

    if (this.boundary && this.mouseHover()) {
      textAlign(CENTER, CENTER);
      textSize(18);
      fill(255);
      noStroke();
      text("Add Atom to Lattice", this.x, this.y + 50);
    }
  }

  selectAtom() {
    this.selected = true;
  }
}

function mouseClicked() {
  if (sceneCount == 5) {
    for (let i = -xLimit; i <= xLimit; i++) {
      for (let j = -yLimit; j <= yLimit; j++) {
        if (latticeAtoms[i][j].mouseHover()) {
          if (latticeAtoms[i][j].boundary) {
            latticeAtoms[i][j].selectAtom();
          }
        }
      }
    }
  }
}

visualizeOrbitals = (array, xLimit, yLimit) => {
  let orbitalCount = 0;
  translate(width / 2, height / 2);
  fill(255, 247, 174, 100);
  for (let i = -xLimit; i <= xLimit; i++) {
    for (let j = -yLimit; j <= yLimit; j++) {
      if (array[i][j].selected) {
        if (array[i - 1][j].selected) {
          ellipse(i * 90 - 45, j * 90, 90, 45);
          orbitalCount++;
        }
        if (array[i + 1][j].selected) {
          ellipse(i * 90 + 45, j * 90, 90, 45);
          orbitalCount++;
        }
        if (array[i][j - 1].selected) {
          ellipse(i * 90, j * 90 - 45, 45, 90);
          orbitalCount++;
        }
        if (array[i][j + 1].selected) {
          ellipse(i * 90, j * 90 + 45, 45, 90);
          orbitalCount++;
        }
      }
    }
  }
  translate(-width / 2, -height / 2);
  if (globalOrbitalCount != orbitalCount) {
    updatefourlevels(orbitalCount / 2);
    globalOrbitalCount = orbitalCount;
  }
}

checkBoundaryAtoms = (latticeAtoms, xLimit, yLimit) => {
  for (let i = -xLimit; i <= xLimit; i++) {
    for (let j = -yLimit; j <= yLimit; j++) {
      if (latticeAtoms[i][j].selected) {
        latticeAtoms[i][j].boundary = false;
      } else if (latticeAtoms[i - 1][j].selected || latticeAtoms[i + 1][j].selected || latticeAtoms[i][j - 1].selected || latticeAtoms[i][j + 1].selected) {
        latticeAtoms[i][j].boundary = true;
      } else {
        latticeAtoms[i][j].boundary = false;
      }
    }
  }
}

setSliderValue = (a) => {
  releasePhoton = true;
  photon.x = 0;
  if (a <= 20) {
    let selectedElectron = random(random(random(latAtoms)).electrons);
    currentElectron = selectedElectron;
    selectedElectron.highlight = true;
    photon.y = selectedElectron.y;
    photon.xEnd = selectedElectron.x;
    d3bands2AddElec();
  } else {
    photon.y = height / 2 + 300 * (0.5 - random());
    photon.xEnd = width;
  }
  photon.wavelength = map(a, 1, 100, 400, 800);
  sliderVal2 = a;
  setTimeout(() => {
    sliderVal = a;

    updateBands(a);
  }, 1000);
}

function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(2);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 5;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}

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
  if (col[1] == 0 && col[2] == 0 && col[3] == 0) {
    stroke(255);
  } else {
    stroke(col[1] * 255, col[2] * 255, col[3] * 255);
  }
  strokeWeight(2);
  beginShape();
  for (let i = 0; i < lambda / 2; i++) {
    vertex(x - (i) / 2, photon.y + 60 * sin(2 * PI * i / lambda) * sin(40 * PI * i / lambda));
  }
  endShape();
}

mouseClicked = () => {
  if (sceneCount == 3.5) {
    let d = int(dist(mouseX - width / 2, mouseY - height / 2, 2 * mx, 2 * my));
    if (d < 12) {
      motionElectron = true;
    }
  }
}

class latAtom {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.electrons = [{
        x: x - 35,
        y: y,
        selected: false,
        highlight: false,
        hole: {
          x: x - 35,
          y: y
        }
      },
      {
        x: x,
        y: y - 35,
        selected: false,
        highlight: false,
        hole: {
          x: x,
          y: y - 35
        }
      },
      {
        x: x + 35,
        y: y,
        selected: false,
        highlight: false,
        hole: {
          x: x + 35,
          y: y
        }
      },
      {
        x: x,
        y: y + 35,
        selected: false,
        highlight: false,
        hole: {
          x: x,
          y: y + 35
        }
      }
    ];
  }

  show() {
    fill(148, 163, 243, 100);
    ellipse(this.x, this.y, 30, 30);
  }

  showElectrons() {
    for (let electron of this.electrons) {
      if (electron.highlight) {
        fill(255, 247, 174);
      } else {
        fill(255, 247, 174, 100);
      }
      if (electron.selected) {

        noFill();
        stroke(110, 207, 127);
        strokeWeight(2);
        ellipse(electron.hole.x, electron.hole.y, 10, 10);

        fill(255, 247, 174);
        electron.x = lerp(electron.x, electron.x + 500 * (0.5 - random()), 0.05);
        electron.y = lerp(electron.y, electron.y + 500 * (0.5 - random()), 0.05);
      }
      noStroke();
      ellipse(electron.x, electron.y, 10, 10);
    }
  }

  showGrid() {
    stroke(255, 50);
    strokeWeight(1);
    line(this.x, this.y, this.x, this.y + 45);
    line(this.x, this.y, this.x + 45, this.y);
    line(this.x, this.y, this.x, this.y - 45);
    line(this.x, this.y, this.x - 45, this.y);
    noStroke();
  }
}

resetRandom = () => {

  for (let i = -xLimit; i <= xLimit; i++) {
    latAtoms[i] = [];
    for (let j = -yLimit; j <= yLimit; j++) {
      latAtoms[i][j] = new latAtom(width / 2 + i * 90, height / 2 + j * 90);
      for (let electron of latAtoms[i][j].electrons) {
        // if (random() < 0.1) {
        //   electron.selected = true;
        //   electron.highlight = true;
        // }
      }
    }
  }
}