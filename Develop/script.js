document.onload(getTasks());
var status = "toDo";
var saveTasks = function(){
    var taskName = document.getElementById("taskName").value;
    var taskDescription = document.getElementById("taskDescription").value;
    var DueDate = document.getElementById("modalDueDate").value;
    var taskInfo = taskName + " " + taskDescription + " " + DueDate;
    localStorage.setItem(status,taskInfo);
}
document.getElementById("submit-btn").addEventListener("click", saveTasks);

 function getTasks(){
  let values = [],
  keys = Object.keys(localStorage),
  i=keys.length;
  while(i--){
    values.push(localStorage.getItem(keys[i]));
  }
  var getter = document.getElementById("toDo");
  var getTask = localStorage.getItem("toDo");
  var words = getTask.split(' ');
  var word0 = words[0];
  var word1 = words[1];
  var word2 = words[2];
  getter.innerHTML = "<p>" + word0 + "</p><p>" + word1 + "</p><p>" + word2 + "</p>";
  getter.className = "card";
  document.getElementById("toDo").appendChild("getter");
  return values;
}
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.addEventListener("click", function() {
  modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$("#modalDueDate").datepicker({minDate: 1});

$(".list-group").on("click", "span", function() {
  // get current text
  var date = $(this).text().trim();

  // create new input element
  var dateInput = $("<input>").attr("type", "text").addClass("form-control").val(date);

  $(this).replaceWith(dateInput);

  // enable jquery ui datepicker
  dateInput.datepicker({
    minDate: 1
  });

  // automatically bring up the calendar
  dateInput.trigger("focus");
});

// get current date
var currentDate = new Date();

// set how many days from now we want
var daysFromNow = 2;

// get date two days from now
var twoDaysFromNow = new Date(currentDate.setDate(currentDate.getDate() + daysFromNow));

