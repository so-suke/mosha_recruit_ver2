import { $window } from './doms';
import { breakpointHeaderNav, mediaQuery } from './constants';

/**
 * メディアクエリの条件分岐に用いるグローバル変数。
 * @type {string}
 */
let mediaQueryNow = null;

/**
 * 現在の画面サイズに応じたメディアクエリを再設定します。
 */
const resetMediaQueries = () => {
  const windowSize = $window.width();
  windowSize > breakpointHeaderNav ? mediaQueryNow = mediaQuery.large : mediaQueryNow = mediaQuery.headerNav;
}

/**
 * メディアクエリの再設定イベントを設定します。
 */
const setEventMediaQueriesReset = () => {
  $window.on('load resize', () => {
    resetMediaQueries();
  });
}

export {
  mediaQueryNow,
  resetMediaQueries,
  setEventMediaQueriesReset,
};