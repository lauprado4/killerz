// const json = require("json")

let jugadorId = null
let ataqueJugador = []
let ataqueRival 
let vidasJugador = 3
let vidasEnemigo = 3
let killerz = []
let botonesAtaques = []
let opcionDeKillerz
let asesinoJugador
let asesinoJugadorObjeto
let ataquesDelJugador
let ataqueAsesinoRival
let inputGhostface 
let inputJasonvoorhees 
let inputChucky
let inputFreddykrueger
let inputMichaelmyers
let inputPennywise
let inputJigsaw
let inputLeatherface
let inputThenun 
let botonFuego 
let botonHielo 
let botonRayo 
let botonSonido 
let botonAgua 
let botonExplosion
let botonSangre 
let botonTiempo 
let botonPesadilla
let intervalo
let mapaBackground = new Image()
mapaBackground.src = "./personajes/mapa2.jpg"
let altura
let anchoMapa = window.innerWidth -20

altura = anchoMapa*600/800

const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
const sectionReiniciar = document.getElementById("Reiniciar");
const sectionConfirmacionAsesino = document.getElementById("confirmacion-asesino");
const sectionMensajes = document.getElementById("mensajes");
const contenedorTarjetas = document.getElementById("contenedor-tarjetas");
const botonStart = document.getElementById("boton-start");
const botonReiniciar = document.getElementById("boton-reset");
const contenedorBotones = document.getElementById("contenedor-botones");
const spanName = document.getElementById("name")
const sectionSeleccionarAsesino = document.getElementById("seleccionar-asesino")
const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")
const spanAsesinoRival = document.getElementById("nameR")
const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")
const anchoMaximoMapa = 1000

if (anchoMapa < anchoMaximoMapa) {
  anchoMapa = anchoMaximoMapa - 20
}

class Killerz {
  constructor(nombre, imagen, vida, imagenMapa, x=270, y=400) {
    this.nombre = nombre
    this.imagen = imagen
    this.vida = vida
    this.ataques = []
    this.ancho = 110
    this.alto = 130
    this.x = x
    this.y = y
    this.mapaImagen = new Image()
    this.mapaImagen.src = imagenMapa
    this.velocidadX = 0
    this.velocidadY = 0
  }

  pintarKillerz() {
    lienzo.drawImage(this.mapaImagen,this.x,this.y,this.ancho,this.alto)
  }
}

let ghostface = new Killerz("Ghostface", "./personajes/ghostface.jpg", 3, "./personajes/ghostfacesf.png")
let jasonvoorhees = new Killerz("Jason-Voorhees", "./personajes/jasonvorhees.jpg", 3, "./personajes/jasonvoorheessf.png")
let chucky = new Killerz("Chucky", "./personajes/chucky.jpg", 3, "./personajes/chuckysf.png")
let freddykrueger= new Killerz("Freddy-Krueger", "./personajes/freddykrueger.jpg", 3, "./personajes/freddykruegersf.png")
let michaelmyers = new Killerz("Michael-Myers", "./personajes/michaelmyers.jpg", 3, "./personajes/michaelmyerssf.png")
let pennywise = new Killerz("Pennywise", "./personajes/pennywise.jpg", 3, "./personajes/pennywisesf.png")
let jigsaw = new Killerz("Jigsaw", "./personajes/jigsaw.jpg", 3, "./personajes/jigsawsf.png")
let leatherface = new Killerz("Leatherface", "./personajes/leatherface.jpg", 3, "./personajes/leatherfacesf.png")
let thenun = new Killerz("The-Nun", "./personajes/thenun.jpg", 3, "./personajes/thenunsf.png" )

