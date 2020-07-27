let StartScroll = () => {
  let controller = new ScrollMagic.Controller();

  let scene_1 = new ScrollMagic.Scene({
      triggerElement: '#scene_1'
    })
    .setClassToggle('#scene_1', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 0) {
        sceneCount = 1;
        console.log('Happening');
      } else {
        sceneCount = 0;
      }
    })
    .addTo(controller);


  let scene_2 = new ScrollMagic.Scene({
      triggerElement: '#scene_2'
    })
    .setClassToggle('#scene_2', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 1) {
        sceneCount = 2;
      } else {
        sceneCount = 1;
      }
    })
    .addTo(controller);

  let scene_2and5 = new ScrollMagic.Scene({
      triggerElement: '#scene_2and5'
    })
    .setClassToggle('#scene_2and5', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 2) {
        sceneCount = 2.5;
        potentialEnergyGraph(width, (negative_charge.x - 2 * width / 3));
      } else {
        sceneCount = 2;
      }
    })
    .addTo(controller);
  let scene_3 = new ScrollMagic.Scene({
      triggerElement: '#scene_3'
    })
    .setClassToggle('#scene_3', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 2.5) {
        sceneCount = 3;
        d3onload();
      } else {
        sceneCount = 2.5;
        call = 1;
        potentialEnergyGraph(width, (negative_charge.x - 2 * width / 3));
      }
    })
    .addTo(controller);

  let scene_3and5 = new ScrollMagic.Scene({
      triggerElement: '#scene_3and5'
    })
    .setClassToggle('#scene_3and5', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 3) {
        sceneCount = 3.5;
        reset();
        d3onload();
      } else {
        sceneCount = 3;
      }
    })
    .addTo(controller);

  let scene_4 = new ScrollMagic.Scene({
      triggerElement: '#scene_4'
    })
    .setClassToggle('#scene_4', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 3.5) {
        sceneCount = 4;
        secondGraph();
      } else {
        sceneCount = 3.5;
        d3onload();
      }
    })
    .addTo(controller);

  let scene_5 = new ScrollMagic.Scene({
      triggerElement: '#scene_5'
    })
    .setClassToggle('#scene_5', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 4) {
        sceneCount = 5;
        reset();
        // secondGraph();
      } else {
        sceneCount = 4;
        // d3onload();
      }
    })
    .addTo(controller);

  let scene_6 = new ScrollMagic.Scene({
      triggerElement: '#scene_6'
    })
    .setClassToggle('#scene_6', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 5) {
        sceneCount = 6;
        reset();
        // secondGraph();
      } else {
        sceneCount = 5;
        // d3onload();
      }
    })
    .addTo(controller);

  // let scene_4 = new ScrollMagic.Scene({
  //     triggerElement: '#scene_4'
  //   })
  //   .setClassToggle('#scene_4', 'fade-in')
  //   // .addIndicators({
  //   //   name: 'fade scene',
  //   //   colorTrigger: 'white',
  //   //   colorStart: '#FFF7AE'
  //   // })
  //   .on('start', () => {
  //     if (sceneCount == 3) {
  //       experimentScience();
  //       showHelpText.text = "";
  //       sceneCount = 4;
  //     } else {
  //       particles_to_show = [];
  //       nucleusCreation();
  //       showHelpText = {
  //         text: "Press ENTER to locate electron",
  //         x: width / 2,
  //         y: height / 2 + 350,
  //         color: color(255, 255, 255),
  //         size: 24
  //       }
  //       sceneCount = 3;
  //     }
  //   })
  //   .addTo(controller);

  // let scene_5 = new ScrollMagic.Scene({
  //     triggerElement: '#scene_5'
  //   })
  //   .setClassToggle('#scene_5', 'fade-in')
  //   // .addIndicators({
  //   //   name: 'fade scene',
  //   //   colorTrigger: 'white',
  //   //   colorStart: '#FFF7AE'
  //   // })
  //   .on('start', () => {
  //     if (sceneCount == 4) {
  //       showBohrRadius();
  //       sweep = true;
  //       sceneCount = 5;
  //     } else {
  //       dontShowBohrRadius();
  //       sweep = false;
  //       sceneCount = 4;
  //     }
  //   })
  //   .addTo(controller);

  // let scene_6 = new ScrollMagic.Scene({
  //     triggerElement: '#scene_6'
  //   })
  //   .setClassToggle('#scene_6', 'fade-in')
  //   // .addIndicators({
  //   //   name: 'fade scene',
  //   //   colorTrigger: 'white',
  //   //   colorStart: '#FFF7AE'
  //   // })
  //   .on('start', () => {
  //     if (sceneCount == 5) {
  //       makeRings();
  //       sweep = false;
  //       sceneCount = 6;
  //     } else {
  //       ringMaker = false;
  //       sweep = true;
  //       bohrRadiusCon = true;
  //       sceneCount = 5;
  //     }
  //   })
  //   .addTo(controller);

  // let scene_7 = new ScrollMagic.Scene({
  //     triggerElement: '#scene_7'
  //   })
  //   .setClassToggle('#scene_7', 'fade-in')
  //   // .addIndicators({
  //   //   name: 'fade scene',
  //   //   colorTrigger: 'white',
  //   //   colorStart: '#FFF7AE'
  //   // })
  //   .on('start', () => {
  //     if (sceneCount == 6) {
  //       particles_to_show = [];
  //       ringMaker = false;
  //       bohrRadiusCon = false;
  //       sceneCount = 7;
  //     } else {
  //       makeRings();
  //       sweep = false;
  //       sceneCount = 6;
  //       sceneCount = 6;
  //     }
  //   })
  //   .addTo(controller);
}