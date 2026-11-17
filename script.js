
/* =========================================
   LINK PORTAL - MAIN SCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    // Automatically update copyright year
    const yearElement = document.getElementById("current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});