let ghostfaceEnemigo = new Killerz("Ghostface", "./personajes/ghostface.jpg", 3, "./personajes/ghostfacesf.png", 690, 300)
let jasonvoorheesEnemigo = new Killerz("Jason-Voorhees", "./personajes/jasonvorhees.jpg", 3, "./personajes/jasonvoorheessf.png", 1000, 470)
let chuckyEnemigo = new Killerz("Chucky", "./personajes/chucky.jpg", 3, "./personajes/chuckysf.png", 1220, 310)
let freddykruegerEnemigo = new Killerz("Freddy-Krueger", "./personajes/freddykrueger.jpg", 3, "./personajes/freddykruegersf.png", 350, 670)
let michaelmyersEnemigo = new Killerz("Michael-Myers", "./personajes/michaelmyers.jpg", 3, "./personajes/michaelmyerssf.png", 1200, 730)
let pennywiseEnemigo = new Killerz("Pennywise", "./personajes/pennywise.jpg", 3, "./personajes/pennywisesf.png", 550, 950)
let jigsawEnemigo = new Killerz("Jigsaw", "./personajes/jigsaw.jpg", 3, "./personajes/jigsawsf.png", 710, 580)
let leatherfaceEnemigo = new Killerz("Leatherface", "./personajes/leatherface.jpg", 3, "./personajes/leatherfacesf.png", 1000, 1050)
let thenunEnemigo = new Killerz("The-Nun", "./personajes/thenun.jpg", 3, "./personajes/thenunsf.png", 1380, 900)

ghostface.ataques.push( 
  {nombre: "🔪", id:"boton-fuego"},
  {nombre: "💉", id:"boton-hielo"},
  {nombre: "🏹", id:"boton-rayo"},
  {nombre: "🪒", id:"boton-sonido"},
  {nombre: "🪓", id:"boton-agua"},
  {nombre: "💣", id:"boton-explosion"},
  {nombre: "📌", id:"boton-sangre"},  
  {nombre: "🦯", id:"boton-tiempo"},
  {nombre: "🔨", id:"boton-pesadilla"},
)
jasonvoorhees.ataques.push(
  {nombre: "🔪", id:"boton-fuego"},
  {nombre: "💉", id:"boton-hielo"},
  {nombre: "🏹", id:"boton-rayo"},
  {nombre: "🪒", id:"boton-sonido"},
  {nombre: "🪓", id:"boton-agua"},
  {nombre: "💣", id:"boton-explosion"},
  {nombre: "📌", id:"boton-sangre"},  
  {nombre: "🦯", id:"boton-tiempo"},
  {nombre: "🔨", id:"boton-pesadilla"},
)
chucky.ataques.push(
  {nombre: "🔪", id:"boton-fuego"},
  {nombre: "💉", id:"boton-hielo"},
  {nombre: "🏹", id:"boton-rayo"},
  {nombre: "🪒", id:"boton-sonido"},
  {nombre: "🪓", id:"boton-agua"},
  {nombre: "💣", id:"boton-explosion"},
  {nombre: "📌", id:"boton-sangre"},  
  {nombre: "🦯", id:"boton-tiempo"},
  {nombre: "🔨", id:"boton-pesadilla"},
)
freddykrueger.ataques.push(
  {nombre: "🔪", id:"boton-fuego"},
  {nombre: "💉", id:"boton-hielo"},
  {nombre: "🏹", id:"boton-rayo"},
  {nombre: "🪒", id:"boton-sonido"},
  {nombre: "🪓", id:"boton-agua"},
  {nombre: "💣", id:"boton-explosion"},
  {nombre: "📌", id:"boton-sangre"},  
  {nombre: "🦯", id:"boton-tiempo"},
  {nombre: "🔨", id:"boton-pesadilla"},
)
michaelmyers.ataques.push(
  {nombre: "🔪", id:"boton-fuego"},
  {nombre: "💉", id:"boton-hielo"},
  {nombre: "🏹", id:"boton-rayo"},
  {nombre: "🪒", id:"boton-sonido"},
  {nombre: "🪓", id:"boton-agua"},
  {nombre: "💣", id:"boton-explosion"},
  {nombre: "📌", id:"boton-sangre"},  
  {nombre: "🦯", id:"boton-tiempo"},
  {nombre: "🔨", id:"boton-pesadilla"},
)
pennywise.ataques.push(
  {nombre: "🔪", id:"boton-fuego"},
  {nombre: "💉", id:"boton-hielo"},
  {nombre: "🏹", id:"boton-rayo"},
  {nombre: "🪒", id:"boton-sonido"},
  {nombre: "🪓", id:"boton-agua"},
  {nombre: "💣", id:"boton-explosion"},
  {nombre: "📌", id:"boton-sangre"},  
  {nombre: "🦯", id:"boton-tiempo"},
  {nombre: "🔨", id:"boton-pesadilla"},
)
jigsaw.ataques.push(
  {nombre: "🔪", id:"boton-fuego"},
  {nombre: "💉", id:"boton-hielo"},
  {nombre: "🏹", id:"boton-rayo"},
  {nombre: "🪒", id:"boton-sonido"},
  {nombre: "🪓", id:"boton-agua"},
  {nombre: "💣", id:"boton-explosion"},
  {nombre: "📌", id:"boton-sangre"},  
  {nombre: "🦯", id:"boton-tiempo"},
  {nombre: "🔨", id:"boton-pesadilla"},
)
leatherface.ataques.push(
  {nombre: "🔪", id:"boton-fuego"},
  {nombre: "💉", id:"boton-hielo"},
  {nombre: "🏹", id:"boton-rayo"},
  {nombre: "🪒", id:"boton-sonido"},
  {nombre: "🪓", id:"boton-agua"},
  {nombre: "💣", id:"boton-explosion"},
  {nombre: "📌", id:"boton-sangre"},  
  {nombre: "🦯", id:"boton-tiempo"},
  {nombre: "🔨", id:"boton-pesadilla"},
)
thenun.ataques.push(
  {nombre: "🔪", id:"boton-fuego"},
  {nombre: "💉", id:"boton-hielo"},
  {nombre: "🏹", id:"boton-rayo"},
  {nombre: "🪒", id:"boton-sonido"},
  {nombre: "🪓", id:"boton-agua"},
  {nombre: "💣", id:"boton-explosion"},
  {nombre: "📌", id:"boton-sangre"},  
  {nombre: "🦯", id:"boton-tiempo"},
  {nombre: "🔨", id:"boton-pesadilla"},
)

