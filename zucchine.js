(function () {
    
    /* 
    [Snack 1]
    Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà,
    peso e lunghezza. Calcola quanto pesano tutte le zucchine.
    */

    var zucchiniVariety = ['black beauty', 'caserta', 'golden egg', 'cocozella', 'dunja', 'round de nice', 'zephyr', 'gadzukes']; 
    
    var zucchini = [
        {
            variety: '',
            weight: '',
            length: '',
        },
    
    
    
    ];

    console.log(randomNumGen(10, 23));
    
    function randomNumGen(min, max) {
        var minMax = max - min;

        var randomNum = Math.floor(Math.random() * (minMax+1)) + min;

        return randomNum; 
    }
    
    
    
    
    
    /*
    [Snack 2]
    Crea 10 oggetti che rappresentano una zucchina.
    Dividi in due array separati le zucchine che misurano meno o più di 15cm.
    Infine stampa separatamente quanto pesano i due gruppi di zucchine. (edited) 
    */



})();
