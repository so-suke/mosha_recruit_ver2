// スクロール時イベントを定義
// ------------------------------------

import {
  $window, $concept, $column
} from './doms';
import { animateIfIncludeWindow } from './anima';

/**
 * スクロール後に実行するイベントを設定します。
 */
const setEventScrolledAnimation = () => {
  window.addEventListener("scroll", function () {
    const scrolledPosition = $window.scrollTop() + $window.height();

    // concept, 各column にイベントを設定
    animateIfIncludeWindow({ scrolledPosition, $element: $concept });
    $column.each((idx, element) => {
      animateIfIncludeWindow({ scrolledPosition, $element: $(element) });
    });
  });
}

export {
  setEventScrolledAnimation,
};