ghostfaceEnemigo.ataques.push(
  {nombre: "🔪", id:"boton-fuego"},
  {nombre: "💉", id:"boton-hielo"},
  {nombre: "🏹", id:"boton-rayo"},
  {nombre: "🪒", id:"boton-sonido"},
  {nombre: "🪓", id:"boton-agua"},
  {nombre: "💣", id:"boton-explosion"},
  {nombre: "📌", id:"boton-sangre"},  
  {nombre: "🦯", id:"boton-tiempo"},
  {nombre: "🔨", id:"boton-pesadilla"},
)
jasonvoorheesEnemigo.ataques.push(
  {nombre: "🔪", id:"boton-fuego"},
  {nombre: "💉", id:"boton-hielo"},
  {nombre: "🏹", id:"boton-rayo"},
  {nombre: "🪒", id:"boton-sonido"},
  {nombre: "🪓", id:"boton-agua"},
  {nombre: "💣", id:"boton-explosion"},
  {nombre: "📌", id:"boton-sangre"},  
  {nombre: "🦯", id:"boton-tiempo"},
  {nombre: "🔨", id:"boton-pesadilla"},
)
chuckyEnemigo.ataques.push(
  {nombre: "🔪", id:"boton-fuego"},
  {nombre: "💉", id:"boton-hielo"},
  {nombre: "🏹", id:"boton-rayo"},
  {nombre: "🪒", id:"boton-sonido"},
  {nombre: "🪓", id:"boton-agua"},
  {nombre: "💣", id:"boton-explosion"},
  {nombre: "📌", id:"boton-sangre"},  
  {nombre: "🦯", id:"boton-tiempo"},
  {nombre: "🔨", id:"boton-pesadilla"},
)
freddykruegerEnemigo.ataques.push(
  {nombre: "🔪", id:"boton-fuego"},
  {nombre: "💉", id:"boton-hielo"},
  {nombre: "🏹", id:"boton-rayo"},
  {nombre: "🪒", id:"boton-sonido"},
  {nombre: "🪓", id:"boton-agua"},
  {nombre: "💣", id:"boton-explosion"},
  {nombre: "📌", id:"boton-sangre"},  
  {nombre: "🦯", id:"boton-tiempo"},
  {nombre: "🔨", id:"boton-pesadilla"},
)
michaelmyersEnemigo.ataques.push(
  {nombre: "🔪", id:"boton-fuego"},
  {nombre: "💉", id:"boton-hielo"},
  {nombre: "🏹", id:"boton-rayo"},
  {nombre: "🪒", id:"boton-sonido"},
  {nombre: "🪓", id:"boton-agua"},
  {nombre: "💣", id:"boton-explosion"},
  {nombre: "📌", id:"boton-sangre"},  
  {nombre: "🦯", id:"boton-tiempo"},
  {nombre: "🔨", id:"boton-pesadilla"},
)
pennywiseEnemigo.ataques.push(
  {nombre: "🔪", id:"boton-fuego"},
  {nombre: "💉", id:"boton-hielo"},
  {nombre: "🏹", id:"boton-rayo"},
  {nombre: "🪒", id:"boton-sonido"},
  {nombre: "🪓", id:"boton-agua"},
  {nombre: "💣", id:"boton-explosion"},
  {nombre: "📌", id:"boton-sangre"},  
  {nombre: "🦯", id:"boton-tiempo"},
  {nombre: "🔨", id:"boton-pesadilla"},
)
jigsawEnemigo.ataques.push(
  {nombre: "🔪", id:"boton-fuego"},
  {nombre: "💉", id:"boton-hielo"},
  {nombre: "🏹", id:"boton-rayo"},
  {nombre: "🪒", id:"boton-sonido"},
  {nombre: "🪓", id:"boton-agua"},
  {nombre: "💣", id:"boton-explosion"},
  {nombre: "📌", id:"boton-sangre"},  
  {nombre: "🦯", id:"boton-tiempo"},
  {nombre: "🔨", id:"boton-pesadilla"},
)
leatherfaceEnemigo.ataques.push(
  {nombre: "🔪", id:"boton-fuego"},
  {nombre: "💉", id:"boton-hielo"},
  {nombre: "🏹", id:"boton-rayo"},
  {nombre: "🪒", id:"boton-sonido"},
  {nombre: "🪓", id:"boton-agua"},
  {nombre: "💣", id:"boton-explosion"},
  {nombre: "📌", id:"boton-sangre"},  
  {nombre: "🦯", id:"boton-tiempo"},
  {nombre: "🔨", id:"boton-pesadilla"},
)
thenunEnemigo.ataques.push(
  {nombre: "🔪", id:"boton-fuego"},
  {nombre: "💉", id:"boton-hielo"},
  {nombre: "🏹", id:"boton-rayo"},
  {nombre: "🪒", id:"boton-sonido"},
  {nombre: "🪓", id:"boton-agua"},
  {nombre: "💣", id:"boton-explosion"},
  {nombre: "📌", id:"boton-sangre"},  
  {nombre: "✂", id:"boton-tiempo"},
  {nombre: "🔨", id:"boton-pesadilla"},
)

