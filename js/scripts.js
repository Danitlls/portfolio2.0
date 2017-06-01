$(document).ready(function(){


  $('#fullpage').fullpage({
    anchors: ['page1', 'page2', 'page3', 'page4'],
    sectionsColor: ['tomato', 'orange', '#C0C0C0', '#ADD8E6'],
  });

  // $("#black").hide(900)
  $("#welcomePage").hover(function() {
        $("#one").stop().slideUp(700).fadeOut(300);
        $("#two").stop().delay(800).animate({ "font-size": "140%"});
        $("#lista").fadeIn().slideDown(900)
    });
      $("#dani").css("color","black",600);

});
