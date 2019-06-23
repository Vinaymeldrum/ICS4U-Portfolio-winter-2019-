function load(url, element) {
  req = new XMLHttpRequest();
  req.open("GET", url, false);
  req.send(null);
  element.innerHTML = req.responseText;
}

load("sidebar.html", document.getElementById("loadHeader"));
$(document).ready(function() {
  console.log("ready");

  $("#sidebar").mCustomScrollbar({
    theme: "minimal"
  });

  $('#sidebarCollapse').on('click', function() {
    console.log("click");
    // open or close navbar
    $('#sidebar').toggleClass('active');
    if ($('#sidebar').hasClass('active')) {
      $('#buttonDiv').css("padding-left", "250px");
    } else {
      $('#buttonDiv').css("padding-left", "0px");
    }
    // close dropdowns
    $('.collapse.in').toggleClass('in');
    // and also adjust aria-expanded attributes we use for the open/closed arrows
    // in our CSS
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });
});
