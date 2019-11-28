document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('.sidenav');
	M.Sidenav.init(elems, {});

	var scrollspy = document.querySelectorAll(".scrollspy");
	M.ScrollSpy.init(scrollspy, {});
});