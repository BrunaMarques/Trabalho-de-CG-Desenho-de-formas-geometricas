class forma {
  constructor(nome, id, pontos) {
    this.nome = nome;
    this.id = id;
    this.pontos = pontos;
    this.select = false;
  }
}
var desenhando = false;
var listaDesenho = [];
var cord = [];
var x = 0;
var conteudo = [];
var cordTranf = [];
// conteudo.push(["forma", "cordenadas"]);
var canvas = document.getElementById("myCanvas");
canvas.width = 750;
canvas.height = 490;
canvas.style.width = 375;
canvas.style.height = 245;
var context = canvas.getContext("2d"); //utilizado para recuperar o contexto de desenho, presente em todos os canvas
var i = 0;
var id = 0;
tamLista = 0;
function posicaoClique(evento) {
  console.log(tamLista);
  if (desenhando == true) {
    if (i < n) {
      var posX = evento.clientX - canvas.offsetLeft; //  saber a distância do canvas em relação ao topo e à esquerda para que a posição seja relativa ao canvas e não à janela do navegação
      var posY = evento.clientY - canvas.offsetTop;
      console.clear();
      console.log("Posição do clique: ", posX + "," + posY);
      context.fillRect(posX, posY, 5, 5);
      cord.push(posX);
      cord.push(posY);
      cord.forEach(function(item, indice, array) {
        console.log(item, indice);
      });
      i++;
    }
    if (i == n) {
      switch (op) {
        case "reta":
          console.log("CASE1");

          listaDesenho.push(new forma("reta", id++, cord));
          conteudo.push(["reta", cord[0], cord[1], cord[2], cord[3]]);
          criarTabela(conteudo);
          console.log(conteudo);

          break;
        case "circulo":
          console.log("CASE2");

          listaDesenho.push(new forma("circulo", id++, cord));
          conteudo.push(["circulo", cord[0], cord[1], cord[2], cord[3]]);
          criarTabela(conteudo);

          break;
        case "retangulo":
          console.log("CASE3");
          listaDesenho.push(new forma("retangulo", id++, cord));
          conteudo.push(["retangulo", cord[0], cord[1], cord[2], cord[3]]);
          criarTabela(conteudo);

          break;
        case "triangulo":
          console.log("CASE4");
          listaDesenho.push(new forma("triangulo", id++, cord));
          conteudo.push([
            "triangulo",
            cord[0],
            cord[1],
            cord[2],
            cord[3],
            cord[4],
            cord[5]
          ]);
          criarTabela(conteudo);

          break;
        case "translacao":
          cordTranf = cord;
          console.log("CORDENADA TRANLACAO: ", cordTranf);
          Ftranslacao();
          break;
      }
      console.log(x);
      x = x + 1;
      context.clearRect(0, 0, 800, 550);
      desenhaLista();
      desenhando = false;
    }
  }
}

var canvas = document.getElementById("myCanvas");
canvas.addEventListener("click", posicaoClique, true); //pegando o elemento canvas
// context.clearRect(0, 0, 800, 550);

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

canvas.addEventListener(
  "mousemove",
  function(evt) {
    var mousePos = getMousePos(canvas, evt);
    document.getElementById("xycoordinates").innerHTML =
      "Coordenadas: x(" + mousePos.x + ")" + " , y(" + mousePos.y + ")";
  },
  false
);
