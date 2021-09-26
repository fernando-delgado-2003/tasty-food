const selectElement = (element) => {
		return document.querySelector(element);
	},
	selectElements = (element) => {
		return document.querySelectorAll(element);
	};


const nav = selectElement("nav"),
	btnMenu = selectElement(".btn-menu"),
	header = selectElement("header");

const toggleMenu = () => {
	nav.classList.toggle("active");
	setTimeout(() => {
		btnMenu.innerHTML = !nav.classList.contains("active") ? "<i class='bx bx-menu-alt-right'></i>" : "<i class='bx bx-x'></i>";
	}, 550)
}
btnMenu.addEventListener("click", () => { toggleMenu() })

let screenHeight = window.innerHeight / 1.20,
	elementsEffectFade = selectElements(".effect-fade"),
	sections = selectElements("section");
window.addEventListener("scroll", () => {
	if (nav.classList.contains("active")) {
		toggleMenu()
	}

	window.scrollY <= 0 ? header.classList.remove("active") : header.classList.add("active");
	for (let i = 0; i < elementsEffectFade.length; i++) {

		if (elementsEffectFade[i].getBoundingClientRect().top <= screenHeight) {

			elementsEffectFade[i].style.animation = "fadeUp 800ms forwards";

		}

	}
})