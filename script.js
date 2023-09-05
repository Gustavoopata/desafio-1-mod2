// 1

let dia = "noite"

if(dia == "dia"){
    console.log("claro")
} else {
console.log("de noite")
}

// 2
let contador = 0

while(contador < 20){
    console.log(contador += 2)
}

// 3
function exibirMensagem() {
    console.log("Desafio ta dicil em");
  }
  
  exibirMensagem();

//4
function exibirNome(nome) {
    console.log(nome)
}

exibirNome("Gustavo Opata")

// 5

function exibirInformacoes(nome, idade, estiloMusical) {
    console.log("Nome: " + nome);
    console.log("Idade: " + idade);
    console.log("Estilo Musical : " + estiloMusical);
  }
  

  exibirInformacoes("Gustavo Opata", 17, "Funk");

//   6

function exibirFilmeEMusica(filme, musica) {
    console.log("Filme: " + filme);
    console.log("Música: " + musica);
  }
  
  exibirFilmeEMusica("Up!", "Fernando de Noronha");

//   7

function triplo(primeiroValor){
    console.log(primeiroValor * 3 )
}
triplo(7)

// 8

function verificarVerdadeiroOuFalso(variavel) {
    if (variavel === true) {
      console.log("A variável é verdadeira.");
    } else if (variavel === false) {
      console.log("A variável é falsa .");
    } else {
      console.log("A variável não é true nem false.");
    }
  }
  verificarVerdadeiroOuFalso(true);
  
// 9-13

var suplementos = ["creatina", "cafeina", "whey protein", "pré treino", "bca"]

suplementos.unshift("Durateston")

suplementos.pop()

suplementos.push("colageno", "hipercalorico")

suplementos.shift()

console.log(suplementos)
  
//   14

let numeros = [7, 5, 6, 3, 8, 9, 2, 1, 4];


numeros.sort(function(a, b) {
  return a - b;
});


console.log(numeros);

// 15-18

var meuPerfil = {

    nome: "Gustavo Opata",
    idade: 17 ,
    cidade: "São Paulo"
}


meuPerfil.hobby = "Academia"

delete meuPerfil.idade;

for (var propriedade in meuPerfil) {
    console.log(propriedade + ": " + meuPerfil[propriedade])
  }

console.log(meuPerfil)

// 19

var cadastro = [
    {
      nome: "João Vitor",
      idade: 30,
      telefone: "(11)96786-7890",
      amigos: ["Maria", "Pedro", "Ana", "Carlos"]
    },
    {
      nome: "Maria Eduarda",
      idade: 28,
      telefone: "(13)97654-3210",
      amigos: ["João", "Pedro", "Lucas", "Lúcia"]
    },
    {
      nome: "Pedro Henrique",
      idade: 32,
      telefone: "(21)95123-4567",
      amigos: ["João", "Maria", "Lucas", "Rafael"]
    },
    {
      nome: "Nathan Cavalcante",
      idade: 25,
      telefone: "(33)93789-0123",
      amigos: ["Lucas", "Carla", "Rafael", "Paula"]
    },
    {
      nome: "Lucas Lima",
      idade: 28,
      telefone: "(77)97888-9999",
      amigos: ["Pedro", "Ana", "Rafael", "Marta"]
    }
  ];
  

  cadastro.forEach(function(pessoa) {
  
    console.log(pessoa.nome + " tem o amigo " + pessoa.amigos[0]);
  });
  
