var szamok = [39,100,65,88,255];
var bszamok = ["00100111","01100100","01000001","01011000","11111111"]
var count = 0;
function elsoszam(){
    document.getElementById("message").innerHTML = szamok[count];
}

function ellenor(){
    let iras = document.getElementById("from").value;
    if(iras == bszamok[count]){
        if(count == 4){
            document.getElementById("hiba").innerHTML = "Jó :)";
            document.getElementById("message").innerHTML = "Vége";
            vege();
        }
        document.getElementById("hiba").innerHTML = "Jó :)";
        count++;
        elsoszam();
        
        

    }
    else{
        document.getElementById("hiba").innerHTML = "Nem jó :(";
    }
    
}

function vege(){
    document.write("<html lang='hu'><head>    <meta charset='UTF-8'>    <link rel='stylesheet' href='stilus.css'>    <title>Vége</title></head><body>    <div>        <header></header>        <main>           <h1>Gratulálunk</h1>        <div>    <p>A felkészítő oldal végéhez értetek. Reméljük az itt megszerzett tudás alapján sikerülni fog az 1. Versenyfeladat.<br> Sok sikert!!!<p>   <footer></footer>     </div>")
       
}