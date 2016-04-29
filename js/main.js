$(function () {

    $('.img-clickable').click(function () {

        $(".img-clickable").css('opacity', '1');


        $(this).css("opacity", "0.5");

        var newImage = $(this).attr('src');
        $("#img-changeable").attr('src', newImage);
        return false;

    });
});

function refreshImages() {
    alert("asa");
}


$('#enviar').click(function () {
    $('.alert').show();
})


$(document).ready(function () {
    $("#img-clickable").attr('height', 2000);
});