killerz.push(ghostface,jasonvoorhees,chucky,freddykrueger,michaelmyers,pennywise,jigsaw,leatherface,thenun)

function iniciarJuego() {
  sectionSeleccionarAtaque.style.display = "none"
  sectionReiniciar.style.display = "none"
  sectionConfirmacionAsesino.style.display = "none"
  sectionMensajes.style.display = "none"
  sectionVerMapa.style.display = "none"
  
  killerz.forEach((killerz) => {
    opcionDeKillerz = `
    <input type="radio" name="killerz" id=${killerz.nombre} />
    <label class="tarjeta-de-heroe" for=${killerz.nombre}>
        <p>${killerz.nombre}</p>
        <img src=${killerz.imagen} alt=${killerz.nombre}>
    </label>`
    contenedorTarjetas.innerHTML += opcionDeKillerz
  })
   inputGhostface = document.getElementById("Ghostface");
   inputJasonvoorhees = document.getElementById("Jason-Voorhees");
   inputChucky = document.getElementById("Chucky");
   inputFreddykrueger = document.getElementById("Freddy-Krueger");
   inputMichaelmyers = document.getElementById("Michael-Myers");
   inputPennywise = document.getElementById("Pennywise");
   inputJigsaw = document.getElementById("Jigsaw");
   inputLeatherface = document.getElementById("Leatherface");
   inputThenun = document.getElementById("The-Nun");

  botonStart.addEventListener("click", seleccionarAsesino)
  
  botonReiniciar.addEventListener("click", reiniciarJuego)

  unirseAlJuego()
}

