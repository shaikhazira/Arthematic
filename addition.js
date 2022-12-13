function addition(){
    let x;
   x = document.getElementById("xvalue").value;
   x=Number(x);console.log(typeof(x));
    //assigning 5 to variable x
    let y;
   y = document.getElementById("yvalue").value;
   y=Number(y);console.log(typeof(y));
    //assigning 2 to variable y
    let z=x+y;
document.getElementById("add").innerHTML=z;
}