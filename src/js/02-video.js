import Player from '@vimeo/player';
import { throttle } from 'throttle-debounce';

const player = new Player('vimeo-player');
player.on('timeupdate', throttle(1000, function (data) {
    const time = data.seconds;
    console.log(time);
    localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
}));
const currentTime = localStorage.getItem('videoplayer-current-time');

if (currentTime) {
    player.setCurrentTime(JSON.parse(currentTime));
}

