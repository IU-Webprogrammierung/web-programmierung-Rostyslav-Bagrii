
//SLIDER



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