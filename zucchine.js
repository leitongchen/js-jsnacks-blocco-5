function printThemAll(zucchini, gr, cm) {

    var singleZucchini = [];

    for (var key in zucchini) {

        if (key === gr) {

            singleZucchini.push(key + ": " + zucchini[key] + "gr");

        } else if (key === cm) {

            singleZucchini.push(key + ": " + zucchini[key] + "cm");
        } else {

            singleZucchini.push(key + ": " + zucchini[key]);
        }

    }
    return singleZucchini;
    //return element + zucchini.variety + " - " + zucchini.weight + "gr - " + zucchini.length + "cm";
}


// funzione: genera in modo automatico la varietà da assegnare alla zucchina
function setVariety(array) {

    return array[randomNumGen(1, array.length - 1)]
}


function randomNumGen(min, max) {
    var minMax = max - min;

    var randomNum = Math.floor(Math.random() * (minMax + 1)) + min;

    return randomNum;
}


(function () {

    var yourZucchini = document.getElementById('your-zucchini');
    var zucchiniWeight = document.getElementById("your-zucchini-weight");
    /* 
    [Snack 1]
    Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà,
    peso e lunghezza. Calcola quanto pesano tutte le zucchine.
    */

    // lunghezza zucchina varia tra 10cm e 23cm
    // peso zucchina varia tra 50gr e 450gr


    var zucchiniVariety = ['black beauty', 'caserta', 'golden egg', 'cocozella', 'dunja', 'round de nice', 'zephyr', 'gadzukes'];

    // array in cui verranno inserite le 10 zucchine
    var allZucchini = [];

    // variety, weight e length vengono assegnati in automatico con un ciclo 

    while (allZucchini.length < 10) {

        var newZucchini = {
            variety: setVariety(zucchiniVariety),
            weight: randomNumGen(50, 450),
            length: randomNumGen(10, 23),
        }

        allZucchini.push(newZucchini);
    }


    // STAMPA LE 10 ZUCCHINE IN HTML
    // SOMMARE IL PESO DI TUTTE LE ZUCCHINE

    var allZucchiniWeight = 0;
    for (var i = 0; i < allZucchini.length; i++) {

        var oneZucchini = allZucchini[i];

        for (var key in oneZucchini) {

            if (key === "weight") {

                allZucchiniWeight += parseInt(oneZucchini[key]);
            }
        }
        yourZucchini.innerHTML += "<li><strong>Zucchina " + (i + 1) + ": </strong><br> " + printThemAll(oneZucchini, 'weight', 'length').join(" * ") + "</li>";
    }

    zucchiniWeight.innerHTML += "<strong>" + allZucchiniWeight + "gr </strong>";

 










    /*
    [Snack 2]
    Crea 10 oggetti che rappresentano una zucchina.
    Dividi in due array separati le zucchine che misurano meno o più di 15cm.
    Infine stampa separatamente quanto pesano i due gruppi di zucchine. (edited) 
    */



})();
