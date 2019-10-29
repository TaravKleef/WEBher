var navWerk = document.querySelector('nav>ul>li:nth-of-type(3)');
var titleWerk = document.getElementById('werk');
var navOvermij = document.querySelector('nav>ul>li:nth-of-type(2)');
var titleOvermij = document.getElementById('overmij');
var navContact = document.querySelector('nav>ul>li:nth-of-type(4)');
var titleContact = document.getElementById('contact');

navWerk.addEventListener('click', function () {
    console.log('hoi');
    titleWerk.classList.add('vergroot')
})

navOvermij.addEventListener('click', function () {
    titleOvermij.classList.add('vergroot')
})

navContact.addEventListener('click', function () {
    titleContact.classList.add('vergroot')
})

//van https://stackoverflow.com/questions/17534661/make-anchor-link-go-some-pixels-above-where-its-linked-to
// werkt alleen eerste keer klikken

window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 100);
});
