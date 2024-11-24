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

[openMenuBtn, closeMenuBtn].forEach((btn) => {
	btn.addEventListener("click", () => {
		menu.classList.toggle("open");
		menu.style.transition = "transform 0.5s ease";
	});
});

menu.addEventListener("transitionend", () => {
	this.removeAttribute("style")
});

menu.querySelectorAll(".dropdown > i").forEach((arrow) => {
	arrow.addEventListener("click", function () {
		this.closest(".dropdown").classList.toggle("active");
	});
});


emailjs.init('7v1vjUL_Yeu1UryuG')
function submitForm(event) {
	event.preventDefault();

	var name = document.getElementById("name").value;
	var contact = document.getElementById("contact").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;

	emailjs.send("service_rkmo3he", "template_sb9t6md", {
		name: name,
		email: email,
		mobile_no: contact,
		message: message
	})
		.then(function (response) {
			alert("Your query has been registered. We will get back to you soon.");
			document.getElementById("contactForm").reset();
		}, function (error) {
			alert("Error occurred while submitting the form." + error);
			console.error("EmailJS error:", error);
		});
}
