import { $window, $visual } from './doms';
import { doneAnimation } from './anima';

/**
 * visualイベントを設定します。
 */
const setEventVisual = () => {
  $window.on('load', () => {
    doneAnimation($visual);
  });
}

export {
  setEventVisual,
};