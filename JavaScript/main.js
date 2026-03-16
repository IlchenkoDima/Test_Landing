document.addEventListener('DOMContentLoaded', () => {

    const menuToggle = document.getElementById('mobile-menu');
    const nav = document.querySelector('.nav');
    if (menuToggle) {
        menuToggle.onclick = () => nav.classList.toggle('active');
    }

    const showToast = (msg) => {
        const toast = document.createElement('div');
        toast.className = 'toast-success';
        toast.innerHTML = `<span>✓</span> ${msg}`;
        document.body.appendChild(toast);
        setTimeout(() => toast.classList.add('show'), 100);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    };

    const popup = document.createElement('div');
    popup.id = 'popup';
    popup.innerHTML = `
        <div class="popup-content">
            <span class="close-btn">&times;</span>
            <h2 id="p-title"></h2>
            <p id="p-text" style="margin-top: 15px;"></p>
            <button class="btn btn--primary" style="width:100%; margin-top:20px;">ОК</button>
        </div>
    `;
    document.body.appendChild(popup);

  const openPopup = (title, text) => {
    document.getElementById('p-title').innerText = title;
    document.getElementById('p-text').innerText = text;
    
    const popupBtn = popup.querySelector('.btn--primary');
    popupBtn.innerText = "ПЕРЕЙТИ ДО ВИБОРУ МІСЦЬ";
    
    popupBtn.onclick = () => {
        window.location.href = "https://concert.ua/uk/catalog/kyiv/rock"; 
    };
    
    popup.style.display = 'flex';
};

    const closePopup = () => popup.style.display = 'none';
    popup.querySelector('.close-btn').onclick = closePopup;
    popup.querySelector('.btn--primary').onclick = closePopup;
    window.onclick = (e) => { if (e.target == popup) closePopup(); };

    document.querySelectorAll('.btn--small, .btn--primary').forEach(btn => {
        btn.onclick = (e) => {
            if (!btn.closest('form')) {
                e.preventDefault();
                openPopup('Бронювання', 'Ви переходите до вибору місць у залі. Будь ласка, зачекайте...');
            }
        };
    });

    const form = document.querySelector('.contact__form');
    if (form) {
        form.onsubmit = (e) => {
            e.preventDefault();
            const name = form.querySelector('input').value;
            showToast(`Дякуємо, ${name}! Ми зв'яжемося з вами.`);
            form.reset();
        };
    }
});