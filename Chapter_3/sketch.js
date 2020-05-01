let nucleusX, nucleusY, nucleusR;
let sceneCount;

let atom, atom1, atom2;

let selection, selection2, selection3, selection4, selection5 = [],
  selection6 = [];
let atoms = [];

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

  nucleusX = width / 3;
  nucleusY = height / 2;
  nucleusR = 30;

  atom = new Atom(nucleusX, nucleusY, nucleusR, 2, 2, 2, 2, 2, 2, 2);
  atom1 = new Atom(nucleusX, nucleusY * 2, nucleusR, 2, 2, 2, 2, 2, 2, 2);
  atom2 = new Atom(nucleusX * 2.1, nucleusY * 2, nucleusR, 2, 2, 2, 2, 2, 2, 2);
  sceneCount = 0;

  selection = [{
      type: '1s',
      condition: 0,
      count: 1,
      y: height / 2 + 150
    },
    {
      type: '2s',
      condition: 0,
      count: 1,
      y: height / 2 + 80
    },
    {
      type: '2p',
      condition: 0,
      count: 3,
      y: height / 2 + 40
    },
    {
      type: '3s',
      condition: 0,
      count: 1,
      y: height / 2 - 20
    },
    {
      type: '3p',
      condition: 0,
      count: 3,
      y: height / 2 - 55
    },
    {
      type: '4s',
      condition: 0,
      count: 1,
      y: height / 2 - 90
    }
  ];

  selection2 = [{
      type: '1s',
      condition: 0,
      count: 1,
      y: height / 2 + 150
    },
    {
      type: '2s',
      condition: 0,
      count: 1,
      y: height / 2 + 80
    },
    {
      type: '2p',
      condition: 0,
      count: 3,
      y: height / 2 + 40
    },
    {
      type: 'sp3',
      condition: 0,
      count: 4,
      y: height / 2 - 40
    },
    {
      type: '4s',
      condition: 0,
      count: 1,
      y: height / 2 - 90
    }
  ];

  selection3 = [{
      type: '1s',
      condition: 0,
      count: 0,
      y: height / 2 + 150
    }, {
      type: '',
      condition: 0,
      count: 0,
      y: height / 2 + 140
    }, {
      type: '',
      condition: 0,
      count: 0,
      y: height / 2 + 70
    },
    {
      type: '2s',
      condition: 0,
      count: 0,
      y: height / 2 + 80
    }, {
      type: '',
      condition: 0,
      count: 0,
      y: height / 2 + 30
    },
    {
      type: '2p',
      condition: 0,
      count: 0,
      y: height / 2 + 40
    },
    {
      type: 'sp3 σ',
      condition: 0,
      count: 2,
      y: height / 2 - 40
    },
    {
      type: 'sp3 σ*',
      condition: 0,
      count: 2,
      y: height / 2 - 90
    }
  ];

  selection4 = [{
      type: 'sp3 σ',
      condition: 0,
      count: 2,
      y: height / 2 + 50
    },
    {
      type: 'sp3 σ*',
      condition: 0,
      count: 2,
      y: height / 2 - 50
    }
  ];

  selection5[0] = {
    type: 'sp3 σ',
    condition: 0,
    count: 0,
    y: height / 2 + 80
  }
  for (let i = 1; i < 9; i++) {
    selection5[i] = {
      type: '',
      condition: 0,
      count: 0,
      y: selection5[0].y + (5 - i) * 10
    }
  }
  selection5[9] = {
    type: 'sp3 σ*',
    condition: 0,
    count: 0,
    y: height / 2 - 80
  }
  for (let i = 1; i < 9; i++) {
    selection5[9 + i] = {
      type: '',
      condition: 0,
      count: 0,
      y: selection5[9].y + (5 - i) * 10
    }
  }

}

