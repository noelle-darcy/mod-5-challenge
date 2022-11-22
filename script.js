//use moment to grab time for top of planner 
var todayDate = moment().format('dddd, MMM Do YYYY'); 
$("#currentDay").html(todayDate);


//loop to turn color based off of whether the time already pass (gray=passed, red= current, green=hasn't passed)

function colorSelector () {
    var timeNow = moment().hour(); 

    $(".row").each(function() {
        var blockHour = parseInt($(this).attr("id")); 

        if (blockHour < timeNow) {
            $(this).addClass("past"); 
        } else if (blockHour === timeNow) {
            $(this).removeClass("past"); 
            $(this).addClass("present"); 
        } else {
            $(this).removeClass("past"); 
            $(this).removeClass("present"); 
            $(this).addClass("future");
        }
    })
}

//button function that appends the typed in data when the corresponding button is pressed 
    //this will also need to be able to accept what is being type into the calendar 


var btn8 = document.getElementById("8btn"); 
var schedule8 = document.getElementById("8schedule");

var btn9 = document.getElementById("9btn"); 
var schedule9 = document.getElementById("9schedule");

var btn10 = document.getElementById("10btn"); 
var schedule10 = document.getElementById("10schedule");

var btn11 = document.getElementById("11btn"); 
var schedule11 = document.getElementById("11schedule");

var btn12 = document.getElementById("12btn"); 
var schedule12 = document.getElementById("12schedule");

var btn1 = document.getElementById("1btn"); 
var schedule1 = document.getElementById("1schedule");

var btn2 = document.getElementById("2btn"); 
var schedule2 = document.getElementById("2schedule");

var btn3 = document.getElementById("3btn"); 
var schedule3 = document.getElementById("3schedule");

var btn4 = document.getElementById("4btn"); 
var schedule4 = document.getElementById("4schedule");

var btn5 = document.getElementById("5btn"); 
var schedule5 = document.getElementById("5schedule");

btn8.addEventListener("click", function (event) {
    event.preventDefault(); 
    var userSchedule = schedule8.value; 
 
    localStorage.setItem("user8", userSchedule);
})

btn9.addEventListener("click", function (event) {
    event.preventDefault(); 
    var userSchedule = schedule9.value; 

    localStorage.setItem("user9", userSchedule);
})

btn10.addEventListener("click", function (event) {
    event.preventDefault(); 
    var userSchedule = schedule10.value; 

    localStorage.setItem("user10", userSchedule);
})

btn11.addEventListener("click", function (event) {
    event.preventDefault(); 
    var userSchedule = schedule11.value; 

    localStorage.setItem("user11", userSchedule);
})

btn12.addEventListener("click", function (event) {
    event.preventDefault(); 
    var userSchedule = schedule12.value; 

    localStorage.setItem("user12", userSchedule);
})

btn1.addEventListener("click", function (event) {
    event.preventDefault(); 
    var userSchedule = schedule1.value; 

    localStorage.setItem("user1", userSchedule);
})

btn2.addEventListener("click", function (event) {
    event.preventDefault(); 
    var userSchedule = schedule2.value; 

    localStorage.setItem("user2", userSchedule);
})

btn3.addEventListener("click", function (event) {
    event.preventDefault(); 
    var userSchedule = schedule3.value; 

    localStorage.setItem("user3", userSchedule);
})

btn4.addEventListener("click", function (event) {
    event.preventDefault(); 
    var userSchedule = schedule4.value; 

    localStorage.setItem("user4", userSchedule);
})

btn5.addEventListener("click", function (event) {
    event.preventDefault(); 
    var userSchedule = schedule5.value; 

    localStorage.setItem("user5", userSchedule);
})

var savedSchedule = localStorage.getItem("user8"); 
schedule8.textContent = savedSchedule; 

savedSchedule = localStorage.getItem("user9");
schedule9.textContent = savedSchedule; 

savedSchedule = localStorage.getItem("user10");
schedule10.textContent = savedSchedule; 

savedSchedule = localStorage.getItem("user11");
schedule11.textContent = savedSchedule; 

savedSchedule = localStorage.getItem("user12");
schedule12.textContent = savedSchedule; 

savedSchedule = localStorage.getItem("user1");
schedule1.textContent = savedSchedule; 

savedSchedule = localStorage.getItem("user2");
schedule2.textContent = savedSchedule; 

savedSchedule = localStorage.getItem("user3");
schedule3.textContent = savedSchedule; 

savedSchedule = localStorage.getItem("user4");
schedule4.textContent = savedSchedule; 

savedSchedule = localStorage.getItem("user5");
schedule5.textContent = savedSchedule; 

colorSelector();