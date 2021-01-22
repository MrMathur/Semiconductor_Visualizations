let nucleusX, nucleusY, nucleusR;
let sceneCount;

let atom, atom1, atom2;

let selection, selection2, selection3, selection4, selection5 = [],
  selection6 = [];
let atoms = [];

let latticeAtoms = [];

var globalOrbitalCount = 0;

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

  nucleusX = width / 2;
  nucleusY = height / 2;
  nucleusR = 30;

  atom = new Atom(nucleusX, nucleusY, nucleusR, 2, 2, 2, 2, 2, 2, 2);
  atom1 = new Atom(width / 3 - 50, nucleusY, nucleusR, 0, 0, 0, 0, 0, 2, 2);
  atom2 = new Atom(2 * width / 3 + 50, nucleusY, nucleusR, 0, 0, 0, 0, 0, 2, 2);
  sceneCount = 0;

  xLimit = ((int)(width / 180));
  yLimit = ((int)(height / 180));

  for (let i = -xLimit - 2; i <= xLimit + 2; i++) {
    latticeAtoms[i] = [];
    let selected = false;
    for (let j = -yLimit - 2; j <= yLimit + 2; j++) {
      if ((i == 0 && (j == 1 || j == 0 || j == -1)) || (j == 0 && (i == 0 || i == -1 || i == 1))) {
        selected = true;
      } else {
        selected = false;
      }
      latticeAtoms[i][j] = new LatticeAtom(width / 2 + i * 90, height / 2 + j * 90, selected);
    }
  }

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
    fill(255, 247, 174);
    ellipse(2 * width / 5, height / 2 - 50, 10, 10);
    fill(110, 207, 127);
    ellipse(3 * width / 5, height / 2 - 50, 10, 10);
    fill(234, 159, 162);
    ellipse(4 * width / 5, height / 2 - 50, 10, 10);
    textFont('Bai Jamjuree');
    textAlign(RIGHT, CENTER);
    fill(255);

    textAlign(RIGHT, CENTER);
    textSize(18);

    fill(255, 247, 174);
    text("Electron", 2 * width / 5 - 2, height / 2 + 50);
    fill(110, 207, 127);
    text("Proton", 3 * width / 5, height / 2 + 50);
    fill(234, 159, 162);
    text("Neutron", 4 * width / 5, height / 2 + 50);

    textSize(36);

    fill(255, 247, 174);
    text("14", 2 * width / 5 - 2, height / 2 + 100);
    fill(110, 207, 127);
    text("14", 3 * width / 5, height / 2 + 100);
    fill(234, 159, 162);
    text("14", 4 * width / 5, height / 2 + 100);

  } else if (sceneCount == 1) {

    atom.show();
    atom.check();

    fill(255);
    textFont("Bai Jamjuree");
    textSize(32);
    textAlign(CENTER);
    text('Silicon Atom', width / 2, height / 2 - 275);
  } else if (sceneCount == 2) {
    atom1.show();
    atom2.show();
    atom1.check();
    atom2.check();
    atom1.drawBox();
    atom2.drawBox();

    fill(255);
    textFont("Bai Jamjuree");
    textSize(32);
    textAlign(CENTER);
    text('Silicon Atom', width / 2, height / 2 - 275);
  } else if (sceneCount == 3.5) {
    atom1.show();
    atom2.show();
    atom1.checkSP3();
    atom2.checkSP3();
  } else if (sceneCount == 3) {

    fill(255);
    textFont("Bai Jamjuree");
    textSize(24);
    textAlign(CENTER);
    text('3s', width / 6, height / 3 + 75);
    text('3px', width / 3, height / 3 + 75);
    text('3py', 7*width / 12, height / 3 + 75);
    text('3pz', 5*width / 6, height / 3 + 75);
    text('4 x sp3', width/2, 2 * height / 3 + 200);

    fill(255, 247, 174);
    noStroke();
    ellipse(width / 6, height / 3 - 75, 48, 48);

    fill(148, 163, 243);
    noStroke();
    ellipse(width / 6, height / 3 - 75, 16, 16);

    stroke(255);
    strokeWeight(2);
    drawingContext.setLineDash([]);
    line(width / 4, height / 3 - 15 - 75, width / 4, height / 3 + 15 - 75);
    line(width / 4 - 15, height / 3 - 75, width / 4 + 15, height / 3 - 75);

    noStroke();
    fill(110, 207, 127);
    drawPOrbital(width / 3, height / 3 - 75, 80);

    fill(148, 163, 243);
    noStroke();
    ellipse(width / 3, height / 3 - 75, 16, 16);

    stroke(255);
    strokeWeight(2);
    drawingContext.setLineDash([]);
    line(11*width / 24 - 40, height / 3 - 15 - 75, 11*width /24 - 40, height / 3 + 15 - 75);
    line(11*width / 24 - 40 - 15, height / 3 - 75, 11*width / 24 - 40 + 15, height / 3 - 75);

    translate(7*width/12, height/3 - 75);
    noStroke();
    rotate(PI/2);
    fill(110, 207, 127);
    drawPOrbital(0, 0, 80);
    rotate(-PI/2);
    translate(-7*width/12, -height/3 + 75);

    fill(148, 163, 243);
    noStroke();
    ellipse(7*width / 12, height / 3 - 75, 16, 16);

    stroke(255);
    strokeWeight(2);
    drawingContext.setLineDash([]);
    line(17*width / 24 , height / 3 - 15 - 75, 17*width /24 , height / 3 + 15 - 75);
    line(17*width / 24  - 15, height / 3 - 75, 17*width / 24  + 15, height / 3 - 75);

    translate(10*width/12, height/3 - 75);
    noStroke();
    rotate(PI/3);
    fill(110, 207, 127);
    drawPOrbital(0, 0, 65);
    rotate(-PI/3);
    translate(-10*width/12, -height/3 + 75);

    fill(148, 163, 243);
    noStroke();
    ellipse(10*width / 12, height / 3 - 75, 16, 16);

    stroke(255);
    strokeWeight(2);
    drawingContext.setLineDash([]);
    line(width / 2 - 15, height / 2 - 5, width / 2 + 15, height / 2 - 5);
    line(width / 2 - 15, height / 2 + 5, width / 2 + 15, height / 2 + 5);

    fill(255, 247, 174);
    ellipse(width/2, 2*height/3 + 25 - 0.25*80, 0.2*60, 0.2*60);

    translate(width/2, 2*height/3 + 25);
    drawSP3Orbital(0, 0, 100);
    translate(-width/2, -2*height/3 + 25);

    translate(width/2, 2*height/3 - 25);
    rotate(2*PI/3);
    drawSP3Orbital(0, 0, 80);
    rotate(-2*PI/3);
    translate(-width/2, -2*height/3 + 25);

    translate(width/2, 2*height/3 - 25);
    rotate(-2*PI/3);
    drawSP3Orbital(0, 0, 80);
    rotate(2*PI/3);
    translate(-width/2, -2*height/3 + 25);

    translate(width/2, 2*height/3 - 25);
    rotate(PI);
    drawSP3OrbitalHalf(0, 0, 110);
    rotate(-PI);
    translate(-width/2, -2*height/3 + 25);

  } else if (sceneCount == 4) {
    // atom1.checkSP3();
    // atom2.checkSP3();

    if (mouseIsPressed && atom2.x - atom1.x > 200) {
      atom2.moveTo(mouseX, height / 2);
    } else {
      atom2.moveTo(atom1.x + 210, height / 2);
    }


    fill(255, 247, 174, 50);
    ellipse((atom1.x + atom2.x) / 2, height / 2, atom2.x - atom1.x, 10000 / (atom2.x - atom1.x));
    ellipse(atom1.x - 25, height/2, 50, 5000/(atom2.x - atom1.x));
    ellipse(atom2.x + 25, height/2, 50, 5000/(atom2.x - atom1.x));
    updateSplit(width / (10 * (atom2.x - atom1.x)));
    atom1.show();
    atom2.show();
  } else if (sceneCount == 5) {
    visualizeOrbitals(latticeAtoms, xLimit, yLimit);
    checkBoundaryAtoms(latticeAtoms, xLimit, yLimit);
    for (let i = -xLimit; i <= xLimit; i++) {
      for (let j = -yLimit; j <= yLimit; j++) {
        latticeAtoms[i][j].show();
      }
    }
  } else if (sceneCount == 6) {
    translate(width/2, height/2);
    noStroke();
    for (let x = -xLimit*90; x <= xLimit*90; x += 90) {
      for (let y = -yLimit*90; y < yLimit*90; y += 90) {
        
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
    translate(-width/2, -height/2);
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
    let y = c * (i) * (i) * Math.sqrt(1 - i * i) ;
    vertex(a + y, b + x - 0.15*c);
  }
  for (let i = 0; i > -PI / 2; i -= 0.001) {
    let x = c * (i);
    let y = c * (i) * (i) * Math.sqrt(1 - i * i) ;
    vertex(a - y, b + x - 0.15*c);
  }
  endShape();
  fill(255, 247, 174);
  ellipse(a, b + 0.15*c, 0.2*c, 0.2*c);
}

drawSP3OrbitalHalf = (a, b, c) => {

  fill(110, 207, 127);
  noStroke();
  beginShape();
  for (let i = -PI / 2; i < 0; i += 0.001) {
    let x = c * (i);
    let y = c * (i) * (i) * Math.sqrt(1 - i * i) ;
    vertex(a + y, b + x - 0.15*c);
  }
  for (let i = 0; i > -PI / 2; i -= 0.001) {
    let x = c * (i);
    let y = c * (i) * (i) * Math.sqrt(1 - i * i) ;
    vertex(a - y, b + x - 0.15*c);
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
    drawingContext.setLineDash([,]);

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
      } else if (latticeAtoms[i-1][j].selected || latticeAtoms[i+1][j].selected || latticeAtoms[i][j-1].selected || latticeAtoms[i][j+1].selected) {
        latticeAtoms[i][j].boundary = true;
      } else {
        latticeAtoms[i][j].boundary = false;
      }
    }
  }
}