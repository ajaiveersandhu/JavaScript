document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('.sidenav');
	M.Sidenav.init(elems, {});

	var scrollspy = document.querySelectorAll(".scrollspy");
	M.ScrollSpy.init(scrollspy, {});
});

let currentUser = JSON.parse(localStorage.getItem("currentUser"));
document.querySelector(".user-full-name").innerHTML = currentUser[0]["name"];