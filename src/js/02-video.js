import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const player = new Player('vimeo-player');

player.on('timeupdate', throttle(function (evnt) {
    const time = evnt.seconds;
    localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
}, 1000));
const currentTime = localStorage.getItem('videoplayer-current-time');

if (currentTime) {
    player.setCurrentTime(JSON.parse(currentTime));
};

