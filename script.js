// Smooth scrolling for links to sections on this page.

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches
                    ? "auto"
                    : "smooth",
                block: "start"
            });
        }
    });
});

// Display a welcome message in the browser console.

console.log("Welcome to Radha Garg's portfolio!");

// Check whether the profile photo loads correctly.

const profilePhoto = document.querySelector(".profile-photo img");

if (profilePhoto) {
    profilePhoto.addEventListener("error", () => {
        console.error(
            "Profile photo not found. Keep radha-profile.jpeg " +
            "in the same folder as index.html."
        );
    });
}
