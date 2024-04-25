//slider
new Glide(".glide",{type:"carousel"}).mount();

//typing effect style
const search  = document.querySelector('.search__input');
const placeholder = document.querySelector('.search__placeholder');

search.addEventListener('focusin', () => {
    placeholder.style.display = 'none';
});

search.addEventListener('focusout', () => {
    if(search.value.length <= 0){
        placeholder.style.display = 'block';
    }
});


//sticky nav on scroll

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.nav');
    navbar.classList.toggle('nav__fixed', window.scrollY > 0);
})

//filter box uncheck
const check = document.querySelector('#check');
const filter__content = document.querySelector('.filter__content');
const filter__btn = document.querySelector('.search__filter');
const navbar = document.querySelector('.nav');


window.addEventListener('click', (e) => {
    if(e.target == filter__btn){

        filter__content.classList.toggle("filter__active");

    } else if(filter__content.classList.contains('filter__active')){

        if(e.target != filter__content){

            filter__content.classList.remove('filter__active');

        }

    }
})