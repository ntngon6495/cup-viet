/** Dispatch event on click outside of node */
export function clickOutside(node: HTMLElement, callbackFunction?: () => void) {
	const handleClick = (event: Event) => {
		const target = event.target as HTMLElement;
		if (node && !node.contains(target) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('click_outside'));
			if (callbackFunction) callbackFunction();
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		update(newCallbackFunction: () => void) {
			callbackFunction = newCallbackFunction;
		},
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}

const createResizableColumn = function (col: HTMLElement, resizer: HTMLElement) {
	// Track the current position of mouse
	let x = 0;
	let w = 0;

	const mouseDownHandler = function (e: MouseEvent) {
		// Get the current mouse position
		x = e.clientX;

		// Calculate the current width of column
		const styles = window.getComputedStyle(col);
		w = parseInt(styles.width, 10);

		// Attach listeners for document's events
		document.addEventListener('mousemove', mouseMoveHandler);
		document.addEventListener('mouseup', mouseUpHandler);
	};

	const mouseMoveHandler = function (e: MouseEvent) {
		// Determine how far the mouse has been moved
		const dx = e.clientX - x;

		// Update the width of column
		col.style.width = `${w + dx}px`;
	};

	// When user releases the mouse, remove the existing event listeners
	const mouseUpHandler = function () {
		document.removeEventListener('mousemove', mouseMoveHandler);
		document.removeEventListener('mouseup', mouseUpHandler);
	};

	resizer.addEventListener('mousedown', mouseDownHandler);
};

export function resizableColumns(node: HTMLElement, allowResizableColumns: boolean = false) {
	if (!allowResizableColumns) return {};
	const table = node.querySelector('table');
	if (!table || !table.tagName || table.tagName !== 'TABLE') {
		console.error('The ResizableColumns action applies only to table DOM elements.');
	}

	if (table) {
		// Query all headers
		const cols = table.querySelectorAll('th');
		cols.forEach(function (col) {
			// Create a resizer element
			const resizer = document.createElement('div');
			resizer.classList.add('resizer');

			// Set the height
			resizer.style.height = `${table.offsetHeight - 4}px`;

			// Add a resizer element to the column
			col.appendChild(resizer);

			// Will be implemented in the next section
			createResizableColumn(col, resizer);
		});
	}

	return {
		update(newAllowResizableColumns: boolean) {
			allowResizableColumns = newAllowResizableColumns;
		},
		destroy() {
			// the node has been removed from the DOM
		}
	};
}
