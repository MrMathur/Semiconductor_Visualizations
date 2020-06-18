let electron, proton, neutron;

electrons_1s = [], electrons_2s = [], electrons_1s_dash = [], electrons_2p = [];

let x1 = 0,
  y1 = 0,
  x2 = 0,
  y2 = 0,
  x3 = 0,
  y3 = 0;

let experiment_electrons = [];

d = 50,
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
    fill(255);

    textAlign(RIGHT, CENTER);
    textSize(18);
    text("Mass:", width / 5, height / 2 + 50);
    text("Charge:", width / 5, height / 2 + 100);
    text("9.11 x 10", 2 * width / 5 - 2, height / 2 + 50);
    text("- 1.6 x 10", 2 * width / 5 - 2, height / 2 + 100);
    text("1.67 x 10", 3 * width / 5, height / 2 + 50);
    text("0", 3 * width / 5, height / 2 + 100);
    text("1.67 x 10", 4 * width / 5, height / 2 + 50);
    text("+ 1.6 x 10^-19", 4 * width / 5, height / 2 + 100);


    textSize(9);
    textAlign(LEFT, CENTER);
    text("-31", 2 * width / 5, height / 2 + 40);
    text("-27", 3 * width / 5, height / 2 + 40);
    text("-27", 4 * width / 5, height / 2 + 40);
    text("-19", 2 * width / 5, height / 2 + 90);
    text("-19", 4 * width / 5, height / 2 + 90);
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
      textSize(32);
      fill(255);
      text(`${dCount}`, width / 2, height / 2 + 150);
      textSize(16);
      text(`measurements in selected region`, width / 2, height / 2 + 175);

      update(d);
    }
  } else if (sceneCount == 6) {
    dCount = 0;



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
      textSize(32);
      fill(255);
      text(`${dCount}`, width / 2, height / 2 + 150);
      textSize(16);
      text(`measurements in selected region`, width / 2, height / 2 + 175);

      updateMain(d);
    }
  } else if (sceneCount == 7) {
    dCount = 0;

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
      textSize(32);
      fill(255);
      text(`${dCount}`, width / 2, height / 2 + 150);
      textSize(16);
      text(`measurements in selected region`, width / 2, height / 2 + 175);

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
    text(`distance from x axis`, width / 2 - 200, -20);
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
      textSize(32);
      fill(255);
      text(`${dCount}`, width / 2, height / 2 + 150);
      textSize(16);
      text(`measurements in selected region`, width / 2, height / 2 + 175);

      updateMain2p(d);
    }
  } else if (sceneCount == 9) {
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
    text(`distance from y axis`, width / 2 - 120, 20);
    rotate(-PI / 2);
    text(`y axis`, width / 2 - 200, -20);
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
      ellipse(elec.r * sin(elec.alpha), elec.r * cos(elec.alpha), 10, 10);
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
      textSize(32);
      fill(255);
      text(`${dCount}`, width / 2, height / 2 + 150);
      textSize(16);
      text(`measurements in selected region`, width / 2, height / 2 + 175);

      updateMain2p(d);
    }
  } else if (sceneCount == 10) {
    proton.unselectParticle();
    proton.moveToPos(width / 2, height / 2);
    proton.show();

    fill(110, 207, 127);
    ellipse(width / 4, height / 2, 10, 10);
    ellipse(3 * width / 4, height / 2, 10, 10);

    textFont('Bai Jamjuree');
    textSize(24);
    textAlign(CENTER, CENTER);
    if (selection == 0) {
      fill(255);
      text('Actual Representation', width / 3, height / 2 + 200);
      fill(125);
      text('Simplified Representation', 2 * width / 3, height / 2 + 200);

      if (frameCount % 12 == 0) {
        let electron = electrons_1s[floor(random(electrons_1s.length))];
        x1 = map(electron.r * cos(electron.alpha), -width / 2, width / 2, -150, 150);
        y1 = map(electron.r * sin(electron.alpha), -width / 2, width / 2, -150, 150);

        let electron2s = electrons_2s[floor(random(electrons_2s.length))];
        x2 = map(electron2s.r * cos(electron2s.alpha), -width / 2, width / 2, -150, 150);
        y2 = map(electron2s.r * sin(electron2s.alpha), -width / 2, width / 2, -150, 150);

        let electron2p = electrons_2p[floor(random(electrons_2p.length))];
        x3 = map(electron2p.r * sin(electron2p.alpha), -width / 2, width / 2, -150, 150);
        y3 = map(electron2p.r * cos(electron2p.alpha), -width / 2, width / 2, -150, 150);
      }

      fill(255, 247, 174);
      ellipse(width / 4 + x1, height / 2 + y1, 10, 10);
      ellipse(width / 2 + x2, height / 2 + y2, 10, 10);
      ellipse(3 * width / 4 + x3, height / 2 + y3, 10, 10);
    } else {
      fill(125);
      text('Actual Representation', width / 3, height / 2 + 200);
      fill(255);
      text('Simplified Representation', 2 * width / 3, height / 2 + 200);

      fill(255, 247, 174, 100);
      ellipse(width / 2, height / 2, 150, 150);
      ellipse(width / 4, height / 2, 50, 50);
      ellipse(3 * width / 4, height / 2 - 40, 100, 75);
      ellipse(3 * width / 4, height / 2 + 40, 100, 75);


      fill(255, 247, 174);
      ellipse(width / 2 + 75, height / 2, 10, 10);
      ellipse(width / 4 + 25, height / 2, 10, 10);
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