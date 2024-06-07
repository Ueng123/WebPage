function copyToClipboard(message) {
  navigator.clipboard.writeText(message);
}

let DivLogo = document.querySelector("#LOGOSEC");
let MenuLogo = document.querySelector("#MENUSEC");
let menuButton = document.querySelector(".menubutton > button");

let isMenuOpen = false;
function menuInteraction() {
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    DivLogo.style.transform="translateX(-100vw)";
    MenuLogo.style.transform="translateX(0)";
    menuButton.innerHTML="<i class='bx bx-x'></i>";
  } else {
    DivLogo.style.transform="";
    MenuLogo.style.transform="translateX(100vw)";
    menuButton.innerHTML="<i class='bx bx-menu'></i>"
  }
}