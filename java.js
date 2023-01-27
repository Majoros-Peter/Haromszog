function Megszerkesztheto(){
    a = document.getElementById("szam_a").value;
    b = document.getElementById("szam_b").value;
    c = document.getElementById("szam_c").value;

    !(a + b > c && a + c > b && b + c > a) ? alert("Meg szerkeszthető!") : alert("Nem megszerkeszthető");
}

function Random(){
    a = document.getElementById("szam_a").value;
    b = document.getElementById("szam_b").value;
    c = document.getElementById("szam_c").value;
    cik = true;
    szoveg = ["", "", ""];


    while(cik){
    szoveg[0] = `${RandomSzam()}`;
    szoveg[1] = `${RandomSzam()}`;
    szoveg[2] = `${RandomSzam()}`;

    cik = (szoveg[0] + szoveg[1] > szoveg[2] && szoveg[0] + szoveg[2] > szoveg[1] && szoveg[1] + szoveg[2] > szoveg[0])
    }
    alert(szoveg[0]+"\n"+szoveg[1]+"\n"+szoveg[2]);
}

function RandomSzam(){
    return parseFloat(Math.random()*90)+10;
}

function Atfogo(){
    a = document.getElementById("szam_a").value;
    b = document.getElementById("szam_b").value;

    alert(`Átfogó: ${Math.sqrt(a*a+b*b)}`)
}
