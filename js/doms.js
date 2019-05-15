// DOMを定義
// ------------------------------------
const $window = $(window);
const $body = $('body');
// header
const $header = $('header');
const $headerNavToggle = $('#headerNavToggle');
const $headerNav = $('#headerNav');
const $headerNavItemLinks = $('.header__navItem:has(.childNavList) > a');
const $childNavList = $('.childNavList');
const $navOverlay = $('#navOverlay');
const $navLink = $(".header__navItem > a");
// visual
const $visual = $("#visual");
const $visualPositions = $visual.find('.position');
const $visualImg = {
  back: $visualPositions.filter('[data-position="back"]').find('img'),
  middle: $visualPositions.filter('[data-position="middle"]').find('img'),
  front: $visualPositions.filter('[data-position="front"]').find('img'),
}
const $visualBg = $('#visualBg');
const $visualLogoTitle = $('#visualLogoTitle');
// concept
const $concept = $("#concept");
// column
const $column = $('.column');
// ページ背景:水玉模様
const $entireBackgroud = $('#entireBackgroud');
const $entireBackgroudItem = {
  large: $entireBackgroud.find('.large'),
  medium: $entireBackgroud.find('.medium'),
  small: $entireBackgroud.find('.small'),
}

export {
  $window,
  $body,
  $header,
  $headerNavToggle,
  $headerNav,
  $headerNavItemLinks,
  $childNavList,
  $navOverlay,
  $navLink,
  $entireBackgroud,
  $entireBackgroudItem,
  $visual,
  $visualPositions,
  $visualImg,
  $visualBg,
  $visualLogoTitle,
  $concept,
  $column,
};