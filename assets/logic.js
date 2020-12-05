$(".btn").click(function () {
  var description = $(this).siblings(".description").val();
  var id = $(this).parent().attr("id");
  localStorage.setItem(id, description);
  console.log(localStorage);
  console.log(id);
  console.log(description);
});
//!! populate descriptions with correct text from local storage Hint: .getItem and .val from jquery
//!! use moment.js to put current date on page
//!! use set interval to update the colors of the blocks based on criteria for color
//!! make sure to call your hour color function once with out set interval. psudeo code from screen shots
//!! you want it to update colors immidiately and then update color
//!!
