let humbugger = document.querySelector(".humbugger");
let rightMenu = document.querySelector(".right-menu");
let rightNavItems = document.querySelectorAll(".right-nav");
let contentPages = document.querySelectorAll(".content-pages");

humbugger.addEventListener("click", () => {
  console.log("clicked");
  console.log(rightMenu);
  rightMenu.classList.add("active");
});

document.onclick = (e) => {
  if (!rightMenu.contains(e.target) && !humbugger.contains(e.target)) {
    rightMenu.classList.remove("active");
  }
};

for (let nav of rightNavItems) {
  nav.onclick = () => {
    rightMenu.classList.remove("active");
    activePages(nav.getAttribute("href"));
  };
}

let activePages = (page) => {
  for (let eachPageElem of contentPages) {
    eachPageElem.classList.remove("active");
    if (eachPageElem.id == page.substring(1)) {
      eachPageElem.classList.add("active");
    }
  }
};
