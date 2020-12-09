var count1 = 0;
var button1 = document.getElementById("countButton1");
var display1 = document.getElementById("displayCount1");

button1.onclick = function(){
  count1++;
  display1.innerHTML = count1;
}
            var count2 = 0;
  var button2 = document.getElementById("countButton2");
  var display2 = document.getElementById("displayCount2");

  button2.onclick = function(){
    count2++;
    display2.innerHTML = count2;
  }
            var count3 = 0;
  var button3 = document.getElementById("countButton3");
  var display3 = document.getElementById("displayCount3");

  button3.onclick = function(){
    count3++;
    display3.innerHTML = count3;
  }
                var count4 = 0;
      var button4 = document.getElementById("countButton4");
      var display4 = document.getElementById("displayCount4");

      button4.onclick = function(){
        count4++;
        display4.innerHTML = count4;
      }
      function vote() {
      var x = document.getElementById("counter");
      if (x.style.display === "block") {
          x.style.display = "none";
      } else {
          x.style.display = "block";
      }
      }
      function buttonhide() {
              var x = document.getElementById("voting");
              if (x.style.display === "none") {
                  x.style.display = "block";
              } else {
                  x.style.display = "none";
              }
              }
          function namechange() {
            var x = document.getElementById("vote");
            if (x.value === "View Results") {
              x.value = "Hide Results";
        } else {
          x.value = "View Results";
}
}