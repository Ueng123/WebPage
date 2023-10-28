
// secret 1

let rickrollImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOe0OYP6Eqa9lKOuIZzYfde4V9b1Os-nTLg&usqp=CAU"

let secretImg = document.querySelector(".profile-image img");
let title = document.querySelector("#sec1 .profile-name");
let desc = document.querySelector("#sec1 .profile-description");
let nuuug = document.querySelector("#sec2 h1")

let donate = document.querySelector(".social h3")

let rickRolld = false

let rot = 0

nuuug.addEventListener("click", function () {
  pw = prompt("???");
  if (pw == "TRUE_MuApUnCh") {
    alert("축하해. 비밀을 찾았구나.")
    alert("보상은...")
    alert("무아펀치.")
    title.textContent = "무아펀치";
    desc.textContent = "TRUTH OF MUA PUNCH"
  }
})

// step 1
secretImg.addEventListener("click", function () {
  if (!rickRolld) rot += 10;
  if (rot > 350) { rickRolld = true;
    rot = 0;
    open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    secretImg.src = rickrollImage;

    title.textContent = "LUUUL"
    desc.textContent  = "RICK ROLL'd!!!!"

    donate.textContent= "이 불쌍한 누그에게 1000원을 주세요? >>> TOSS 1908-8561-7798"
  }
  secretImg.style.transform = `rotate(${rot}deg)`;
});

// step 2
donate.addEventListener("click", function () {
  if (rickRolld) donate.textContent= "이 *@&한 ##에게 @@@@!을 *@&요 >>> TOSS? 73 75 70 65 72 73 65 63 72 65 74 2E 68 74 6D 6C"
})
