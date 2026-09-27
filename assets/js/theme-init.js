// Apply the saved color theme before first paint to avoid a flash.
(function() {
	var savedTheme = localStorage.getItem('theme');
	document.documentElement.setAttribute('data-theme', savedTheme || 'dark');
})();
