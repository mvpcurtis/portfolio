window.addEventListener("scroll", function () {
	var navigation = document.querySelector("nav");
	navigation.classList.toggle("sticky", window.scrollY > 0);
});