function unirseAlJuego() {
  fetch("http://localhost:8080/unirse")
    .then(function (res) {
      if (res.ok) {
        res.text()
          .then(function (respuesta) {
            console.log(respuesta)
            jugadorId = respuesta
          })
      } 
    })
}

mapa.width = anchoMapa
mapa.height = altura
let lienzo = mapa.getContext("2d")

function seleccionarAsesino() {
  if (inputGhostface.checked){
    spanName.innerHTML = inputGhostface.id
    asesinoJugador = inputGhostface.id
  } else if(inputJasonvoorhees.checked){
    spanName.innerHTML = inputJasonvoorhees.id
    asesinoJugador = inputJasonvoorhees.id
  } else if(inputChucky.checked){
    spanName.innerHTML = inputChucky.id
    asesinoJugador = inputChucky.id
  } else if(inputFreddykrueger.checked){
    spanName.innerHTML = inputFreddykrueger.id
    asesinoJugador = inputFreddykrueger.id
  } else if(inputMichaelmyers.checked){
    spanName.innerHTML = inputMichaelmyers.id
    asesinoJugador = inputMichaelmyers.id
  } else if(inputPennywise.checked){
    spanName.innerHTML = inputPennywise.id
    asesinoJugador = inputPennywise.id
  } else if(inputJigsaw.checked){
    spanName.innerHTML = inputJigsaw.id
    asesinoJugador = inputJigsaw.id
  } else if(inputLeatherface.checked){
    spanName.innerHTML = inputLeatherface.id
    asesinoJugador = inputLeatherface.id
  } else if(inputThenun.checked){
    spanName.innerHTML = inputThenun.id
    asesinoJugador = inputThenun.id
  } else {
     alert("Selecciona un héroe por favor")
     reiniciarJuego()
  }

  botonStart.disabled = true

  sectionSeleccionarAsesino.style.display = "none"
  
  sectionVerMapa.style.display = "flex"

  elegirAsesino(asesinoJugador)
  extraerAtaques(asesinoJugador)
  iniciarMapa()
}

