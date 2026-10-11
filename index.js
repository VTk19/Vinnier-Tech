/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.getElementById("menuButton");

const navLinks = document.querySelector(".nav-links");


if (menuButton) {

    menuButton.addEventListener("click", function () {

        navLinks.classList.toggle("mobile-active");

    });

}


/* =========================================
   CLOSE MOBILE MENU WHEN LINK IS CLICKED
========================================= */

const navigationLinks =
    document.querySelectorAll(".nav-links a");


navigationLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("mobile-active");

    });

});


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const service =
            document.getElementById("service").value;

        const message =
            document.getElementById("message").value;


        const formMessage =
            document.getElementById("formMessage");


        if (
            name === "" ||
            email === "" ||
            message === ""
        ) {

            formMessage.textContent =
                "Please fill in all required fields.";

            return;

        }


        formMessage.textContent =
            "Thank you! Your message has been prepared.";


        /*
        IMPORTANT:

        This demo does NOT actually send
        an email.

        Later you can connect this form
        to a backend service such as
        Formspree, EmailJS or your own
        PHP backend.
        */


        contactForm.reset();

    });

}


/* =========================================
   SCROLL HEADER
========================================= */

window.addEventListener("scroll", function() {

    const header =
        document.querySelector(".header");


    if (window.scrollY > 50) {

        header.style.background =
            "rgba(9, 11, 15, 0.97)";

    } else {

        header.style.background =
            "rgba(9, 11, 15, 0.85)";

    }

});