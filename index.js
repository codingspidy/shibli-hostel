const nav = document.getElementById("primary-navbar");
const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", () => {
    const isVisible = nav.getAttribute("data-visible");
    
    if (isVisible === "false") {
        nav.setAttribute("data-visible", true);
        toggleBtn.setAttribute("aria-expanded", true);
    } else if (isVisible === "true") {
        nav.setAttribute("data-visible", false);
        toggleBtn.setAttribute("aria-expanded", false);
    }
})

