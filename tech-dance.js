function showSidebar() {
    // Show the sidebar and hide the hamburger icon
    document.querySelector('.sidebar').classList.add('active');
    document.querySelector('.sideIcon').classList.add('hidden');
    document.querySelector('.hideIcon').classList.add('active');
}

function hideSidebar() {
    // Hide the sidebar and show the hamburger icon
    document.querySelector('.sidebar').classList.remove('active');
    document.querySelector('.sideIcon').classList.remove('hidden');
    document.querySelector('.hideIcon').classList.remove('active');
}

document.addEventListener("DOMContentLoaded", () => {
    const faqs = document.querySelectorAll(".faqs");

    faqs.forEach((faq) => {
        faq.addEventListener("click", () => {
            faq.classList.toggle("active");
        });
    });
});