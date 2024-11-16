var menuIcons = document.querySelectorAll(".header__menu-icon");
var closeIcon = document.querySelector(".header__close-icon");
var toggleMenuClass = document.querySelector(".header__toggle-menu");
for (const menuIcon of menuIcons) {
  menuIcon.addEventListener("click", closeAndOpenMenu);
}
closeIcon.addEventListener("click", closeAndOpenMenu);
function closeAndOpenMenu() {
  let classOpen = "header__toggle-menu--open";
  if (!toggleMenuClass.className.includes(classOpen)) {
    toggleMenuClass.classList.add(classOpen);
  } else {
    toggleMenuClass.classList.remove(classOpen);
  }
}
