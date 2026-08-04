// autor.js
const dustImg = new Image();
dustImg.src = "img/dust.png";
document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".card");
    const lines = document.querySelectorAll(".connections line");

    // Aparición escalonada de las tarjetas
    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";

        setTimeout(() => {

            card.style.transition = "all .6s ease";

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }, index * 120);

    });

    // Hover elegante
    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            lines.forEach(line => {

                line.style.transition = ".25s";

                line.style.stroke = "#ddb874";

                line.style.opacity = "1";

            });

        });

        card.addEventListener("mouseleave", () => {

            lines.forEach(line => {

                line.style.stroke = "#c89a52";

                line.style.opacity = ".75";

            });

        });

    });

    // Parallax del fondo
    const hero = document.querySelector(".hero-bg");

    window.addEventListener("scroll", () => {

        if (!hero) return;

        const y = window.scrollY;

        hero.style.transform =
            `translateY(${y * 0.15}px) scale(1.04)`;

    });

});
/* =====================================
   POLVO EN SUSPENSIÓN
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.createElement("canvas");
    canvas.id = "dust";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");

    function resizeDust() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeDust();
    window.addEventListener("resize", resizeDust);

    const dust = [];

    for (let i = 500; i < 5700; i++) {

        dust.push({

            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,

            r: Math.random() * 9 + 0.8,

            vx: (Math.random() - 0.5) * 0.35,

vy: -(Math.random() * 0.45 + 0.10),

            alpha: Math.random() * 0.8 + 0.15

        });

    }

    function animateDust() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        dust.forEach(p => {

            p.x += p.vx;
            p.y += p.vy;

            if (p.y < -10) {
                p.y = canvas.height + 10;
                p.x = Math.random() * canvas.width;
            }

            if (p.x < -10) p.x = canvas.width + 10;
            if (p.x > canvas.width + 10) p.x = -10;

            ctx.beginPath();

            ctx.fillStyle = `rgba(225,190,110,${p.alpha})`;

            ctx.shadowBlur = 30;
            ctx.shadowColor = "#d8b36d";

            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

            ctx.fill();

        });

        requestAnimationFrame(animateDust);

    }

    animateDust();

});