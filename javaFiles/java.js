// need to determine current timing 
var topDate = moment().format("dddd- MMMM Do, YYYY");
var currentHour = moment().hour();
var hours = [7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6];
var militaryHours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
var newRow = $("<div class='row-time-block'>" + hours[i] + "</div>");

// return the current day and time 
$("#currentDay").append(topDate);

// Putting time blocks here instead of on HTML to make it cleaner 
//function to decern if time sections are past current or future

//time blocks for standard business hours listed in rows
for (var i = 0; i < hours.length; i++) {
    //variables for sections of the website
    // Overall row for each time bloack
    var newRow = $("<div class='row-time-block' id='indRow'></div>");
    // this is the column for the time to be displayed into each row
    var hourDiv = $("<div class='col-md-2 hour' id='hourlyBlock'>" + hours[i] + "</div>");
    // the column that the user types into
    var descDiv = $("<div class='input-group mb-1 col-md-12'>" + "</div>");
    // the input area and type
    var inpDiv = $("<input type='text' class='form-control description pb-5' placeholder='' aria-label='description' aria-describedby='button-addon2'>");
    // the save button for the
    var btnDiv = $("<button class='saveBtn btn' type='button' id='button-addon1'>" + "Save" + "</button>");
    //pull previous tasks from local storage on refresh
    var prevTask = localStorage.getItem(hours[i]);

    //append the hour, text box and save buttons to the page
    inpDiv.attr("id", hours[i]);
    btnDiv.attr("data-id", hours[i]);
    descDiv.append(inpDiv, btnDiv);
    newRow.append(hourDiv, descDiv);
    $(".container").append(newRow);

    //add am or pm to hour div
    if (hours[i] > 8) {
        hourDiv.append(" am");
    }
    else {
        hourDiv.append(" pm");
    }

    //if task exists in local storage, add it to the text task box
    if (prevTask) {
        $("#" + hours[i]).val(prevTask);
    }

    compareTime();
}

//function to decern if time sections are past current or future
function compareTime() {
    if (militaryHours[i] > currentHour) {
        inpDiv.addClass("future");
    }
    else if (militaryHours[i] < currentHour) {
        inpDiv.addClass("past");
    }
    else if (militaryHours[i] == currentHour) {
        inpDiv.addClass("present");
    }
}

//function to push tasks to local storage upon clicking the save button
function saveTasks() {
    var textId = $(this).attr("data-id");
    var textTask = ($("#" + textId).val());
    localStorage.setItem(textId, textTask);
}

$(".saveBtn").click(saveTasks);





// IGNORE THIS BIT. This is the original where I had a button for each. Keeping to compare

// $('#button7').click(function () {

//     if ($('#sevenRes').val() === "") {
//         console.log("Nothing", $('#sevenRes').val() + "at 7:00 a.m.");
//     } else {
//         console.log($('#sevenRes').val() + " at 7:00 a.m.");
//     }

//     localStorage.setItem(sevenAM, $('#sevenRes').val());

// });


// $('#button8').click(function () {

//     if ($('#eightRes').val() === "") {
//         console.log("Nothing", $('#eightRes').val() + "at 8:00 a.m.");
//     } else {
//         console.log($('#eightRes').val() + " at 8:00 a.m.");
//     }

//     localStorage.setItem(eightAM, $('#eightRes').val());

// });


// $('#button9').click(function () {

//     if ($('#nineRes').val() === "") {
//         console.log("Nothing", $('#nineRes').val() + "at 9:00 a.m.");
//     } else {
//         console.log($('#nineRes').val() + " at 9:00 a.m.");
//     }

//     localStorage.setItem(nineAM, $('#nineRes').val());

// });


// $('#button10').click(function () {

//     if ($('#tenRes').val() === "") {
//         console.log("Nothing", $('#tenRes').val() + "at 10:00 a.m.");
//     } else {
//         console.log($('#tenRes').val() + " at 10:00 a.m.");
//     }

//     localStorage.setItem(tenAM, $('#tenRes').val());

// });


// $('#button11').click(function () {

//     if ($('#elevenRes').val() === "") {
//         console.log("Nothing", $('#elevenRes').val() + "at 11:00 a.m.");
//     } else {
//         console.log($('#elevenRes').val() + " at 11:00 a.m.");
//     }

//     localStorage.setItem(elevenAM, $('#elevenRes').val());

// });


// $('#button12').click(function () {

//     if ($('#twelveRes').val() === "") {
//         console.log("Nothing", $('#twelveRes').val() + "at 12:00 p.m.");
//     } else {
//         console.log($('#twelveRes').val() + " at 12:00 p.m.");
//     }

//     localStorage.setItem(twelvePM, $('#twelveRes').val());

// });


// $('#button1').click(function () {

//     if ($('#oneRes').val() === "") {
//         console.log("Nothing", $('#oneRes').val() + "at 1:00 p.m.");
//     } else {
//         console.log($('#oneRes').val() + " at 1:00 p.m.");
//     }

//     localStorage.setItem(onePM, $('#oneRes').val());
// });


// $('#button2').click(function () {

//     if ($('#twoRes').val() === "") {
//         console.log("Nothing", $('#twoRes').val() + "at 2:00 p.m.");
//     } else {
//         console.log($('#twoRes').val() + " at 2:00 p.m.");
//     }

//     localStorage.setItem(twoPM, $('#twoRes').val());

// });


// $('#button3').click(function () {

//     if ($('#threeRes').val() === "") {
//         console.log("Nothing", $('#threeRes').val() + "at 3:00 p.m.");
//     } else {
//         console.log($('#threeRes').val() + " at 3:00 p.m.");
//     }

//     localStorage.setItem(threePM, $('#threeRes').val());

// });


// $('#button4').click(function () {

//     if ($('#fourRes').val() === "") {
//         console.log("Nothing", $('#fourRes').val() + "at 4:00 p.m.");
//     } else {
//         console.log($('#fourRes').val() + " at 4:00 p.m.");
//     }

//     localStorage.setItem(fourPM, $('#fourRes').val());

// });


// $('#button5').click(function () {

//     if ($('#fiveRes').val() === "") {
//         console.log("Nothing", $('#fiveRes').val() + "at 5:00 p.m.");
//     } else {
//         console.log($('#fiveRes').val() + " at 5:00 p.m.");
//     }

//     localStorage.setItem(fivePM, $('#fiveRes').val());

// });


// $('#button6').click(function () {

//     if ($('#sixRes').val() === "") {
//         console.log("Nothing", $('#sixRes').val() + "at 6:00 p.m.");
//     } else {
//         console.log($('#sixRes').val() + " at 6:00 p.m.");
//     }

//     localStorage.setItem(sixPM, $('#sixRes').val());

// });