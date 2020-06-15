sceneCount = 0;

let positive_charge, negative_charge, zero_potential, temp;

setup = () => {
  let canvas = createCanvas(2*windowWidth/3,windowHeight);
  canvas.parent('visualization');


  positive_charge = {
    x: width/3,
    y: height/2, 
    r: 10,
    color: color(110,207,127)
  }

  negative_charge = {
    x: 2*width/3,
    y: height/2,
    r: 10,
    color: color(255,247,174)
  }

  zero_potential = {
    x: 2*width/3,
    y: height/2,
    r: 10,
    color: color(255,255,255,150)    
  }

  temp = {
    x: 2*width/3,
    y: height/2,
    r: 10,
    color: color(255,247,174,100)
  }

}

draw = () => {
  background(18);

  if (sceneCount == 1) {   
    stroke(255);
    strokeWeight(2);
    drawingContext.setLineDash([5, frameCount % 15]);
    line(positive_charge.x, positive_charge.y,negative_charge.x, negative_charge.y); 
    drawingContext.setLineDash([]);

    fill(positive_charge.color);
    noStroke();
    ellipse(positive_charge.x, positive_charge.y, positive_charge.r, positive_charge.r);

    textSize(16);
    textFont('Bai Jamjuree');
    textAlign(CENTER,CENTER);
    text('Positive Charge', positive_charge.x, positive_charge.y + 50);

    fill(negative_charge.color);
    noStroke();
    ellipse(negative_charge.x, negative_charge.y, negative_charge.r, negative_charge.r);

    text('Negative Charge', negative_charge.x, negative_charge.y + 50);


  } else if (sceneCount == 2) {
    stroke(255);
    strokeWeight(2);
    drawingContext.setLineDash([5, 15]);
    line(positive_charge.x, positive_charge.y,negative_charge.x, negative_charge.y); 
    drawingContext.setLineDash([]);

    fill(positive_charge.color);
    noStroke();
    ellipse(positive_charge.x, positive_charge.y, positive_charge.r, positive_charge.r);

    fill(negative_charge.color);
    noStroke();
    ellipse(negative_charge.x, negative_charge.y, negative_charge.r, negative_charge.r);

    textSize(16);
    textFont('Bai Jamjuree');
    textAlign(CENTER,CENTER);
    fill(255);
    noStroke();
    text('Defined as zero potential', zero_potential.x, zero_potential.y + 30);

    textAlign(RIGHT,TOP);
    text('P.E',positive_charge.x, positive_charge.y + 150);
  } else if (sceneCount == 3) {
    if (mouseIsPressed) {
      negative_charge = {
        x: mouseX,
        y: mouseY,
        r: 10,
        color: color(255,247,174)
      }

      temp = {
        x: mouseX,
        y: mouseY,
        r: 10,
        color: color(255,247,174,100)
      }
    }

    fill(temp.color);
    noStroke();
    ellipse(temp.x, temp.y, temp.r, temp.r);

    stroke(255,255,255,150);
    strokeWeight(2);
    drawingContext.setLineDash([5, 15]);
    line(positive_charge.x, positive_charge.y,temp.x, temp.y); 
    drawingContext.setLineDash([]);

    temp.x = lerp(temp.x, zero_potential.x, 0.05);
    temp.y = lerp(temp.y, zero_potential.y, 0.05);

    fill(zero_potential.color);
    noStroke();
    ellipse(zero_potential.x, zero_potential.y, zero_potential.r, zero_potential.r);

    stroke(255);
    strokeWeight(2);
    drawingContext.setLineDash([5, 15]);
    line(positive_charge.x, positive_charge.y,negative_charge.x, negative_charge.y); 
    drawingContext.setLineDash([]);

    fill(positive_charge.color);
    noStroke();
    ellipse(positive_charge.x, positive_charge.y, positive_charge.r, positive_charge.r);

    fill(negative_charge.color);
    noStroke();
    ellipse(negative_charge.x, negative_charge.y, negative_charge.r, negative_charge.r);

    let barWidth = Calculate_PE(dist(negative_charge.x,negative_charge.y,positive_charge.x,positive_charge.y));
    fill(234,159,162);
    noStroke();
    rect(positive_charge.x + 20, positive_charge.y + 150,barWidth,25);

    textSize(16);
    textFont('Bai Jamjuree');
    textAlign(CENTER,CENTER);
    fill(255);
    noStroke();
    text('Defined as zero potential', zero_potential.x, zero_potential.y + 30);

    textAlign(RIGHT,TOP);
    text('P.E',positive_charge.x, positive_charge.y + 150);
  }
}

Calculate_PE = (r) => {
  return (10000/r - 30000/width);
}