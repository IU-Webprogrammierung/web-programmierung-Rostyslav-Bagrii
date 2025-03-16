
//SLIDER

const sliderContent = document.getElementById('slider-content');
const images = document.querySelectorAll('.slider-img');
let currentIndex = 0;

function updateSlider() {
    const offset = -currentIndex * 100; // Verschiebung nach links in Prozent
    sliderContent.style.transform = `translateX(${offset}%)`;
}

document.getElementById('left').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
});

document.getElementById('right').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
});

updateSlider();



// CONTACT POPUP

const popup = document.getElementById("contact");
const contact = document.getElementById("contact-item");
const close = document.getElementById("close");
const form = document.querySelector("form");
const submit = document.getElementById("submit-btn");
const success = document.getElementById("submit-success");
const navbar = document.getElementById("navbar");
const middleContainer = document.getElementById("middle-container");
const galleryContainer = document.getElementById("gallery-container");
const footer = document.getElementById("footer");

contact.addEventListener('click', () => {
    popup.style.display = "flex";
    
    navbar.style.opacity = "50%";
    middleContainer.style.opacity = "50%";
    galleryContainer.style.opacity = "50%";
    footer.style.opacity = "50%";
});


close.addEventListener('click', () => {
    popup.style.display = "none";
    success.textContent = "";
    form.reset();

    navbar.style.opacity = "100%";
    middleContainer.style.opacity = "100%";
    galleryContainer.style.opacity = "100%";
    footer.style.opacity = "100%";
});

submit.addEventListener('click', (e) => {
    e.preventDefault();
    success.textContent = "Anfrage erfolgreich gesendet";
});




document.querySelectorAll(".more-text").forEach(button => {
    button.addEventListener("click", (event) => {
        const id = event.target.dataset.id;
        const parent = event.target.closest(".grid-item");
        const imgName = parent.querySelector(".grid-img").getAttribute("name");
        const imgSrc = parent.querySelector(".grid-img").src;
        const altText = parent.querySelector(".grid-img").alt;
        const text = "Dies ist eine Beschreibung für Bild " + `"${imgName}"`; // Hier kannst du den richtigen Text einfügen


        navbar.style.opacity = "50%";
        middleContainer.style.opacity = "50%";
        galleryContainer.style.opacity = "50%";
        footer.style.opacity = "50%";

        // Falls das div schon existiert, löschen
        let existingPopup = document.querySelector(".img-popup");
        if (existingPopup) {
            existingPopup.remove();
        }

        // Neues div erstellen
        const imgPopup = document.createElement("div");
        imgPopup.classList.add("img-popup");
        imgPopup.innerHTML = `
            <div class="popup-content">
                <div class="close-box"><p class="img-content-close">&times;</p></div>
                <p class="img-name">${imgName}</p>
                <div class="picture-box">
                    <img class="picture" src="${imgSrc}" alt="${altText}">
                </div>
                <p class="img-description">${text}</p>
            </div>
        `;
        
        // Popup zum Body hinzufügen
        document.body.appendChild(imgPopup);

        // Schließen-Funktion
        imgPopup.querySelector(".img-content-close").addEventListener("click", () => {
            imgPopup.remove();
            navbar.style.opacity = "100%";
            middleContainer.style.opacity = "100%";
            galleryContainer.style.opacity = "100%";
            footer.style.opacity = "100%";
        });
    });


    // SIDEBAR
    const sidebar = document.getElementById("sidebar");
    const menu = document.getElementById("menu-button");
    menu.addEventListener("click", function() {
        let currentHeight = window.getComputedStyle(sidebar).height;
        
        if (currentHeight === "0px") {
            sidebar.style.height = "40%";
        } else {
            sidebar.style.height = "0";
        }
    });


});