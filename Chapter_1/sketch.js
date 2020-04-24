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


setup = () => {
  let canvas = createCanvas(2 * windowWidth / 3, windowHeight);
  canvas.parent('visualization');

  for (let i = 50; i < 300; i++) {
    rings.push(new Ring(i, 'red'));
  }

  bohrRadius = new Ring(probDistOpacity.indexOf(Math.max(...probList)), 'bohr');

  sweepAngle = 0;
  sweepSpeed = 0.05;

  showHelpText = {
    text: "",
    x: width / 2,
    y: height / 2 + 350,
    color: color(255, 255, 255),
    size: 24
  };
}

draw = () => {
  background(18, 18, 18);

  for (particle of particles_to_show) {
    particle.show();
    particle.update();
  }

  if (experiment == true && particles_to_show.length < 3000) {
    let r1 = random(probDistElectron);
    let theta1 = random(-PI, PI);
    let electron1 = new Particle('electron', width / 2 + r1 * cos(theta1), height / 2 + r1 * sin(theta1));
    electron1.dimColor();
    particles_to_show.push(electron1);
    let r = random(probDistElectron);
    let theta = random(-PI, PI);
    let electron = new Particle('electron', width / 2 + r * cos(theta), height / 2 + r * sin(theta));
    electron.dimColor();
    particles_to_show.push(electron);
    let r2 = random(probDistElectron);
    let theta2 = random(-PI, PI);
    let electron2 = new Particle('electron', width / 2 + r2 * cos(theta2), height / 2 + r2 * sin(theta2));
    electron2.dimColor();
    particles_to_show.push(electron2);
    let r3 = random(probDistElectron);
    let theta3 = random(-PI, PI);
    let electron3 = new Particle('electron', width / 2 + r3 * cos(theta3), height / 2 + r3 * sin(theta3));
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
    textSize(32);
    fill(255, 247, 174);
    text('1', width / 2 - 150, height / 2 - 50);
    fill(234, 159, 162);
    text('0', width / 2, height / 2 - 50);
    fill(110, 207, 127);
    text('1', width / 2 + 150, height / 2 - 50);
  }

  if (sweep == true) {
    let i = 0;
    while (i <= sweepAngle && i < 2 * PI) {
      strokeWeight(1);
      stroke(255, 255, 255, 20);
      line(width / 2, height / 2, width / 2 + 350 * cos(i), height / 2 + 350 * sin(i));
      i += 0.005;
    }
    stroke(255, 255, 255, 255);
    line(width / 2, height / 2, width / 2 + 350 * cos(sweepAngle), height / 2 + 350 * sin(sweepAngle));
    if (sweepAngle < 2 * PI) {
      sweepAngle += sweepSpeed;
      sweepSpeed += 0.001;
    }
  } else {
    sweepAngle = 0;
    sweepSpeed = 0.03;
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
  let electron = new Particle('electron', width / 2 - 150, height / 2);
  electron.selectParticle();
  let neutron = new Particle('neutron', width / 2, height / 2);
  neutron.selectParticle();
  let proton = new Particle('proton', width / 2 + 150, height / 2);
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
  let nucleus = new Particle('nucleus', width / 2, height / 2);
  particles_to_show.push(nucleus);
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
    let theta = random(-PI, PI);
    showHelpText = {
      text: "Electron located here",
      x: width / 2 + r * cos(theta),
      y: height / 2 + r * sin(theta) + 25,
      color: color(255, 247, 174),
      size: 16
    }
    let electron = new Particle('electron', width / 2 + r * cos(theta), height / 2 + r * sin(theta));
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

  let nucleus = new Particle('nucleus', width / 2, height / 2);
  particles_to_show.push(nucleus);
  // let neutron = new Particle('neutron', width / 2 - 25, height / 2);
  // particles_to_show.push(neutron);
  let proton = new Particle('proton', width / 2, height / 2);
  particles_to_show.push(proton);
  allowElectrons = false;
  experiment = false;
  ringMaker = true;
  bohrRadiusCon = false;
}