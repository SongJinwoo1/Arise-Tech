/**
 * Calm Solutions | The Engine
 * Optimized for iPad Pro & Redmi (120 FPS Focus)
 */

document.addEventListener('DOMContentLoaded', () => {
    initContextualGreeting();
    initSpotlightEffect();
    initTouchFeedback();
    initSecretEntrance();
});

// 1. الذكاء السياقي - رسالة الترحيب حسب الوقت
function initContextualGreeting() {
    const hour = new Date().getHours();
    const greetEl = document.getElementById('greeting');
    
    if (hour < 12) greetEl.innerText = "العالم هادئ، لنبني شيئاً عظيماً.";
    else if (hour < 18) greetEl.innerText = "نحوّل الفوضى إلى هدوء برمجـي.";
    else greetEl.innerText = "نُبرمج تحت ضوء النجوم.";
}

// 2. تأثير الكشاف (Spotlight) - متوافق مع الماوس
function initSpotlightEffect() {
    const items = document.querySelectorAll('.bento-item');
    items.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            item.style.setProperty('--x', `${x}px`);
            item.style.setProperty('--y', `${y}px`);
        });
    });
}

// 3. استجابة اللمس النبضي (Touch Ripple) - لأجهزة iPad و Redmi
function initTouchFeedback() {
    window.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        ripple.style.left = `${touch.clientX}px`;
        ripple.style.top = `${touch.clientY}px`;
        document.body.appendChild(ripple);
        
        // إزالة العنصر بعد انتهاء الأنميشن لتوفير الذاكرة
        ripple.addEventListener('animationend', () => ripple.remove());
    }, { passive: true });
}

// 4. بوابة المطورين السرية (Pattern Entrance)
function initSecretEntrance() {
    let clicks = 0;
    let timeout;
    const logo = document.getElementById('mainLogo');

    logo.addEventListener('click', () => {
        clicks++;
        clearTimeout(timeout);
        
        if (clicks === 3) {
            const secret = prompt("🔑 مدخل المطورين: أدخل كلمة السر");
            if (secret === "admin") {
                alert("أهلاً بك يا ملك المصممين. النظام الآن في وضع التطوير.");
            }
            clicks = 0;
        }

        timeout = setTimeout(() => { clicks = 0; }, 500);
    });
}

console.log("Calm Solutions Engine: Loaded & Optimized for 120 FPS.");
