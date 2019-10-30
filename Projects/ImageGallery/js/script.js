$(document).ready(function () {

    let $thumbnailClick = $(".thumbnails").find("a");
    let $displayImage = $(".imageView").find("img");
    let pauseAtEachImage = 500;
    let selectImage = 0;
    let inteval;

    let fetchSrc;

    $thumbnailClick.click(function (event) {
        event.preventDefault();
        $displayImage.attr("src", $(this).attr("href"));
    })

    function autoplay() {
        inteval = setInterval(function () {
            // fetchSrc = $thumbnailClick[selectImage].f
            $displayImage.attr("src", );
        }, pauseAtEachImage);
    }

    // autoplay();

});