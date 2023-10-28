
let sst = document.querySelector(".social h3.a")
let sst2 = document.querySelector(".social h3.b")

let text = document.querySelectorAll("h1")
let text2 = document.querySelectorAll("h2")
let text3 = document.querySelectorAll("h3")
let text4 = document.querySelectorAll("li")
let text5 = document.querySelectorAll("p")
let text6 = document.querySelectorAll("a")

let title = document.querySelector("title")

let chats = [
  "안녕.",
  "지금까지는 그냥 장난친거야.",
  "어땠어?",
  "좋았으면 1000원만 줘. >>> TOSS 1908-8561-7798",
  "이게 끝이야.",
  "...",
  "..?",
  "왜?",
  "더 없어.",
  "나한테 왜이러는데?",
  "짜증나게 하지 마.",
  "그만.",
  "그만!",
  "<찾을 수 없는 ELEMENT 입니다.>"
]

let chats2 = [
  "음?",
  "뭐지?",
  "이상한 기운이 느껴지는데...",
  "???",
  "이건 내가 한거 아니다?",
  "뭐지?",
  "UtF-I6:::0068 0065 006c 006c 006f 0077 006f 0072 006c 0064 002e 0068 0074 006d 006c"
]

let currchat = 0
let currchat2 = 0

sst.addEventListener("click", function () {
  sst.textContent = chats[currchat];
  if (currchat == 13) {
    sst2.textContent = "여긴 못찾겠지.."
  }
  if (currchat != 13) currchat++
})

sst2.addEventListener("click", function () {
  sst2.textContent = chats2[currchat2];
  if (currchat2 == 3) {
    col1()
  
    title.textContent = "< UNDEFINED >"
    text.forEach((item, index) => {item.textContent  = `<찾을 수 없는 ELEMENT 입니다:${index}>`})
    text2.forEach((item, index) => {item.textContent  = `<찾을 수 없는 ELEMENT 입니다:${index}>`})
    text3.forEach((item, index) => {item.textContent  = `<찾을 수 없는 ELEMENT 입니다:${index}>`})
    text4.forEach((item, index) => {item.textContent  = `<찾을 수 없는 ELEMENT 입니다:${index}>`})
    text5.forEach((item, index) => {item.textContent  = `<찾을 수 없는 ELEMENT 입니다:${index}>`})
    text6.forEach((item, index) => {item.textContent  = `<찾을 수 없는 ELEMENT 입니다:${index}>`})
    sst2.textContent  = chats2[currchat2]
  
  }
  if (currchat2 != 6) currchat2++
})

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
