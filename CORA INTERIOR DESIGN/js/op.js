$(window).load(function () {
    $(".c-loading").fadeOut();
  });
  $(document).ready(function () {
    $('#t').hide();
    $("#clickme").click(function () {
        $("#t").fadeIn(4000, function () {
            $("#t").show().delay(4000).fadeOut(1000);
        });
    });
});