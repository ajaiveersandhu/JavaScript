$(document).ready(function () {

    let $thumbnailClick = $(".thumbnails").find("a");
    let $displayImage = $(".imageView").find("img");

    $thumbnailClick.click(function (event) {
        event.preventDefault();
        $displayImage.attr("src", $(this).attr("href"));
    })
});