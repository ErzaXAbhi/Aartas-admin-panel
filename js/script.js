// Select doctor
$(document).ready(function () {
  $(".btn-doc").click(function () {
    var currentButtonName = $(this).text();

    $("#nameInput").val(currentButtonName);

    $("#myModal").modal("show");
  });

  $("#saveButton").click(function () {
    var nameInput = $("#nameInput").val();

    $("#updateButton").text(nameInput);

    $("#myModal").modal("hide");
  });
});

// Add date in modal
$(document).ready(function () {
  var currentDate = new Date();

  var day = String(currentDate.getDate()).padStart(2, "0");
  var month = String(currentDate.getMonth() + 1).padStart(2, "0");
  var year = currentDate.getFullYear();
  var formattedDate = day + "-" + month + "-" + year;

  $("#dateInput").val(formattedDate);
});

// Doctor select alert
$(".btn-doc").click(function () {
  var selectedDoctor = $(this).val();

  if (selectedDoctor !== "") {
    alert("You have chosen " + selectedDoctor + " as your doctor!");
  }
});
