//document.onload(getTasks());
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
  getter.setAttribute("id", "taskCard")
  //document.getElementById("toDo").appendChild(getter);
  console.log(document.getElementById("toDo"));
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
  console.log("event listener")
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

//draggable

// Make the DIV element draggable:
dragElement(document.getElementById("taskCard"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "taskCard")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "taskCard").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}