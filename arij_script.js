/* Custom Arij Luxury Styles */
body { background-color: #030303; }

.glass {
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.text-gradient-gold {
    background: linear-gradient(135deg, #d9b373, #b1965f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.glow-button {
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    box-shadow: 0 0 20px rgba(217, 179, 115, 0.1);
}

.glow-button:hover {
    box-shadow: 0 0 50px rgba(217, 179, 115, 0.3);
    transform: translateY(-5px) scale(1.02);
}

/* سكرول ذهبي مخفي جزئياً للفخامة */
::-webkit-scrollbar { width: 3px; }
::-webkit-scrollbar-track { background: #030303; }
::-webkit-scrollbar-thumb { background: #d9b373; border-radius: 20px; }

#mobile-menu-arij.active {
    opacity: 1;
    pointer-events: auto;
}
