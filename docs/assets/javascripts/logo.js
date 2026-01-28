// Forzar tamaño del logo y ocultar texto MAR
document.addEventListener('DOMContentLoaded', function() {
    // Ocultar texto del título
    const title = document.querySelector('.md-header__title');
    if (title) {
        title.style.display = 'none';
        title.style.visibility = 'hidden';
        title.style.width = '0';
        title.style.height = '0';
        title.style.overflow = 'hidden';
    }
    
    const topic = document.querySelector('.md-header__topic');
    if (topic) {
        topic.style.display = 'none';
        topic.style.visibility = 'hidden';
        topic.style.width = '0';
        topic.style.height = '0';
        topic.style.overflow = 'hidden';
    }
    
    // Aumentar tamaño del logo y centrarlo
    const logo = document.querySelector('.md-header__button.md-logo');
    if (logo) {
        logo.style.position = 'absolute';
        logo.style.left = '50%';
        logo.style.transform = 'translateX(-50%)';
        logo.style.padding = '0.5rem 1.5rem';
        logo.style.margin = '0';
        logo.style.zIndex = '10';
        logo.style.display = 'flex';
        logo.style.alignItems = 'center';
        logo.style.justifyContent = 'center';
    }
    
    const logoImg = document.querySelector('.md-header__button.md-logo img, .md-header__button.md-logo svg');
    if (logoImg) {
        logoImg.style.height = '8rem';
        logoImg.style.width = 'auto';
        logoImg.style.maxWidth = 'none';
        logoImg.style.display = 'block';
        logoImg.style.margin = '0';
        logoImg.style.objectFit = 'contain';
    }
    
    // Ajustar header para dar más espacio al logo
    const header = document.querySelector('.md-header');
    if (header) {
        header.style.minHeight = '9rem';
        header.style.padding = '1rem 0';
        header.style.display = 'flex';
        header.style.alignItems = 'center';
        header.style.justifyContent = 'center';
    }
    
    const headerInner = document.querySelector('.md-header__inner');
    if (headerInner) {
        headerInner.style.justifyContent = 'center';
        headerInner.style.position = 'relative';
        headerInner.style.padding = '0';
        headerInner.style.alignItems = 'center';
        headerInner.style.width = '100%';
    }
    
    // Ocultar otros botones de la cabecera para que no interfieran con el centrado
    const otherButtons = document.querySelectorAll('.md-header__button:not(.md-logo)');
    otherButtons.forEach(button => {
        button.style.position = 'absolute';
        if (button.classList.contains('md-header__button--prev')) {
            button.style.left = '0.5rem';
        } else if (button.classList.contains('md-header__button--next')) {
            button.style.right = '0.5rem';
        }
    });
});
