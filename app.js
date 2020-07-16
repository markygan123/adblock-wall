const continueWithAds = document.getElementById("continue");
const subscribe = document.getElementById("subscribe");
const overlay = document.querySelector(".adblock-overlay");
const body = document.querySelector("body");

function adblockPopUp() {
    continueWithAds.addEventListener("click", function() {
        overlay.style.display = "none";
        body.style.overflow = "visible";
    });

    subscribe.addEventListener("click", function() {
        overlay.style.display = "none";
    });
}

window.onload = () => {
    setTimeout(() => {
        adblockPopUp();
    }, 3000);
}