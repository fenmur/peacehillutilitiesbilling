document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab=> {
        tab.addEventListener("click", () => {
            tabs.forEach(btn=> btn.classList.remove("active"));
            tab.classList.add("active");

            tabContents.forEach(tabContent => tabContent.classList.remove("active"));
            document.getElementById(tab.dataset.tab).classList.add("active");
        })


    });
});