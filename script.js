function showMessage() {

    let sections = document.querySelectorAll(".hidden");

    sections.forEach((section, index) => {

        setTimeout(() => {
            section.classList.add("show");
        }, index * 300);

    });

}
