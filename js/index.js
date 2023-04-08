const papayaJazz = document.getElementById('main-logo');

const circle1 = document.getElementsByClassName('bg-circle-1')[0];
const circle2 = document.getElementsByClassName('bg-circle-2')[0];
const circle3 = document.getElementsByClassName('bg-circle-3')[0];
const circle4 = document.getElementsByClassName('bg-circle-4')[0];
const circle5 = document.getElementsByClassName('bg-circle-5')[0];
const circle6 = document.getElementsByClassName('bg-circle-6')[0];
const circle7 = document.getElementsByClassName('bg-circle-7')[0];
const circle8 = document.getElementsByClassName('bg-circle-8')[0];

function progressBar() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector("#scrollBar").style.width = scrolled + "%";
}

function animations() {
    progressBar();

    let pageOffset = window.pageYOffset;

    papayaJazz.style.marginTop = `${pageOffset*0.5}px`;
    papayaJazz.style.maxHeight = `${100 - pageOffset*0.05}vh`;
    
    circle1.style.bottom = `${-55 - pageOffset*0.002}rem`;
    circle1.style.left = `${-55 - pageOffset*0.002}rem`;
    circle2.style.top = `${-25 - pageOffset*0.002}rem`;
    circle2.style.right = `${-25 - pageOffset*0.002}rem`;
    circle3.style.bottom = `${-10 - pageOffset*0.002}rem`;
    circle3.style.right = `${5 - pageOffset*0.002}rem`;
    circle4.style.top = `${-5 - pageOffset*0.002}rem`;
    circle4.style.right = `${30 + pageOffset*0.002}rem`;

    circle5.style.bottom = `${50 + pageOffset*0.025}rem`;
    circle6.style.top = `${80 - pageOffset*0.025}rem`;
    circle7.style.top = `${10 - pageOffset*0.025}rem`;
    circle8.style.top = `${50 - pageOffset*0.025}rem`;
}

window.onscroll = function () {
    animations();
};

// document.getElementById('lienMembres').onclick = function() {
//     animations();
// }