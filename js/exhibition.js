const infoSection = document.getElementById("information");
const text = document.querySelectorAll(".text");
const imgPlaceholder = document.querySelector(".img-placeholder");
const close = document.getElementById("close");

function showInformation(event) {

    infoSection.style.transition = "";  // Transition deaktivieren
    imgPlaceholder.style.transition = "";
    text.forEach((e) => (e.style.transition = ""));

  const imgSrc = event.currentTarget.querySelector("img")?.getAttribute("src");

  if (imgSrc) {
    imgPlaceholder.style.backgroundImage = `url('${imgSrc}')`;
    imgPlaceholder.style.backgroundSize = "cover";
    imgPlaceholder.style.backgroundPosition = "center";
  }

  imgPlaceholder.classList.add("active");

  infoSection.classList.add("active");
  text.forEach((e) => {
    e.classList.add("active");
  });

  document.body.style.overflow = "hidden";
}

function hideInformation() {
  
  imgPlaceholder.style.transition = "none";
  text.forEach((e) => (e.style.transition = "none"));

  infoSection.classList.remove("active");
  text.forEach((e) => {
    e.classList.remove("active");
  });
  imgPlaceholder.classList.remove("active");
  document.body.style.overflow = "auto";
}

document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", showInformation);
});

close.addEventListener("click", hideInformation);
