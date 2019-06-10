function load(url, element) {
  req = new XMLHttpRequest();
  req.open("GET", url, false);
  req.send(null);
  element.innerHTML = req.responseText;
}

load("sidebar.html", document.getElementById("loadHeader"));
