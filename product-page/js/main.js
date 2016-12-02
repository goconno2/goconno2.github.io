$(document).ready(function() {
    $('form').submit(function(event) {
        var formData = $(this).serialize();
        $.ajax({
            type        : 'POST',
            url         : 'https://web2-product-page.herokuapp.com/subscribers',
            data        : formData,
            dataType    : 'json'
        }).done(function(data) {
            console.log(data);
            $("#thanks").fadeIn();
            $("input[type=text]").val("");
            $("#error").text();
            
            }).fail(function(data) {
                console.log(data);
                var errorMessage = JSON.parse(data.responseText).email[0];
                $("#error").fadeIn();
                $("input[type=text]").val("");
                $("#thanks").fadeIn();
                $("#thanks").hide();
                
            }).done(function(data) {
                console.log(data);
                $("#thanks1").fadeIn();
                $("input[type=text]").val("");
                $("#error1").text();
            
            }).fail(function(data) {
                console.log(data);
                var errorMessage = JSON.parse(data.responseText).email[0];
                $("#error1").fadeIn();
                $("input[type=text]").val("");
                $("#thanks1").fadeIn();
                $("#thanks1").hide();
            });
        event.preventDefault();
    });
});

