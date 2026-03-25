// تأثير الخلفية
particlesJS("particles-js", {
    particles: {
        number: { value: 40 },
        color: { value: "#9d4edd" },
        opacity: { value: 0.3 },
        size: { value: 2 },
        line_linked: { enable: true, distance: 130, color: "#9d4edd", opacity: 0.2 },
        move: { enable: true, speed: 0.8 }
    }
});

// التعامل مع النموذج
const form = document.getElementById('contact-form');
const success = document.getElementById('success-container');
const countdownVal = document.getElementById('countdown');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('form-content').style.display = 'none';
    success.style.display = 'block';

    let count = 3;
    const timer = setInterval(() => {
        count--;
        countdownVal.innerText = count;
        if (count <= 0) {
            clearInterval(timer);
            window.location.href = "https://chat.whatsapp.com/LX6YlavRiSWDUWSxVvGxD9";
        }
    }, 1000);
});