function showBars(selection) {
  textFont('Bai Jamjuree');
  textSize(12);
  textAlign(RIGHT);

  stroke(196, 196, 196);
  strokeWeight(10);
  drawingContext.setLineDash([]);
  line(2 * width / 3 + 50, height / 2 - 150, 2 * width / 3 + 50, height / 2 + 150);
  for (let i = 0; i < selection.length; i++) {
    if (selection[i].condition == 1) {
      noStroke();
      fill(255, 247, 174);
      text(selection[i].type, 2 * width / 3 + 30, selection[i].y);
      stroke(196, 196, 196);
      strokeWeight(1);
      line(2 * width / 3 + 50, selection[i].y, 2 * width / 3 + 200, selection[i].y);
      for (let j = 0; j < selection[i].count; j++) {
        fill(255, 247, 174);
        stroke(196, 196, 196);
        strokeWeight(2);
        rect(2 * width / 3 + 60 + 30 * j, selection[i].y - 30, 30, 30);
      }
    } else {
      noStroke();
      fill(255);
      text(selection[i].type, 2 * width / 3 + 30, selection[i].y);
      stroke(196, 196, 196);
      strokeWeight(1);
      line(2 * width / 3 + 50, selection[i].y, 2 * width / 3 + 200, selection[i].y);
      for (let j = 0; j < selection[i].count; j++) {
        noFill();
        stroke(196, 196, 196);
        strokeWeight(1);
        rect(2 * width / 3 + 60 + 30 * j, selection[i].y - 30, 30, 30);
      }
    }
  }

  text('Ionization Energy', 2 * width / 3 + 30, height / 2 - 150);
  drawingContext.setLineDash([15, 5]);
  line(2 * width / 3 + 50, height / 2 - 150, 2 * width / 3 + 200, height / 2 - 150);
}

