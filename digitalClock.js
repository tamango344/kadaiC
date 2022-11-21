  function start(){
  window.setInterval(clock,1000);
}

function clock(){
  let now = new Data();
  let hh = now.getHours();
  let mm = now.getMinutes();
  let ss = now.getSeconds();
  
  hh = hh<10? "0"+hh:hh;
  mm = mm<10? "0"+mm:mm;
  ss = ss<10? "0"+ss:ss;
  
  let result = document.getElementById("result");
  
  result.textContent = hh+":"+mm+":"+ss;
}
