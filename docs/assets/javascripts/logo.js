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
    
    // Aumentar tamaño del logo
    const logo = document.querySelector('.md-header__button.md-logo');
    if (logo) {
        logo.style.position = 'absolute';
        logo.style.left = '50%';
        logo.style.transform = 'translateX(-50%)';
        logo.style.padding = '0.5rem 1rem';
        logo.style.margin = '0 auto';
        logo.style.zIndex = '10';
    }
    
    const logoImg = document.querySelector('.md-header__button.md-logo img, .md-header__button.md-logo svg');
    if (logoImg) {
        logoImg.style.height = '6rem';
        logoImg.style.width = 'auto';
        logoImg.style.maxWidth = 'none';
        logoImg.style.display = 'block';
        logoImg.style.margin = '0';
    }
    
    // Ajustar header
    const header = document.querySelector('.md-header');
    if (header) {
        header.style.minHeight = '7rem';
        header.style.padding = '0.5rem 0';
    }
    
    const headerInner = document.querySelector('.md-header__inner');
    if (headerInner) {
        headerInner.style.justifyContent = 'center';
        headerInner.style.position = 'relative';
        headerInner.style.padding = '0';
        headerInner.style.alignItems = 'center';
    }
});
