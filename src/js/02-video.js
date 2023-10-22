import Player from '@vimeo/player';
import { throttle } from 'throttle-debounce';

const player = new Player('vimeo-player');

player.on('timeupdate', throttle(1000, function (evnt) {
    const time = evnt.seconds;
    localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
}));
const currentTime = localStorage.getItem('videoplayer-current-time');

if (currentTime) {
    player.setCurrentTime(JSON.parse(currentTime));
};

