let nucleusX, nucleusY, nucleusR;
let sceneCount;

let atom, atom1, atom2, atomN;

let atoms = [];

let moveCon = true;

let init = 0;

let a;

let updateVar = 0;

let ox1, ox2, px1, px2;

let electronCloud3, electronCloud4;

let c1, c2;

let xShift, xShift2;
let yShift, yShift2;

let boxes;
let valuesToShow = [];

function mouseClicked() {
  if (sceneCount == 1) {
    atom.checkClick();
  } else if (sceneCount == 2) {
    atom.checkClick();
    atomN.checkClick();
  }
}

function preload() {
  c1 = loadJSON('./data/c1.json');
  c2 = loadJSON('./data/c2.json');
}

function setup() {
  let canvas = createCanvas(2 * windowWidth / 3, windowHeight);
  canvas.parent('visualization');

  nucleusX = width / 2;
  nucleusY = height / 2;
  nucleusR = 30;

  atom = new Atom(nucleusX, nucleusY, nucleusR, 1, 0, 0, 0, 0, 0, 0, false);
  atomN = new Atom(4 * width / 3, nucleusY, nucleusR, 1, 0, 0, 0, 0, 0, 0, true);
  sceneCount = 0;

  ox1 = width / 2;
  px1 = width / 2;
  ox2 = width / 2 + 80;
  px2 = width / 2 + 80;



  a = 20;

  electronCloud = new ElectronCloud(width / 2, height / 2, c1);

  electronCloud2 = new ElectronCloud2(width / 2, height / 2, c2);
  electronCloud.updateSelection(a);
  electronCloud2.updateSelection(a);

  xShift = (ox1 + ox2) / 2;
  yShift = height / 2;
  yShift2 = height / 2;

  xShift2 = (px1 + px2) / 2;

  valuesToShow = {
    "te": true,
    "be": true,
    "eer": true,
    "ppr": true,
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

  if (sceneCount == 1) {
    atom.setTo(width / 2, height / 2);
    atom.show();
    atom.check();

    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    textFont('Bai Jamjuree');
    text("Click to get information about Hydrogen Atom", width / 2, height / 2 + 250);

  } else if (sceneCount == 2) {
    atom.show();
    atom.check();
    atom.setTo(width / 3, height / 2);
    atomN.show();
    atomN.check();
    atomN.setTo(2 * width / 3, height / 2);

    noFill();
    stroke(255, 255, 255, 100);
    rect(atom.nucleus.nucleusX - 150, atom.nucleus.nucleusY - 150, 300, 300);
    rect(atomN.nucleus.nucleusX - 150, atomN.nucleus.nucleusY - 150, 300, 300);

    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    textFont('Bai Jamjuree');
    text("Two isolated Hydrogen Atoms", width / 2, height / 2 + 250);
  } else if (sceneCount == 3) {
    atom.show();
    atom.check();
    atom.setTo(width / 3, height / 2);
    atomN.show();
    atomN.check();
    atomN.setTo(2 * width / 3, height / 2);

    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    textFont('Bai Jamjuree');
    text("Two Hydrogen Atoms in same system", width / 2, height / 2 + 250);
  } else if (sceneCount == 4) {
    atom.show();
    atom.check();
    atom.setTo(width / 3, height / 2);
    // rotate(PI);
    atomN.show();
    atomN.check();
    atomN.setTo(2 * width / 3, height / 2);

    // noFill();
    // stroke(255, 255, 255, 100);
    // rect(atom.nucleus.nucleusX - 150, atom.nucleus.nucleusY - 150, 300, 300);
    // rect(atomN.nucleus.nucleusX - 150, atomN.nucleus.nucleusY - 150, 300, 300);

    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    textFont('Bai Jamjuree');
    text("Splitting increases as distance decreases", width / 2, height / 2 + 250);
    // atom1.show();
    // atom2.show();
  } else if (sceneCount == 5) {
    atom.show();
    atom.check();
    atom.moveTo(width / 4, height / 2);
    // rotate(PI);
    atomN.show();
    // atomN.check();
    // atomN.moveTo(3 * width / 4, height / 2);

    if (mouseIsPressed && moveCon) {
      atomN.moveTo(mouseX, height / 2);
    }

    if (atomN.nucleus.nucleusX < atom.nucleus.nucleusX + 140) {
      atomN.moveTo(atom.nucleus.nucleusX + 160, height / 2);
      moveCon = false;
    } else {
      moveCon = true;
    }

    // noFill();
    // stroke(255, 255, 255, 100);
    // rect(atom.nucleus.nucleusX - 150, atom.nucleus.nucleusY - 150, 300, 300);
    // rect(atomN.nucleus.nucleusX - 150, atomN.nucleus.nucleusY - 150, 300, 300);

    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    textFont('Bai Jamjuree');
    text("Splitting increases as distance decreases", width / 2, height / 2 + 250);


    update5(atomN.nucleus.nucleusX - atom.nucleus.nucleusX);
    // atom1.show();
    // atom2.show();
  } else if (sceneCount == 8) {
    atom.show();
    atom.check();
    atom.moveTo(width / 4, height / 2);
    // rotate(PI);
    atomN.show();
    // atomN.check();
    // atomN.moveTo(3 * width / 4, height / 2);

    var posToMove;

    boxes = document.querySelectorAll('input');

    for (let box of boxes) {
      valuesToShow[box.value] = box.checked;
    }

    if (valuesToShow["be"] && valuesToShow["eer"] && valuesToShow["ppr"]) {
      posToMove = atom.nucleus.nucleusX + 240;
    } else if (valuesToShow["be"] && !valuesToShow["eer"] && valuesToShow["ppr"]) {
      posToMove = atom.nucleus.nucleusX + 160;
    } else if (valuesToShow["be"] && valuesToShow["eer"] && !valuesToShow["ppr"]) {
      posToMove = atom.nucleus.nucleusX + 100;
    } else if (valuesToShow["be"] && !valuesToShow["eer"] && !valuesToShow["ppr"]) {
      posToMove = atom.nucleus.nucleusX;
    } else if (!valuesToShow["be"] && !valuesToShow["eer"] && valuesToShow["ppr"]) {
      posToMove = width;
    } else if (!valuesToShow["be"] && valuesToShow["eer"] && !valuesToShow["ppr"]) {
      posToMove = width;
    } else if (!valuesToShow["be"] && valuesToShow["eer"] && valuesToShow["ppr"]) {
      posToMove = width;
    } else if (!valuesToShow["be"] && !valuesToShow["eer"] && !valuesToShow["ppr"]) {
      posToMove = atomN.nucleus.nucleusX;
    }

    if (mouseIsPressed && moveCon) {
      atomN.moveTo(mouseX, height / 2);
    } else {
      atomN.moveTo(posToMove, height / 2);
    }

    if (atomN.nucleus.nucleusX < atom.nucleus.nucleusX + 140) {
      atomN.moveTo(atom.nucleus.nucleusX + 160, height / 2);
      moveCon = false;
    } else {
      moveCon = true;
    }

    // noFill();
    // stroke(255, 255, 255, 100);
    // rect(atom.nucleus.nucleusX - 150, atom.nucleus.nucleusY - 150, 300, 300);
    // rect(atomN.nucleus.nucleusX - 150, atomN.nucleus.nucleusY - 150, 300, 300);

    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    textFont('Bai Jamjuree');
    text("The bond formation happens at the point of lowest total energy", width / 2, height / 2 + 250);

    update5and5(atomN.nucleus.nucleusX - atom.nucleus.nucleusX);
  } else if (sceneCount == 6) {
    translate(width / 2, height / 2);

    stroke(255, 255, 255, 50);
    strokeWeight(1);
    line(-width / 2, 0, width / 2, 0);
    line(0, -height / 2, 0, height / 2);

    textSize(12);
    fill(255);
    textFont('Bai Jamjuree');
    textAlign(CENTER, CENTER);
    text(`x axis`, width / 2 - 120, 20);
    rotate(-PI / 2);
    text(`distance from x axis`, width / 2 - 200, -20);
    rotate(+PI / 2);

    translate(-width / 2, -height / 2);

    if (mouseIsPressed) {
      ox2 = constrain(lerp(mouseX, ox2, 0.2), ox1 + 80, ox1 + 400);
      if (ox2 - ox1 >= 80 && ox2 - ox1 <= 400) {
        a = floor(abs(ox2 - ox1) / 4);
        xShift = (ox1 + ox2) / 2;
        electronCloud.updateSelection(a);
        updateBonding(100 - a);
      }
    }

    electronCloud.showCloud(xShift, yShift);

    fill(148, 163, 243);
    noStroke();
    ellipse(ox1, height / 2, 10, 10);
    ellipse(ox2, height / 2, 10, 10);
  } else if (sceneCount == 7) {

    translate(width / 2, height / 2);

    stroke(255, 255, 255, 50);
    strokeWeight(1);
    line(-width / 2, 0, width / 2, 0);
    line(0, -height / 2, 0, height / 2);

    textSize(12);
    fill(255);
    textFont('Bai Jamjuree');
    textAlign(CENTER, CENTER);
    text(`x axis`, width / 2 - 120, 20);
    rotate(-PI / 2);
    text(`distance from x axis`, width / 2 - 200, -20);
    rotate(+PI / 2);

    translate(-width / 2, -height / 2);

    if (mouseIsPressed) {
      px2 = constrain(lerp(mouseX, px2, 0.2), px1 + 80, px1 + 400);
      if (ox2 - ox1 >= 80 && ox2 - ox1 <= 400) {
        a = floor(abs(px2 - px1) / 4);
        xShift2 = (px1 + px2) / 2;
        electronCloud2.updateSelection(a);
        updateAntiBonding(100 - a);
      }
    }

    electronCloud2.showCloud(xShift2, yShift2);

    fill(148, 163, 243);
    noStroke();
    ellipse(px1, height / 2, 10, 10);
    ellipse(px2, height / 2, 10, 10);
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

      reset();
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
      fill(255, 247, 174);
      textFont('Bai Jamjuree');
      textSize(28);
      textAlign(CENTER);
      text(this.type + ' Electrons', width / 2, height - 100);

      fill(255);
      textSize(16);
      textAlign(CENTER);
      text('Stable state of Hydrogen electron.', width / 2, height - 75);

      changeD3(-13.6);
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

  moveTo(x, y) {
    this.nx = lerp(this.nx, x, 0.01);
    this.ny = lerp(this.ny, y, 0.01);
  }

  setTo(x, y) {
    this.nx = x;
    this.ny = y;
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
    for (let i = 0; i < 1; i++) {
      // let xp = this.nucleusX - 20;
      let xp = this.nucleusX;
      let yp = this.nucleusY;
      let xn = this.nucleusX + 20;
      let yn = this.nucleusY;
      let r = 10;
      this.protons.push({
        x: xp,
        y: yp,
        r: r
      });
      // this.neutrons.push({
      //   x: xn,
      //   y: yn,
      //   r: r
      // })
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
      text('1 proton 0 neutrons', width / 2, height - 75);

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

  setTo(x, y) {
    this.nucleusX = x;
    this.nucleusY = y;

    for (let proton of this.protons) {
      proton.x = x;
    }
  }
}

class Atom {
  constructor(nucleusX, nucleusY, nucleusR, elec_1s, elec_2s, elec_2px, elec_2py, elec_2pz, elec_3s, elec_3p, elec_l) {
    this.nucleus = new Nucleus(nucleusX, nucleusY, nucleusR);

    this.elec_1s = elec_1s;
    this.elec_2s = elec_2s;
    this.elec_2px = elec_2px;
    this.elec_2py = elec_2py;
    this.elec_2pz = elec_2pz;
    this.elec_3s = elec_3s;
    this.elec_3p = elec_3p;

    this.electrons = [];

    for (let i = 0; i < this.elec_1s; i++) {
      if (elec_l == true) {
        this.electrons.push(new Electron(80, PI, '1s', nucleusX, nucleusY));
      } else {
        this.electrons.push(new Electron(80, 0, '1s', nucleusX, nucleusY));
      }
    }

    for (let i = 0; i < this.elec_2s; i++) {
      this.electrons.push(new Electron(70, i * PI - PI / 4, '2s', nucleusX, nucleusY));
    }

    for (let i = 0; i < this.elec_2px; i++) {
      this.electrons.push(new Electron(100, i * PI, '2px', nucleusX, nucleusY));
    }

    for (let i = 0; i < this.elec_2py; i++) {
      this.electrons.push(new Electron(100, i * PI + PI / 2, '2py', nucleusX, nucleusY));
    }

    for (let i = 0; i < this.elec_2pz; i++) {
      this.electrons.push(new Electron(80, i * PI + PI / 6, '2pz', nucleusX, nucleusY));
    }

    for (let i = 0; i < this.elec_3s; i++) {
      this.electrons.push(new Electron(140, i * PI - PI / 6, '3s', nucleusX, nucleusY));
    }

    for (let i = 0; i < this.elec_3s; i++) {
      this.electrons.push(new Electron(160, i * PI + PI / 3, '3p', nucleusX, nucleusY));
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

  moveTo(x, y) {
    this.x = lerp(this.x, x, 0.01);
    this.y = lerp(this.y, y, 0.01);

    this.nucleus.moveTo(x, y);
    for (let electron of this.electrons) {
      electron.moveTo(x, y);
    }
  }

  setTo(x, y) {
    this.x = x;
    this.y = y;

    this.nucleus.setTo(x, y);
    for (let electron of this.electrons) {
      electron.setTo(x, y);
    }
  }

  moveElectronsTo(x, y) {
    for (let electron of this.electrons) {
      electron.moveTo(x, y);
    }
  }
}

class ElectronCloud {
  constructor(x, y, config) {
    this.x = x;
    this.y = y;

    this.electrons = [];
    this.electronConfig = config;
    this.currentSelection = 100;
    this.prob_dist = [];
  }

  show() {
    for (let electron of this.electrons) {

      fill(255, 247, 174, 10);
      noStroke();
      ellipse(width / 2 + electron.x, height / 2 + electron.y, 10, 10);
      ellipse(width / 2 - electron.x, height / 2 + electron.y, 10, 10);
      ellipse(width / 2 + electron.x, height / 2 - electron.y, 10, 10);
      ellipse(width / 2 - electron.x, height / 2 - electron.y, 10, 10);
    }
  }

  showCloud(x, y) {
    translate(x, y);
    let electrons = this.electronConfig[this.currentSelection - 20].electrons;
    for (let electron of electrons) {

      fill(255, 247, 174, 10);
      noStroke();
      ellipse(electron.x, electron.y, 10, 10);
      ellipse(-electron.x, electron.y, 10, 10);
      ellipse(electron.x, -electron.y, 10, 10);
      ellipse(-electron.x, -electron.y, 10, 10);
    }
    translate(-x, -y);
  }

  update(a) {
    this.a = a;
    this.calcDensity();
    this.generateCloud();
  }

  calcDensity() {
    this.prob_dist = [];
    for (let x = 1; x <= 500; x += 2) {
      for (let y = 1; y <= 500; y += 2) {
        let prob = this.prob(x, y);
        for (let i = 0; i < prob; i++) {
          this.prob_dist.push({
            x: x,
            y: y
          });
        }
      }
    }
  }

  generateCloud() {
    this.electrons = [];
    for (let i = 0; i < 3000; i++) {
      let electron = this.prob_dist[floor(random() * this.prob_dist.length)];
      this.electrons.push(electron);
    }
  }

  prob(x, d) {
    let a_plus = (Math.abs(x) + this.a / 2);
    let a_minus = (Math.abs(x) - this.a / 2);

    let term = Math.exp(-1 / (bohrRadius) * (Math.sqrt(a_plus * a_plus + Math.abs(d) * Math.abs(d)))) + Math.exp(-1 / (bohrRadius) * (Math.sqrt(a_minus * a_minus + Math.abs(d) * Math.abs(d))));
    let prob = 2000 * Math.abs(d) * term * term / bohrRadius;

    // let term_dash = Math.exp(-1 / (bohrRadius) * (Math.sqrt(a_plus * a_plus + Math.abs(d) * Math.abs(d)))) - Math.exp(-1 / (bohrRadius) * (Math.sqrt(a_minus * a_minus + Math.abs(d) * Math.abs(d))));
    // let prob_dash = 2000 * Math.abs(d) * term_dash * term_dash / bohrRadius;

    return prob;
    // let temp1 = Math.exp(-sqrt((x / bohrRadius + this.a / (2 * bohrRadius)) * (x / bohrRadius + this.a / (2 * bohrRadius)) + (y / bohrRadius) * (y / bohrRadius)) / 5);
    // let temp2 = Math.exp(-sqrt((x / bohrRadius - this.a / (2 * bohrRadius)) * (x / bohrRadius - this.a / (2 * bohrRadius)) + (y / bohrRadius) * (y / bohrRadius)) / 5);
    // let temp = temp1 + temp2;
    // return 2 * y / bohrRadius * temp * temp;
  }

  updateSelection(a) {
    this.currentSelection = a;
  }
}

class ElectronCloud2 {
  constructor(x, y, config) {
    this.x = x;
    this.y = y;


    this.electronConfig = config;
    this.currentSelection = 100;

    this.electrons = [];

    this.prob_dist = [];
  }

  show() {
    for (let electron of this.electrons) {
      fill(255, 247, 174, 10);
      noStroke();
      ellipse(width / 2 + electron.x, height / 2 + electron.y, 10, 10);
      ellipse(width / 2 - electron.x, height / 2 + electron.y, 10, 10);
      ellipse(width / 2 + electron.x, height / 2 - electron.y, 10, 10);
      ellipse(width / 2 - electron.x, height / 2 - electron.y, 10, 10);
    }
  }

  update(a) {
    this.a = a;
    this.calcDensity();
    this.generateCloud();
  }

  calcDensity() {
    this.prob_dist = [];
    for (let x = 1; x <= 500; x += 2) {
      for (let y = 1; y <= 500; y += 2) {
        let prob = this.prob(x, y);
        for (let i = 0; i < prob; i++) {
          this.prob_dist.push({
            x: x,
            y: y
          });
        }
      }
    }
  }

  showCloud(x, y) {
    translate(x, y);
    let electrons = this.electronConfig[this.currentSelection - 20].electrons;
    for (let electron of electrons) {

      fill(255, 247, 174, 10);
      noStroke();
      ellipse(electron.x, electron.y, 10, 10);
      ellipse(-electron.x, electron.y, 10, 10);
      ellipse(electron.x, -electron.y, 10, 10);
      ellipse(-electron.x, -electron.y, 10, 10);
    }
    translate(-x, -y);
  }

  generateCloud() {
    this.electrons = [];
    for (let i = 0; i < 3000; i++) {
      let electron = this.prob_dist[floor(random() * this.prob_dist.length)];
      this.electrons.push(electron);
    }
  }

  prob(x, d) {
    let a_plus = (Math.abs(x) + this.a / 2);
    let a_minus = (Math.abs(x) - this.a / 2);

    // let term = Math.exp(-1 / (bohrRadius) * (Math.sqrt(a_plus * a_plus + Math.abs(d) * Math.abs(d)))) + Math.exp(-1 / (bohrRadius) * (Math.sqrt(a_minus * a_minus + Math.abs(d) * Math.abs(d))));
    // let prob = 2000 * Math.abs(d) * term * term / bohrRadius;

    let term_dash = Math.exp(-1 / (bohrRadius) * (Math.sqrt(a_plus * a_plus + Math.abs(d) * Math.abs(d)))) - Math.exp(-1 / (bohrRadius) * (Math.sqrt(a_minus * a_minus + Math.abs(d) * Math.abs(d))));
    let prob_dash = 2000 * Math.abs(d) * term_dash * term_dash / bohrRadius;

    return prob_dash;
    // let temp1 = Math.exp(-sqrt((x / bohrRadius + this.a / (2 * bohrRadius)) * (x / bohrRadius + this.a / (2 * bohrRadius)) + (y / bohrRadius) * (y / bohrRadius)) / 5);
    // let temp2 = Math.exp(-sqrt((x / bohrRadius - this.a / (2 * bohrRadius)) * (x / bohrRadius - this.a / (2 * bohrRadius)) + (y / bohrRadius) * (y / bohrRadius)) / 5);
    // let temp = temp1 + temp2;
    // return 2 * y / bohrRadius * temp * temp;
  }

  updateSelection(a) {
    this.currentSelection = a;
  }
}

updateOrbitalView = (b) => {
  a = b * 4;
  if (a != updateVar) {
    updateVar = a;
    electronCloud.updateSelection(b);
  }
}

updateOrbitalView2 = (b) => {
  a = b * 4;
  if (a != updateVar) {
    updateVar = a;
    electronCloud2.updateSelection(b);
  }
}

function downloadObjectAsJson(exportObj, exportName) {
  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
  var downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", exportName + ".json");
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}