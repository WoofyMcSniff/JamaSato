$(document).ready(function() {
    $('#searchform').submit(function(e) {
        e.preventDefault();
        var that = this;
        $.ajax({
            // catch custom response code.
            statusCode: {
                500: function () {
                    console.error("Object not found");
                }
            },
            data: $(that).serialize(),
            type: 'GET',
            contentType: "application/json",
            // Dynamically create Request URL by appending requested name to /api prefix
            url: '/search',
            error: function (xhr, status, err) {
                console.log(err);
            },
            success: function (res) {
                tableButton(res)
            }
        });
    });

    $('#bandform').submit(function(e) {
        e.preventDefault();
        var that = this;
        $.ajax({
            // catch custom response code.
            statusCode: {
                500: function () {
                    console.error("Object not found");
                }
            },
            data: $(that).serialize(),
            type: 'GET',
            contentType: "application/json",
            // Dynamically create Request URL by appending requested name to /api prefix
            url: '/chooseBands',
            error: function (xhr, status, err) {
                console.log(err);
            },
            success: function (res) {
                layertomap(res)
            }
        });
    });

    $('#manipulationForm').submit(function(e) {
        e.preventDefault();
        var that = this;
        $.ajax({
            // catch custom response code.
            statusCode: {
                500: function () {
                    console.error("Object not found");
                }
            },
            data: $(that).serialize(),
            type: 'GET',
            contentType: "application/json",
            // Dynamically create Request URL by appending requested name to /api prefix
            url: '/brightness',
            error: function (xhr, status, err) {
                console.log(err);
            },
            success: function (res) {
                layertomap(res)
            }
        });
    });

});