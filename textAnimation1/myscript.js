var letter = {};
letter.opacityIn = [0,1];
letter.scaleIn = [0.2, 1];
letter.scaleOut = 3;
letter.durationIn = 800;
letter.durationOut = 600;
letter.delay = 500;

anime.timeline({loop: true})
  .add({
    targets: '.letter .letters-1',
    opacity: letter.opacityIn,
    scale: letter.scaleIn,
    duration: letter.durationIn
  }).add({
    targets: '.letter .letters-1',
    opacity: 0,
    scale: letter.scaleOut,
    duration: letter.durationOut,
    easing: "easeInExpo",
    delay: letter.delay
  }).add({
    targets: '.letter .letters-2',
    opacity: letter.opacityIn,
    scale: letter.scaleIn,
    duration: letter.durationIn
  }).add({
    targets: '.letter .letters-2',
    opacity: 0,
    scale: letter.scaleOut,
    duration: letter.durationOut,
    easing: "easeInExpo",
    delay: letter.delay
  }).add({
    targets: '.letter .letters-3',
    opacity: letter.opacityIn,
    scale: letter.scaleIn,
    duration: letter.durationIn
  }).add({
    targets: '.letter .letters-3',
    opacity: 0,
    scale: letter.scaleOut,
    duration: letter.durationOut,
    easing: "easeInExpo",
    delay: letter.delay
  }).add({
    targets: '.letter',
    opacity: 0,
    duration: 500,
    delay: 500
  });