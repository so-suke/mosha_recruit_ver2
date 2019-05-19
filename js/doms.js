// DOMを定義
// ------------------------------------
const $window = $(window);
const $body = $('body');
// header
const $header = $('header');
const $headerNavToggle = $('#headerNavToggle');
const $headerNav = $('#headerNav');
const $headerNavItemLinks = $('.jsHeaderNavItemLinks');
const $childNavList = $('.jsChildNavList');
const $navOverlay = $('#navOverlay');
// visual
const $visual = $("#visual");
const $visualPositions = $visual.find('.jsPosition');
const $visualImg = {
  back: $visualPositions.filter('[data-position="back"]').find('img'),
  middle: $visualPositions.filter('[data-position="middle"]').find('img'),
  front: $visualPositions.filter('[data-position="front"]').find('img'),
}
const $visualBg = $('#visualBg');
const $visualLogoTitle = $('#visualLogoTitle');
// ページ背景:水玉模様
const $entireBackgroud = $('#entireBackgroud');
const $entireBackgroudItem = {
  large: $entireBackgroud.find('.jsLarge'),
  medium: $entireBackgroud.find('.jsMedium'),
  small: $entireBackgroud.find('.jsSmall'),
}
// スクロール範囲内に入ったらイベントを発火させる要素。
const $firedWithinScroll = $('.jsFiredWithinScroll');

export {
  $window,
  $body,
  $header,
  $headerNavToggle,
  $headerNav,
  $headerNavItemLinks,
  $childNavList,
  $navOverlay,
  $visual,
  $visualPositions,
  $visualImg,
  $visualBg,
  $visualLogoTitle,
  $entireBackgroud,
  $entireBackgroudItem,
  $firedWithinScroll,
};