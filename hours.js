setInterval(timef, 1000);
let hh=0;
let mm=0;
let ss=0;
function timef(){
    d = new Date();
    let tim12=d.getHours();
    let timehr=parseInt(d.getHours());
    if(d.getHours()>12){
       tim12=timehr-12;
    }else {
        tim12=d.getHours();
    }
    h.innerHTML = tim12;
    m.innerHTML = d.getMinutes();
    s.innerHTML = d.getSeconds();

    if(d.getHours()==1){
        document.getElementById("id60").style.backgroundColor = "rgb(247, 213, 169)";
        document.getElementById("id1").style.backgroundColor = "black";
    }
    if(d.getHours()==2){
        document.getElementById("id1").style.backgroundColor = "rgb(247, 213, 169)";
        document.getElementById("id2").style.backgroundColor = "black";
    }
    if(d.getHours()==3){
        document.getElementById("id2").style.backgroundColor = "rgb(247, 213, 169)";
        document.getElementById("id3").style.backgroundColor = "black";
    }
    if(d.getHours()==4){
        document.getElementById("id3").style.backgroundColor = "rgb(247, 213, 169)";
        document.getElementById("id4").style.backgroundColor = "black";
    }
    if(d.getHours()==5){
        document.getElementById("id4").style.backgroundColor = "rgb(247, 213, 169)";
        document.getElementById("id5").style.backgroundColor = "black";
    }
    if(d.getHours()==6){
        document.getElementById("id5").style.backgroundColor = "rgb(247, 213, 169)";
        document.getElementById("id6").style.backgroundColor = "black";
    }
    if(d.getHours()==7){
        document.getElementById("id6").style.backgroundColor = "rgb(247, 213, 169)";
        document.getElementById("id7").style.backgroundColor = "black";
    }
    if(d.getHours()==8){
        document.getElementById("id7").style.backgroundColor = "rgb(247, 213, 169)";
        document.getElementById("id8").style.backgroundColor = "black";
    }
    if(d.getHours()==9){
        document.getElementById("id8").style.backgroundColor = "rgb(247, 213, 169)";
        document.getElementById("id9").style.backgroundColor = "black";
    }
    if(d.getHours()==10){
        document.getElementById("id9").style.backgroundColor = "rgb(247, 213, 169)";
        document.getElementById("id10").style.backgroundColor = "black";
    }
    if(d.getHours()==11){
        document.getElementById("id10").style.backgroundColor = "rgb(247, 213, 169)";
        document.getElementById("id11").style.backgroundColor = "black";
    }
    if(d.getHours()==12){
        document.getElementById("id11").style.backgroundColor = "rgb(247, 213, 169)";
        document.getElementById("id12").style.backgroundColor = "black";
    }
    if(d.getHours()==13){
        document.getElementById("id12").style.backgroundColor = "rgb(85, 156, 236)";
        document.getElementById("id13").style.backgroundColor = "black";
    }    if(d.getHours()==14){
        document.getElementById("id13").style.backgroundColor = "rgb(247, 213, 169)";
        document.getElementById("id14").style.backgroundColor = "black";
    }    if(d.getHours()==15){
        document.getElementById("id14").style.backgroundColor = "rgb(247, 213, 169)";
        document.getElementById("id15").style.backgroundColor = "black";
    }    if(d.getHours()==16){
        document.getElementById("id15").style.backgroundColor = "rgb(247, 213, 169)";
        document.getElementById("id16").style.backgroundColor = "black";
    }    if(d.getHours()==17){
        document.getElementById("id16").style.backgroundColor = "rgb(247, 213, 169)";
        document.getElementById("id17").style.backgroundColor = "black";
    }    if(d.getHours()==18){
        document.getElementById("id17").style.backgroundColor = "rgb(247, 213, 169)";
        document.getElementById("id18").style.backgroundColor = "black";
    }    if(d.getHours()==19){
        document.getElementById("id18").style.backgroundColor = "rgb(247, 213, 169)";
        document.getElementById("id19").style.backgroundColor = "black";
    }    if(d.getHours()==20){
        document.getElementById("id19").style.backgroundColor = "rgb(247, 213, 169)";
        document.getElementById("id20").style.backgroundColor = "black";
    }    if(d.getHours()==21){
        document.getElementById("id20").style.backgroundColor = "rgb(247, 213, 169)";
        document.getElementById("id21").style.backgroundColor = "black";
    }    if(d.getHours()==22){
        document.getElementById("id21").style.backgroundColor = "rgb(247, 213, 169)";
        document.getElementById("id22").style.backgroundColor = "black";
    }    if(d.getHours()==23){
        document.getElementById("id22").style.backgroundColor = "rgb(247, 213, 169)";
        document.getElementById("id23").style.backgroundColor = "black";
    }    if(d.getHours()==24){
        document.getElementById("id23").style.backgroundColor = "rgb(247, 213, 169)";
        document.getElementById("id24").style.backgroundColor = "black";
    }

}
