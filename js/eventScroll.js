// スクロール時イベントを定義
// ------------------------------------

import { $window, $firedWithinScroll } from './doms';
import { animateIfIncludeWindow } from './anima';

/**
 * スクロール後に実行するイベントを設定します。
 */
const setEventScrolledAnimation = () => {
  window.addEventListener("scroll", function () {
    const scrolledPosition = $window.scrollTop() + $window.height();

    // イベントを設定
    $firedWithinScroll.each((idx, element) => {
      animateIfIncludeWindow({ scrolledPosition, $element: $(element) });
    });
  });
}

export {
  setEventScrolledAnimation,
};