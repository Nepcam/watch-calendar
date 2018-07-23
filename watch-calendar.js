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
    
    var $Minutes = String(Minutes);
    while($Minutes.length <= 1) {
        $Minutes = 0 + $Minutes;
    }
    
    if(Hours > 12) {
        Hours -= 12;
        showTime.innerHTML = 
        Hours + ": " + $Minutes + " pm" + " (" + Seconds + " secs)";
    }else if(Hours == 12) {
        showTime.innerHTML = 
        Hours + ": " + $Minutes + " noon" + " (" + Seconds + " secs)";
    }else {
        showTime.innerHTML = 
        Hours + ": " + $Minutes + " am" + " (" + Seconds + " secs)";
    }
    
    switch(Day) {
        case 0 : showDay = "Sunday";
        break;
        case 1 : showDay = "Monday";
        break;
        case 2 : showDay = "Tuesday";
        break;
        case 3 : showDay = "Wednesday";
        break;
        case 4 : showDay = "Thursday";
        break;
        case 5 : showDay = "Friday";
        break;
        case 6 : showDay = "Saturday";
        break;
    }
    
    showCalender.innerHTML = todayDate + "/ " + (Month+1) + "/ " + Year + " ( " + showDay + " )";
    
}

