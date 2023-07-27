import Player from '@vimeo/player';
const throttle = require('lodash/throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

if (localStorage.getItem('key') != null)
  player.setCurrentTime(localStorage.getItem('key'));

player.on('timeupdate', throttle(data => {
    localStorage.setItem('key', data.seconds);
}, 1000)
);