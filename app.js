const continueWithAds = document.getElementById("continue");
const subscribe = document.getElementById("subscribe");
const overlay = document.querySelector(".adblock-overlay");

function adblockPopUp() {
    continueWithAds.addEventListener("click", function() {
        overlay.classList.toggle("fade-out");
        body.style.overflow = "visible";
    });

    subscribe.addEventListener("click", function() {
        overlay.classList.toggle("fade-out");
        body.style.overflow = "visible";
    });
}

adblockPopUp();