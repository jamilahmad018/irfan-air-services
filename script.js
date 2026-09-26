
/* =========================================================
   IRFAN AIR SERVICES
   Main JavaScript
   ========================================================= */

// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    /* -----------------------------------------
       Smooth scrolling for internal links
       ----------------------------------------- */

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    /* -----------------------------------------
       Header shadow when scrolling
       ----------------------------------------- */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {
            header.style.boxShadow =
                "0 5px 25px rgba(0,0,0,0.10)";
        } else {
            header.style.boxShadow =
                "0 3px 20px rgba(0,0,0,0.04)";
        }

    });


    /* -----------------------------------------
       Reveal elements while scrolling
       ----------------------------------------- */

    const revealElements = document.querySelectorAll(
        ".service-card, .why-card, .destination-card, .about-image"
    );

    const revealObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(function (element) {

        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";
        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        revealObserver.observe(element);

    });


    /* -----------------------------------------
       Current year in footer
       ----------------------------------------- */

    const footerYear = document.querySelector(".footer-bottom p");

    if (footerYear) {

        footerYear.innerHTML =
            "© " +
            new Date().getFullYear() +
            " Irfan Air Services. All Rights Reserved.";

    }


    /* -----------------------------------------
       WhatsApp inquiry tracking
       ----------------------------------------- */

    const whatsappLinks = document.querySelectorAll(
        'a[href*="wa.me"]'
    );

    whatsappLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            console.log(
                "Irfan Air Services WhatsApp inquiry started."
            );

        });

    });

});
