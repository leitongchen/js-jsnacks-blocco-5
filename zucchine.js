(function () {

    /* 
    [Snack 1]
    Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà,
    peso e lunghezza. Calcola quanto pesano tutte le zucchine.
    */

    // lunghezza zucchina varia tra 10cm e 23cm
    // peso zucchina varia tra 50gr e 450gr


    var zucchiniVariety = ['black beauty', 'caserta', 'golden egg', 'cocozella', 'dunja', 'round de nice', 'zephyr', 'gadzukes'];

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

    console.log(allZucchini);



    

    // funzione: genera in modo automatico la varietà da assegnare alla zucchina
    function setVariety(array) {

       return array[randomNumGen(1, array.length-1)]
    }

    //console.log(setVariety(zucchiniVariety))


    //console.log(randomNumGen(10, 23));

    function randomNumGen(min, max) {
        var minMax = max - min;

        var randomNum = Math.floor(Math.random() * (minMax + 1)) + min;

        return randomNum;
    }





    /*
    [Snack 2]
    Crea 10 oggetti che rappresentano una zucchina.
    Dividi in due array separati le zucchine che misurano meno o più di 15cm.
    Infine stampa separatamente quanto pesano i due gruppi di zucchine. (edited) 
    */



})();
