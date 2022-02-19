function getDiscount(){
    var basePrice = parseFloat(document.getElementById("myPrice").value);
    var discount = parseFloat(document.getElementById("myDiscount").value);
    var cupon = parseInt(document.getElementById("cupons").value);
    
    var priceDiscount = basePrice - ((basePrice * discount)/100);

    if(cupon === 0){
        cupon = 1;
    }
    var priceCupon = priceDiscount - ((priceDiscount * cupon)/100);

    document.getElementById("Result").innerHTML = "The result is " + priceCupon;
}