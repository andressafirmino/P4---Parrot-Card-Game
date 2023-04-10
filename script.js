let numeroCartas = 0;

const imagens = ["bobrossparrot.gif", "bobrossparrot.gif",
"explodyparrot.gif", "explodyparrot.gif", 
"fiestaparrot.gif", "fiestaparrot.gif",
"metalparrot.gif", "metalparrot.gif",
"revertitparrot.gif", "revertitparrot.gif",
"tripletsparrot.gif", "tripletsparrot.gif",
"unicornparrot.gif", "unicornparrot.gif"];

while (numeroCartas < 4 || numeroCartas > 14 || numeroCartas % 2 !== 0) {
    numeroCartas = prompt('Escolha o número de cartas\n- Número par\n- Número maior ou igual a 4\n- Número menor ou igual a 14');
}


let primeiraCarta = '';
let segundaCarta = '';

let primF = '';
let segF = '';


let primeira = '';
let segunda = '';
let primeiro = '';
let segundo = '';

let par = '';
let impar = '';






 const duplas = numeroCartas / 2;
 let imgVerso = [];
 let imgSortida = [];

 function embaralhar () {
    return Math.random() -0.5;
}

let list = document.querySelector('.game');

    for (let i = 0; i < numeroCartas; i++) {
        imgVerso.push(imagens[i])
        imgVerso.sort(embaralhar);
    }
    
let identificar = '';
    for (let s=0; s < numeroCartas; s++) {

        imgSortida.push(imgVerso[s]);
        identificar = imgSortida[s];
        list.innerHTML += `<div class="caixa-cartas" onclick = "virarCartas(this)">
        <div class="front cartas"><img src="./imagens/front 2.png" /></div>
        <div class="back cartas"><img data-img = ${identificar} src="./imagens/${imgSortida[s]}" /></div>
    </div>`;  
    }


    function virarCartas(carta) {

        if (primeiraCarta === '') {

            primF = carta.querySelector('.front');
            primF.classList.add('frontV');
    
            primeiraCarta = carta.querySelector('.back');
            primeiraCarta.classList.add('backV');
            primeiro = primeiraCarta.querySelector('img');
            primeira = primeiro.getAttribute('data-img');
            console.log(primeira);

        }

        else if(segundaCarta === '') {
            segF = carta.querySelector('.front');
            segF.classList.add('frontV');
    
            segundaCarta = carta.querySelector('.back');
            segundaCarta.classList.add('backV');
            segundo = segundaCarta.querySelector('img');
            segunda = segundo.getAttribute('data-img');
            console.log(segunda);

            verificarPar(carta);
    
        }
    } 
    
function clicar(carta) {
    let clicar = document.querySelectorAll('.caixa-cartas');
    clicar.addEventListener('click', verificarPar);
}
function desclicar (carta) {
    let desclicar = document.querySelector('.caixa-cartas');
    desclicar.removeEventListener('click', verificarPar);
}

function verificarPar (carta) {
        if (primeira === segunda) {
            primeiraCarta.classList.add('desabilitar');
            segundaCarta.classList.add('desabilitar');

            desclicar();
            
            primeiraCarta = '';
            segundaCarta = '';
        }
        else {

            setTimeout (diferente, 1000)


            function diferente() {
                
                primeiraCarta.classList.remove('backV');
                primF.classList.remove('frontV');
    
            
                segundaCarta.classList.remove('backV');
                segF.classList.remove('frontV');
        
            
                primeiraCarta = '';
                segundaCarta = '';
            }
        }
    }




