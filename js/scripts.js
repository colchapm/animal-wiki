$(document).ready(function(){
  $("form#wiki").submit(function(event) {
    const animal = $("select#animal").val();
  
    if (animal === 'octopus') {
      $("#fox").hide();
      $("#bulldog").hide();
      $("#octopus").show();
    } else if (animal === 'fox') {
      $("#octopus").hide();
      $("#bulldog").hide();
      $("#fox").show();
    } else if (animal === 'bulldog') {
      $("#fox").hide();
      $("#octopus").hide();
      $("#bulldog").show();
    }
    event.preventDefault();
  });
});


