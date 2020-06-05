$(document).ready(function() {
  $("#questions").submit(function(event) {
    const nameInput = $("input#name").val();

    $(".name").text(nameInput);
    $("#choice").show();

    event.preventDefault();
  });
});