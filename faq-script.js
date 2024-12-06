document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll(".accordion-header");

    headers.forEach(header => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;

            // Toggle active state
            header.classList.toggle("active");

            // Expand or collapse content
            if (header.classList.contains("active")) {
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.padding = "15px";
            } else {
                content.style.maxHeight = null;
                content.style.padding = "0 15px";
            }
        });
    });
});
