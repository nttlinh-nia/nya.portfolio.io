const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    const isOpen = navMenu.classList.contains("active");

    menuToggle.textContent = isOpen ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", isOpen);
});

// Đóng menu sau khi chọn một mục

document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});


// ==============================
// 2. SCROLL REVEAL ANIMATION
// ==============================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});


// ==============================
// 3. PROJECT FILTER
// ==============================

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Xóa trạng thái active cũ
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Thêm active cho nút được chọn
        button.classList.add("active");

        const filter = button.dataset.filter;

        projectCards.forEach(card => {

            const category = card.dataset.category;

            if (filter === "all" || category === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});


// ==============================
// 4. AUTOMATIC FOOTER YEAR
// ==============================

document.getElementById("year").textContent =
    new Date().getFullYear();
