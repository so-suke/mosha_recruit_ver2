import { $window } from './doms';
import { BREAKPOINT_HEADER_NAV, MEDIA_QUERIES } from './constants';

/**
 * メディアクエリの条件分岐に用いるグローバル変数。
 * @type {string}
 */
let mediaQueries = null;

/**
 * 現在の画面サイズに応じたメディアクエリを再設定します。
 */
const resetMediaQueries = () => {
  const windowSize = $window.width();
  windowSize > BREAKPOINT_HEADER_NAV ? mediaQueries = MEDIA_QUERIES.LARGE : mediaQueries = MEDIA_QUERIES.HEADER_NAV;
}

/**
 * 初期設定としてwindowにイベントを設定します。
 */
const init = () => {
  $window.on('load resize', () => {
    resetMediaQueries();
  });
}

export {
  mediaQueries,
  resetMediaQueries,
  init as initResetMediaQueries,
};