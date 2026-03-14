document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 1000, once: true });
    lucide.createIcons();

    // --- PWA Logic (التحميل الذكي) ---
    let deferredPrompt;
    const installBtnNav = document.getElementById('install-btn-nav');
    const installBtnMobile = document.getElementById('install-btn-mobile');

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        [installBtnNav, installBtnMobile].forEach(btn => {
            if(btn) {
                btn.classList.remove('install-btn-hidden');
                btn.classList.add('flex');
            }
        });
    });

    const handleInstall = async () => {
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        if (isIOS) {
            alert('لتحميل التطبيق على iPhone: اضغط زر "مشاركة" ثم "إضافة للشاشة الرئيسية" 📲');
            return;
        }
        if (deferredPrompt) {
            deferredPrompt.prompt();
            await deferredPrompt.userChoice;
            deferredPrompt = null;
        } else {
            alert('التطبيق مثبت بالفعل أو المتصفح قيد المعالجة.');
        }
    };

    installBtnNav?.addEventListener('click', handleInstall);
    installBtnMobile?.addEventListener('click', handleInstall);

    // --- Service Worker ---
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').catch(err => console.log(err));
    }

    // --- UI Logic (القوائم والواتساب) ---
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    menuBtn?.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        const active = mobileMenu.classList.contains('active');
        menuIcon.setAttribute('data-lucide', active ? 'x' : 'menu');
        lucide.createIcons();
    });

    document.getElementById('whatsappForm').onsubmit = (e) => {
        e.preventDefault();
        const text = `Arise Tech Query:\nName: ${document.getElementById('name').value}\nProject: ${document.getElementById('subject').value}`;
        window.open(`https://wa.me/96597805334?text=${encodeURIComponent(text)}`);
    };
});
