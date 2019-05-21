// スクロール時イベントを定義
// ------------------------------------

import { $window, $firedWithinScroll } from './doms';
import { animateIfIncludeWindow } from './anima';

/**
 * スクロール後に実行するイベントを設定します。
 */
const setEventScrolledAnimation = () => {
  window.addEventListener("scroll", function () {
    const windowHeight = $window.height();
    // 少しゆったり目の実行とするための調整値(画面下から画面の7分の1の高さでの実行目的)
    const scrolledPositionAdjust = (windowHeight / 7);
    const scrolledPosition = $window.scrollTop() + windowHeight - scrolledPositionAdjust;

    // イベントを設定
    $firedWithinScroll.each((idx, element) => {
      animateIfIncludeWindow({ scrolledPosition, $element: $(element) });
    });
  });
}

export {
  setEventScrolledAnimation,
};