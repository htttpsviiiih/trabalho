const splash = document.querySelector("#splash");

document.addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        document.getElementById("splash").style.display = "none";
        document.location.href = "home.html";
    }, 5000);
})