/* Calm Solutions | Security & Admin Entrance
   This file manages the hidden gateway for developers.
*/

const initSecurity = () => {
    const logo = document.getElementById('mainLogo');
    let clickCount = 0;
    let lastClickTime = 0;

    logo.addEventListener('click', () => {
        const currentTime = new Date().getTime();
        
        // إذا كانت الضغطة سريعة (أقل من 500 ملي ثانية بين الضغطات)
        if (currentTime - lastClickTime < 500) {
            clickCount++;
        } else {
            clickCount = 1; // إعادة العداد إذا كان الضغط بطيئاً
        }

        lastClickTime = currentTime;

        // تفعيل المدخل السري بعد 5 ضغطات متتالية
        if (clickCount === 5) {
            activateSecretEntry();
            clickCount = 0; // تصفير العداد
        }
    });
};

const activateSecretEntry = () => {
    // إشعار بسيط (Vibration) للهواتف التي تدعم ذلك (مثل Redmi)
    if (navigator.vibrate) navigator.vibrate([50, 30, 50]);

    const password = prompt("ادخل شفرة العبور للمديرين:");
    
    if (password === "Calm2026") { // كلمة السر الافتراضية
        alert("مرحباً بك أيها المصمم. جاري فتح لوحة التحكم...");
        // هنا يمكن توجيهك لصفحة الإدارة أو فتح Modal الإعدادات
    } else {
        alert("وصول مرفوض. أنت لا تملك التصريح الكافي.");
    }
};

document.addEventListener('DOMContentLoaded', initSecurity);