function elegirAsesino(asesinoJugador) {
  fetch(`http://localhost:8080/killerz/${jugadorId}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"},
       body: JSON.stringify({
        killerz: asesinoJugador
      })
  }) 

}

function extraerAtaques(asesinoJugador) {
  let ataques 
  for (let i = 0; i < killerz.length; i++) {
    if (asesinoJugador === killerz[i].nombre) {
        ataques = killerz[i].ataques
    }
  } mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
  ataques.forEach((ataque) => {
    ataquesDelJugador = `
    <button class="tipo botones-ataque" id=${ataque.id} >${ataque.nombre} </button>
    `
    contenedorBotones.innerHTML += ataquesDelJugador
  }) 
    botonFuego = document.getElementById("boton-fuego");
    botonHielo = document.getElementById("boton-hielo");
    botonRayo = document.getElementById("boton-rayo");
    botonSonido = document.getElementById("boton-sonido");
    botonAgua = document.getElementById("boton-agua");
    botonExplosion = document.getElementById("boton-explosion");
    botonSangre = document.getElementById("boton-sangre");
    botonTiempo = document.getElementById("boton-tiempo");
    botonPesadilla = document.getElementById("boton-pesadilla");
    botonesAtaques = document.querySelectorAll(".botones-ataque")

    botonFuego.addEventListener("click", ataqueFuego)
    botonHielo.addEventListener("click", ataqueHielo)
    botonRayo.addEventListener("click", ataqueRayo)
    botonSonido.addEventListener("click", ataqueSonido)
    botonAgua.addEventListener("click", ataqueAgua)
    botonExplosion.addEventListener("click", ataqueExplosion)
    botonSangre.addEventListener("click", ataqueSangre)
    botonTiempo.addEventListener("click", ataqueTiempo)
    botonPesadilla.addEventListener("click", ataquePesadilla)
}

function seleccionarAsesinoRival(enemigo) {
  let asesinoAleatorio = aleatorio(0, killerz.length -1)
  spanAsesinoRival.innerHTML = enemigo.nombre
  ataqueAsesinoRival = enemigo.ataques
}

function ataqueFuego(){
  ataqueJugador = "🔪"
  ataqueAleatorioRival()
}
function ataqueHielo(){
  ataqueJugador = "💉"
  ataqueAleatorioRival()
}
function ataqueRayo(){
  ataqueJugador = "🏹"
  ataqueAleatorioRival()
}
function ataqueSonido(){
  ataqueJugador = "🪒"
  ataqueAleatorioRival()  
}
function ataqueAgua(){
  ataqueJugador = "🪓"
  ataqueAleatorioRival()
}
function ataqueExplosion(){
  ataqueJugador = "💣"
  ataqueAleatorioRival() 
}
function ataqueSangre(){
  ataqueJugador = "📌"
  ataqueAleatorioRival() 
}
function ataqueTiempo(){
  ataqueJugador = "🦯"
  ataqueAleatorioRival()
}
function ataquePesadilla(){
  ataqueJugador = "🔨"
  ataqueAleatorioRival()
}

function ataqueAleatorioRival(){ 
 let ataqueAleatorio = aleatorio(0, ataqueAsesinoRival.length -1)
  if (ataqueAleatorio == 0){
      ataqueRival = "🔪"
  } else if(ataqueAleatorio == 1){
      ataqueRival = "💉"
  } else if(ataqueAleatorio == 2){
      ataqueRival= "🏹"
  } else if(ataqueAleatorio == 3){
      ataqueRival = "🪒"
  } else if(ataqueAleatorio == 4){
      ataqueRival = "🪓"
  } else if(ataqueAleatorio == 5){
      ataqueRival = "💣"
  } else if(ataqueAleatorio == 6){
      ataqueRival = "📌"
  } else if(ataqueAleatorio == 7){
      ataqueRival = "🦯"
  } else if(ataqueAleatorio == 8){
    ataqueRival = "🔨"
  } 
  combate()
}   

function combate() {                        
  if (vidasJugador > 0 && vidasEnemigo > 0){
    if (ataqueRival == ataqueJugador) {
      crearMensaje("empatado ➖")
    } else if ((ataqueJugador == "🔪" && ataqueRival == "💉") ||
              (ataqueJugador == "🔪" && ataqueRival == "🏹") || 
              (ataqueJugador == "🔪" && ataqueRival == "💣") ||
              (ataqueJugador == "🔪" && ataqueRival == "🔨") ||
              (ataqueJugador == "💉" && ataqueRival == "🪒") ||
              (ataqueJugador == "💉" && ataqueRival == "📌") ||
              (ataqueJugador == "💉" && ataqueRival == "💣") ||
              (ataqueJugador == "💉" && ataqueRival == "🔨") || 
              (ataqueJugador == "🏹" && ataqueRival == "💉") ||
              (ataqueJugador == "🏹" && ataqueRival == "🪓") ||
              (ataqueJugador == "🏹" && ataqueRival == "💣") || 
              (ataqueJugador == "🏹" && ataqueRival == "🦯") ||
              (ataqueJugador == "🪒" && ataqueRival == "🔪") ||
              (ataqueJugador == "🪒" && ataqueRival == "🏹") ||
              (ataqueJugador == "🪒" && ataqueRival == "🪓") ||
              (ataqueJugador == "🪒" && ataqueRival == "📌") ||
              (ataqueJugador == "🪓" && ataqueRival == "🔪") || 
              (ataqueJugador == "🪓" && ataqueRival == "📌") ||
              (ataqueJugador == "🪓" && ataqueRival == "🦯") ||
              (ataqueJugador == "🪓" && ataqueRival == "🔨") ||
              (ataqueJugador == "💣" && ataqueRival == "🏹") ||
              (ataqueJugador == "💣" && ataqueRival == "🪒") ||
              (ataqueJugador == "💣" && ataqueRival == "🪓") || 
              (ataqueJugador == "💣" && ataqueRival == "📌") || 
              (ataqueJugador == "📌" && ataqueRival == "🔪") ||
              (ataqueJugador == "📌" && ataqueRival == "🪓") ||
              (ataqueJugador == "📌" && ataqueRival == "🦯") ||
              (ataqueJugador == "📌" && ataqueRival == "🔨") ||
              (ataqueJugador == "🦯" && ataqueRival == "🔪") ||
              (ataqueJugador == "🦯" && ataqueRival == "💉") ||
              (ataqueJugador == "🦯" && ataqueRival == "🪒") ||
              (ataqueJugador == "🦯" && ataqueRival == "💣") ||
              (ataqueJugador == "🔨" && ataqueRival == "💉") ||
              (ataqueJugador == "🔨" && ataqueRival == "🏹") ||
              (ataqueJugador == "🔨" && ataqueRival == "🪒") ||
              (ataqueJugador == "🔨" && ataqueRival == "🦯")) {
      crearMensaje("ganado ✅")
      vidasEnemigo--
      spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
      crearMensaje("perdido ❌")
      vidasJugador--
      spanVidasJugador.innerHTML = vidasJugador
    
    } if (vidasEnemigo == 0){
      crearMensajeFinal("Mataste al asesino enemigo!")
    } else if (vidasJugador == 0){
      crearMensajeFinal("Has muerto...")
    }
  } 
}

function reiniciarJuego(){
   location.reload()
}   

function crearMensaje(resultadoCombate){
  let parrafo = document.createElement("p")
  parrafo.innerHTML = "Has atacado con   " + ataqueJugador + "   mientras que tu enemigo atacó con   " + ataqueRival + "   ===> Has " + resultadoCombate
  sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal){
  let parrafo = document.createElement("p")
  parrafo.innerHTML = resultadoFinal
  sectionMensajes.appendChild(parrafo)
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function pintarCanvas() {
  asesinoJugadorObjeto.x = asesinoJugadorObjeto.x + asesinoJugadorObjeto.velocidadX
  asesinoJugadorObjeto.y = asesinoJugadorObjeto.y + asesinoJugadorObjeto.velocidadY
  lienzo.clearRect(0, 0, mapa.width, mapa.height)
  lienzo.drawImage(mapaBackground,0,0,mapa.width,mapa.height)
  asesinoJugadorObjeto.pintarKillerz()

  enviarPosicion(asesinoJugadorObjeto.x, asesinoJugadorObjeto.y)

  ghostfaceEnemigo.pintarKillerz()
  jasonvoorheesEnemigo.pintarKillerz()
  chuckyEnemigo.pintarKillerz() 
  freddykruegerEnemigo.pintarKillerz()
  michaelmyersEnemigo.pintarKillerz()
  pennywiseEnemigo.pintarKillerz()
  jigsawEnemigo.pintarKillerz()
  leatherfaceEnemigo.pintarKillerz()
  thenunEnemigo.pintarKillerz()

  if (asesinoJugadorObjeto.velocidadX !==0 || asesinoJugadorObjeto.velocidadY !==0) {
    revisarColision(ghostfaceEnemigo)
    revisarColision(jasonvoorheesEnemigo)
    revisarColision(chuckyEnemigo)
    revisarColision(freddykruegerEnemigo)
    revisarColision(michaelmyersEnemigo)
    revisarColision(pennywiseEnemigo)
    revisarColision(jigsawEnemigo)
    revisarColision(leatherfaceEnemigo)
    revisarColision(thenunEnemigo)
  }
}

function enviarPosicion(x, y) {
  fetch(`http://localhost:8080/killerz/${jugadorId}/posicion`, {
    method: "post",
    headers: {
      "Content-Type": "application.json"
    },
    body: JSON.stringify({
      x: x,
      y: y
    })
  })
}

