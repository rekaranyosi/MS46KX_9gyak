windows.onload = function () {
    //mi történik ha betöltődött az oldal
    drawPascal(10);
    //console.log(szam);
}

var drawPascal = function (sorSzam) {
    //itt történik a pascal háromszög DOM elemeinek létrehozása és elhelyezése

    //var szam = 5;
    //var szoveg = "xyz";

    var pascalDiv = document.getElementById('div');

    for (var sor = 0; sor < n; sor++) {
        //új div létrehozása az új sornak
        //új div osztálylistájához add hozzá a "sor"-t
        //új div-et add hozzá a "pascal" gyermekeihez
        var ujSorDiv = document.createElement('div');
        ujSorDiv.classList.add('sor');
        pascalDiv.appendChild(ujSorDiv);
        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            //új div létrehozása az új elemnek
            //új elem div osztálylistájához add hozzá az "elem"-et
            //teszteléshet .innerHTML = `${sor}:${oszlop}`
            //legyen az innerHTML a megfelelő szám
            //új elem div-et vedd fel a sor elemei közé
            var ujElemDiv = document.createElement('div');
            ujElemDiv.classList.add('elem');
            ujElemDiv.innerText = faktorialis(sor) / (faktorialis(oszlop) * faktorialis(sor - oszlop));
            ujSorDiv.appendChild(ujElemDiv);
        }
    }

}

//új div DOM elem létrehozása:
var ujElem = document.createdElement('div');
ujElem.classList.add('újosztály');
ujElem.id = 'újID';
ujElem.innerText = '0';
ujElem.innerHTML = '<div>Hello!</div>';

var szuloElem = document.getElementById('szulo'); //szülő elem meghatározása
szuloElem.appendChild(ujElem);
