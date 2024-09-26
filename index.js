document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById('sidebar');
    
    // Collapse sidebar on smaller screens
    window.addEventListener('resize', function() {
        if (window.innerWidth < 600) {
            sidebar.style.display = 'none';
        } else {
            sidebar.style.display = 'block';
        }
    });
});
