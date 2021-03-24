var prev = document.getElementById('prev');
var next = document.getElementById('next');
var reveal = document.getElementById('reveal');
var current = 0;
location.hash = ''; //reset the location hash
document.scrollingElement.scrollTop = 0;

prev.onclick = function() {
    current--;
    location.hash = current;
}

next.onclick = function () {
    current++;
    location.hash = current;
    prev.removeAttribute('disabled');
}

reveal.onclick = function () {
    document.getElementById(current).classList.add("reveal");
}