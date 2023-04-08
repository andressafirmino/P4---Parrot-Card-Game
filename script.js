let numeroCartas = 0;

const imagens = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"]

while (numeroCartas < 4 || numeroCartas > 14 || numeroCartas % 2 !== 0) {
    numeroCartas = prompt('Escolha o número de cartas\n- Número par\n- Número maior ou igual a 4\n- Número menor ou igual a 14');
}

function virarCartas() {
    let virarF = document.querySelector('caixa-cartas');
    virarF.classList.remove('front');
    virarF.classList.add('frontV');

    let virarV = document.querySelector('caixa-cartas');
    virarV.classList.remove('back');
    virarV.classList.add('backV');

}


let list = document.querySelector('.game');
    

    for (let c=0; c < numeroCartas; c++) {
     
        let imgVerso = imagens[c];
        console.log(imgVerso);
        list.innerHTML += `<div class="caixa-cartas" onclick= "virarCartas(this)">
        <div class="front cartas"><img src="./imagens/front 2.png" /></div>
        <div class="back cartas"><img src="./imagens/${imgVerso[c]}" /></div>
    </div>`;


    }











/*for (let i = 0; numeroCartas > i; i++) {
    list.innerHTML = list.innerHTML + list[i];

}*/