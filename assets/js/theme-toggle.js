// Light/dark theme toggle button.
(function() {
	var root = document.documentElement;
	var button = document.getElementById('theme-toggle');

	if (!button) return;

	function applyTheme(theme) {
		var isDark = theme === 'dark';
		root.setAttribute('data-theme', theme);
		button.setAttribute('aria-pressed', isDark ? 'true' : 'false');
		button.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
		button.querySelector('.theme-toggle-text').textContent = isDark ? 'Light mode' : 'Dark mode';
	}

	applyTheme(root.getAttribute('data-theme') || 'dark');

	button.addEventListener('click', function() {
		var nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
		localStorage.setItem('theme', nextTheme);
		applyTheme(nextTheme);
	});
})();
