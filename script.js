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

    }
    else
    {var meldung = document.getElementById("meldung");
    meldung.innerHTML = "Sie haben nicht genügend Geld!";
    meldung.style.backgroundColor = "red";

    }
}