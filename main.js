// Consegna

// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49

// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// Consigli del giorno: :party_wizard:

// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:  di cosa ho bisogno per generare i numeri?

// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.

// Le validazioni e i controlli possiamo farli anche in un secondo momento.


function selectItem (){
    let selectItem = document.getElementById('level-select');
    return (selectItem.value);
}

function createNewSquare (){
    let newBox = document.createElement('div');
    newBox.classList.add('grid-easy-square');
    return newBox;
}



const playButton = document.querySelector('#play-button');

let  gridWrapper = document.getElementById('grid-wrapper');

let number = 0;

playButton.addEventListener('click', function(){
    if (selectItem() == 'facile'){
        for (let i = 1; i < 101; i++) {
            const addedBox = createNewSquare();
            gridWrapper.appendChild(addedBox);
            addedBox.innerHTML = +i;
            addedBox.addEventListener('click', function (){
                addedBox.classList.toggle('clicked');
            })
        }
    } else if (selectItem() == 'medio'){
        for (let i = 1; i < 81; i++) {
            const addedBox = createNewSquare();
            gridWrapper.appendChild(addedBox);
            addedBox.innerHTML = +i;
            addedBox.addEventListener('click', function (){
                addedBox.classList.toggle('clicked');
            })
        }
    } else {
        for (let i = 1; i < 51; i++) {
            const addedBox = createNewSquare();
            gridWrapper.appendChild(addedBox);
            addedBox.innerHTML = +i;
            addedBox.addEventListener('click', function (){
                addedBox.classList.toggle('clicked');
            })
        }
    }
})

