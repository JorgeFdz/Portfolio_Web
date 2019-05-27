var flechader = document.querySelector(".flecha");
var flechaizq = document.querySelector(".flecha1");
var cambioimg = document.querySelector(".gifd");
var cambiotxt = document.querySelector(".info_works");

var arrayin = 0;

flechaizq.addEventListener("click", clickizq);
flechader.addEventListener("click", clickder);

var Trabajos = [{
  Titulo: "Adaptación Club Dumas",
  Descripcion: 'Este fue un trabajo de primero de carrera. En él, se nos pedía adaptar a videojuego uno de los libros propuestos. Mi elección fue "El Club Dumas" de Arturo Perez Reverte, ya que soy fan de su obra. Estoy contento ocn el desarrollo de este trabajo ya que creo que conseguí captar la esencia del libro y llevarla a un medio interactivo como es el videojuego, solventando los posibles problemas que podía traer dicha adaptaciónn al medio como es la intricada historia o el conocimiento del protagonista (al que encarnaría el jugador) sobre el libro "Los tres Mosqueteros"',
  Imagen: `<a href="#" title="Download it"> <img  src="Imagenes/Club_Dumas.png" alt="Club Dumas"></a>`,
},
{
  Titulo: "Skorpion",
  Descripcion:"Este trabajo de modelado consistía en hacer un arma a nuestra elección. Yo elegí la skorpion porque me gustaba el modelo y me parecía asequible para el tiempo que disponía. El proceso del trabajo fue crear un modelo de low en el que incrustar como normales el modelo de high para luego ser texturizado en Quixel. La imagen que tenéis es del arma ya texturizada en Quixel.",
  Imagen: `<a href="#" title="Download it"> <img  src="Imagenes/Skorpion.png" alt="Skorpion"></a>`,
},
{
  Titulo: "The Blind Darkness",
  Descripcion:'The Blind Dark es un prototipo que pueden jugar las personas invidentes, todo los pasos están narrados y dependes únicamente de tu oído y tu orientación espacial para resolver estos sencillos "laberintos". El core del juego es ir tocando las paredes (cada lado con un sonido diferente) para orientarte y llegar hasta el final.',
  Imagen: `<a href="#" title="Download it"> <img  src="Imagenes/TBD.png" alt="The Blind Darkness"></a>`,
},
];


function clickder(e){
  e.preventDefault();
  arrayin = arrayin +1;

  if(arrayin >= Trabajos.length){
    arrayin=0;
  }
  mod(arrayin);
}

function clickizq(e){
  e.preventDefault();
  arrayin = arrayin -1;

  if(arrayin < 0){
    arrayin= Trabajos.length -1;
  }
  mod(arrayin);
}



function mod (indice){
var Curro = Trabajos[indice];

  cambioimg.innerHTML =`${Curro.Imagen}`

  cambiotxt.innerHTML = `
      <h3>${Curro.Titulo}</h3>
      <p>Descripción</p>
      <p>${Curro.Descripcion}</p>`
};
