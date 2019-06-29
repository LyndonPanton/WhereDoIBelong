"use strict";

window.onload = function(event) {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function place(original, addition) {
		if (!(original.split("").length) || original.trim() === "") {
			return "Enter numbers";
		} else {
			let array = original.split(" ");

			array.push(addition);

			let newArray = array.sort(function(a, b) {
				if (a > b) {
					return 1;
				} else {
					return -1;
				}
			});

			return newArray.indexOf(addition);
		}
	}

	function toggle(chevron) {
		let task = document.getElementById("task");

		if (Array.from(chevron.classList).indexOf("fa-chevron-up") === -1) {
			chevron.classList.remove("fa-chevron-down");
			chevron.classList.add("fa-chevron-up");

			task.classList.remove("hidden");
			task.classList.add("visible");
		} else {
			chevron.classList.remove("fa-chevron-up");
			chevron.classList.add("fa-chevron-down");

			task.classList.remove("visible");
			task.classList.add("hidden");
		}
	}

	let chevron = document.getElementsByClassName("fas")[0];
	chevron.addEventListener("click", function(event) {
		toggle(this);
	});

	chevron.addEventListener("keydown", function(event) {
		if (event.keyCode === 13) {
			toggle(this);
		}
	});

	let form = document.getElementById("form");
	form.addEventListener("submit", function(event) {
		event.preventDefault();

		place(this.children[0].value, this.children[1].value);
	});
};