// Light/dark theme toggle button.
(function() {
	var root = document.documentElement;
	var button = document.getElementById('theme-toggle');

	if (!button) return;

	function applyTheme(theme) {
		root.setAttribute('data-theme', theme);
		button.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
	}

	applyTheme(root.getAttribute('data-theme') || 'light');

	button.addEventListener('click', function() {
		var nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
		try { localStorage.setItem('theme', nextTheme); } catch (e) {}
		applyTheme(nextTheme);
	});
})();
