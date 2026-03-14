document.addEventListener('DOMContentLoaded', () => {
    // تشغيل الأنيميشن
    AOS.init({ duration: 1500, once: true });
    lucide.createIcons();

    // --- منطق قائمة الجوال ---
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu'); // نحتاج لإضافته في الـ HTML كقسم مخفي
    const menuIcon = document.getElementById('menu-icon');

    menuBtn?.addEventListener('click', () => {
        // يمكننا برمجة قائمة موبايل خاصة بأريج هنا
        alert('يمكننا إضافة قائمة موبايل فخمة هنا عند الطلب.');
    });

    // --- نموذج الواتساب الخاص بـ أريج ---
    const arijForm = document.getElementById('whatsappFormArij');
    arijForm?.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('arij_name').value;
        const subject = document.getElementById('arij_subject').value;
        
        // رسالة احترافية جداً
        const text = `طلب عطر ملكي:\nالاسم: ${name}\nالعطر المطلوب: ${subject}\nأتمنى التواصل لتأكيد الطلب وشكراً لـ أريج.`;
        
        // رقم الواتساب الخاص بالبيع (يمكن تغييره)
        window.open(`https://wa.me/96597805334?text=${encodeURIComponent(text)}`, '_blank');
    });

    // --- ربط المحرك (Service Worker) للتطبيق ---
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').then(reg => console.log('Arij Engine Active'));
    }
});
