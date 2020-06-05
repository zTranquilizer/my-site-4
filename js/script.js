function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 1,
    dots: true,
    arrows: false,
  });
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $(".header").addClass("fixed-header");
    $(".full-main__body").addClass("margin");
  } else {
    $(".header").removeClass("fixed-header");
    $(".full-main__body").removeClass("margin");
  }
});
$(document).ready(function () {
  $(".header-menu__burger").click(function (event) {
    $(".header-menu__burger, .header-menu__nav, .header__logo").toggleClass(
      "active-menu"
    );
    $("body").toggleClass("lock");
  });
});
$(document).ready(function () {
  $(".slider-about").slick({
    slidesToShow: 1,
    dots: true,
    arrows: true,
  });
});
