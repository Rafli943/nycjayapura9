document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.menu');

    // Tambah event listener pada hamburgerMenu untuk toggle menu
    hamburgerMenu.addEventListener('click', function () {
        menu.classList.toggle('active');
    });

    // Tambah event listener pada setiap tautan di dalam menu
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });

                // Tutup menu hamburger setelah tautan diklik
                menu.classList.remove('active');
            }
        });
    });

    // Tambah event listener untuk menutup menu saat mengklik di luar menu
    document.addEventListener('click', function (event) {
        const targetElement = event.target;

        // Periksa apakah yang diklik bukan bagian dari menu atau hamburgerMenu
        if (!targetElement.closest('.menu') && !targetElement.closest('.hamburger-menu')) {
            // Tutup menu jika sedang terbuka
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
            }
        }
    });
});
