// ヘッダーナビのレスポンシブに対するブレークポイント
const BREAKPOINT_HEADER_NAV = 953;

/**
 * メディアクエリの条件分岐に用いる定数。
 * @type { string }
 */
const MEDIA_QUERIES = {
  LARGE: 'MEDIA_QUERIES_LARGE',
  HEADER_NAV: 'MEDIA_QUERIES_HEADER_NAV',
}

/**
 * アニメーションの状態に関するものです。
 * @type { string }
 */
const ANIMATION_STATE = {
  IS_ACTIVE: 'isActive',
  IS_ANIMA: 'isAnima',
  IS_ACTIVE_ANIMA: 'isActive isAnima',
  IS_FIX: 'isFix',
  IS_SHOW: 'isShow',
  IS_NAV_OPEN: 'isNavOpen',
};

/**
 * headerChildNavListの開閉アニメーションの速さ。
 * @type { number }
 */
const SLIDE_SPEED = 600;

export {
  BREAKPOINT_HEADER_NAV,
  MEDIA_QUERIES,
  ANIMATION_STATE,
  SLIDE_SPEED,
};