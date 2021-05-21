var sayi=1;
var sum=0;
var guthaben=1500;

function yaz(name,price)
{
var warenkorb=document.getElementById("sell");
var kosten=document.getElementById("sumKosten");
sum+=price;
var vorher=warenkorb.innerHTML;
var text="<div>" +sayi+ ". " +name+ " -- " +price+ "€</div>";
var nacher=vorher+text;
warenkorb.innerHTML=nacher;

kosten.innerHTML="Gesamtkosten=" +sum+ "-€";
kreisShow()
document.getElementById("item").innerHTML=""+ sayi +"";
chartShow();
sayi++;

}

function kaufen(){
    if(sum<=guthaben)
    {var meldung = document.getElementById("meldung");
    meldung.innerHTML = "Sie haben gekauft!";
    meldung.style.backgroundColor = "green";

    guthaben -= sum;
    document.getElementById("guthaben").innerHTML = "Guthaben: <b>" + guthaben + " €</b>";

    sum = 0;
    document.getElementById("sumKosten").innerHTML = " 0";

    sayi = 1;
    
    document.getElementById("sell").innerHTML = "";
    document.getElementById("item").innerHTML= "";
    kreisClose()

    }
    else
    {var meldung = document.getElementById("meldung");
    meldung.innerHTML = "Sie haben nicht genügend Geld!";
    meldung.style.backgroundColor = "red";

    }
}
var sc=document.getElementById("chart");
function shoppingChart(){
if(getComputedStyle(sc,"").display=="none")

{
chartShow();

}
else{
    
chartClose();
}

}

function chartShow(){
    sc.style.display="block";
}
function chartClose(){
    sc.style.display="none";
}


var kr=document.getElementById("kreis");
function kreisShow(){
    kr.style.display="block";
}
function kreisClose(){
    kr.style.display="none";
}