$(document).ready(function () {
  $("#currentDay").text(moment().format("llll"));
  $(".btn").click(function () {
    var description = $(this).siblings(".description").val();
    var id = $(this).parent().attr("id");
    localStorage.setItem(id, description);
    console.log(localStorage);
    console.log(id);
    console.log(description);
    //!! localStorage.getItem(id);
    console.log(localStorage);
    console.log(description);
  });

  function displayColorForRow() {
    var currentHour = moment().hours();
    console.log(currentHour);

    $(".time-block").each(function () {
      var getTime = parseInt($(this).attr("id").split("-")[1]);
      console.log(getTime);
      // parseInt(getTime);
      console.log(typeof getTime);

      if (currentHour < getTime) {
        $(this).addClass("past");
        console.log("I made it here");
      } else if (getTime === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
      setInterval(displayColorForRow, 1000);
    });
  }
  displayColorForRow();
  $("#row-9 .description").val(localStorage.getItem("row-9"));
  $("#row-10 .description").val(localStorage.getItem("row-10"));
  $("#row-11 .description").val(localStorage.getItem("row-11"));
  $("#row-12 .description").val(localStorage.getItem("row-12"));
  $("#row-1 .description").val(localStorage.getItem("row-1"));
  $("#row-2 .description").val(localStorage.getItem("row-2"));
  $("#row-3 .description").val(localStorage.getItem("row-3"));
  $("#row-4 .description").val(localStorage.getItem("row-4"));
  $("#row-5 .description").val(localStorage.getItem("row-5"));
  $("#row-6 .description").val(localStorage.getItem("row-6"));

  //we need to know if it is the current hour, the past or future to display the correct color class
  //
  //make a copy of the line of code above for each row
});

//?? var description = $(".description").getItem.val;
//?? console.log(description);
// // //!! populate descriptions with correct text from local storage Hint: .getItem and .val from jquery

//TODO use moment.js to put current date on page
//TODO use set interval to update the colors of the blocks based on criteria for color
//TODO make sure to call your hour color function once with out set interval. psudeo code from screen shots
//TODO you want it to update colors immidiately and then update color
//TODO
