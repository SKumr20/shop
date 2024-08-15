import homeImage from './Images/Home.jpg';
import aboutImage from './Images/About.jpg';
import { loadContent } from './home.js';
import { loadAbout } from './about.js';
import "./styles.css";

document.addEventListener('DOMContentLoaded', () => {
    loadContent();
    setBgimage('home'); // Set initial background image

    document.getElementById('homeBtn').addEventListener('click', () => {
        switchTab(loadContent, 'home');
    });

    document.getElementById('aboutBtn').addEventListener('click', () => {
        switchTab(loadAbout, 'about');
    });
});

function switchTab(loadFunction, image) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear content
    loadFunction(); // Load the function passed as parameter
    setBgimage(image); // Set background image
}

function setBgimage(tab) {
    const imagePath = {
        home: homeImage,
        about: aboutImage
    };

    document.body.style.backgroundImage = `url('${imagePath[tab]}')`;
}
