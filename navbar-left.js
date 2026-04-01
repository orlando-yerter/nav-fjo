$(document).ready(function() {
    /**
     * COMPONENTE: BARRA DE NAVEGACIÓN CON MENÚ LATERAL IZQUIERDO
     * Funcionalidades:
     * - Abrir/cerrar menú lateral
     * - Overlay con cierre al hacer clic
     * - Cerrar al hacer clic en un enlace
     * - Efecto de desplazamiento del contenido (opcional)
     */
    
    const $sidebar = $('#sidebarMenu');
    const $toggle = $('#navbarToggle');
    const $close = $('#sidebarClose');
    const $overlay = $('#menuOverlay');
    const $mainContent = $('#mainContent');
    
    // Opción: desplazar el contenido al abrir el menú (comentar si no se desea)
    const SHIFT_CONTENT = true; // Cambiar a false si no quieres desplazar el contenido
    
    // Abrir menú
    function openMenu() {
        $sidebar.addClass('active');
        $overlay.addClass('active');
        $('body').css('overflow', 'hidden'); // Evita scroll del body
        
        if (SHIFT_CONTENT) {
            $mainContent.addClass('shift');
        }
    }
    
    // Cerrar menú
    function closeMenu() {
        $sidebar.removeClass('active');
        $overlay.removeClass('active');
        $('body').css('overflow', ''); // Restaura scroll
        
        if (SHIFT_CONTENT) {
            $mainContent.removeClass('shift');
        }
    }
    
    // Evento: botón hamburguesa
    $toggle.on('click', function(e) {
        e.stopPropagation();
        openMenu();
    });
    
    // Evento: botón cerrar (X)
    $close.on('click', function() {
        closeMenu();
    });
    
    // Evento: overlay (fondo oscuro)
    $overlay.on('click', function() {
        closeMenu();
    });
    
    // Evento: cerrar menú al hacer clic en un enlace
    $('.sidebar-nav-link').on('click', function() {
        closeMenu();
    });
    
    // Opcional: cerrar menú con tecla ESC
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape' && $sidebar.hasClass('active')) {
            closeMenu();
        }
    });
    
    // Opcional: ajustar si la ventana cambia de tamaño
    $(window).on('resize', function() {
        if (window.innerWidth > 768 && $sidebar.hasClass('active')) {
            // Si en desktop y el menú está abierto, mantener funcionalidad
            // No hacer nada automático para no interrumpir la experiencia
        }
    });
});
