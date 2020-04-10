particles_to_show = [];
allowElectrons = false;
experiment = false;
sceneCount = 0;
ringMaker = false;
rings = [];
let bohrRadius;
bohrRadiusCon = false;

setup = () => {
  let canvas = createCanvas(windowWidth / 2, windowHeight);
  canvas.parent('visualization');

  for (let i = 50; i < 300; i++) {
    rings.push(new Ring(i, 'red'));
  }

  bohrRadius = new Ring(probDistOpacity.indexOf(Math.max(...probList)), 'bohr');
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
      particle.moveToPos(width / 2 + 25, height / 2);
    } else if (particle.type == 'neutron') {
      particle.moveToPos(width / 2 - 25, height / 2);
    }
  }
}

nucleusCreation = () => {
  let nucleus = new Particle('nucleus', width / 2, height / 2);
  particles_to_show.push(nucleus);
  let neutron = new Particle('neutron', width / 2 - 25, height / 2);
  particles_to_show.push(neutron);
  let proton = new Particle('proton', width / 2 + 25, height / 2);
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
  let neutron = new Particle('neutron', width / 2 - 25, height / 2);
  particles_to_show.push(neutron);
  let proton = new Particle('proton', width / 2 + 25, height / 2);
  particles_to_show.push(proton);
  allowElectrons = false;
  experiment = false;
  ringMaker = true;
  bohrRadiusCon = true;
}