function initNav() {
  $("a").click(function(e) {
    var cp = PROVIDER.getCurrentPageName();
    SARAH_UTILITY.trace("initNav ", cp);
    var btnID = e.currentTarget.id;
    if (cp != btnID) {
      loadContent(btnID);
    }
  });
}

function loadContent(pageName) {
  var pageContent = PROVIDER.getPageContent(pageName);
  SARAH_UTILITY.trace("", pageContent);
  $(".content").html(pageContent);

  initNav();
}

function populateNav() {
  var nav = PROVIDER.getMainNav();

  $("nav").append(
    `<div id="logo"><div class="logo-holder"><a id="home" href="#">STS</a></div></div></<div>`
  );
  $.each(nav, function(idx, link) {
    // $('nav').append('<a href="' + link.path + '">' + link.linkName + '</a>');
    $("nav").append(`<a id="${link.path}" href="#">${link.linkName}</a>`);
  });

  $("nav").append(
    `<a href='https://www.facebook.com/WWF/'><i style='font-size: 200%;'  class='fa fa-facebook-square'></i></a>`
  );
  $("nav").append(
    `<a href='https://www.instagram.com/wwf/?hl=en'><i style='font-size: 230%;' i class="fa fa-instagram"></></a>`
  );

  loadContent("home");
}

function dataIsLoaded() {
  populateNav();
}

$(document).ready(function() {
  PROVIDER.getData(dataIsLoaded);
});
