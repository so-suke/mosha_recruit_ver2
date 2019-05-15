// アニメーション関連を定義
// ------------------------------------
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
    $(element.currentTarget).removeClass('anima');
  },
  /**
   * @param { $element } object - jquery要素
   * @param { $delayTime } number - 遅延時間
   */
  withSetTimeout: ({ $element, delayTime }) => {
    clearTimeout(_animaEndTimer);
    _animaEndTimer = setTimeout(() => {
      $element.removeClass("anima");
    }, delayTime);
  }
}

export {
  timeoutDelayTime,
  animaEnd,
};