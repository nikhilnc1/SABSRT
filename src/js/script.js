// const dropdownMenu = document.querySelector('.dropdown-menu');
// const toggleNavbar = document.querySelector('.toggle-navbar');
// const dropdownClose = document.querySelector('.dropdown-close');
// const navMenu = document.querySelector('.nav-menu');

// dropdownMenu.previousElementSibling.addEventListener('click', function () {
// 	if(window.innerWidth < 576) {
// 		dropdownMenu.classList.add('show');
// 		toggleNavbar.classList.add('hide');
// 	}
// })

// dropdownClose.addEventListener('click', function () {
// 	if(window.innerWidth < 576) {
// 		dropdownMenu.classList.remove('show');
// 		toggleNavbar.classList.remove('hide');
// 	}
// })


// toggleNavbar.addEventListener('click', function () {
// 	if(window.innerWidth < 576) {
// 		navMenu.classList.toggle('show');

// 		if(navMenu.classList.contains('show')) {
// 			this.classList.replace('bx-menu', 'bx-x');
// 		} else {
// 			this.classList.replace('bx-x', 'bx-menu');
// 		}
// 	}
// })


// menu

const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".close-menu-btn");
const closeMenuBtn = document.querySelector(".open-menu-button");

[openMenuBtn, closeMenuBtn].forEach((btn)=>{
	btn.addEventListener("click",()=>{
		menu.classList.toggle("open");
		menu.style.transition = "transform 0.5s ease";
	});
});

menu.addEventListener("transitionend",()=>{
	this.removeAttribute("style")
});

menu.querySelectorAll(".dropdown > i").forEach((arrow) => {
	arrow.addEventListener("click", function() {
		this.closest(".dropdown").classList.toggle("active");
	});
});
