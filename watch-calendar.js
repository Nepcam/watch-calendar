function showWatch() {
    
    var date = new Date();

    //Get watch
    var Hours = date.getHours();
    var Minutes = date.getMinutes();
    var Seconds = date.getSeconds();

    //Get calendar
    var Year = date.getFullYear();
    var Month = date.getMonth();
    var todayDate = date.getDate();
    var Day = date.getDay();
    
    //Show watch and calendar 
    var showTime = document.getElementById("Time");
    var showCalender = document.getElementById("Calender");
    
    