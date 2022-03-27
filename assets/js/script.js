var today = moment().format('MMMM Do, YYYY');
var $current = $('#currentDay');


// current day displayed when open calender
$current.text(today)


// loop over time blocks and change background colors 
function timeBlockColor() {
    var actualTime = moment().format();

    $(".time-block").each(function () {
        var actualHour = parseInt($(this).attr("id"));
        console.log(actualHour); //each time-block

        if (actualHour > actualTime) {
            $(this).addClass(".future");
        } else if (actualTime === actualTime) {
            $(this).addClass(".present");
        } else {
            $(this).addClass(".past");
        }
    })
};



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

timeBlockColor();
refresh_9();
refresh_10();
refresh_11();
refresh_12();
refresh_1();
refresh_2();
refresh_3();
refresh_4();
refresh_5();

