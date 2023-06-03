let menu = document.querySelector(".menus");
let list = document.querySelector("nav ul");
let x = false;

menu.addEventListener("click", function () {
  if (!x) {
    list.style.display = "flex";
    x = !x;
  } else {
    list.style.display = "none";
    x = !x;
  }
});

function myFunction(z) {
  if (!z.matches) {
    // If media query matches
    list.style.display = "flex";
  } else {
    list.style.display = "none";
  }
}

var z = window.matchMedia("(max-width: 767px)");
myFunction(z); // Call listener function at run time
z.addListener(myFunction); // Attach listener function on state changes
