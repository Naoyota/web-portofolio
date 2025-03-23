function openImage(imgElement) {
    var overlay = document.getElementById("overlay");
    var overlayImg = document.getElementById("overlay-img");

    overlayImg.src = imgElement.src;
    overlay.style.display = "flex";

        // Tambahkan animasi membesar
        setTimeout(() => {
            overlayImg.classList.add("show");
        }, 10);
}

function closeImage() {
    document.getElementById("overlay").style.display = "none";
}

