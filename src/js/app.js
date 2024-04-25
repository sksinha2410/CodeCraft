new Glide(".glide", { type: "carousel" }).mount();
const search = document.querySelector(".search__input"),
  placeholder = document.querySelector(".search__placeholder");
search.addEventListener("focusin", () => {
  placeholder.style.display = "none";
}),
  search.addEventListener("focusout", () => {
    search.value.length <= 0 && (placeholder.style.display = "block");
  }),
  window.addEventListener("scroll", () => {
    document
      .querySelector(".nav")
      .classList.toggle("nav__fixed", window.scrollY > 0);
  });
const check = document.querySelector("#check"),
  filter__content = document.querySelector(".filter__content"),
  filter__btn = document.querySelector(".search__filter"),
  navbar = document.querySelector(".nav");
window.addEventListener("click", (e) => {
  e.target == filter__btn
    ? filter__content.classList.toggle("filter__active")
    : filter__content.classList.contains("filter__active") &&
      e.target != filter__content &&
      filter__content.classList.remove("filter__active");
});
class textTyper {
  constructor(txtElement, words, wait) {
    (this.txtElement = txtElement),
      (this.words = words),
      (this.delay = wait),
      (this.wordIndex = 0),
      (this.txt = ""),
      (this.isDeleting = !1),
      this.typer();
  }
  typer() {
    const current = this.wordIndex % this.words.length,
      fulltxt = this.words[current];
    this.isDeleting
      ? (this.txt = fulltxt.substring(0, this.txt.length - 1))
      : (this.txt = fulltxt.substring(0, this.txt.length + 1)),
      (this.txtElement.innerHTML = `<span class='txt'>${this.txt}</span>`);
    let typespeed = this.delay;
    this.isDeleting && (typespeed /= 2),
      this.isDeleting || this.txt !== fulltxt
        ? this.isDeleting &&
          "" === this.txt &&
          ((this.isDeleting = !1), this.wordIndex++, (typespeed = 500))
        : ((typespeed = this.delay), (this.isDeleting = !0)),
      setTimeout(() => this.typer(), typespeed);
  }
}
function init() {
  const txtElement = document.querySelector(".txt-type"),
    words = JSON.parse(txtElement.getAttribute("data-words")),
    wait = txtElement.getAttribute("data-wait");
  new textTyper(txtElement, words, wait);
}
document.addEventListener("DOMContentLoaded", init);
