

export function trapFocus(node: HTMLElement) {
	const previous = document.activeElement;

	function focusable() {
		return Array.from(node.querySelectorAll('.close-button'));
	}

	function handleKeydown(event: any) {
		if (event.key !== 'Tab') return;

		const current = document.activeElement;

		const elements = focusable();
		const first = elements.at(0);
		const last = elements.at(-1)

		if (event.shiftKey && current === first) {
			// @ts-ignore

			last.focus();
			event.preventDefault();
		}

		if (!event.shiftKey && current === last) {
			// @ts-ignore

			first.focus();
			event.preventDefault();
		}
	}

	$effect(() => {
		// @ts-ignore
		focusable()[0]?.focus();
		node.addEventListener('keydown', handleKeydown);

		return () => {
			node.removeEventListener('keydown', handleKeydown);
			// @ts-ignore
			previous?.focus();
		};
	});
}
