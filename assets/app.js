import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.css';

const cursorRounded = document.querySelector('.rounded');
const cursorPointed = document.querySelector('.pointed');


const moveCursor = (e)=> {
    const mouseY = e.clientY;
    const mouseX = e.clientX;

    cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

    cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

}

window.addEventListener('mousemove', moveCursor)

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');
