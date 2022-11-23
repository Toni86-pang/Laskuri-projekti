function selectfunction(){ //Function for which value user chooses, values are hidden
     document.getElementById("div1").hidden = true;
     document.getElementById("div2").hidden = true;
     let shapes=document.getElementById("shapes").value;
    if (shapes == "circle") 
    {
      document.getElementById("div1").hidden = false;
    } 
    if (shapes == "rectangle") 
    {
      document.getElementById("div2").hidden = false;
    }
}

function buttonfuction(){ //button function and calculating circle and rectangle values
let shapes = document.getElementById("shapes").value;
let area = 0;

switch (shapes) // switch case which calculates shape value which user chose
{
  case "circle":
    let radius = document.getElementById("radius").value; //if user chose circle, this case is calculated
    area = Math.PI * radius * radius;
    
    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(100, 75, 50, area, 2 * Math.PI);
    ctx.lineWidth = 10;
    ctx.strokeStyle="chartreuse";
    ctx.stroke()
    ctx.fillStyle = "magenta";
    ctx.fill();
    break;


  case "rectangle":
    let stem = document.getElementById("stem").value; //if user chose rectangle, this case is calculated
    let height = document.getElementById("height").value;
    area = stem * height;
    let d = document.getElementById("myCanvas");
    let g = d.getContext("2d");
    g.beginPath();
    g.rect(20, 20, stem, height);
    g.strokeStyle = "blue";
    g.strokeRect(20, 20, stem,height)
    let grd = g.createLinearGradient(20,20,stem,height);
    grd.addColorStop(0,"red");
    grd.addColorStop(1,"green");
    g.fillStyle = grd;
    g.fillRect(20,20,stem,height);
   ;
    

    break;
  }
  document.getElementById("result").innerHTML= + area; // moves answer to html

  if (area < 0)
  {
    document.getElementById("arvo").innerHTML = "Jotain meni pieleen";
  }
  else if (area < 10)
  {
    document.getElementById("arvo").innerHTML = "pieni pinta-ala";
  }
  else if (area >= 10 && area <= 50)
  {
document.getElementById("arvo").innerHTML = "sopiva pinta-ala";
  }
  else if (area > 50)
  {
    document.getElementById("arvo").innerHTML = "suuri pinta-ala";
  }
}
function myFunction() {
  var x = document.getElementById("myColor").value;
  document.getElementById("color1").innerHTML = x;
}