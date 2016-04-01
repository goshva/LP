$( document ).ready(function() {

if ($(window).width() < 768) {
    // do something for small screens
}
else if ($(window).width() >= 768 &&  $(window).width() <= 992) {
    // do something for medium screens
	$("#callMeplz").width($("#callMeplz").parent().parent().width()*0.34);

}
else if ($(window).width() > 992 &&  $(window).width() <= 1200) {
    // do something for big screens
    $("#callMeplz").width($("#callMeplz").parent().parent().width()*0.412);


}
else  {
    // do something for huge screens
    var parentWidth = $("#callMeplz").parent().parent().width();

    $("#callMeplz").width($("#callMeplz").parent().parent().width()*1.234);
}


});
