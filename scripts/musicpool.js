export function toggleIPAccess() {
	this.IPAccess = !this.IPAccess;
}

export function sayHello() {
	console.log("Hello from there");
}

export function showAlbumTracks(id) {
	// Close all divs first
	for (let i = 1; i <= 16; i++) {
		const div = document.getElementById(i);
		if (div && i !== id) {
			div.style.display = "none";
		}
	}
	
	// Then show and scroll to the new div
	const newDiv = document.getElementById(id);
	if (newDiv) {
		newDiv.style.display = newDiv.style.display === "none" ? "block" : "none";
		if (newDiv.style.display === "block") {
			const stickyHeaderHeight = 80;
			const top = newDiv.getBoundingClientRect().top + window.scrollY - stickyHeaderHeight;
			window.scrollTo({ top, behavior: 'smooth' });
		}
	}
}