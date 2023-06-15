// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {



  var date = document.querySelector('#currentDay');
  var currentDate = dayjs().format('MMMM D, YYYY');
  date.innerText = currentDate;

  var buttons = document.querySelectorAll(button);




  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  buttons.forEach(function (button) {
    buttons.addEventListener('click', handleClick);

    console.log('Save button clicked!');

  });


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  var currentHour = dayjs().hour();
  var timeBlock = $(".time-block");

  // Loop through each time block
  $('.time-block').each(function () {
    var blockHour = parseInt($(this).attr('.time-block'));

    // Compare the block hour with the current hour
    if (blockHour < currentHour) {
      $(this).addClass('past');
    } else if (blockHour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });






  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


  // Save inputs to localStorage
  localStorage.setItem('userInputs', JSON.stringify(inputs));

  // Retrieve user inputs from localStorage
  var savedInputs = localStorage.getItem('userInputs');

  if (savedInputs) {
    var inputs = JSON.parse(savedInputs);

    // Set textarea values
    Object.keys(inputs).forEach((key) => {
      var textarea = document.getElementById(key);
      if (textarea) {
        textarea.value = inputs[key];
      }
    });
  }

  //Saving user inputs to localStorage
  var saveInputs = () => {
    var textareaElements = document.querySelectorAll('.time-block textarea');
    var inputs = {};

    // Get textarea values
    textareaElements.forEach((textarea) => {
      var timeBlockId = textarea.closest('.time-block').id;
      inputs[timeBlockId] = textarea.value;
    });


  };


  //
  // TODO: Add code to display the current date in the header of the page.




});
