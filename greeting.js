/* Calm Solutions | Dynamic Greeting Logic
   This file manages contextual messages based on time and user intent.
*/

const initGreeting = () => {
    const greetingElement = document.getElementById('dynamicGreeting');
    const hour = new Date().getHours();
    let message = "";

    // منطق الرسائل بناءً على الوقت
    if (hour >= 5 && hour < 12) {
        message = "صباح الخير | نبدأ اليوم بتحويل التعقيد إلى هدوء.";
    } else if (hour >= 12 && hour < 18) {
        message = "طاب يومك | نحن نبني الآن مستقبل أعمالك الرقمية.";
    } else {
        message = "مساء الفخامة | استمتع بجولة هادئة في معرض أعمالنا.";
    }

    // إضافة تأثير الكتابة التدريجي (Typing Effect)
    let i = 0;
    greetingElement.innerHTML = ""; // تفريغ النص البدائي
    
    const typeWriter = () => {
        if (i < message.length) {
            greetingElement.innerHTML += message.charAt(i);
            i++;
            setTimeout(typeWriter, 50); // سرعة الكتابة
        }
    };

    typeWriter();
};

// تشغيل الوظيفة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', initGreeting);
