function start(){
  window.setInterval(function()
  {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hour = hour<10? "0"+hh:hh;
    minutes = minutes<10? "0"+mm:mm;
    seconds = seconds<10? "0"+ss:ss;
  
    let result = document.getElementById("result");
  
    result.textContent = hour +":"+minutes+":"+seconds;
  }
  ,1000);
}
