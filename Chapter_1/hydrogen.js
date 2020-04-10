class Particle {
  constructor(type, x, y) {
    this.type = type;
    this.position = createVector(x, y);
    this.updateToHydrogen = false;
    this.revolveElectron = false;
    this.selected == false;

    if (this.type == 'electron') {
      this.radius = 10;
      this.color = color(214, 5, 5);
    } else if (this.type == 'proton') {
      this.radius = 30;
      this.color = color(126, 140, 224);
    } else if (this.type == 'neutron') {
      this.radius = 30;
      this.color = color(245, 278, 109);
    } else if (this.type == 'nucleus') {
      this.radius = 100;
      this.color = color(255, 255, 255);
    }
  }

  show() {
    fill(this.color);
    noStroke();
    ellipse(this.position.x, this.position.y, this.radius, this.radius);

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
      this.color = color(80, 3, 3);
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
      stroke(color(214, 5, 5, scaleOpacity(probDistOpacity[this.radius])));
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