let humbugger = document.querySelector(".humbugger");
let rightMenu = document.querySelector(".right-menu");
let rightNavItems = document.querySelectorAll(".right-nav");
let contentPages = document.querySelectorAll(".content-pages");

window.onload = () => {
  let locHash = location.hash.toLowerCase();
  if (locHash) {
    activePages(locHash);
  }
};

humbugger.addEventListener("click", () => {
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

let activePages = (pageHash) => {
  page = pageHash.substring(1);
  let activeNav;
  for (let eachPageElem of contentPages) {
    eachPageElem.classList.remove("active");
    if (eachPageElem.id == page) {
      activeNav = page;
      eachPageElem.classList.add("active");
    }
  }

  for (let navItem of rightNavItems) {
    navItem.classList.remove("active");
    let navName = navItem.getAttribute("href").substring(1);
    if (activeNav == navName) {
      navItem.classList.add("active");
    }
  }

  if (!activeNav) {
    activePages("#home");
    location.hash = "home";
  }
};
