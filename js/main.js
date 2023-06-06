var bike={
    company:"bajaje",
    Name:"pulsar",
    model:"2022",
    color:"red",
    mileage:"50",
    personal_capacity:"2",
    showroom_price:110000,
    tax:20000,
    sum(){
        let total_price=bike.showroom_price+bike.tax;
        return total_price;
    }
    
}
document.write(`The select the Company :${bike.company}`);
document.write("<br>");
document.write(`keys bike is a : ${Object.keys(bike)}`,"<br>");
document.write(`Values is of bike : ${Object.values(bike)}`,"<br>");
document.write(`Entries is of bike : ${Object.entries(bike)}`,"<br>");
document.write(`showroom_price : ${bike.sum()} (Included tax)`,"<br>","<br>","<br>");












var labtop={
    company:"HP",
    model:"11th gendration",
    color:"graye",
    Ram:"8 GB",
    Windows:"11",
    Storage:"512 GB",
    showroom_price:38990,
    tax:5000,
    sum(){
        let total_price=labtop.showroom_price+labtop.tax;
        return total_price;
    }
    
}
document.write(`The select the Company :${labtop.company}`);
document.write("<br>");
document.write(`keys labtop is a : ${Object.keys(labtop)}`,"<br>");
document.write(`Values is of labtop : ${Object.values(labtop)}`,"<br>");
document.write(`Entries is of labtop : ${Object.entries(labtop)}`,"<br>");
document.write(`showroom_price : ${labtop.sum()} (Included tax)`,"<br>" ,"<br>","<br>");












 var shoes={
    company:"adidas",
     model:"Running shoes",
     color:"black",
     size:"10",
     showroom_price:2115,
     tax:200,
     sum(){
         let total_price=labtop.showroom_price+labtop.tax;
         return total_price;
    }
    
 }
document.write(`The select the Company :${shoes.company}`);
document.write("<br>");
document.write(`keys shoes is a : ${Object.keys(shoes)}`,"<br>");
document.write(`Values is of shoes : ${Object.values(shoes)}`,"<br>");
document.write(`Entries is of shoes : ${Object.entries(shoes)}`,"<br>");
 document.write(`showroom_price : ${shoes.sum()} (Included tax)`,"<br>","<br>","<br>");











 var sandals={
    company:"sparx",
     model:"Sports",
     color:"black",
     size:"9",
     showroom_price:549,
     tax:20,
     sum(){
         let total_price=labtop.showroom_price+labtop.tax;
         return total_price;
    }
    
 }
document.write(`The select the Company :${sandals.company}`);
document.write("<br>");
document.write(`keys sandals is a : ${Object.keys(sandals)}`,"<br>");
document.write(`Values is of sandals : ${Object.values(sandals)}`,"<br>");
document.write(`Entries is of sandals : ${Object.entries(sandals)}`,"<br>");
 document.write(`showroom_price : ${sandals.sum()} (Included tax)`,"<br>","<br>","<br>");







 var back={
    company:"Wrogn",
     model:"college back",
     color:"blue",
     Capacity:"30 L",
     showroom_price:419,
     tax:20,
     sum(){
         let total_price=labtop.showroom_price+labtop.tax;
         return total_price;
    }
    
 }
document.write(`The select the Company :${back.company}`);
document.write("<br>");
document.write(`keys back is a : ${Object.keys(back)}`,"<br>");
document.write(`Values is of back : ${Object.values(back)}`,"<br>");
document.write(`Entries is of back : ${Object.entries(back)}`,"<br>");
 document.write(`showroom_price : ${back.sum()} (Included tax)`,"<br>","<br>","<br>");

