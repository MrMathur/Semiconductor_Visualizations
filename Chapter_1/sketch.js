particles_to_show = [];
allowElectrons = false;
experiment = false;
sceneCount = 0;
ringMaker = false;
rings = [];
let bohrRadius;
bohrRadiusCon = false;
sweep = false;
let sweepAngle;
let sweepSpeed;
let graphInit;
let drawGraph;
let graphDraw;


setup = () => {
  let canvas = createCanvas(2 * windowWidth / 3, windowHeight);
  canvas.parent('visualization');

  for (let i = 15; i < 400; i++) {
    rings.push(new Ring(i, 'red'));
  }

  bohrRadius = new Ring(probDistOpacity.indexOf(Math.max(...probList)), 'bohr');

  sweepAngle = 0;
  sweepSpeed = 0.01;

  showHelpText = {
    text: "",
    x: width / 2,
    y: height / 2 + 350,
    color: color(255, 255, 255),
    size: 24
  };

  graphInit = 0;
  drawGraph = false;
  graphDraw = [];
}

graphFn = (i) => i / 100 * Math.exp(-i / 100);

draw = () => {
  background(18, 18, 18);

  if (sceneCount == 2) {
    noFill();
    strokeWeight(1);
    drawingContext.setLineDash([15, 5]);
    stroke(255, 255, 255, 150);
    ellipse(width / 2, height / 2, 400, 400);
    drawingContext.setLineDash([]);
    textSize(32);
    textFont('Bai Jamjuree');
    fill(255);
    textAlign(CENTER, CENTER);
    text('Hydrogen Atom', width / 2, height / 2 + 300);
  }

  for (particle of particles_to_show) {
    particle.show();
    particle.update();
  }

  if (experiment == true && particles_to_show.length < 3000) {
    let r1 = random(probDistElectron);
    let theta1 = random(0, 2 * PI);
    let electron1 = new Particle('electron', width / 2 + r1 * cos(theta1), height / 2 + r1 * sin(theta1), r1, theta1);
    electron1.dimColor();
    particles_to_show.push(electron1);
    let r = random(probDistElectron);
    let theta = random(0, 2 * PI);
    let electron = new Particle('electron', width / 2 + r * cos(theta), height / 2 + r * sin(theta), r, theta);
    electron.dimColor();
    particles_to_show.push(electron);
    let r2 = random(probDistElectron);
    let theta2 = random(0, 2 * PI);
    let electron2 = new Particle('electron', width / 2 + r2 * cos(theta2), height / 2 + r2 * sin(theta2), r2, theta2);
    electron2.dimColor();
    particles_to_show.push(electron2);
    let r3 = random(probDistElectron);
    let theta3 = random(0, 2 * PI);
    let electron3 = new Particle('electron', width / 2 + r3 * cos(theta3), height / 2 + r3 * sin(theta3), r3, theta3);
    electron3.dimColor();
    particles_to_show.push(electron3);
  }

  if (ringMaker == true) {
    for (let ring of rings) {
      ring.show();
    }
  }
  if (bohrRadiusCon == true) {
    bohrRadius.show();
  }

  if (sceneCount == 1) {
    textSize(16);
    fill(255);
    textAlign(RIGHT, CENTER);
    text('MASS', width / 2 - 250, height / 2 + 100);
    text('RELATIVE CHARGE', width / 2 - 250, height / 2 + 150);
    textAlign(CENTER, CENTER);
    fill(255, 247, 174);
    text('~0', width / 2 - 150, height / 2 + 100);
    fill(234, 159, 162);
    text('1 amu', width / 2, height / 2 + 100);
    fill(110, 207, 127);
    text('1 amu', width / 2 + 150, height / 2 + 100);
    fill(255, 247, 174);
    text('-1', width / 2 - 150, height / 2 + 150);
    fill(234, 159, 162);
    text('0', width / 2, height / 2 + 150);
    fill(110, 207, 127);
    text('+1', width / 2 + 150, height / 2 + 150);
  }

  if (sweep == true) {
    // let i = 0;
    // while (i <= sweepAngle && i < 2 * PI) {
    //   strokeWeight(1);
    //   stroke(255, 255, 255, 20);
    //   line(width / 2, height / 2, width / 2 + 350 * cos(i), height / 2 + 350 * sin(i));
    //   i += 0.005;
    // }
    let j = particles_to_show.length;
    for (j; j < 3000; j++) {
      let r1 = random(probDistElectron);
      let theta1 = random(0, 2 * PI);
      let electron1 = new Particle('electron', width / 2 + r1 * cos(theta1), height / 2 + r1 * sin(theta1), r1, theta1);
      electron1.dimColor();
      particles_to_show.push(electron1);
    }
    stroke(255, 255, 255, 255);
    line(width / 2, height / 2, width / 2 + 400 * cos(sweepAngle), height / 2 + 400 * sin(sweepAngle));
    if (sweepAngle < 2 * PI) {
      sweepAngle += sweepSpeed;
      sweepSpeed += 0.0003;
      for (let particle of particles_to_show) {
        particle.checkSweep(sweepAngle);
      }
    } else {
      sweepAngle = 2 * PI;
      for (let particle of particles_to_show) {
        particle.theta = sweepAngle;
      }
      d3load();
      drawGraph = true;
    }
  } else {
    sweepAngle = 0;
    sweepSpeed = 0.03;
    graphInit = 0;
    drawGraph = false;
    graphDraw = [];
  }

  if (drawGraph == true) {
    if (graphInit < 400) {
      graphInit += 8;
      graphDraw.push({
        x: graphInit,
        y: graphFn(graphInit) * 600
      });
      graphDraw.push({
        x: graphInit + 1,
        y: graphFn(graphInit + 1) * 600
      });
      graphDraw.push({
        x: graphInit + 2,
        y: graphFn(graphInit + 2) * 600
      });
      graphDraw.push({
        x: graphInit + 3,
        y: graphFn(graphInit + 3) * 600
      });
      graphDraw.push({
        x: graphInit + 4,
        y: graphFn(graphInit + 4) * 600
      });
      graphDraw.push({
        x: graphInit + 5,
        y: graphFn(graphInit + 5) * 600
      });
      graphDraw.push({
        x: graphInit + 6,
        y: graphFn(graphInit + 6) * 600
      });
      graphDraw.push({
        x: graphInit + 7,
        y: graphFn(graphInit + 7) * 600
      });
    }
    for (let lineEl of graphDraw) {
      strokeWeight(1);
      stroke(255, 255, 255, 50);
      line(width / 2 + lineEl.x, height / 2 - lineEl.y, width / 2 + lineEl.x, height / 2);
      noStroke();
    }
  }

  textSize(showHelpText.size);
  textAlign(CENTER, CENTER);
  fill(showHelpText.color);
  text(showHelpText.text, showHelpText.x, showHelpText.y);

  if (sceneCount == 7) {
    noStroke();
    fill(255, 247, 174, 100);
    ellipse(width / 4, height / 2, 100, 100);
    fill(148, 163, 243, 255);
    ellipse(width / 4, height / 2, 30, 30);
    fill(255);
    ellipse(width / 4, height / 2 - 50, 10, 10);
    textSize(24);
    textAlign(CENTER, CENTER);
    fill(255);
    text('1s Orbital', width / 4, height / 2 + 250);

    fill(255, 247, 174, 100);
    ellipse(width / 2, height / 2, 200, 200);
    fill(148, 163, 243, 255);
    ellipse(width / 2, height / 2, 30, 30);
    fill(255);
    ellipse(width / 2, height / 2 - 100, 10, 10);
    textSize(24);
    textAlign(CENTER, CENTER);
    fill(255);
    text('2s Orbital', width / 2, height / 2 + 250);

    translate(3 * width / 4, height / 2);
    rotate(PI / 2);
    fill(255, 247, 174, 100);
    beginShape();
    for (let i = -PI / 2; i < PI / 2; i += 0.001) {
      let x = 200 * (i);
      let y = 200 * (i) * (i) * Math.sqrt(1 - i * i);
      vertex(x, y);
    }
    for (let i = PI / 2; i > -PI / 2; i -= 0.001) {
      let x = 200 * (i);
      let y = 200 * (i) * (i) * Math.sqrt(1 - i * i);
      vertex(x, -y);
    }
    endShape();
    rotate(-PI / 2);
    translate(-3 * width / 4, -height / 2);
    fill(148, 163, 243, 255);
    ellipse(3 * width / 4, height / 2, 30, 30);
    fill(255);
    ellipse(3 * width / 4, height / 2 - 200, 10, 10);
    textSize(24);
    textAlign(CENTER, CENTER);
    fill(255);
    text('2p Orbital', 3 * width / 4, height / 2 + 250);
  }

}

