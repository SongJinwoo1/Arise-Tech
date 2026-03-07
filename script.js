// نظام Arise Core v1.0
const System = {
    state: {
        monarch: "",
        path: "",
        level: 1,
        xp: 0,
        int: 10,
        rank: "E",
        penalty: false,
        quests: []
    },

    // [الفكرة #43: نظام المسارات العالمي]
    pathsData: {
        medical: { subjects: ["Anatomy", "Pathology", "Bio-chem"], quests: ["مراجعة أطلس التشريح", "حفظ 10 مصطلحات", "قراءة مرجع"] },
        tech: { subjects: ["Algorithms", "Cyber Security", "Cloud"], quests: ["حل تحدي كود", "فحص ثغرة وهمية", "بناء وحدة نمطية"] },
        azhari: { subjects: ["أصول الفقه", "متن الألفية", "التفسير"], quests: ["الورد القرآني", "حفظ 5 أبيات", "مراجعة فقهية"] }
    },

    init() {
        const name = document.getElementById('user-name').value;
        const path = document.getElementById('user-path').value;

        if(!name) { alert("أدخل لقبك أيها الملك!"); return; }

        this.state.monarch = name;
        this.state.path = path;
        this.state.quests = this.pathsData[path].quests.map((q, i) => ({ id: i, text: q, done: false }));

        this.save();
        this.render();
        document.getElementById('gate-screen').classList.add('hidden');
        document.getElementById('main-hud').classList.remove('hidden');
    },

    // [الفكرة #3: نظام العقوبات]
    checkPenalty() {
        // إذا مر وقت طويل ولم تنجز مهمة، يتم تفعيل العقوبة بصرياً
        if (this.state.penalty) {
            document.getElementById('penalty-alert').classList.remove('hidden');
            document.body.style.boxShadow = "inset 0 0 50px red";
        }
    },

    completeQuest(id) {
        const quest = this.state.quests.find(q => q.id === id);
        if (quest && !quest.done) {
            quest.done = true;
            this.state.xp += 34; // 3 مهام ترفع المستوى
            if (this.state.xp >= 100) this.levelUp();
            this.render();
            this.save();
        }
    },

    levelUp() {
        this.state.level++;
        this.state.xp = 0;
        this.state.int += 5;
        this.updateRank();
        alert("LEVEL UP! لقد زادت قوتك.");
    },

    updateRank() {
        if (this.state.level > 5) this.state.rank = "D";
        if (this.state.level > 15) this.state.rank = "S";
    },

    save() {
        localStorage.setItem('arise_data', JSON.stringify(this.state));
    },

    render() {
        document.getElementById('monarch-name').innerText = this.state.monarch.toUpperCase();
        document.getElementById('stat-int').innerText = this.state.int;
        document.getElementById('lvl-display').innerText = `LVL: ${this.state.level}`;
        document.getElementById('xp-fill').style.width = this.state.xp + "%";
        document.getElementById('rank-display').innerText = `RANK: ${this.state.rank}`;

        // رندر المهام
        const qContainer = document.getElementById('quest-container');
        qContainer.innerHTML = this.state.quests.map(q => `
            <div class="quest-item ${q.done ? 'completed' : ''}">
                <span>${q.text}</span>
                <button onclick="System.completeQuest(${q.id})" ${q.done ? 'disabled' : ''}>إتمام</button>
            </div>
        `).join('');

        // رندر المواد
        const sList = document.getElementById('subject-list');
        sList.innerHTML = this.pathsData[this.state.path].subjects.map(s => `<p>> ${s}</p>`).join('');
    }
};

// [الفكرة #14: مؤقت الطماطم]
const Timer = {
    seconds: 1500,
    interval: null,
    toggle() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        } else {
            this.interval = setInterval(() => {
                this.seconds--;
                this.updateDisplay();
            }, 1000);
        }
    },
    updateDisplay() {
        const m = Math.floor(this.seconds / 60);
        const s = this.seconds % 60;
        document.getElementById('timer-display').innerText = `${m}:${s < 10 ? '0' : ''}${s}`;
    }
};

// تحديث الساعة حياً
setInterval(() => {
    document.getElementById('digital-clock').innerText = new Date().toLocaleTimeString();
}, 1000);

// استعادة البيانات عند التحميل
window.onload = () => {
    const saved = localStorage.getItem('arise_data');
    if (saved) {
        System.state = JSON.parse(saved);
        System.render();
        document.getElementById('gate-screen').classList.add('hidden');
        document.getElementById('main-hud').classList.remove('hidden');
    }
};
