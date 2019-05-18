import { $window, $visual } from './doms';
import { doneAnimation } from './anima';

const setEventVisual = () => {
  $window.on('load', () => {
    doneAnimation($visual);
  });
}

export {
  setEventVisual,
};