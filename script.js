    let dc = () => {
    var date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";
    let day = date.getDay();
    const dayNames = ["Sunday", "Monday", "Tuesday" , "Wednesday" , " Thursday" , "Friday" , " Saturday"];
    let dateD = date.getUTCDate();
    let month = date.getUTCMonth();
    const monthNames = ["January", "February", "March" , "April" , "May" , "June" , "July", "August", "September", "October", "November", "December"];
    let year = date.getUTCFullYear();

    if (h == 0) {
      h = 12;
    }
  
    if (h > 12) {
      h = h - 12;
      session = "PM";
    }
    document.getElementById("MyClockHour").innerText = h;    
    document.getElementById("MyClockMin").innerText = m;    
    document.getElementById("MyClockSec").innerText = s;
    document.getElementById("MyClockSession").innerText = session;
    document.getElementById("day").innerText = dayNames[day];
    document.getElementById("dateD").innerText = dateD;
    document.getElementById("month").innerText =monthNames[month];
    document.getElementById("year").innerText = year;
  }
  dc();
  setInterval(dc, 1000);
