// スクロール時イベントを定義
// ------------------------------------

import {
  $window, $visual, $concept, $column
} from './doms';

/**
 * アニメーションの[実行と停止]を表すクラスの付与。
 * @param { $element } object - jquery要素
 */
const doneAnimation = ($element) => {
  $element.addClass("isActive");
  setTimeout(() => {
    // fixを付与することで、これ以上アニメーションさせるのを防止します。
    $element.addClass("fix");
  }, 3000);
}

/**
 * 要素がスクロール画面内に入ったらアニメーションさせる。
 * @param { scrolledPosition } num - スクロール位置
 * @param { $element } object - jquery要素
 */
const animateIfIncludeWindow = ({ scrolledPosition, $element }) => {
  if (scrolledPosition > $element.offset().top) {
    doneAnimation($element);
  }
}

/**
 * スクロール後に実行するイベントを設定します。
 */
const setEventScrolledAnimation = () => {
  window.addEventListener("scroll", function () {
    const scrolledPosition = $window.scrollTop() + $window.height();

    // visual, concept, 各column にイベントを設定
    animateIfIncludeWindow({ scrolledPosition, $element: $visual });
    animateIfIncludeWindow({ scrolledPosition, $element: $concept });
    $column.each((idx, element) => {
      animateIfIncludeWindow({ scrolledPosition, $element: $(element) });
    });
  });
}

export {
  setEventScrolledAnimation,
};