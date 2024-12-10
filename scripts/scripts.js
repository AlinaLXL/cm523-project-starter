/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */
document.addEventListener('DOMContentLoaded', function() {
    // kayak animation code
    // https://github.com/Cyfrin/foundry-full-course-cu/discussions/2980 @Sanu2002
    const kayak = document.getElementById('kayak');
    kayak.style.animationPlayState = 'running';

    // nav link code
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll @MDN Web Docs
    const navLinks = document.querySelectorAll('nav a');
    const pages = document.querySelectorAll('.page');

    // https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault @MDN Web Docs
    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener @MDN Web Docs
    // https://stackoverflow.com/questions/35347014/show-div-if-it-is-display-style-none-hide-if-display-style-is-block @stack overflow
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            pages.forEach(page => {
                if (page.id === targetId) {
                    page.style.display = 'block';
                } else {
                    page.style.display = 'none';
                }
            });
        });
    });
});

// Font highlight when clicking on a navigation item
// https://stackoverflow.com/questions/75996551/select-and-add-function-to-all-links-in-a-nav @stack overflow
// https://stackoverflow.com/questions/63255124/remove-class-from-parent-element-javascript @stack overflow
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(item => {
            item.parentElement.classList.remove('current');
        });
        this.parentElement.classList.add('current');
    });
});

// https://leafletjs.com/ @Leaflet
// Initialize the map and set its view to the desired location and zoom level
var map = L.map('map').setView([42.3601, -71.0589], 12)// Centered on Boston
// Add the OpenStreetMap tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add markers for each location
L.marker([42.3554, -71.0645]).addTo(map) // Boston: Allston/Brighton
    .bindPopup('Boston: Allston/Brighton');

L.marker([42.3625, -71.0846]).addTo(map) // Cambridge: Kendall Square
    .bindPopup('Cambridge: Kendall Square');

L.marker([42.3944, -71.0816]).addTo(map) // Somerville: Blessing of the Bay
    .bindPopup('Somerville: Blessing of the Bay');

L.marker([42.4184, -71.1062]).addTo(map) // Medford: Condon Shell
    .bindPopup('Medford: Condon Shell');

L.marker([42.3456, -71.2180]).addTo(map) // Newton: Historic Boathouse
    .bindPopup('Newton: Historic Boathouse');

L.marker([42.4564, -71.1013]).addTo(map) // Stoneham: Spot Pond
    .bindPopup('Stoneham: Spot Pond');

L.marker([42.3756, -71.2350]).addTo(map) // Waltham: Moody Street Dam
    .bindPopup('Waltham: Moody Street Dam');

// Add the Recommendation Questionnaire for Events!
// https://github.com/orgs/community/discussions/140216 @Mj6078
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND @MDN Web Doc
document.getElementById('recommend-btn').addEventListener('click', function() {
    const experience = document.querySelector('input[name="experience"]:checked');
    const preference = document.querySelector('input[name="preference"]:checked');
    const result = document.getElementById('recommendation-result');

    if (experience && preference) {
        if (experience.value === 'yes' && preference.value === 'cityscapes') {
            result.textContent = "We recommend the Boston Skyline & City Lights Kayak Tours from Kendall Square!";
        } else if (experience.value === 'no' && preference.value === 'cityscapes') {
            result.textContent = "We recommend the Boston Harbor Tour!";
        } else if (experience.value === 'no' && preference.value === 'natural') {
            result.textContent = "We recommend the Shuttled River Trips from the Mystic Lakes in Somerville!";
        } else if (experience.value === 'yes' && preference.value === 'natural') {
            result.textContent = "We recommend the Moonlight Canoe Tour!";
        }
    } else {
        result.textContent = "Please answer both questions to get a recommendation.";
    }
});