// アニメーション関連を定義
// ------------------------------------

import { ANIMATION_STATE } from './constants';
// setTimeOutの遅延時間。
const timeoutDelayTime = {
  little: 200,
  normal: 1000
}

// 二重アニメーション防止のため
let _animaEndTimer = null;

/**
 * アニメーション継続の防止。
 */
const animaEnd = {
  /**
   * @param { element } object - dom要素
   */
  normal: (element) => {
    $(element.currentTarget).removeClass(ANIMATION_STATE.IS_ANIMA);
  },
  /**
   * @param { $element } object - jquery要素
   * @param { $delayTime } number - 遅延時間
   */
  withSetTimeout: ({ $element, delayTime }) => {
    clearTimeout(_animaEndTimer);
    _animaEndTimer = setTimeout(() => {
      $element.removeClass(ANIMATION_STATE.IS_ANIMA);
    }, delayTime);
  }
}

/**
 * アニメーションの[実行と停止]を表すクラスの付与。
 * @param { $element } object - jquery要素
 */
const doneAnimation = ($element) => {
  $element.addClass(ANIMATION_STATE.IS_ACTIVE);
  setTimeout(() => {
    // fixを付与することで、これ以上アニメーションさせるのを防止します。
    $element.addClass(ANIMATION_STATE.IS_FIX);
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



export {
  timeoutDelayTime,
  animaEnd,
  doneAnimation,
  animateIfIncludeWindow,
};