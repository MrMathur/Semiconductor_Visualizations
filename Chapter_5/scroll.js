let StartScroll = () => {
  let controller = new ScrollMagic.Controller();

  let scene_0 = new ScrollMagic.Scene({
      triggerElement: '#scene_0'
    })
    .setClassToggle('#scene_0', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 0) {
        sceneCount = 0.5;
      } else {
        sceneCount = 0;
      }
    })
    .addTo(controller);

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
      if (sceneCount == 0.5) {
        sceneCount = 1;
        d3bands();
      } else {
        sceneCount = 0.5;
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
        d3zoom();
        sceneCount = 2;
      } else {
        sceneCount = 1;
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
      if (sceneCount == 2) {
        d3sp3();
        sceneCount = 3;
      } else {
        sceneCount = 2;
      }
    })
    .addTo(controller);

  let scene_3_and_5 = new ScrollMagic.Scene({
      triggerElement: '#scene_3_and_5'
    })
    .setClassToggle('#scene_3_and_5', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 3) {
        d3sp3();
        sceneCount = 3.5;
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
        d3split();
        sceneCount = 4;
      } else {
        sceneCount = 3.5;
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
        d3fourlevels();
        sceneCount = 5;
      } else {
        sceneCount = 4;
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
        d3bands();
        sceneCount = 6;
      } else {
        sceneCount = 5;
      }
    })
    .addTo(controller);
}