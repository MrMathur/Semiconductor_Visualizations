let sceneCount;
let electrons_1s = [],electrons_1s_dash = [],electrons_2s = [], electrons_2p = [];
let dMax,dMax2,dMax3;

preload = () => {
  electrons_1s = loadJSON('./data/electrons_1s.json');
  electrons_1s_dash = loadJSON('./data/electrons_1s_dash.json');
  electrons_2s = loadJSON('./data/electrons_2s.json');
  electrons_2p = loadJSON('./data/electrons_2p.json');
}

setup = () => {
  let canvas = createCanvas(2 * windowWidth / 3, windowHeight);
  canvas.parent('visualization');
  sceneCount = 0;
  dMax = 0;
  dMax2 = 0; 
  dMax3 = 0; 

  console.log(typeof electrons_1s_dash);
}

draw = () => {
  background(18, 18, 18);

  if (sceneCount != 0) {
    translate(width/2,height/2);

    stroke(255,255,255,50);
    strokeWeight(1);
    line(-width/2,0,width/2,0);
    line(0,-height/2,0,height/2);


    textSize(12);
    fill(255);
    textFont('Bai Jamjuree');
    textAlign(CENTER, CENTER);
    text(`x axis`, width/2 - 100, 20);
    rotate(-PI/2);
    text(`y axis`, width/2 - 100, -20);
    rotate(+PI/2);

    if (sceneCount == 1) {
      let d;
      if (mouseIsPressed) {
        if (abs(mouseX - width/2)  > abs(mouseY - height/2)) {
          d = 2* abs(mouseX - width/2);
        } else {
          d = 2* abs(mouseY - height/2);
        }
        if (dMax < d) {
          dMax = d;
          drawGraph(dMax);
        }
      } else {
        d = dMax;
      }
      showSelection(d, prob_1s_dash);
      noFill();
      stroke(255);
      strokeWeight(2);
      ellipse(0,0,(d-15),(d-15));
      ellipse(0,0,(d+15),(d+15));

      let count = 0;
      for (let index in electrons_1s_dash) {
        let electron = electrons_1s_dash[index];
        noStroke();
        // if (electron.r < dMax/2 - 15) {
        //   fill(100,200,100,50);
        // }
        // else {
        //   fill(100,200,100,50); 
        // }

        
        // for (let electron of electrons_1s) {
        //   let diff = abs(electron.r - d/2);
        //   if (diff <=10) {
        //     count++;
        //   }
        // }
        if (electron.r + 10 < d/2+15 && electron.r - 10 > d/2-15) { 
          fill(200,200,100,200);
          count++;
        } else {
          fill(100,200,100,50); 
        }
        ellipse(electron.r*cos(electron.alpha),electron.r*sin(electron.alpha),10,10);
        
      }
      textSize(16);
      fill(255);
      textFont('Bai Jamjuree');
      textAlign(CENTER, CENTER);
      text(`Number of Measurements: ${count}`, 0, 300);

      fill(255);
      noStroke();
      ellipse(0,0,10,10);  

    } else if (sceneCount == 2) {
      let d;
      if (mouseIsPressed) {
        if (abs(mouseX - width/2)  > abs(mouseY - height/2)) {
          d = 2* abs(mouseX - width/2);
        } else {
          d = 2* abs(mouseY - height/2);
        }
        if (dMax < d) {
          dMax = d;
          drawGraph(dMax);
        }
      } else {
        d = dMax;
      }
      showSelection(d, prob_1s);
      noFill();
      stroke(255);
      strokeWeight(2);
      ellipse(0,0,(d-15),(d-15));
      ellipse(0,0,(d+15),(d+15));

      let count = 0;
      for (let index in electrons_1s) {
        let electron = electrons_1s[index];
        noStroke();
        // if (electron.r < dMax/2 - 15) {
        //   fill(100,200,100,50);
        // }
        // else {
        //   fill(100,200,100,50); 
        // }

        
        // for (let electron of electrons_1s) {
        //   let diff = abs(electron.r - d/2);
        //   if (diff <=10) {
        //     count++;
        //   }
        // }
        if (electron.r + 10 < d/2+15 && electron.r - 10 > d/2-15) { 
          fill(200,200,100,200);
          count++;
        } else {
          fill(100,200,100,50); 
        }
        ellipse(electron.r*cos(electron.alpha),electron.r*sin(electron.alpha),10,10);
        
      }
      textSize(16);
      fill(255);
      textFont('Bai Jamjuree');
      textAlign(CENTER, CENTER);
      text(`Number of Measurements: ${count}`, 0, 300);

      fill(255);
      noStroke();
      ellipse(0,0,10,10);  

    } else if (sceneCount == 3) {
      let d;
      if (mouseIsPressed) {
        if (abs(mouseX - width/2)  > abs(mouseY - height/2)) {
          d = 2* abs(mouseX - width/2);
        } else {
          d = 2* abs(mouseY - height/2);
        }
        if (dMax2 < d) {
          dMax2 = d;
          drawGraph2(dMax2);
        }
      } else {
        d = dMax2;
      }

      showSelection(d, prob_2s);
      noFill();
      stroke(255);
      strokeWeight(2);
      ellipse(0,0,(d-15),(d-15));
      ellipse(0,0,(d+15),(d+15));


      let count = 0;
      for (let index in electrons_2s) {
        let electron = electrons_2s[index];
        noStroke();
        // if (electron.r < dMax2/2 - 15) {
        //   fill(200,200,100,50);
        // }
        // else {
        //   fill(100,200,100,50); 
        // }
        // if (electron.r < d/2+15 && electron.r > d/2-15) { 
        //   fill(200,200,100,150);
        // }
        if (electron.r + 10 < d/2+15 && electron.r - 10 > d/2-15) { 
          fill(200,200,100,200);
          count++;
        } else {
          fill(100,200,100,50); 
        }
        ellipse(electron.r*cos(electron.alpha),electron.r*sin(electron.alpha),10,10);
      }


      
      // for (let electron of electrons_2s) {
      //   let diff = abs(electron.r - d/2);
      //   if (diff <=15) {
      //     count++;
      //   }
      // }
      textSize(16);
      fill(255);
      textFont('Bai Jamjuree');
      textAlign(CENTER, CENTER);
      text(`Electron count: ${count}`, 0, 300);

      fill(255);
      noStroke();
      ellipse(0,0,10,10);  


    } else if (sceneCount == 4) {
      let d;
      if (mouseIsPressed) {
        d = 2* abs(mouseX - width/2);
        
        if (dMax3 < d) {
          dMax3 = d;
          drawGraph2p(dMax3);
        }
      } else {
        d = dMax3;
      }

      showSelection(d, total_prob_2p);
      noFill();
      stroke(255);
      strokeWeight(2);
      // beginShape();
      // for (let t = -PI; t<=PI; t+=0.001) {
      //     curveVertex((d-20)/2*t,(d-20)/2*t*t*sqrt(1 - t*t));
      // }
      // endShape();
      // beginShape();
      // for (let t = -PI; t<=PI; t+=0.001) {
      //     curveVertex((d-20)/2*t,-(d-20)/2*t*t*sqrt(1 - t*t));
      // }
      // endShape();
      // beginShape();
      // for (let t = -PI; t<=PI; t+=0.001) {
      //     curveVertex((d+20)/2*t,(d+20)/2*t*t*sqrt(1 - t*t));
      // }
      // endShape();
      // beginShape();
      // for (let t = -PI; t<=PI; t+=0.001) {
      //     curveVertex((d+20)/2*t,-(d+20)/2*t*t*sqrt(1 - t*t));
      // }
      // endShape();
      ellipse(0,0,(d-15),(d-15));
      ellipse(0,0,(d+15),(d+15));


      let count = 0;  
      for (let index in electrons_2p) {
        let electron = electrons_2p[index];
        let x = electron.r*cos(electron.alpha);
        let y = electron.r*sin(electron.alpha);
        noStroke();
        // if (electron.r < dMax3/2 - 15) {
        //   fill(200,200,100,50);
        // }
        // else {
        //   fill(100,200,100,50); 
        // }
        // if (electron.r < d/2+15 && electron.r > d/2-15) { 
        //   fill(200,200,100,150);
        // }
        if (electron.r + 10 < d/2+15 && electron.r - 10 > d/2-15) { 
          fill(200,200,100,200);
          count++;
        } else {
          fill(100,200,100,50); 
        }
        ellipse(x,y,10,10);
      }

      textSize(16);
      fill(255);
      textFont('Bai Jamjuree');
      textAlign(CENTER, CENTER);
      text(`Electron count: ${count}`, 0, 300);
      fill(255);
      noStroke();
      ellipse(0,0,10,10); 
    } else if (sceneCount == 5) {

      let d1 = 50,d2 = 100,d3 = 200,d4 = 150,d5=300,d6=600;
      drawDumbel(d1);
      drawDumbel(d2);
      drawDumbel(d3);
      drawDumbel(d4);
      drawDumbel(d5);
      drawDumbel(d6);
      noStroke();

      let d;
      if (mouseIsPressed) {
        d = 2* abs(mouseX - width/2);
        
        if (dMax3 < d) {
          dMax3 = d;
          drawGraph2p(dMax3);
        }
      } else {
        d = dMax3;
      }

      showSelection(d, total_prob_2p);
      noFill();
      stroke(255);
      strokeWeight(2);
      // beginShape();
      // for (let t = -PI; t<=PI; t+=0.001) {
      //     curveVertex((d-20)/2*t,(d-20)/2*t*t*sqrt(1 - t*t));
      // }
      // endShape();
      // beginShape();
      // for (let t = -PI; t<=PI; t+=0.001) {
      //     curveVertex((d-20)/2*t,-(d-20)/2*t*t*sqrt(1 - t*t));
      // }
      // endShape();
      // beginShape();
      // for (let t = -PI; t<=PI; t+=0.001) {
      //     curveVertex((d+20)/2*t,(d+20)/2*t*t*sqrt(1 - t*t));
      // }
      // endShape();
      // beginShape();
      // for (let t = -PI; t<=PI; t+=0.001) {
      //     curveVertex((d+20)/2*t,-(d+20)/2*t*t*sqrt(1 - t*t));
      // }
      // endShape();
      // ellipse(0,0,(d-15),(d-15));
      // ellipse(0,0,(d+15),(d+15));


      let count = 0;  
      for (let index in electrons_2p) {
        let electron = electrons_2p[index];
        let x = electron.r*cos(electron.alpha);
        let y = electron.r*sin(electron.alpha);
        noStroke();
        // if (electron.r < dMax3/2 - 15) {
        //   fill(200,200,100,50);
        // }
        // else {
        //   fill(100,200,100,50); 
        // }
        // if (electron.r < d/2+15 && electron.r > d/2-15) { 
        //   fill(200,200,100,150);
        // }
        // if (electron.r + 10 < d/2+15 && electron.r - 10 > d/2-15) { 
        //   fill(200,200,100,200);
        //   count++;
        // } else {
          fill(100,200,100,50); 
        // }
        ellipse(x,y,10,10);
      }

      textSize(16);
      fill(255);
      textFont('Bai Jamjuree');
      textAlign(CENTER, CENTER);
      text(`Electron count: ${count}`, 0, 300);
      fill(255);
      noStroke();
      ellipse(0,0,10,10); 
    }


    translate(-width/2,-height/2);
  }
}
 
let drawDumbel = (d) => {
  // let points = [];
  // for (let i = 1; i<d; i++) {
  //   points.push({
  //     z: i,
  //     theta: fn(i,d)
  //   });
  // }
  // for (let point of points) {
  //   ellipse(point.z, point.z * tan(point.theta),1,1);
  //   ellipse(-point.z, point.z * tan(point.theta),1,1);
  //   ellipse(point.z, -point.z * tan(point.theta),1,1);
  //   ellipse(-point.z, -point.z * tan(point.theta),1,1);
  // }

  noFill();
  stroke(255);
  strokeWeight(1);
  ellipse((d/2)+1000/d,0,d-20,d+20);
  ellipse((-d/2)-1000/d,0,d-20,d+20);
}

