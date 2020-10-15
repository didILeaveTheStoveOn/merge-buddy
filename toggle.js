function toggleDisplay(elem) {
  if (elem.style.display === 'none') {
    elem.style.display = 'block';
  }
  else {
    elem.style.display = 'none'
  }
}

var elem = document.getElementsByClassName("merge-message").item(0);
if (elem !== null) {
  toggleDisplay(elem);
}
