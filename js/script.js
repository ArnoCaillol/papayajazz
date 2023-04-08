/*'use strict';
const cl = console.log;

const papayaJazz = document.getElementsByTagName('h1')[0];

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

window.onscroll= function () {
    progressBar();

    let pageOffset = window.pageYOffset;

    papayaJazz.style.top = `${pageOffset*0.05}rem`;
    papayaJazz.style.fontSize = `${4 - pageOffset*0.01}rem`;
    
    circle2.style.top = `${-25 - pageOffset*0.001}rem`;
    circle2.style.right = `${-25 - pageOffset*0.001}rem`;
    circle3.style.bottom = `${-10 - pageOffset*0.001}rem`;
    circle3.style.right = `${5 - pageOffset*0.001}rem`;
    circle4.style.top = `${-5 - pageOffset*0.001}rem`;
    circle4.style.right = `${30 + pageOffset*0.001}rem`;

    circle5.style.bottom = `${50 + pageOffset*0.025}rem`;
    circle6.style.top = `${80 - pageOffset*0.025}rem`;
    circle7.style.top = `${10 - pageOffset*0.025}rem`;
    circle8.style.top = `${50 - pageOffset*0.025}rem`;

    
    let current = "";

    const sections = document.getElementsByTagName('section');

    for(let section of sections) {
        const sectionTop = section.offsetTop;

        if (pageOffset >= (sectionTop - 300) ) {
            current = section.getAttribute("id"); 
        }
    }
};
*/