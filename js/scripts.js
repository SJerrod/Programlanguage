$(document).ready(function() {
  $("#questions").submit(function(event) {
    const nameInput = $("input#name").val();
    let oS = $("input:radio[name=oS]:checked").val();
    let budget = $("input:radio[name=budget]:checked").val();
    let workStyle = $("input:radio[name=workStyle]:checked").val();
    let develop = $("input:radio[name=develop]:checked").val();
    let unwind = $("input:radio[name=unwind]:checked").val();
    
    $("#cSharp").hide();
    $("#ruby").hide();
    $("#python").hide();
    $("#javaScript").hide();
    $("#swift").hide();

    if(oS === "windows" && workStyle === "easy" && develop === "webDev") {
      $("#python").show();
    } else if (oS === "windows" && workStyle === "easy" && develop === "software") {
      $("#python").show();
    }

    if(oS === "windows" && workStyle === "easy" && develop === "gameDev") {
      $("#cSharp").show();
    } else if (oS === "windows" && workStyle === "easy" && develop === "data") {
      $("#ruby").show();
    }

    if(oS === "windows" && workStyle === "hard" && develop === "webDev") {
      $("#javaScript").show();
    } else if (oS === "windows" && workStyle === "hard" && develop === "data") {
      $("#javaScript").show();
    }

    if(oS === "windows" && workStyle === "hard" && develop === "gameDev") {
      $("#cSharp").show();
    } else if (oS === "windows" && workStyle === "hard" && develop === "software") {
      $("#cSharp").show();
    }

    if(oS === "apple" && workStyle === "easy" && develop === "webDev") {
      $("#ruby").show();
    } else if (oS === "apple" && workStyle === "easy" && develop === "data") {
      $("#ruby").show();
    }

    if(oS === "apple" && workStyle === "easy" && develop === "gameDev") {
      $("#python").show();
    } else if (oS === "apple" && workStyle === "easy" && develop === "software") {
      $("#python").show();
    }

    if(oS === "apple" && workStyle === "hard" && develop === "webDev") {
      $("#javaScript").show();
    } else if (oS === "apple" && workStyle === "hard" && develop === "software") {
      $("#swift").show();
    }

    if(oS === "apple" && workStyle === "hard" && develop === "gameDev") {
      $("#swift").show();
    } else if (oS === "apple" && workStyle === "hard" && develop === "software") {
      $("#swift").show();
    }
    
    
    
    $(".name").text(nameInput);
    $("#choice").show();
    $("#all").hide();
    $(".btn").click(function(){
      $("#all").show();
      $("#cSharp").hide();
      $("#ruby").hide();
      $("#python").hide();
      $("#javaScript").hide();
      $("#swift").hide();
    });

    event.preventDefault();
  });
});