createParticles = () => {
  let electron = new Particle('electron', width / 2 - 150, height / 2 - 50);
  electron.selectParticle();
  let neutron = new Particle('neutron', width / 2, height / 2 - 50);
  neutron.selectParticle();
  let proton = new Particle('proton', width / 2 + 150, height / 2 - 50);
  proton.selectParticle();

  particles_to_show.push(electron);
  particles_to_show.push(neutron);
  particles_to_show.push(proton);
}

goToHydrogen = () => {
  for (let particle of particles_to_show) {
    particle.unselectParticle();
    if (particle.type == 'electron') {
      particle.moveToPos(width / 2 + 200, height / 2);
    } else if (particle.type == 'proton') {
      particle.moveToPos(width / 2, height / 2);
    } else if (particle.type == 'neutron') {
      particle.color = color(255, 255, 255, 0);
    }
  }
}

nucleusCreation = () => {
  // let nucleus = new Particle('nucleus', width / 2, height / 2);
  // particles_to_show.push(nucleus);
  // let neutron = new Particle('neutron', width / 2 - 25, height / 2);
  // particles_to_show.push(neutron);
  let proton = new Particle('proton', width / 2, height / 2);
  particles_to_show.push(proton);
  allowElectrons = true;
  experiment = false;
}

keyPressed = () => {
  if (allowElectrons == true) {
    for (let particle of particles_to_show) {
      particle.dimColor();
    }
    let r = random(probDistElectron);
    let theta = random(0, 2 * PI);
    showHelpText = {
      text: "Electron located here",
      x: width / 2 + r * cos(theta),
      y: height / 2 + r * sin(theta) + 25,
      color: color(255, 247, 174),
      size: 16
    }
    let electron = new Particle('electron', width / 2 + r * cos(theta), height / 2 + r * sin(theta), r, theta);
    particles_to_show.push(electron);
  }
}

experimentScience = () => {
  experiment = true;
  allowElectrons = false;
  particles_to_show[particles_to_show.length - 1].dimColor();
  ringMaker = false;
  bohrRadiusCon = false;
}

showBohrRadius = () => {
  // ringMaker = true;
  bohrRadiusCon = true;
}

dontShowBohrRadius = () => {
  bohrRadiusCon = false;
}

makeRings = () => {
  particles_to_show = [];

  // let nucleus = new Particle('nucleus', width / 2, height / 2);
  // particles_to_show.push(nucleus);
  // let neutron = new Particle('neutron', width / 2 - 25, height / 2);
  // particles_to_show.push(neutron);
  let proton = new Particle('proton', width / 2, height / 2);
  particles_to_show.push(proton);
  allowElectrons = false;
  experiment = false;
  ringMaker = true;
  bohrRadiusCon = false;
}