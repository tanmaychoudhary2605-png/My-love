document.addEventListener("DOMContentLoaded", function () {

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });

    }, {
        threshold: 0.15
    });


    sections.forEach(function(section) {

        section.style.opacity = "0";
        section.style.transform = "translateY(40px)";
        section.style.transition = "all 1s ease";

        observer.observe(section);

    });


    // Keep the first section visible

    const first = document.querySelector(".first");

    first.style.opacity = "1";
    first.style.transform = "translateY(0)";

});
