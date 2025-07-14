function toggleFilterMenu() {
  const menu = document.getElementById('filterMenu');
  menu.classList.toggle('show');
}

// Fermer au clic hors menu
document.addEventListener('click', function(e) {
  const menu = document.getElementById('filterMenu');
  const icon = document.querySelector('.filter-icon');
  if (!menu.contains(e.target) && !icon.contains(e.target)) {
    menu.classList.remove('show');
  }
});
