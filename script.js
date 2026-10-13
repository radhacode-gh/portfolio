```javascript
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
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// Display a welcome message in the browser console.
console.log("Welcome to Radha Garg's portfolio!");
```

