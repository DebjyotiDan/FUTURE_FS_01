// Scroll reveal for sections
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    observer.observe(section);
});
const skillSections = document.querySelectorAll(".skills");

skillSections.forEach(section => {
    const progressBars = section.querySelectorAll(".progress");
    observer.observe(section);

    observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                progressBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = "0%";
                    setTimeout(() => bar.style.width = width, 300);
                });
            }
        });
    };
});
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Thanks for reaching out, Debjyoti will contact you soon!");
    this.reset();
});