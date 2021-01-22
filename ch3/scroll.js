let StartScroll = () => {
  let controller = new ScrollMagic.Controller();

  let scene_1 = new ScrollMagic.Scene({
      triggerElement: '#scene_1'
    })
    .setClassToggle('#scene_1', 'fade-in')
    .on('start', () => {
      if (sceneCount == 0) {
        sceneCount = 1;
        d3onload();
      } else {
        sceneCount = 0;
      }
    })
    .addTo(controller);


  let scene_2 = new ScrollMagic.Scene({
      triggerElement: '#scene_2'
    })
    .setClassToggle('#scene_2', 'fade-in')
    .on('start', () => {
      if (sceneCount == 1) {
        sceneCount = 2;
        d3onload2();
      } else {
        sceneCount = 1;
      }
    })
    .addTo(controller);

  let scene_5 = new ScrollMagic.Scene({
      triggerElement: '#scene_5'
    })
    .setClassToggle('#scene_5', 'fade-in')
    .on('start', () => {
      if (sceneCount == 2) {
        sceneCount = 5;
        d3onload5();
      } else {
        sceneCount = 2;
      }
    })
    .addTo(controller);

  let scene_5_5 = new ScrollMagic.Scene({
      triggerElement: '#scene_5and5'
    })
    .setClassToggle('#scene_5and5', 'fade-in')
    .on('start', () => {
      if (sceneCount == 7) {
        sceneCount = 8;
        d3onload5and5();
      } else {
        sceneCount = 7;
        d3antibonding();
      }
    })
    .addTo(controller);

  let scene_6 = new ScrollMagic.Scene({
      triggerElement: '#scene_6'
    })
    .setClassToggle('#scene_6', 'fade-in')
    .on('start', () => {
      if (sceneCount == 5) {
        sceneCount = 6;
        d3bonding();
      } else {
        sceneCount = 5;
      }
    })
    .addTo(controller);

  let scene_7 = new ScrollMagic.Scene({
      triggerElement: '#scene_7'
    })
    .setClassToggle('#scene_7', 'fade-in')
    .on('start', () => {
      if (sceneCount == 6) {
        sceneCount = 7;
        d3antibonding();
      } else {
        sceneCount = 6;
        d3bonding();
      }
    })
    .addTo(controller);
}