function moverDerecha() {
  asesinoJugadorObjeto.velocidadX = 5
  
}
function moverIzquierda() {
  asesinoJugadorObjeto.velocidadX = -5
  
}
function moverArriba() {
  asesinoJugadorObjeto.velocidadY = -5
  
}
function moverAbajo() {
  asesinoJugadorObjeto.velocidadY = 5
  
}
function detenerMovimiento() {
  asesinoJugadorObjeto.velocidadX = 0
  asesinoJugadorObjeto.velocidadY = 0

}

function presionDeTecla(event) {
  switch (event.key) {
    case "ArrowUp":
        moverArriba()
        break;
    case "ArrowLeft":
        moverIzquierda()
        break;
    case "ArrowDown":
        moverAbajo()
        break
    case "ArrowRight":
        moverDerecha()
        break
    default:
        break;
  }
}

function iniciarMapa() {
  asesinoJugadorObjeto = objetoAsesino(asesinoJugador)
  intervalo = setInterval(pintarCanvas, 20)
  window.addEventListener("keydown", presionDeTecla)
  window.addEventListener("keyup", detenerMovimiento)
}

function objetoAsesino() {
  for (let i = 0; i < killerz.length; i++) {
    if (asesinoJugador === killerz[i].nombre) {
        return killerz[i]
    } 
 }
}

