// 各ヘッダーナビのリンクに関する定義
// ------------------------------------

import {
  $window, $childNavList, $headerNavItemLinks
} from './doms';
import { MEDIA_QUERIES } from './constants';
import { mediaQueries } from './resetMediaQueries';
import { animaEnd, timeoutDelayTime } from './anima';

let enterTimer = null;
let leaveTimer = null;

/**
 * childNavListを閉じる。
 * @param { element } object - hrml要素
 */
const childNavLeave = (element) => {
  const $childNavList = $(element.currentTarget);
  clearTimeout(enterTimer);
  $childNavList.removeClass("active").addClass("anima");
}

/**
 * childNavの閉じるアニメーションの二重実行を防止。
 */
const childNavEnter = () => {
  clearTimeout(leaveTimer);
}

/**
 * headerNavEnter時の動作。childナビを開く。
 * @param { event } object - event
 */
const headerNavEnter = (event) => {
  if (mediaQueries === MEDIA_QUERIES.LARGE) {
    const $currentTarget = $(event.currentTarget);
    const $childNavList = $currentTarget.next();
    // 二重アニメーション防止。
    clearTimeout(enterTimer);
    enterTimer = setTimeout(() => {
      $childNavList.addClass('active anima');
    }, timeoutDelayTime.little);
  }
}

/**
 * headerNavLeave時の動作。childナビを閉じる。
 * @param { event } object - event
 */
const headerNavLeave = (event) => {
  if (mediaQueries === MEDIA_QUERIES.LARGE) {
    const $currentTarget = $(event.currentTarget);
    const $childNavList = $currentTarget.next();
    // ホバーが外れた時のマウス位置
    const leavedTop = event.clientY + $window.scrollTop();
    // ヘッダーナビの下側の位置
    const navBottom = $currentTarget.offset().top + $currentTarget.outerHeight();
    // childNavにホバーしなかった場合にchildNavを閉じます。
    if (leavedTop < navBottom) {
      leaveTimer = setTimeout(() => {
        $childNavList.removeClass('active').addClass('anima');
      }, timeoutDelayTime.little);
    }
    clearTimeout(enterTimer);
  }
}

/**
 * headerChildNavListの開閉アニメーション処理。
 * @param { $element } object - jquery要素
 */
const slideToggleChildNavList = ({ event }) => {
  const $currentTarget = $(event.currentTarget);
  const $childNavList = $($currentTarget.next());
  if ($currentTarget.hasClass('show')) {
    $currentTarget.removeClass('show');
    $childNavList.slideUp(600);
  } else {
    $currentTarget.addClass('show');
    $childNavList.slideDown(600);
  }
}

/**
 * 初期化関数。
 */
const init = () => {
  // transitionEnd時: これ以上アニメーションしないようにします。
  $childNavList.on('transitionend', animaEnd.normal);
  $childNavList.mouseenter(childNavEnter);
  $childNavList.mouseleave(childNavLeave);

  $headerNavItemLinks.mouseenter(headerNavEnter);
  $headerNavItemLinks.mouseleave(headerNavLeave);
  // ヘッダーナビのクリック時、childナビを開閉する。
  $headerNavItemLinks.click((event) => {
    // レスポンシブ: ハンバーガー表示時
    if (mediaQueries === MEDIA_QUERIES.HEADER_NAV) {
      event.preventDefault();
      slideToggleChildNavList({ event });
    }
  });
}

export {
  init as initHeaderNavItemLinks,
};