function draw() {
  background(18, 18, 18);


  if (sceneCount == 1) {
    atom.show();
    atom.check();
    showBars(selection);

  } else if (sceneCount == 2) {
    showBars(selection2);

    fill(255, 247, 174, 100);
    noStroke();
    translate(width / 4, height / 2);
    rotate(PI / 2);
    ellipse(0, -50, 30, 100);
    // translate(-width / 4, -height / 2);
    rotate(2 * PI / 3);
    // translate(width / 4, height / 2);
    ellipse(0, -50, 30, 100);
    rotate(2 * PI / 3);
    ellipse(0, -50, 30, 100);
    rotate(2 * PI / 3);
    ellipse(0, 25, 30, 50);
    rotate(-PI / 2);
    translate(-width / 4, -height / 2);

    fill(255, 247, 174, 100);
    noStroke();
    translate(width / 2, height / 2);
    rotate(-PI / 2);
    ellipse(0, -50, 30, 100);
    // translate(-width / 4, -height / 2);
    rotate(2 * PI / 3);
    // translate(width / 4, height / 2);
    ellipse(0, -50, 30, 100);
    rotate(2 * PI / 3);
    ellipse(0, -50, 30, 100);
    rotate(2 * PI / 3);
    ellipse(0, 25, 30, 50);

    rotate(PI / 2);
    translate(-width / 2, -height / 2);

    fill(148, 163, 243);
    ellipse(width / 2, height / 2, 30, 30);
    ellipse(width / 4, height / 2, 30, 30);
  } else if (sceneCount == 3) {

    showBars(selection3);

    noStroke();
    translate(width / 4, height / 2);
    rotate(PI / 2);
    fill(255, 247, 174, 150);
    ellipse(0, -65, 50, 130);
    // translate(-width / 4, -height / 2);
    rotate(2 * PI / 3);
    // translate(width / 4, height / 2);
    fill(255, 247, 174, 30);
    ellipse(0, -50, 30, 100);
    rotate(2 * PI / 3);
    fill(255, 247, 174, 30);
    ellipse(0, -50, 30, 100);
    rotate(2 * PI / 3);
    fill(255, 247, 174, 150);
    ellipse(0, 20, 25, 40);
    rotate(-PI / 2);
    translate(-width / 4, -height / 2);

    fill(255, 247, 174, 100);
    noStroke();
    translate(width / 2, height / 2);
    rotate(-PI / 2);
    fill(255, 247, 174, 150);
    ellipse(0, -65, 50, 130);
    // translate(-width / 4, -height / 2);
    rotate(2 * PI / 3);
    // translate(width / 4, height / 2);
    fill(255, 247, 174, 30);
    ellipse(0, -50, 30, 100);
    rotate(2 * PI / 3);
    fill(255, 247, 174, 30);
    ellipse(0, -50, 30, 100);
    rotate(2 * PI / 3);
    fill(255, 247, 174, 150);
    ellipse(0, 20, 25, 40);
    rotate(PI / 2);
    translate(-width / 2, -height / 2);

    fill(148, 163, 243);
    ellipse(width / 2, height / 2, 30, 30);
    ellipse(width / 4, height / 2, 30, 30);
  } else if (sceneCount == 4) {
    showBars(selection4);

    noStroke();
    translate(width / 4, height / 2);
    rotate(PI / 2);
    // fill(255, 247, 174, 150);
    // ellipse(0, -65, 50, 130);
    // translate(-width / 4, -height / 2);
    rotate(2 * PI / 3);
    // translate(width / 4, height / 2);
    fill(255, 247, 174, 30);
    ellipse(0, -50, 30, 100);
    rotate(2 * PI / 3);
    fill(255, 247, 174, 30);
    ellipse(0, -50, 30, 100);
    rotate(2 * PI / 3);
    fill(255, 247, 174, 150);
    ellipse(0, 15, 20, 30);
    rotate(-PI / 2);
    translate(-width / 4, -height / 2);

    fill(255, 247, 174, 100);
    noStroke();
    translate(width / 2, height / 2);
    rotate(-PI / 2);
    // fill(255, 247, 174, 150);
    // ellipse(0, -65, 50, 130);
    // translate(-width / 4, -height / 2);
    rotate(2 * PI / 3);
    // translate(width / 4, height / 2);
    fill(255, 247, 174, 30);
    ellipse(0, -50, 30, 100);
    rotate(2 * PI / 3);
    fill(255, 247, 174, 30);
    ellipse(0, -50, 30, 100);
    rotate(2 * PI / 3);
    fill(255, 247, 174, 150);
    ellipse(0, 15, 20, 30);
    rotate(PI / 2);
    translate(-width / 2, -height / 2);


    fill(255, 247, 174, 150);
    ellipse(3 * width / 8, height / 2, width / 4, 100);

    fill(148, 163, 243);
    ellipse(width / 2, height / 2, 30, 30);
    ellipse(width / 4, height / 2, 30, 30);
  } else if (sceneCount == 5) {
    showBars(selection5);

    noStroke();
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let x = 250 + i * 120;
        let y = 300 + j * 120;

        for (let k = 0; k < 4; k++) {
          fill(255);
          ellipse(x + 50 * cos(k * PI / 2), y + 50 * sin(k * PI / 2), 10, 10);
          stroke(120, 120, 120);
          drawingContext.setLineDash([5, 15]);
          line(x, y, x + 50 * cos(k * PI / 2), y + 50 * sin(k * PI / 2), 10, 10);
          drawingContext.setLineDash([]);
          noStroke();
        }

        fill(148, 163, 243);
        ellipse(x, y, 30, 30);
      }
    }
  } else if (sceneCount == 6) {
    // showBars(selection5);
    stroke(196, 196, 196);
    strokeWeight(10);
    drawingContext.setLineDash([]);
    line(2 * width / 3 + 50, height / 2 - 150, 2 * width / 3 + 50, height / 2 + 150);
    strokeWeight(1);
    noStroke();
    fill(255, 40);
    rect(2 * width / 3 + 50, height / 2 + 50, 200, 60);
    rect(2 * width / 3 + 50, height / 2 - 110, 200, 60);


    noStroke();
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let x = 250 + i * 120;
        let y = 300 + j * 120;

        for (let k = 0; k < 4; k++) {
          fill(255);
          ellipse(x + 50 * cos(k * PI / 2), y + 50 * sin(k * PI / 2), 10, 10);
          stroke(120, 120, 120);
          drawingContext.setLineDash([5, 15]);
          line(x, y, x + 50 * cos(k * PI / 2), y + 50 * sin(k * PI / 2), 10, 10);
          drawingContext.setLineDash([]);
          noStroke();
        }

        fill(255, 247, 174, 30);
        if (i != 2)
          ellipse(x + 60, y, 60, 30);
        if (j != 2)
          ellipse(x, y + 60, 30, 60);

        fill(148, 163, 243);
        ellipse(x, y, 30, 30);
      }
    }
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
}

class Atom {
  constructor(nucleusX, nucleusY, nucleusR, elec_1s, elec_2s, elec_2px, elec_2py, elec_2pz, elec_3s, elec_3p) {
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
      this.electrons.push(new Electron(40, i * PI + PI / 4, '1s', nucleusX, nucleusY));
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
}