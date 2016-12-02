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
            $('#success-message').text("Thank you!");
            $('#error-message').text("");
            // $('input[name-email]').val("");
            
            
            }).fail(function(data) {
                console.log(data);
                var errorMessage = JSON.parse(data.responseText).email[0];
                $('#error-message').text('Oops! You submitted an invalid email address.');
                $('#success-message').text("");
                // $('#success-message').hide();
                
            // }).done(function(data) {
            //     console.log(data);
            //     $('#success-message-bottom').text("Thank you!");
            //     $('#error-message-bottom').text("");
            //     // $('input[name-email]').val("");
            
            
            // }).fail(function(data) {
            //     console.log(data);
            //     var errorMessage = JSON.parse(data.responseText).email[0];
            //     $('#error-message-bottom').text('Oops! You submitted an invalid email address.');
            //     $('#success-message-bottom').text("");
            //     // $('#success-message').hide();
            });
        event.preventDefault();
    });
});

