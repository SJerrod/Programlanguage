$(document).ready(function() {
  $("#questions").submit(function(event) {
    const nameInput = $("input#name").val();
    let oS = $("input:radio[name=oS]:checked").val();
    let budget = $("input:radio[name=budget]:checked").val();
    let workStyle = $("input:radio[name=workStyle]:checked").val();
    let develop = $("input:radio[name=develop]:checked").val();
    let unwind = $("input:radio[name=unwind]:checked").val();
    
    // $("#cSharp").hide();
    // $("#ruby").hide();
    // $("#python").hide();
    // $("#javaScript").hide();
    // $("#swift").hide();

    if(oS === "windows" ) {
      $("#cSharp").show;
    }
    
    
    
    $(".name").text(nameInput);
    $("#choice").show();
    
    event.preventDefault();
  });
});