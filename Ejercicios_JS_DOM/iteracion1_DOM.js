const SHOWME= document.querySelector(".showme");
console.log(SHOWME);

const PILLADO= document.querySelector("#pillado");
console.log(PILLADO);

const ETIQUETAP= document.querySelectorAll("p");
function etiqueta(){
    for (i=0; i<ETIQUETAP.length ; i++){
        console.log(ETIQUETAP[i]);
    }

}
console.log(etiqueta());


const POKEMONCLASS= document.querySelectorAll(".pokemon");
function clase(){
    for (i=0;i<POKEMONCLASS.length;i++){
        console.log(POKEMONCLASS[i]);
    }
    
}
console.log(clase());

const DATAFUNCT= document.querySelectorAll("testMe");
function dat(){
    for (i=0;i<DATAFUNCT.length;i++){
        console.log(DATAFUNCT[i]);
    }
    
}
console.log(dat());