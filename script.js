function openPage() {

    let sections = document.querySelectorAll(".hidden");

    sections.forEach((section, index) => {

        setTimeout(() => {
            section.classList.add("show");
        }, index * 400);

    });

}


// Show sections smoothly while scrolling

const hiddenSections = document.querySelectorAll(".hidden");


const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});


hiddenSections.forEach(section => {

    observer.observe(section);

});
