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
        createParticles();
        sceneCount = 1;
      } else {
        particles_to_show = [];
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
        goToHydrogen();
        sceneCount = 2;
      } else {
        particles_to_show = [];
        createParticles();
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
        particles_to_show = [];
        nucleusCreation();
        sceneCount = 3;
      } else {
        particles_to_show = [];
        createParticles();
        goToHydrogen();
        sceneCount = 2;
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
      if (sceneCount == 3) {
        experimentScience();
        sceneCount = 4;
      } else {
        particles_to_show = [];
        nucleusCreation();
        sceneCount = 3;
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
        showBohrRadius();
        d3load();
        sceneCount = 5;
      } else {
        dontShowBohrRadius();
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
        makeRings();
        sceneCount = 6;
      } else {
        ringMaker = false;
        sceneCount = 5;
      }
    })
    .addTo(controller);
}