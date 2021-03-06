var FullValid = {};
var recipient;
$('#exampleModal').on('show.bs.modal', function(event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    recipient = button.data('whatever') // Extract info from data-* attributes
    var modal = $(this)
//    modal.find('.modal-title').text('New message to ' + recipient)


    var MimimalInfo = {
        "callMe": ["tel", "client-name"],
        "consultation": ["tel", "client-name","client-secondname","message-text"],
        "calculation": ["tel", "client-name","client-secondname", "client-lastname","message-text"],
        "coupon": ["tel", "client-name","client-lastname"],
        "signUp": ["tel", "client-name", "client-secondname", "client-lastname"],
        "mailUs": ["email", "message-text"]
    }

    $('.inputFields').hide();
//    $('.form-control').val("");
    $("#SendForm").prop("disabled", true)
    FullValid = {};
    for (i = 0; i < MimimalInfo[recipient].length; i++) {
        $("." + MimimalInfo[recipient][i]).show()
        FullValid[MimimalInfo[recipient][i]] = 0;
    }
$("#productID").val(recipient);
})


$(function() {

    $("#SendForm").click(function() {

        $.post("/forms", {
                productID: $("#productID").val(),
                utm: $("#utm").val(),
                time: "2pm",
                comment: $("#message-text").val(),
                phone: $("#tel").val(),
                email: $("#email").val(),
                name: $("#client-name").val(),
                secondName: $("#client-secondname").val(),
                lastname: $("#client-lastname").val()
            })
            .done(function(data) {
             //   alert("Data Loaded: " + data);
            })
            .fail(function() {
                alert("error, try CALL");
            })
    });

});
/* VAlidation */
function ValidFORM(param, swich) {

    $("#SendForm").prop("disabled", false)
    console.log(FullValid)
    FullValid[param] = swich;

    console.log(FullValid)

    for (var k in FullValid) {
        if (FullValid.hasOwnProperty(k)) {
            console.log("Key is " + k + ", value is" + FullValid[k]);

            if (FullValid[k] == 0) {
                $("#SendForm").prop("disabled", true)
            }
        }
    }

}

$('#tel').keyup(function() {
    $('span.error-keyup-4').remove();
    ValidFORM("tel", 0)
    var inputVal = $(this).val();
    var characterReg = /^[+][7]-[2-9]\d{2}-\d{3}-\d{2}-\d{2}$/;
    if (!characterReg.test(inputVal)) {
        $(this).after('<span class="error error-keyup-4"> +7-***-***-**-**</span>');
    } else(ValidFORM("tel", 1))

});

$('#client-name').keyup(function() {
    $('span.error-keyup-4').remove();
    ValidFORM("client-name", 0)
    var inputVal = $(this).val();
    var characterReg = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']{0,20}?$/;
    if (!characterReg.test(inputVal)) {
        $(this).after('<span class="error error-keyup-4"> **</span>');
    } else(ValidFORM("client-name", 1))

});

$('#client-lastname').keyup(function() {
    $('span.error-keyup-4').remove();
    ValidFORM("client-lastname", 0)
    var inputVal = $(this).val();
    var characterReg = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']{0,20}?$/;
    if (!characterReg.test(inputVal)) {
        $(this).after('<span class="error error-keyup-4"> **</span>');
    } else(ValidFORM("client-lastname", 1))

});

$('#client-secondname').keyup(function() {
    $('span.error-keyup-4').remove();
    ValidFORM("client-secondname", 0)
    var inputVal = $(this).val();
    var characterReg = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']{0,20}?$/;
    if (!characterReg.test(inputVal)) {
        $(this).after('<span class="error error-keyup-4"> **</span>');
    } else(ValidFORM("client-secondname", 1))

});

$('#message-text').keyup(function() {
    $('span.error-keyup-4').remove();
    ValidFORM("message-text", 0)
    var inputVal = $(this).val();
    var characterReg = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']{0,20}?$/;
    if (!characterReg.test(inputVal)) {
        $(this).after('<span class="error error-keyup-4"> **</span>');
    } else(ValidFORM("message-text", 1))

});
