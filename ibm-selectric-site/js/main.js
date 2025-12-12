// Mobile navigation toggle
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("open");
    });
}

// STAR RATING SYSTEM – fills all stars up to selected
const stars = document.querySelectorAll("#starRating span");
const ratingInput = document.getElementById("rating");
const ratingValue = document.getElementById("ratingValue");

if (stars.length > 0 && ratingInput && ratingValue) {
    stars.forEach(star => {
        star.addEventListener("click", () => {
            const selected = parseInt(star.dataset.star, 10);

            ratingInput.value = selected;
            ratingValue.textContent = "Rating: " + selected + " / 5";

            stars.forEach(s => {
                const value = parseInt(s.dataset.star, 10);
                if (value <= selected) {
                    s.classList.add("selected");
                } else {
                    s.classList.remove("selected");
                }
            });
        });
    });
}

// FEEDBACK FORM VALIDATION
const form = document.getElementById("feedbackForm");

if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const comments = document.getElementById("comments").value.trim();
        const ratingVal = ratingInput ? ratingInput.value.trim() : "";
        const msg = document.getElementById("formMsg");

        if (!name || !email || !comments || !ratingVal) {
            msg.textContent = "Please complete all fields and select a rating.";
            msg.style.color = "darkred";
            return;
        }

        msg.textContent = "Thank you. Your feedback has been submitted.";
        msg.style.color = "darkgreen";

        form.reset();
        if (ratingInput) ratingInput.value = "";
        if (ratingValue) ratingValue.textContent = "No rating selected";
        stars.forEach(s => s.classList.remove("selected"));
    });
}

// SCROLL-BASED SECTION ANIMATIONS
const animatedSections = document.querySelectorAll("[data-animate]");

if (animatedSections.length > 0) {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    animatedSections.forEach(section => observer.observe(section));
}
