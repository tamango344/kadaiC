function start(){
  window.setInterval(function()
  {
    let now = new Date();
    let hh = now.getHours();
    let mm = now.getMinutes();
    let ss = now.getSeconds();
    let year = now.getYear();
    let month = now.getMonth()+1;
    let date = now.getDate();
    let dayNum= now.getDay();
    const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let day = weekday[dayNum];

    hh = hh<10? "0"+hh:hh;
    mm = mm<10? "0"+mm:mm;
    ss = ss<10? "0"+ss:ss;
    month = month <10? "0"+month:month;
    date = date <10? "0"+date:date;
    
    let today = `${year}.${month}.${date} ${day}`;
    let time = `${hh}:${mm}:${ss}`;
  
    document.querySelector(".clock-date").innerText = today;
    document.querySelector(".clock-time").innerText = time;
  }
  ,1000);
}
