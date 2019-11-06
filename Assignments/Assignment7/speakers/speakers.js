$(document).ready(function () {
    $(document.querySelector('[title="sorkin"]')).click(function () {
        $("#mainc").empty();
        $.getJSON("json_files/" + document.querySelector('[title="sorkin"]').title + ".json", function (data) {
            $.each(data, function () {
                $.each(this, function (key, value) {
                    $("#mainc").append(
                        "<h1>" + value.title + "</h1>" +
                        "<img src=\"" + value.image + "\">" +
                        "<h2>" + value.month + "<br>" + value.speaker + "</h2>" +
                        "<p>" + value.text +
                        "</p>"
                    );
                });
            });
        });
    });

    $(document.querySelector('[title="chua"]')).click(function () {
        $("#mainc").empty();
        $.getJSON("json_files/" + document.querySelector('[title="chua"]').title + ".json", function (data) {
            $.each(data, function () {
                $.each(this, function (key, value) {
                    $("#mainc").append(
                        "<h1>" + value.title + "</h1>" +
                        "<img src=\"" + value.image + "\">" +
                        "<h2>" + value.month + "<br>" + value.speaker + "</h2>" +
                        "<p>" + value.text +
                        "</p>"
                    );
                });
            });
        });
    });

    $(document.querySelector('[title="sampson"]')).click(function () {
        $("#mainc").empty();
        $.getJSON("json_files/" + document.querySelector('[title="sampson"]').title + ".json", function (data) {
            $.each(data, function () {
                $.each(this, function (key, value) {
                    $("#mainc").append(
                        "<h1>" + value.title + "</h1>" +
                        "<img src=\"" + value.image + "\">" +
                        "<h2>" + value.month + "<br>" + value.speaker + "</h2>" +
                        "<p>" + value.text +
                        "</p>"
                    );
                });
            });
        });
    });

    $(document.querySelector('[title="toobin"]')).click(function () {
        $("#mainc").empty();
        $.getJSON("json_files/" + document.querySelector('[title="toobin"]').title + ".json", function (data) {
            $.each(data, function () {
                $.each(this, function (key, value) {
                    $("#mainc").append(
                        "<h1>" + value.title + "</h1>" +
                        "<img src=\"" + value.image + "\">" +
                        "<h2>" + value.month + "<br>" + value.speaker + "</h2>" +
                        "<p>" + value.text +
                        "</p>"
                    );
                });
            });
        });
    });
}); // end ready
