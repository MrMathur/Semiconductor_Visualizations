class Particle {
  constructor(type, x, y) {
    this.type = type;
    this.position = createVector(x, y);
    this.updateToHydrogen = false;
    this.revolveElectron = false;
    this.selected == false;

    if (this.type == 'electron') {
      this.radius = 10;
      this.color = color(255, 247, 174);
    } else if (this.type == 'proton') {
      this.radius = 30;
      this.color = color(110, 207, 127);
    } else if (this.type == 'neutron') {
      this.radius = 30;
      this.color = color(234, 159, 162);
    } else if (this.type == 'nucleus') {
      this.radius = 80;
      this.color = color(255, 255, 255, 0);
    }
  }

  show() {
    fill(this.color);
    noStroke();
    ellipse(this.position.x, this.position.y, this.radius, this.radius);
    let d = int(dist(mouseX, mouseY, this.position.x, this.position.y));
    if (this.type == 'nucleus') {
      if (d < this.radius) {
        textSize(20);
        textAlign(CENTER, CENTER);
        textFont('Bai Jamjuree');
        noStroke();
        fill(148, 163, 243);
        text(this.type, this.position.x, this.position.y + 75);
        noFill();
        stroke(148, 163, 243, 255);
      } else {
        stroke(148, 163, 243, 100);
      }
      strokeWeight(3);
      ellipse(this.position.x, this.position.y, this.radius, this.radius);
    }

    if (this.selected == true) {
      textSize(20);
      textAlign(CENTER, CENTER);
      textFont('Bai Jamjuree');
      text(this.type, this.position.x, this.position.y + 50);
    }
  }

  update() {
    if (this.updateToHydrogen == true) {
      this.moveToPos(this.destination.x, this.destination.y);
      let d = int(dist(this.position.x, this.position.y, this.destination.x, this.destination.y));
      if (d < 2) {
        this.updateToHydrogen = false;
        this.revolveElectron = true;
        this.theta = 0;
      }
    }

    if (this.revolveElectron == true && this.type == 'electron') {
      let r = 200;
      let x = width / 2 + r * cos(this.theta);
      let y = height / 2 + r * sin(this.theta);
      this.position = createVector(x, y);
      this.theta += 0.01;
    }

    if (this.revolveElectron == true) {
      let d = int(dist(mouseX, mouseY, this.position.x, this.position.y));
      if (d < this.radius) {
        this.selectParticle();
      } else {
        this.unselectParticle();
      }
    }
  }

  moveToPos(x, y) {
    this.destination = createVector(x, y);
    this.position.lerp(this.destination, 0.5);
    this.updateToHydrogen = true;
  }

  selectParticle() {
    this.selected = true;
  }

  unselectParticle() {
    this.selected = false;
  }

  dimColor() {
    if (this.type == 'electron') {
      this.color = color(255, 255, 255, 50);
    }
  }
}

class Ring {
  constructor(radius, type) {
    this.radius = radius;
    this.type = type;
  }

  show() {
    if (this.type == 'red') {
      noFill();
      stroke(color(255, 247, 174, scaleOpacity(probDistOpacity[this.radius])));
      ellipse(width / 2, height / 2, this.radius * 2, this.radius * 2);
    } else if (this.type == 'bohr') {
      noFill();
      stroke(255);
      strokeWeight(2);
      ellipse(width / 2, height / 2, this.radius * 2, this.radius * 2);

      textSize(20);
      textAlign(CENTER, CENTER);
      textFont('Bai Jamjuree');
      text('Bohr Radius', width / 2, height / 2 + this.radius + 50);
    }
  }
}