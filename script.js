// مصفوفة البيانات (Logic)
const projects = [
    { id: 1, title: 'منصة عيادة النور', cat: 'medical', desc: 'نظام متكامل لإدارة المواعيد الطبية والملفات الإلكترونية للمرضى بخصوصية عالية.' },
    { id: 2, title: 'تطبيق مطعم برستيج', cat: 'food', desc: 'واجهة طلب طعام عصرية مع نظام تتبع مباشر للطلبات ودفع إلكتروني.' },
    { id: 3, title: 'بوابة المستشفى الجامعي', cat: 'medical', desc: 'تحسين تجربة المريض عبر بوابة رقمية موحدة للتحاليل والأشعة.' },
    { id: 4, title: 'مطاعم جولد فود', cat: 'food', desc: 'تطوير موقع ويب لربط الفروع بنظام إدارة مخزون مركزي ذكي.' }
];

function renderProjects(category = 'all') {
    const container = document.getElementById('projects-container');
    container.innerHTML = '';
    
    // تصفية المشاريع بناءً على القسم
    const filtered = category === 'all' ? projects : projects.filter(p => p.cat === category);
    
    filtered.forEach((p, index) => {
        const card = `
            <div class="project-card glass-effect p-8 rounded-[30px] group cursor-pointer border border-transparent">
                <div class="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] mb-4 opacity-80">
                    ${p.cat === 'medical' ? 'Sector: Medical' : 'Sector: Food & Beverage'}
                </div>
                <h3 class="font-playfair text-2xl mb-4 group-hover:text-[#D4AF37] transition duration-300">${p.title}</h3>
                <p class="text-sm opacity-50 leading-relaxed font-light">${p.desc}</p>
                <div class="mt-8 flex items-center text-[#D4AF37] text-xs font-semibold tracking-widest uppercase">
                    <span>Explore Case Study</span>
                    <span class="mr-3 transform group-hover:translate-x-2 transition duration-300">→</span>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

function filterProjects(cat) {
    // تحديث الأزرار (UI Logic)
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active-tab'));
    event.target.classList.add('active-tab');

    // إعادة رندر المشاريع مع أنيميشن بسيط
    const container = document.getElementById('projects-container');
    container.style.opacity = '0';
    setTimeout(() => {
        renderProjects(cat);
        container.style.opacity = '1';
    }, 200);
}

// الرندر الأولي عند تشغيل الموقع
document.addEventListener('DOMContentLoaded', () => renderProjects());
