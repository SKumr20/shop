import homeImage from './Images/Home.jpg';
import aboutImage from './Images/About.jpg';
import { loadContent } from './home.js'; // Function already defined in home.js
import { loadAbout } from './about.js'; // Function already defined in about.js
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

    // Add mousemove event listener to apply parallax effect
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        // Slower motion effect
        const slowFactor = 0.2;
        const xOffset = x * 100 * slowFactor;
        const yOffset = y * 100 * slowFactor;

        document.body.style.backgroundPosition = `${xOffset}% ${yOffset}%`;
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
