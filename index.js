let flag = false;

const menubtn = document.getElementById("burgermenu");
const intro = document.getElementById("introsection");
const mobilemenu = document.getElementById("mobilemenu");

window.onload = (event) => {
	intro.style.visibility = "visible";
	mobilemenu.style.visibility = "hidden";
	mobilemenu.style.transform = "scale(0)";

	flag = false;
	console.log("The page has fully loaded");
};

menubtn.addEventListener("click", function (e) {
	e.preventDefault();

	if (!flag) {
		intro.style.visibility = "hidden";
		mobilemenu.style.visibility = "visible";
		mobilemenu.style.transition = "0.3285s";
		mobilemenu.style.transform = "scale(1)";
		console.log("menu visible");
		flag = true;
	} else {
		mobilemenu.style.transition = "0.3285s";
		mobilemenu.style.transform = "scale(0)";
		intro.style.visibility = "visible";
		mobilemenu.style.visibility = "hidden";
		console.log("menu hidden");
		flag = false;
	}
});

