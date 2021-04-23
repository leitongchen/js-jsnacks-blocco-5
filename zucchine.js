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

// funzione che calcola/SOMMA il peso di tutte le zucchine dell'array
function calcWeight(array, weight) {
    var totalWeight = 0;

    for (var z = 0; z < array.length; z++) {
        var object = array[z];

        for (var key in object) {

            if (key === weight) {

                totalWeight += parseInt(object[key]);
            }
        }
    }
    return totalWeight;
}

//funzione che verifica se la lunghezza è maggiore di un TOT
function longZucchiniSelection(lunghezza, num) {

    if (lunghezza <= num) {
        return false;
    }
    return true;
}


/* 
[Snack 1]
Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà,
peso e lunghezza. Calcola quanto pesano tutte le zucchine.
*/
/*
[Snack 2]
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine. (edited) 
*/

(function () {

    var yourZucchini = document.getElementById('your-zucchini');
    var zucchiniWeight = document.getElementById("your-zucchini-weight");

    var shortZucchiniList = document.getElementById("short-zucchini");
    var longZucchiniList = document.getElementById("long-zucchini");

    var shortZucchiniWeight = document.getElementById("short-zucchini-weight");
    var longZucchiniWeight = document.getElementById("long-zucchini-weight");


    // lunghezza zucchina varia tra 10cm e 23cm
    // peso zucchina varia tra 50gr e 450gr

    var zucchiniVariety = ['black beauty', 'caserta', 'golden egg', 'cocozella', 'dunja', 'round de nice', 'zephyr', 'gadzukes', 'raven', 'fordhook', 'gourmet gold', 'magda', 'summer green tiger', 'italian ribed', 'bush baby', 'patio star'];

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

    //due array per dividere le zucchine in base alla lunghezza
    var shortZucchini = []; // <= 15cm
    var longZucchini = []; // > 15cm

    for (var i = 0; i < allZucchini.length; i++) {

        var oneZucchini = allZucchini[i];

        // pushare le zucchine in due array diversi in base alle lunghezza
        for (var key in oneZucchini) {
            if (key === "length") {

                if (longZucchiniSelection(oneZucchini[key], 15)) {

                    longZucchini.push(oneZucchini);
                } else {
                    shortZucchini.push(oneZucchini);
                }
            }
        }
        yourZucchini.innerHTML += "<li><strong>Zucchina " + (i + 1) + ": </strong><br> " + printThemAll(oneZucchini, 'weight', 'length').join(" - ") + "</li>";
    }

    zucchiniWeight.innerHTML += "<strong>" + calcWeight(allZucchini, 'weight') + "gr </strong>";


    // ciclo per scrivere le zucchine in html SHORT
    for (var longz = 0; longz < shortZucchini.length; longz++) {
        var zucchina = shortZucchini[longz];

        longZucchiniList.innerHTML += "<li><strong>Zucchina " + (longz + 1) + ": </strong><br> " + printThemAll(zucchina, 'weight', 'length').join(" - ") + "</li>";
    }

    longZucchiniWeight.innerHTML += "<strong>" + calcWeight(longZucchini, 'weight') + "gr </strong>";


    // ciclo per scrivere le zucchine in html LONG
    for (var shortz = 0; shortz < longZucchini.length; shortz++) {
        var zucchina = longZucchini[shortz];

        shortZucchiniList.innerHTML += "<li><strong>Zucchina " + (shortz + 1) + ": </strong><br> " + printThemAll(zucchina, 'weight', 'length').join(" - ") + "</li>";
    }

    shortZucchiniWeight.innerHTML += "<strong>" + calcWeight(shortZucchini, 'weight') + "gr </strong>";

    /*

    function controllaArray(arrayName, domElement, weight, length) {

        for (var i=0; i<arrayName.length; i++) {
            var element = arrayName[i];

            return domElement.innerHTML += "<li><strong>Zucchina " + (i + 1) + ": </strong><br> " + printThemAll(element, weight, length).join(" - ") + "</li>";
        }
    }

    shortZucchiniList.innerHTML += controllaArray(shortZucchini, shortZucchiniList, 'weight', 'length');
    longZucchiniList.innerHTML += controllaArray(longZucchini, longZucchiniList, 'weight', 'length');
    */

    console.log(shortZucchini);
    console.log(longZucchini);
})();
