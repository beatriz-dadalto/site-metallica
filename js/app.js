document.addEventListener('DOMContentLoaded', () => {
  let tl = new TimelineMax();

  tl.fromTo(
    '.bg-loader',
    1,
    { width: '100%' },
    { width: '0%', delay: 5, ease: Expo.easeInOut },
  );

  tl.fromTo(
    '.bg-video',
    2,
    { width: '0%', opacity: 0 },
    { width: '100%', opacity: 1, ease: Expo.easeInOut },
    '-=1',
  );

  tl.fromTo('.nav-list', 0.7, 
  { y: 50, opacity: 0,},
  { y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
  }, '-=0.2')

  tl.fromTo(
    '.metallica-logo',
    0.7,
    { y: -50, opacity: 0 },
    { y: 0, opacity: 1, ease: Expo.easeInOut },
    '-=2',
  );

  tl.fromTo(
    '.cta',
    0.7,
    { y: -50, opacity: 0 },
    { y: 0, opacity: 1, ease: Expo.easeInOut },
    '-=1.5',
  );

  tl.fromTo(
    '.stamps',
    0.7,
    { y: -50, opacity: 0 },
    { y: 0, opacity: 1, ease: Expo.easeInOut },
    '-=1',
  );

  tl.fromTo(
    '.img-metallica',
    0.7,
    { y: -50, opacity: 0 },
    { y: 0, opacity: 1, ease: Expo.easeInOut },
    '-=0.5',
  );

});
