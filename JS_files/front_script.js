function validate(form_id, email) {

    //Field Test
    var reg = /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]{2,4})$/;
    var empty = /^([A-Za-z0-9_' '\-\.\@]){1,}$/;

    //Input fields and values
    var address = $('#Your-email').val();
    var message = $('#formMessage').val();
    var textArea = $('#formMessage');
    var emailField = $('#Your-email');
    var field = [emailField, textArea];
    
     if (reg.test(address) == false || empty.test(message) == false) {
            //Fade In the validation div that contains the success/failed message
            $('#email-validation').fadeIn(1000).delay(3500).fadeOut(1000);
            $('#failed').show();
            $('#success').hide();
            //Erase the field that has an error and focus red on the field
            $(field[0]).val('').focus(function() {
                $(this).css("border-color", "red");
            }).focus(); 
            $(field[1]).val('').blur(function(){
                $(this).css("border-color", "red").attr("placeholder", 
            "Give everything up to God without any hesitation. Give us your prayer request.");
            }).blur();
        }
        else {
            //Fade In the validation div that contains the success/failed message
            $('#email-validation').fadeIn(1000).delay(3500).fadeOut(1000);
            $('#failed').hide();
            $('#success').show();
        }
}

$('.btn-warning').click(function() {
    validate();
    return false;
});