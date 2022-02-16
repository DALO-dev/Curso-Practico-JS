function perimetroCuadrado(){
  size = document.getElementById("squareSize").value;
  document.getElementById("result").innerHTML = "The perimeter is " + (size * 4) + "cm";
}
function areaCuadrado(){
  size = document.getElementById("squareSize").value;
  document.getElementById("result").innerHTML = "The area is " + (size ** 2) + "cm";
}
function circunferenciaCirculo(){
  radius = document.getElementById("circleRadius").value;
  document.getElementById("result").innerHTML = "The circunference is " + (2 * radius) * Math.PI;
}
function areaCirculo(){
  radius = document.getElementById("circleRadius").value;
  document.getElementById("result").innerHTML = "The area is " + (radius ** 2) * Math.PI;
}
function perimetroTriangulo(){
  base = document.getElementById("triangleBase").value;
  side1 = document.getElementById("triangle1side").value;
  side2 = document.getElementById("triangle2side").value;
  document.getElementById("result").innerHTML = "The perimeter is " + (parseInt(base) + parseInt(side1) + parseInt(side2)) + " cm";
}
function areaTriangulo(){
  base = parseInt(document.getElementById("triangleBase").value);
  side1 = parseInt(document.getElementById("triangle1side").value);
  side2 = parseInt(document.getElementById("triangle2side").value);

  if(side1 === side2){
    var height = Math.sqrt(side1**2 - base/2);
    document.getElementById("result").innerHTML = "The area is " + (base * height)/2;
    document.getElementById("height").innerHTML = "It is a Isosceles triangle! Height of " + height.toFixed(2);
  }
  else{
    s = (base + side1 + side2)/2;
    var area = s;
    for (i of [base,side1,side2]){
      area = area*(s-i);
    }
    area = Math.sqrt(area)
    document.getElementById("result").innerHTML = "The area is " + area.toFixed(2);
  }
}
//TRIANGULO
function calculosTriangulo(lado1,lado2,base,altura){
  perimetro = lado1 + lado2 + base;
  area = (base*altura)/2;
  return [perimetro,area];
}