function revisarColision(enemigo) {
  const arribaEnemigo = enemigo.y
  const abajoEnemigo = enemigo.y + enemigo.alto
  const derechaEnemigo = enemigo.x + enemigo.ancho 
  const izquierdaEnemigo = enemigo.x 

  const arribaAsesino = asesinoJugadorObjeto.y
  const abajoAsesino = asesinoJugadorObjeto.y + asesinoJugadorObjeto.alto
  const derechaAsesino = asesinoJugadorObjeto.x + asesinoJugadorObjeto.ancho 
  const izquierdaAsesino = asesinoJugadorObjeto.x

  if(abajoAsesino < arribaEnemigo ||
    arribaAsesino > abajoEnemigo ||
    derechaAsesino < izquierdaEnemigo ||
    izquierdaAsesino > derechaEnemigo) {
    return  
  }

  detenerMovimiento()
  clearInterval(intervalo)
  sectionSeleccionarAtaque.style.display = "flex"
  sectionReiniciar.style.display = "flex"
  sectionConfirmacionAsesino.style.display = "flex"
  sectionMensajes.style.display = "flex"
  sectionVerMapa.style.display = "none"
  seleccionarAsesinoRival(enemigo)
}



window.addEventListener("load", iniciarJuego)
























/*function secuenciaAtaque() {
  botonesAtaques.forEach((boton) => {
    boton.addEventListener("click", (e) => {
        if (e.target.textContent === "🔥 ") {
          ataqueJugador = "🔥"
          boton.style.background = "#112f58"
        } else if (e.target.textContent === "❄ ") {
          ataqueJugador = "❄"
          boton.style.background = "#112f58"
        } else if (e.target.textContent === "⚡ ") {
          ataqueJugador = "⚡" 
          boton.style.background = "#112f58"
        } else if (e.target.textContent === "🔊 ") {
          ataqueJugador = "🔊"
          boton.style.background = "#112f58"
        } else if (e.target.textContent === "💧 ") {
          ataqueJugador = "💧"
          boton.style.background = "#112f58"
        } else if (e.target.textContent === "💣 ") {
          ataqueJugador = "💣"
          boton.style.background = "#112f58"
        } else if (e.target.textContent === "📌 ") {
          ataqueJugador = "📌⚔
          boton.style.backgr⚔🔨nd = "#112f58"
        } else if (e.target.t🔨xtContent === "⏳ ") {
          ataqueJugador = "⏳"
          boton.style.background = "#112f58"
        } else if (e.target.textContent === "💤 ") {
          ataqueJugador = "💤"
          boton.style.background = "#112f58"
      } ataqueAleatorioRival() 
    }) 
  })
}*/