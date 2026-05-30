// =========================
// MOBILE MENU
// =========================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

// =========================
// LIGHTBOX
// =========================

const galleryImages = document.querySelectorAll(".gallery-container img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("closeBtn");

galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
        if (lightbox && lightboxImg) {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
        }
    });
});

if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        if (lightbox) {
            lightbox.style.display = "none";
        }
    });
}

if (lightbox) {
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
}

// =========================
// COUNTERS
// =========================

function animateCounter(counter) {
    const target = +counter.dataset.target;
    let count = 0;
    const increment = target / 100;

    function update() {
        if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count);
            requestAnimationFrame(update);
        } else {
            counter.innerText = target;
        }
    }

    update();
}

const counters = document.querySelectorAll(".counter");

if (counters.length) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    counters.forEach((counter) => {
        observer.observe(counter);
    });
}

// =========================
// THEME
// =========================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        themeBtn.innerHTML = "☀️";
    } else {
        themeBtn.innerHTML = "🌙";
    }

    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            themeBtn.innerHTML = "☀️";
        } else {
            localStorage.setItem("theme", "dark");
            themeBtn.innerHTML = "🌙";
        }
    });
}

// =========================
// LOADER
// =========================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        if (loader) {
            loader.style.display = "none";
        }
    }, 1500);
});

// =========================
// REVEAL ANIMATION
// =========================

function revealSections() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// =========================
// EMAILJS
// =========================

if (typeof emailjs !== "undefined") {
    emailjs.init("2kzJlTtbikVa5K9ou");

    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            emailjs
                .sendForm(
                    "service_dahbbqh",
                    "template_ox544pe",
                    this
                )
                .then(() => {
                    alert("Message Sent Successfully!");
                    contactForm.reset();
                })
                .catch((error) => {
                    console.error(error);
                    alert("Failed to send message.");
                });
        });
    }
}

// =========================
// PROGRESS BAR
// =========================

window.addEventListener("scroll", () => {
    const progressBar = document.getElementById("progress-bar");

    if (!progressBar) return;

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";
});

// =========================
// TYPING EFFECT
// =========================

const typingText = document.getElementById("typing-text");

if (typingText) {
    const text = "Capturing Moments That Last Forever";

    typingText.innerHTML = "";

    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 70);
        }
    }

    typeWriter();
}

// =========================
// HERO SLIDER
// =========================

const hero = document.querySelector(".hero");

if (hero) {
    const images = [
        "images/hero1.jpg",
        "images/hero2.jpg",
        "images/hero3.jpg",
        "images/hero4.jpg"
    ];

    let current = 0;

    setInterval(() => {
        current++;

        if (current >= images.length) {
            current = 0;
        }

        hero.style.backgroundImage = `url(${images[current]})`;
    }, 5000);
}

// =========================
// TESTIMONIAL SLIDER
// =========================

const testimonials = document.querySelectorAll(".testimonial");

if (testimonials.length) {
    let currentTestimonial = 0;

    testimonials.forEach((t, index) => {
        t.style.display = index === 0 ? "block" : "none";
    });

    setInterval(() => {
        testimonials.forEach((t) => {
            t.style.display = "none";
        });

        testimonials[currentTestimonial].style.display = "block";

        currentTestimonial++;

        if (currentTestimonial >= testimonials.length) {
            currentTestimonial = 0;
        }
    }, 3000);
}

// =========================
// GALLERY FILTER
// =========================

const filterBtns = document.querySelectorAll("[data-filter]");

filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;

        document.querySelectorAll(".gallery-item").forEach((item) => {
            if (
                filter === "all" ||
                item.classList.contains(filter)
            ) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});

// =========================
// CUSTOM CURSOR
// =========================

const cursor = document.createElement("div");

cursor.classList.add("cursor");

document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});