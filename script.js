var sayi=1;
var sum=0;
var guthaben=1500;
var myCounter;
var time = 0;







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


function meldenKaufen()

{   
    time = 3;
    
    var meldung = document.getElementById("meldung");
    meldung.innerHTML = "Sie haben gekauft!";
    meldung.style.backgroundColor = "#2a8717";
    meldung.style.display = "block";
    myCounter = setInterval(timeLoser, 1000);

}

function meldenNicht()

{   time = 3;
    
    var meldung = document.getElementById("meldung");
    meldung.innerHTML = "Sie haben nicht genügend Geld!";
    meldung.style.backgroundColor = "#e64343";
    meldung.style.display = "block";

    myCounter = setInterval(timeLoser, 1000);
}


function kaufen(){
    if(sum<=guthaben)
    {   
        
        meldenKaufen();


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
    {
        meldenNicht()
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

function timeLoser()
{
    time--;
    if(time == 0)
    {
        clearInterval(myCounter);
        meldung.style.display = "none";

    }
}