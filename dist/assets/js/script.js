// DARK/LIGHT MODE TOGGLE
var toggleTheme = document.getElementById('toggle-theme');

toggleTheme.onclick = function () {
  document.body.classList.toggle('dark-theme');
  console.log('Theme toggled');
};
