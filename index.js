// Function to remove branding elements and customize chat
function removeBranding() {
	// Define CSS styles to apply
	const cssRules = `
		a.tawk-branding { display: none !important }
		.tawk-dropdown.tawk-toolbar-menu { display: none !important }
		.tawk-icon-right { display: none !important }
		.tawk-main-panel .tawk-chat-panel { overflow-y: auto !important }
	`;

	// Create style element
	const style = document.createElement('style');
	style.textContent = cssRules;

	// Apply styles to all chat iframes
	document.querySelectorAll('iframe[title*="chat"]').forEach(iframe => {
		try {
			// Check if we can access the iframe document
			if (iframe.contentDocument) {
				// Avoid duplicate styles
				const existingStyle = iframe.contentDocument.querySelector('style[data-custom-branding]');
				if (!existingStyle) {
					style.setAttribute('data-custom-branding', 'true');
					iframe.contentDocument.head.appendChild(style.cloneNode(true));
				}
			}
		} catch (error) {
			console.warn('Could not access iframe:', error);
		}
	});
}

removeBranding();