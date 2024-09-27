const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');
const navbar = document.querySelector('.navbar');

hamburgerIcon.addEventListener('click', function() {
  navbar.classList.add('active');
  hamburgerIcon.style.display = 'none';
  closeIcon.style.display = 'block';
});

closeIcon.addEventListener('click', function() {
  navbar.classList.remove('active');
  hamburgerIcon.style.display = 'block';
  closeIcon.style.display = 'none';
});

const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('click', function() {
        // Tıklanan menü öğesinin içeriğini bulalım
        const content = this.nextElementSibling;

        // Eğer içerik açık ise kapat, kapalı ise aç
        if (content.style.display === "block") {
            content.style.display = "none";
            this.classList.remove('active');
        } else {
            // Diğer açık içerikleri kapat
            document.querySelectorAll('.menu-content').forEach(el => el.style.display = 'none');
            document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active'));

            content.style.display = "block";
            this.classList.add('active');
        }
    });
});
