// ヘッダーナビのレスポンシブに対するブレークポイント
const breakpointHeaderNav = 953;

/**
 * メディアクエリの条件分岐に用いる定数。
 * @type { string }
 */
const mediaQuery = {
  large: 'mediaQueryLarge',
  headerNav: 'mediaQueryHeaderNav',
}

/**
 * アニメーションの状態に関するものです。
 * @type { string }
 */
const animationState = {
  isActive: 'isActive',
  isAnima: 'isAnima',
  isActiveAnima: 'isActive isAnima',
  isFix: 'isFix',
  isShow: 'isShow',
  isNavOpen: 'isNavOpen',
};

/**
 * headerChildNavListの開閉アニメーションの速さ。
 * @type { number }
 */
const slideSpeed = 600;

export {
  breakpointHeaderNav,
  mediaQuery,
  animationState,
  slideSpeed,
};