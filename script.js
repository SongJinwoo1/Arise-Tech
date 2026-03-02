// 1. الماوس المخصص
const cursor = document.getElementById('custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// 2. تتبع كلمة السر (admin) لفتح اللوحة
let typed = "";
document.addEventListener('keyup', (e) => {
    typed += e.key.toLowerCase();
    typed = typed.slice(-5);
    if (typed === "admin") {
        document.getElementById('admin-panel').style.display = 'block';
    }
});

function closeAdmin() {
    document.getElementById('admin-panel').style.display = 'none';
}

function openConsoleManual() {
    alert("اكتب كلمة 'admin' على لوحة المفاتيح للدخول السري!");
}
