const caixaPrincipal = document.querySelector (".caixa-principal");
const caixaPerguntas = document.querySelector (".caixa-perguntas");
const caixaAlternativas = document.querySelector (".caixa-alternativas");
const caixaResultado = document.querySelector (".caixa-resultado");
const caixaResultado = document.querySelector (".texto-resultado");

const perguntas = [
  {
      enulciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagense áudios hiper-realista. Qual o primeiro pensamento?",
      alternativas: [
         "Isso é assustador!", 
         "Isso é maravilhoso!"
      ] 
  },
  {
      enulciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre está tecnologia. No fim de uma aula ela pode que você escreva uma trabalho sobreo uso de IA em sala de aula. Qual atitude você toma?",
      alternativas: [
        "", 
        ""
      ]  
  }

]