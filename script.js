let numeroCartas = 0;

let primeira = '';
let segunda = '';
let par = 0;

let contarVirada = 0;
let contarJogadas = 0;

 let imgVerso = [];
 let imgSortida = [];

const imagens = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"];

while (numeroCartas < 4 || numeroCartas > 14 || numeroCartas % 2 !== 0) {
    numeroCartas = prompt('Escolha o número de cartas\n- Número par\n- Número maior ou igual a 4\n- Número menor ou igual a 14');
}

const duplas = numeroCartas / 2;

let list = document.querySelector('.game');

    


    for (let s=0; s < duplas; s++) {
        
        imgVerso[s] = `<div class="caixa-cartas" onclick = "virarCartas(this)" data-test="card">
        <div class="front cartas"><img src="./imagens/front 2.png" data-test="face-down-image"/></div>
        <div class="back cartas"><img src="./imagens/${imagens[s]}" data-test="face-up-image" /></div>
    </div>`;  
    }

    for (let i = 0; i < duplas; i++) {
        imgSortida.push(imgVerso[i]);
        imgSortida.push(imgVerso[i]);
       
    }

    imgSortida.sort(function () {
        return 0.5 - Math.random();
    })

    for (let m = 0; m < numeroCartas; m++) {
        list.innerHTML += imgSortida[m];
    }
    function virarCartas(carta) {

        if (carta.classList.contains('selecionado') !== true && contarVirada === 0) {
            carta.classList.add('selecionado');
            contarVirada++;
            contarJogadas++;
            primeira = carta;
        }

        else if(carta.classList.contains('selecionado') !== true && contarVirada === 1) {
            carta.classList.add('selecionado');
            contarVirada++;
            
            contarJogadas++;
            segunda = carta;
            setTimeout(verificarPar, 1000, primeira, segunda);
    
        }
    } 
function verificarQtde() {
    if (par === duplas) {
        alert(`Você ganhou em ${contarJogadas} jogadas!`);
    }
} 

function verificarPar (carta1, carta2) {
        if (carta1.querySelector('.back > img').src === carta2.querySelector('.back > img').src) {
            par++;
            contarVirada = 0;
            carta1 = '';
            carta2 = '';
            verificarQtde();

        }
        else if (carta1.querySelector('.back > img').src !== carta2.querySelector('.back > img').src) {

           diferente();


            function diferente() {
                
    
            
                carta1.classList.remove('selecionado');
                carta2.classList.remove('selecionado');
        
                contarVirada = 0;

                carta1 = '';
                carta2 = '';

            }
        }
    }




