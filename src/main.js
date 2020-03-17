import {dataPokemon} from './data.js';
import pokemon from './data/pokemon/pokemon.js';

console.log();
//Nodos 
let modal = document.querySelector(".modal-container");
let closeModal = document.querySelector(".close");
let openModal = document.querySelector("#ranking");


  //Mostrar imagenes pantalla principal
const images = dataPokemon.forEach((item) => {
    let image= item.img;
    let label= document.createElement('img');
    label.className+=("a" +item.id)
    let btn= document.createElement('button');
    btn.className+= ("btn-Images")
    btn.appendChild(label);
    label.src= image;
    let node= btn;
    document.getElementById("boxImages").appendChild(node);
});

    //Modal 
 /*openModal.addEventListener('click', function(){
    modal.style.display = 'block';
});

closeModal.addEventListener('click', function(){
    modal.style.display ='none';
})*/

/*window.addEventListener('click',function(e){
    if (e.target == flex){
        modal.style.display= 'none';
    }
});/*


/*dataPokemon.forEach(element => {
    let text = element.name;
    console.log(text);
   });*/

   let printInfo= dataPokemon.forEach( poke => {
    let nodo= document.createElement('div');
    nodo.className+= ("nodo");
    nodo.innerHTML += `
    <div class= "contenido-modal-pokemon">
    <div class= " modal-header-pokemon">
    <h3 class="num"> ${poke.num}</h3>
    <h4 class= "name"> ${poke.name}</h4>
    <span class= "closePokemon" id= "close"> &times; <span>
    </div>
    <div class= "modal-body-pokemon>
    <div class= "img-contain"> <img class="img poke" src='${poke.img}' /> </div>
    <p class="type"> Tipo: ${poke.type} </p>
    <p class="weigth"> Peso: ${poke.weight}  Altura: ${poke.height} </p>
    <p class="candy"> Dulces: ${poke.candy_count} ${poke.candy}</p>
    <p class="egg"> Tipo de huevo: ${poke.egg}</p>
    <p class="average spawn"> Frecuencia de aparición: ${poke.avg_spawns}</p>
    </div>
    <div class= "modal-footer-pokemon">
    <h3 class= "evolutions"> Evoluciones </h3>
    <p class="prev-evolution"> ${poke.prev_evolution}</p>
    <span class="next-evolution> ${poke.next_evolution}</span>
    </div>`;
    let modalPokemon = document.querySelector("#modalPokemon");
    modalPokemon.appendChild(nodo);
});
function btnImg(e){
    const a = e.target.classList;
}
document.querySelectorAll(".btn-Images").forEach(openModalPoke=>{
     openModalPoke.addEventListener('click',function(){
        let info= document.querySelector(".nodo")
        //    for (let i=0;i<info.length;i+=1){
        //  info[i].style.display = 'block';}
        info.style.display='block';})
 })


 let closeModalPokemon = document.querySelector(".closePokemon");
     closeModalPokemon.addEventListener('click',function(){
        let info= document.querySelector(".nodo")
        info.style.display = 'none';
}); 