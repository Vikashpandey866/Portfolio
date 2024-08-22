// Toggle style switcher visibility
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide style switcher on scroll
window.addEventListener("scroll", () => {
    const styleSwitcher = document.querySelector(".style-switcher");
    if (styleSwitcher.classList.contains("open")) {
        styleSwitcher.classList.remove("open");
    }
});

// Theme color switcher
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(colorClass) {
    alternateStyles.forEach((style) => {
        if (colorClass === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

// Attach color change function to color options
document.querySelectorAll(".colors span").forEach((colorSpan) => {
    colorSpan.addEventListener("click", () => {
        const colorClass = colorSpan.classList[0];
        setActiveStyle(colorClass);
    });
});

// Light and Dark theme toggle
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    const icon = dayNight.querySelector("i");
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});

// Initialize icon on page load
window.addEventListener("load", () => {
    const icon = dayNight.querySelector("i");
    if (document.body.classList.contains("dark")) {
        icon.classList.add("fa-sun");
    } else {
        icon.classList.add("fa-moon");
    }
});
function setActiveStyle(colorClass) {
    console.log(`Setting active style to: ${colorClass}`);
    alternateStyles.forEach((style) => {
        console.log(`Checking style with title: ${style.getAttribute("title")}`);
        if (colorClass === style.getAttribute("title")) {
            style.removeAttribute("disabled");
            console.log(`Enabled style: ${colorClass}`);
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}
 