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
    var hourDiv = $("<div class='col-md-1 hour' id='hourlyBlock'>" + hours[i] + "</div>");

    // the column outline for the user input
    var descDiv = $("<div class='input-group mb-1 col-md-12'>" + "</div>");

    // the input area and type, inside of the column defined above. 
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
    if (hours[i] < 12) {
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





