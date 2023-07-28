var magicNumber = 0;
var cardsValideted = 0;

function validateCard(cardId, status){
    if(status == 'valid'){
        document.getElementsByClassName('back')[cardId].classList.remove('invalidCard');
        document.getElementsByClassName('back')[cardId].classList.add('validCard');
        document.getElementsByClassName('btn-group')[cardId].style.visibility = 'hidden';
        switch(cardId) {
            case 0: magicNumber = magicNumber + 32; break;
            case 1: magicNumber = magicNumber + 8; break;
            case 2: magicNumber = magicNumber + 4; break;
            case 3: magicNumber = magicNumber + 1; break;
            case 4: magicNumber = magicNumber + 16; break;
            case 5: magicNumber = magicNumber + 2; break;
        }
    }
    else if(status == 'invalid'){
        document.getElementsByClassName('back')[cardId].classList.remove('validCard');
        document.getElementsByClassName('back')[cardId].classList.add('invalidCard');
        document.getElementsByClassName('btn-group')[cardId].style.visibility = 'hidden';
    }
    cardsValideted++;
    if(cardsValideted == 6){
        setTimeout(function(){ alert("De acordo com Hacker Master o número que você pensou foi: "+magicNumber); }, 1000);
    }
}