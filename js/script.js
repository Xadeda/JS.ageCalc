function age() {
  let d1 = document.querySelector("#date").value; 
  let m1 = document.querySelector("#month").value; 
  let y1 = document.querySelector("#year").value; 
  let date = new Date(); //aktual  jamanak
  let d2 = date.getDate(); // tpuma or@
  let m2 = 1 + date.getMonth(); // tpuma amis@
  let y2 = date.getFullYear(); // tpuma tarin
  let month = [31,28,31,30,31,30,31,31,30,31,30,31]; //??
  if (d1 > d2){
    d2 = d2 + month[m2 - 1];
    m2= m2 - 1;
  }
  if (m1 > m2){
    m2 = m2 +12;
    y2 = y2 -1;
  }


  let d = d2 - d1;
  let m = m2 - m1;
  let y = y2 - y1;
  document.querySelector("#age").innerHTML = 
   " Your Age is " +  y  + " Years "  +  m + " Months " +  d  + " Days ";
 }

