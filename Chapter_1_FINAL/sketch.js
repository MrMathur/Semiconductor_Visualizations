let electron, proton, neutron;

electrons_1s = [], electrons_2s = [], electrons_1s_dash = [], electrons_2p = [];

let x1 = 0,
  y1 = 0;

let experiment_electrons = [];

d = 0,
  dCount = 0;

let selection = 0;

// preload = () => {
//   electrons_1s = loadJSON('./data/electrons_1s.json');
//   electrons_1s_dash = loadJSON('./data/electrons_1s_dash.json');
//   electrons_2s = loadJSON('./data/electrons_2s.json');
//   electrons_2p = loadJSON('./data/electrons_2p.json');
// }

setup = () => {
  let canvas = createCanvas(2 * windowWidth / 3, windowHeight);
  canvas.parent('visualization');
}

draw = () => {
  background(18);

  if (sceneCount == 1) {
    electron.show();
    proton.show();
    neutron.show();

    textFont('Bai Jamjuree');
    textAlign(RIGHT, CENTER);
    textSize(18);
    fill(255);

    textAlign(CENTER, CENTER);
    text("Mass:", width / 5, height / 2 + 50);
    text("Charge:", width / 5, height / 2 + 100);
    text("9.11 x 10^-31", 2 * width / 5, height / 2 + 50);
    text("- 1.6 x 10^-19", 2 * width / 5, height / 2 + 100);
    text("1.67 x 10^-27", 3 * width / 5, height / 2 + 50);
    text("0", 3 * width / 5, height / 2 + 100);
    text("1.67 x 10^-27", 4 * width / 5, height / 2 + 50);
    text("+ 1.6 x 10^-19", 4 * width / 5, height / 2 + 100);
  } else if (sceneCount == 2) {

    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    textFont('Bai Jamjuree');
    text("Bohr Model", width / 2, height / 2 + 250);
    strokeWeight(3);
    stroke(150);
    drawingContext.setLineDash([20, 20]);
    noFill();
    ellipse(width / 2, height / 2, 400, 400);
    drawingContext.setLineDash([]);
    proton.moveToPos(width / 2, height / 2);
    electron.show();
    electron.update();
    proton.show();
  } else if (sceneCount == 3) {

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
    text(`y axis`, width / 2 - 120, -20);
    rotate(+PI / 2);

    translate(-width / 2, -height / 2);

    proton.unselectParticle();
    proton.moveToPos(width / 2, height / 2);
    proton.show();
    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    textFont('Bai Jamjuree');
    text("Click Enter to locate the electron", width / 2, height / 2 + 250);

    for (let elec of experiment_electrons) {
      fill(255, 247, 174, 50);
      noStroke();
      translate(width / 2, height / 2);
      ellipse(elec.r * cos(elec.alpha), elec.r * sin(elec.alpha), 10, 10);
      translate(-width / 2, -height / 2)
    }

    if (experiment_electrons.length != 0) {
      fill(255, 247, 174);
      noStroke();
      translate(width / 2, height / 2);
      ellipse(experiment_electrons[experiment_electrons.length - 1].r * cos(experiment_electrons[experiment_electrons.length - 1].alpha), experiment_electrons[experiment_electrons.length - 1].r * sin(experiment_electrons[experiment_electrons.length - 1].alpha), 10, 10);
      translate(-width / 2, -height / 2);
    }
  } else if (sceneCount == 4) {
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
    text(`y axis`, width / 2 - 120, -20);
    rotate(+PI / 2);

    translate(-width / 2, -height / 2);

    proton.unselectParticle();
    proton.moveToPos(width / 2, height / 2);

    for (let elec of experiment_electrons) {
      fill(255, 247, 174, 25);
      noStroke();
      translate(width / 2, height / 2);
      ellipse(elec.r * cos(elec.alpha), elec.r * sin(elec.alpha), 10, 10);
      translate(-width / 2, -height / 2)
    }

    if (electrons_1s_dash.length > 0) {
      experiment_electrons.push(electrons_1s_dash.pop());
    }
    if (electrons_1s_dash.length > 0) {
      experiment_electrons.push(electrons_1s_dash.pop());
    }
    if (electrons_1s_dash.length > 0) {
      experiment_electrons.push(electrons_1s_dash.pop());
    }
    if (electrons_1s_dash.length > 0) {
      experiment_electrons.push(electrons_1s_dash.pop());
    }

    proton.show();
  } else if (sceneCount == 5) {
    dCount = 0;

    for (let i = 0; i < electrons_1s_dash.length;) {
      experiment_electrons.push(electrons_1s_dash.pop());
    }

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
    text(`y axis`, width / 2 - 120, -20);
    rotate(+PI / 2);

    translate(-width / 2, -height / 2);

    proton.unselectParticle();
    proton.moveToPos(width / 2, height / 2);

    for (let elec of experiment_electrons) {
      if (d != 0 && abs(d - elec.r) < 9) {
        fill(255, 247, 174);
        dCount++;
      } else {
        fill(255, 247, 174, 25);
      }
      noStroke();
      translate(width / 2, height / 2);
      ellipse(elec.r * cos(elec.alpha), elec.r * sin(elec.alpha), 10, 10);
      translate(-width / 2, -height / 2)
    }

    proton.show();

    if (mouseIsPressed) {
      // if (abs(mouseX) > abs(mouseY)) {
      //   d = abs(mouseX - width / 2);
      // } else {
      //   d = abs(mouseY - height / 2);
      // }
      d = int(dist(mouseX, mouseY, width / 2, height / 2));
    }

    if (d != 0) {
      noFill();
      strokeWeight(1);
      stroke(255);
      ellipse(width / 2, height / 2, d * 2 + 15, d * 2 + 15);
      ellipse(width / 2, height / 2, d * 2 - 15, d * 2 - 15);

      textFont('Bai Jamjuree');
      textAlign(CENTER, CENTER);
      textSize(16);
      fill(255);
      text(`${dCount} measurements at distance ${d}`, width / 2, height / 2 + 150);

      update(d);
    }
  } else if (sceneCount == 6) {
    dCount = 0;

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
    text(`sqrt(y^2 + z^2) axis`, width / 2 - 120, -20);
    rotate(+PI / 2);

    translate(-width / 2, -height / 2);

    proton.unselectParticle();
    proton.moveToPos(width / 2, height / 2);

    for (let elec of electrons_1s) {
      if (d != 0 && abs(d - elec.r) < 9) {
        fill(255, 247, 174);
        dCount++;
      } else {
        fill(255, 247, 174, 25);
      }
      noStroke();
      translate(width / 2, height / 2);
      ellipse(elec.r * cos(elec.alpha), elec.r * sin(elec.alpha), 10, 10);
      translate(-width / 2, -height / 2)
    }

    proton.show();

    if (mouseIsPressed) {
      // if (abs(mouseX) > abs(mouseY)) {
      //   d = abs(mouseX - width / 2);
      // } else {
      //   d = abs(mouseY - height / 2);
      // }
      d = int(dist(mouseX, mouseY, width / 2, height / 2));
    }

    if (d != 0) {
      noFill();
      strokeWeight(1);
      stroke(255);
      ellipse(width / 2, height / 2, d * 2 + 15, d * 2 + 15);
      ellipse(width / 2, height / 2, d * 2 - 15, d * 2 - 15);

      textFont('Bai Jamjuree');
      textAlign(CENTER, CENTER);
      textSize(16);
      fill(255);
      text(`${dCount} measurements at distance ${d}`, width / 2, height / 2 + 150);

      updateMain(d);
    }
  } else if (sceneCount == 7) {
    dCount = 0;

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
    text(`sqrt(y^2 + z^2) axis`, width / 2 - 120, -20);
    rotate(+PI / 2);

    translate(-width / 2, -height / 2);

    proton.unselectParticle();
    proton.moveToPos(width / 2, height / 2);

    for (let elec of electrons_2s) {
      if (d != 0 && abs(d - elec.r) < 9) {
        fill(255, 247, 174);
        dCount++;
      } else {
        fill(255, 247, 174, 25);
      }
      noStroke();
      translate(width / 2, height / 2);
      ellipse(elec.r * cos(elec.alpha), elec.r * sin(elec.alpha), 10, 10);
      translate(-width / 2, -height / 2)
    }

    proton.show();

    if (mouseIsPressed) {
      // if (abs(mouseX) > abs(mouseY)) {
      //   d = abs(mouseX - width / 2);
      // } else {
      //   d = abs(mouseY - height / 2);
      // }
      d = int(dist(mouseX, mouseY, width / 2, height / 2));
    }

    if (d != 0) {
      noFill();
      strokeWeight(1);
      stroke(255);
      ellipse(width / 2, height / 2, d * 2 + 15, d * 2 + 15);
      ellipse(width / 2, height / 2, d * 2 - 15, d * 2 - 15);

      textFont('Bai Jamjuree');
      textAlign(CENTER, CENTER);
      textSize(16);
      fill(255);
      text(`${dCount} measurements at distance ${d}`, width / 2, height / 2 + 150);

      updateMain2s(d);
    }
  } else if (sceneCount == 8) {
    dCount = 0;

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
    text(`sqrt(y^2 + z^2) axis`, width / 2 - 120, -20);
    rotate(+PI / 2);

    translate(-width / 2, -height / 2);

    proton.unselectParticle();
    proton.moveToPos(width / 2, height / 2);

    for (let elec of electrons_2p) {
      if (d != 0 && abs(d - elec.r) < 9) {
        fill(255, 247, 174);
        dCount++;
      } else {
        fill(255, 247, 174, 25);
      }
      noStroke();
      translate(width / 2, height / 2);
      ellipse(elec.r * cos(elec.alpha), elec.r * sin(elec.alpha), 10, 10);
      translate(-width / 2, -height / 2)
    }

    proton.show();

    if (mouseIsPressed) {
      // if (abs(mouseX) > abs(mouseY)) {
      //   d = abs(mouseX - width / 2);
      // } else {
      //   d = abs(mouseY - height / 2);
      // }
      d = int(dist(mouseX, mouseY, width / 2, height / 2));
    }

    if (d != 0) {
      noFill();
      strokeWeight(1);
      stroke(255);
      ellipse(width / 2, height / 2, d * 2 + 15, d * 2 + 15);
      ellipse(width / 2, height / 2, d * 2 - 15, d * 2 - 15);

      textFont('Bai Jamjuree');
      textAlign(CENTER, CENTER);
      textSize(16);
      fill(255);
      text(`${dCount} measurements at distance ${d}`, width / 2, height / 2 + 150);

      updateMain2p(d);
    }
  } else if (sceneCount == 9) {
    proton.unselectParticle();
    proton.moveToPos(width / 2, height / 2);
    proton.show();

    textFont('Bai Jamjuree');
    textSize(24);
    textAlign(CENTER, CENTER);
    if (selection == 0) {
      fill(255);
      text('Actual Representation', width / 3, height / 2 + 200);
      fill(125);
      text('Simplified Representation', 2 * width / 3, height / 2 + 200);

      if (frameCount % 8 == 0) {
        x1 = floor(random(300));
        y1 = floor(random(300));
      }

      fill(255, 247, 174);
      ellipse(width / 2 + x1 - 150, height / 2 + y1 - 150, 10, 10);
    } else {
      fill(125);
      text('Actual Representation', width / 3, height / 2 + 200);
      fill(255);
      text('Simplified Representation', 2 * width / 3, height / 2 + 200);

      fill(255, 247, 174, 100);
      ellipse(width / 2, height / 2, 150, 150);

      fill(255, 247, 174);
      ellipse(width / 2 + 75, height / 2, 10, 10);
    }

    if (mouseIsPressed) {
      if (mouseX < width / 2 && mouseY > height / 2 + 150) {
        selection = 0;
      } else if (mouseX > width / 2 && mouseY > height / 2 + 150) {
        selection = 1;
      }
    }
  }
}

keyPressed = () => {
  if (sceneCount == 3) {
    experiment_electrons.push(electrons_1s_dash.pop());
  }
}