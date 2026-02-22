document.addEventListener("DOMContentLoaded", function () {
    // Mobile menu toggle
    const menu = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    if (menu && navbar) {
        menu.onclick = () => {
            menu.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        };
        window.onscroll = () => {
            menu.classList.remove('bx-x');
            navbar.classList.remove('active');
        };
    }

    // Typed.js for hero text
    if (typeof Typed !== 'undefined') {
        const typed = new Typed('.multiple-text', {
            strings: ['Machine Learning Engineer', 'Data Scientist', 'AI Engineer', 'Programmer'],
            typeSpeed: 80,
            backSpeed: 80,
            backDelay: 1200,
            loop: true,
        });
    }

    // Project modals: attach to anchor and prevent hash navigation
    const projectLinks = [
        { anchor: 'a[href="#aibased"]', detailId: 'aibased' },
        { anchor: 'a[href="#sentiment"]', detailId: 'sentiment' },
        { anchor: 'a[href="#student"]', detailId: 'student' },
        { anchor: 'a[href="#house"]', detailId: 'house' },
        { anchor: 'a[href="#pdfs"]', detailId: 'pdfs' },
    ];

    const body = document.querySelector('body');
    projectLinks.forEach(function (item) {
        const link = document.querySelector(item.anchor);
        const projectDetail = document.querySelector('#' + item.detailId);
        if (!link || !projectDetail) return;
        const closeButton = projectDetail.querySelector('svg');
        if (!closeButton) return;

        link.addEventListener('click', function (event) {
            event.preventDefault();
            projectDetail.style.display = 'block';
            projectDetail.style.position = 'fixed';
            projectDetail.style.top = '50%';
            projectDetail.style.left = '50%';
            projectDetail.style.transform = 'translate(-50%, -50%)';
            projectDetail.style.width = '100%';
            projectDetail.style.height = '100%';
            projectDetail.style.zIndex = '1000';
            projectDetail.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
            projectDetail.style.padding = '20px';
            projectDetail.style.borderRadius = '10px';
            projectDetail.style.overflowY = 'auto';
            projectDetail.style.backgroundColor = 'rgba(9, 9, 23, 0.98)';
            if (body) body.style.background = 'rgba(0, 0, 0, 0.9)';
        });

        closeButton.addEventListener('click', function () {
            projectDetail.style.display = 'none';
            projectDetail.style.position = '';
            projectDetail.style.top = '';
            projectDetail.style.left = '';
            projectDetail.style.transform = '';
            projectDetail.style.width = '';
            projectDetail.style.height = '';
            projectDetail.style.zIndex = '';
            projectDetail.style.boxShadow = '';
            projectDetail.style.padding = '';
            projectDetail.style.borderRadius = '';
            projectDetail.style.overflowY = '';
            projectDetail.style.backgroundColor = '';
            if (body) body.style.background = '';
        });
    });
});

function toggleReadMore(element) {
    const container = element.parentElement;
    const content = container.querySelector('.content');
    const shortContent = container.querySelector('.short-content');
    if (!content || !shortContent) return;
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'inline';
        shortContent.style.display = 'none';
        element.innerText = 'Read less...';
        container.style.height = 'auto';
    } else {
        content.style.display = 'none';
        shortContent.style.display = 'inline';
        element.innerText = 'Read more...';
        container.style.height = '';
    }
}
