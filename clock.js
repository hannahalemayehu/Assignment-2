function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour); /*hour*/
    min = updateTime(min); /*minutes*/
    sec = updateTime(sec); /*seconds*/
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; /* adding time  */
      var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
  }
  
  function updateTime(h) {
    if (h < 10) {
      return "0" + h;
    }
    else {
      return h;
    }
  }
  
  currentTime(); 
  /* inspristion source: https://www.codesdope.com/blog/article/how-to-create-a-digital-clock-using-javascript/ */