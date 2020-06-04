let	b = document.body;
let navToggles = document.getElementsByClassName("nav-toggle");
let lastOffset = 0;

for (let navToggle of navToggles) {
	navToggle.addEventListener("click", function(){
		if (b.classList.contains('nav--on')) {
			b.classList.remove('nav--on');
		} else {
			b.classList.add('nav--on')
		}
	})
}
