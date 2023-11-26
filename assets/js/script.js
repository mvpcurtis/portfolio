// STICK NAVIGATION BAR
window.addEventListener("scroll", function () {
	var navigation = document.querySelector("nav");
	navigation.classList.toggle("sticky", window.scrollY > 0);
	console.log("Scroll bar active!");
});

// DARK/LIGHT MODE TOGGLE
var toggleTheme = document.getElementById("toggle-theme");

toggleTheme.onclick = function () {
	document.body.classList.toggle("dark-theme");
	console.log("Theme toggled");
};
