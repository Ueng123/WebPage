
let sst = document.querySelector(".social h3")
let supersecretNumber = 1;

sst.addEventListener("click", function () {
  if (supersecretNumber == 10) {
    sst.textContent = "INVADER DETECTED"
    setTimeout(INVADER, 100)
  }
  supersecretNumber += 1
})

function INVADER () {

  col1()
  setTimeout(beCome, 10000)

}

function col1 () {
  document.documentElement.style.setProperty('--color-3', '#FF5733');
  document.documentElement.style.setProperty('--color-2', '#C70039');
  document.documentElement.style.setProperty('--color-1', '#900C3F');

  document.documentElement.style.setProperty('--black', '#581845');
  document.documentElement.style.setProperty('--blackPP', '#762043');
  document.documentElement.style.setProperty('--blackP', '#A02043');

  setTimeout(col2, 1000)

}

function col2 () {
  document.documentElement.style.setProperty('--color-1', '#FF5733');
  document.documentElement.style.setProperty('--color-2', '#C70039');
  document.documentElement.style.setProperty('--color-3', '#900C3F');

  document.documentElement.style.setProperty('--blackP', '#581845');
  document.documentElement.style.setProperty('--blackPP', '#762043');
  document.documentElement.style.setProperty('--black', '#A02043');

  setTimeout(col1, 1000)

}

function beCome() {
  window.location.href = window.location.href.replace("supersecret.html", "lndex.html");
}
