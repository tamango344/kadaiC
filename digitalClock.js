function start(){
  window.setInterval(function()
  {
    let now = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let date = d.getDate();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    month = month <10? "0"+month:month;
    date = date <10? "0"+date:date;
    hour = hour<10? "0"+hour:hour;
    minutes = minutes<10? "0"+minutes:minutes;
    seconds = seconds<10? "0"+seconds:seconds;
  
    let result = document.getElementById("result");
  
    result.textContent = year+"/"month"/"+date" "+hour +":"+minutes+":"+seconds;
  }
  ,1000);
}
