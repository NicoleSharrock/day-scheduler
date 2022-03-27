var today = moment().format('MMMM Do, YYYY');
var $current = $('#currentDay');
var saveBtn = $(".saveBtn")


// current day displayed when open calender
$current.text(today)


// loop over time blocks and change background colors 

const timeBlocks = Array.from(document.getElementsByClassName('hour'));
var currentTime = moment().format('HH');
for (let i = 0; i < timeBlocks.length; i++) {
    var timeBlockId = parseInt(timeBlocks[i].id);
    var time = parseInt(currentTime);
    if (timeBlockId < time) {
        timeBlocks[i].classList.add('past');
    }
    if (timeBlockId > time) {
        timeBlocks[i].classList.add('future');
    }
    if (timeBlockId === time) {
        timeBlocks[i].classList.add('present');
    }
}


//can enter an event, save to local storage, when page is refreshed events are saved


$("#button9am").on("click", function () {
    var nineText = $("#comment9am").val();
    localStorage.setItem("9", nineText);
    console.log(nineText);
})

function refresh_9() {
    var afterRefresh = localStorage.getItem("9");
    $("#comment9am").val(afterRefresh);
};



$("#button10am").on("click", function () {
    var nineText = $("#comment10am").val();
    localStorage.setItem("10", nineText);
    console.log(nineText);
})

function refresh_10() {
    var afterRefresh = localStorage.getItem("10");
    $("#comment10am").val(afterRefresh);
};


$("#button11am").on("click", function () {
    var nineText = $("#comment11am").val();
    localStorage.setItem("11", nineText);
    console.log(nineText);
})

function refresh_11() {
    var afterRefresh = localStorage.getItem("11");
    $("#comment11am").val(afterRefresh);
}


$("#button12pm").on("click", function () {
    var nineText = $("#comment12pm").val();
    localStorage.setItem("12", nineText);
    console.log(nineText);
})

function refresh_12() {
    var afterRefresh = localStorage.getItem("12");
    $("#comment12pm").val(afterRefresh);
};

$("#button1pm").on("click", function () {
    var nineText = $("#comment1pm").val();
    localStorage.setItem("1", nineText);
    console.log(nineText);
})

function refresh_1() {
    var afterRefresh = localStorage.getItem("1");
    $("#comment1pm").val(afterRefresh);
};

$("#button2pm").on("click", function () {
    var nineText = $("#comment2pm").val();
    localStorage.setItem("2", nineText);
    console.log(nineText);
})

function refresh_2() {
    var afterRefresh = localStorage.getItem("2");
    $("#comment2pm").val(afterRefresh);
};

$("#button3pm").on("click", function () {
    var nineText = $("#comment3pm").val();
    localStorage.setItem("3", nineText);
    console.log(nineText);
})

function refresh_3() {
    var afterRefresh = localStorage.getItem("3");
    $("#comment3pm").val(afterRefresh);
};

$("#button4pm").on("click", function () {
    var nineText = $("#comment4pm").val();
    localStorage.setItem("4", nineText);
    console.log(nineText);
})

function refresh_4() {
    var afterRefresh = localStorage.getItem("4");
    $("#comment4pm").val(afterRefresh);
};

$("#button5pm").on("click", function () {
    var nineText = $("#comment5pm").val();
    localStorage.setItem("5", nineText);
    console.log(nineText);
})

function refresh_5() {
    var afterRefresh = localStorage.getItem("5");
    $("#comment5pm").val(afterRefresh);
};

refresh_9();
refresh_10();
refresh_11();
refresh_12();
refresh_1();
refresh_2();
refresh_3();
refresh_4();
refresh_5();

// //  saves the data to local storage when save button is clicked
// $('.saveBtn').each(function (index) {
//     // event listener for save button
//     $(this).on("click", function () {
//         // targets the text area element.
//         var taskText = $(this).prev().val();
//         // saves it based on the index
//         localStorage.setItem($(index), taskText);
//     });
// });

// // for each text area element, it will load the data from local storage based on it's index.
// $('textarea').each(function (index) {
//     // gets the data from local storage based on the index if there is no data, it will display 'Event'.
//     $(this).val(localStorage.getItem($(index)) || "");
// });