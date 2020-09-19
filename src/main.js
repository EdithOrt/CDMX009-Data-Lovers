import {dataPokemon, newList} from './data.js';

//Nodos 
let closeModal = document.querySelectorAll(".close");
let contentImages = document.querySelector("#boxImages");
//Mostrar imagenes pantalla principal

const images = (data) => {
  return data.forEach(item =>{
    let image= item.img;
    let label= document.createElement('img');
    label.classList.add ("Imgns")
    label.id= item.id
    let btn= document.createElement('button');
    btn.classList.add ("btn-Images")
    btn.id+= (item.id -1);
    btn.appendChild(label);
    label.src= image;
    let node= btn;
    contentImages.appendChild(node);
  });
  
} 
images(dataPokemon);

//Modal Información Pokemon   
function printModal () {
  let btnImg = document.querySelectorAll('.btn-Images');
  btnImg.forEach(btns =>{ 
    btns.addEventListener('click',(event)=>{
      let valueBtn = event.target.id;
      modal(dataPokemon,valueBtn);
    })    
  });                
  closeModal.forEach(closeModalPoke=>{
    closeModalPoke.addEventListener('click',function(){
      document.getElementById("modalPokemon").style.display = 'none';
    })
  }); 
};   
// printModal(modal(dataPokemon));
const modal = (pokemon,btn) => {
  document.getElementById("modalPokemon").style.display="block";
  let container= document.getElementById("contentInfo");
  document.createElement('div');
  console.log(pokemon[btn].num)
  container.innerHTML=`
  <div class= "img-contain"> <img class="img poke" src='${pokemon[btn].img}' /> </div>`
};
printModal(modal);
 //Filtración
let options= document.querySelector(".dropdown-content");
options.addEventListener('click', (e)=>{
   let value= e.target.value;
   console.log(value)
   if(value != 'Todos los pokémones'){
    let dataFilter = newList(dataPokemon,value)
    contentImages.innerHTML = '';
    images(dataFilter);
   }else{
     contentImages.innerHTML = '';
     images(dataPokemon)
   }
  });
  