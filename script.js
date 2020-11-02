$(".saveBtn").on("click", function(event){

  var timeBlock = $(this).parent().attr("id");
  var value = $(this).siblings(".description").val();

  localStorage.setItem(timeBlock, value);
  console.log(timeBlock, " ", value);

})

var value9 = localStorage.getItem("hour-9");
$("#hour-9 .description").val(value9);

// use moment to set day
// get appropriate class on text areas to represent past, present or future

var currentHour= moment().hours();

if (currentHour>9) {
   $("#hour-9").addClass("past")
} else if (currentHour<9){
   $("#hour-9").addClass("future")
} else {
   $("#hour-9").addClass("present")
}

var value10 = localStorage.getItem("hour-10");
$("#hour-10 .description").val(value10);

// use moment to set day
// get appropriate class on text areas to represent past, present or future

var currentHour= moment().hours();

if (currentHour>10) {
   $("#hour-10").addClass("past")
} else if (currentHour<9){
   $("#hour-10").addClass("future")
} else {
   $("#hour-10").addClass("present")
}

var value11 = localStorage.getItem("hour-11");
$("#hour-11 .description").val(value11);

// use moment to set day
// get appropriate class on text areas to represent past, present or future

var currentHour= moment().hours();

if (currentHour>11) {
   $("#hour-11").addClass("past")
} else if (currentHour<11){
   $("#hour-11").addClass("future")
} else {
   $("#hour-11").addClass("present")
}

var value12 = localStorage.getItem("hour-12");
$("#hour-12 .description").val(value12);

// use moment to set day
// get appropriate class on text areas to represent past, present or future

var currentHour= moment().hours();

if (currentHour>12) {
   $("#hour-12").addClass("past")
} else if (currentHour<12){
   $("#hour-12").addClass("future")
} else {
   $("#hour-12").addClass("present")
}

var value1 = localStorage.getItem("hour-1");
$("#hour-1 .description").val(value1);

// use moment to set day
// get appropriate class on text areas to represent past, present or future

var currentHour= moment().hours();

if (currentHour>13) {
   $("#hour-1").addClass("past")
} else if (currentHour<13){
   $("#hour-1").addClass("future")
} else {
   $("#hour-1").addClass("present")
}

var value2 = localStorage.getItem("hour-2");
$("#hour-2 .description").val(value2);

// use moment to set day
// get appropriate class on text areas to represent past, present or future

var currentHour= moment().hours();

if (currentHour>14) {
   $("#hour-2").addClass("past")
} else if (currentHour<14){
   $("#hour-2").addClass("future")
} else {
   $("#hour-2").addClass("present")
}

var value3 = localStorage.getItem("hour-3");
$("#hour-3 .description").val(value3);

// use moment to set day
// get appropriate class on text areas to represent past, present or future

var currentHour= moment().hours();

if (currentHour>15) {
   $("#hour-3").addClass("past")
} else if (currentHour<15){
   $("#hour-3").addClass("future")
} else {
   $("#hour-3").addClass("present")
}

var value4 = localStorage.getItem("hour-4");
$("#hour-4 .description").val(value4);

// use moment to set day
// get appropriate class on text areas to represent past, present or future

var currentHour= moment().hours();

if (currentHour>16) {
   $("#hour-4").addClass("past")
} else if (currentHour<16){
   $("#hour-4").addClass("future")
} else {
   $("#hour-4").addClass("present")
}

var value5 = localStorage.getItem("hour-5");
$("#hour-5 .description").val(value5);

// use moment to set day
// get appropriate class on text areas to represent past, present or future

var currentHour= moment().hours();

if (currentHour>17) {
   $("#hour-5").addClass("past")
} else if (currentHour<17){
   $("#hour-5").addClass("future")
} else {
   $("#hour-5").addClass("present")
}