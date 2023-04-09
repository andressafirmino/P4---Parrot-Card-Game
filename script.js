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

function virarCartas(carta) {
    let virarF = carta.querySelector('.front');
    virarF.classList.add('frontV');

    let virarV = carta.querySelector('.back');
    virarV.classList.add('backV');

}
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
    

    for (let s=0; s < numeroCartas; s++) {

        imgSortida.push(imgVerso[s]);
        console.log(imgSortida);
        list.innerHTML += `<div class="caixa-cartas" onclick= "virarCartas(this)">
        <div class="front cartas"><img src="./imagens/front 2.png" /></div>
        <div class="back cartas"><img src="./imagens/${imgSortida[s]}" /></div>
    </div>`;  

    }









/*for (let i = 0; numeroCartas > i; i++) {
    list.innerHTML = list.innerHTML + list[i];

}*/