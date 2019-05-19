import {
  $window, $header, $headerNav, $headerNavToggle, $navOverlay
} from './doms';
import { ANIMATION_STATE } from './constants';
import { timeoutDelayTime, animaEnd } from './anima';

/**
 * ハンバーガーメニュー開閉時に円の大きさが変化します。
 * それの大きさを取得します。
 * @return number - 円の大きさ
 */
const getCircleScale = () => {
  const windowHeight = $window.height();
  const windowWidth = $window.width();
  const circleScaleAdjust = 20; // サークルの大きさの調整値
  return windowHeight > windowWidth ? windowHeight / circleScaleAdjust : windowWidth / circleScaleAdjust;
}

/**
 * ハンバーガーメニューの円を縮める
 */
const _shrinkCircle = () => {
  $navOverlay.css('transform', 'scale(1)');
}

/**
 * ハンバーガーメニューの円を広げる
 */
const _spreadCircle = () => {
  $navOverlay.css('transform', `scale(${getCircleScale()})`);
}

/**
 * ナビを閉じる
 */
const _closeNav = () => {
  _shrinkCircle();
  $header.removeClass(ANIMATION_STATE.IS_NAV_OPEN);
}

/**
 * ナビを開く
 */
const _openNav = () => {
  _spreadCircle();
  $header.addClass(ANIMATION_STATE.IS_NAV_OPEN);
}

/**
 * ナビを開閉する
 */
const openCloseHeaderNavToggle = () => {
  if ($header.hasClass(ANIMATION_STATE.IS_NAV_OPEN)) {
    _closeNav();
  } else {
    _openNav();
  }
  $headerNav.addClass(ANIMATION_STATE.IS_ANIMA);
  animaEnd.withSetTimeout({ $element: $headerNav, delayTime: timeoutDelayTime.normal });
}

/**
 * HeaderNavToggleに対してのイベントを設定します。
 */
const setEventHeaderNavToggle = () => {
  $headerNavToggle.click(openCloseHeaderNavToggle);
}

export {
  setEventHeaderNavToggle,
};