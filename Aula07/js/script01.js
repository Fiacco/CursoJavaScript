function abrir() {
  /*essa função abre um menu lateral da esquerda para a direita , esse menu foir formatado em css e inicialmente ele não é apresentado
    na tela quando o usuario clica sobre o botão de menu é chamada essa função para abrir o menu, usamo o comando style.left para manipular
    a posição colocando em 0 .. vw(viewport width =largura do depoisitivo*/
  document.getElementById("menu").style.left = "0vw";
}
function Fechar() {
  /* para fechar o menu foi aplicado um estilo na posição colocando-a em -10vw, assim nos estamos escondendo
    o menu ao lado esquerdo do navegador*/
  document.getElementById("menu").style.left = "-10vw";
}
function abrirImagem(info) {
  /* criamos uma função para pegar algumas informações de imagem clicada pelo usuario neste caso estamo pegando o endereço da imagem(src)*/
  console.log(info.src);
  /*
  Criar um elemento de html de forma dinâmica para exibir uma imagem
  */
  //   document.bgColor = "black";

  /* criando um elemento de html de forma dinâmica para fazer um efeito de subreposição com uma cor escura para dar a ideia de uma sombra.
  Usamo o comando createElement para criar uma div e isso poderia ser feito com qualque elemento de html*/
  var fundo = document.createElement("div");
  fundo.setAttribute("id", "fundo");
  /* aqui foi aplicado a div com id com o nome fundo. usamos o comando setAttribute para essa operação*/
  fundo.style.backgroundColor = "rgba(0,0,0,0.6)";
  fundo.style.width = "100vw";
  fundo.style.height = "100vh";
  fundo.style.position = "absolute";
  fundo.style.left = "0px";
  fundo.style.top = "0px";
  fundo.style.zIndex = "9999";
  /* para exibir a imagem em um tamanho maior foi necessario criar um novo elemento com o comando creatElement para uma nova div*/

  var caixa = document.createElement("div");
  /* para essa div aplicamos o atributo id com o nome de exibir*/
  caixa.setAttribute("id", "exibir");

  /* o comando append (adiciona) e por tanto neste exemplo estamos adicionando a caixa dentro do fundo.
  Os elementos caixa de fundo foram nomeados com os repectivos ids fundo exibir*/
  fundo.append(caixa);

  /* para exibir a imagem em um tamanho maior , criamos um elemento de imagem (img) com o comando createElement para essa imagem , sera pasasdo
  o atributo src , que indica a origem da foto , ou seja, o caminho da que de ser aberta. o caminho da foto é obtido pelo paramêtro da função
  abrirImagem que tem o nome de info.
  Pegamos então a informação da imagem clicada e passamos como parametro para o elemnto imagem que foi criado logo abaixo*/

  var imagem = document.createElement("img");
  imagem.src = info.src;
  imagem.setAttribute("id", "exibirImg");
  caixa.append(imagem);
  document.getElementById("conteudo").append(fundo);
  var d = document.getElementById("exibir");
  var i = document.getElementById("exibirImg");
  d.style.width = "40%";
  d.style.position = "absolute";
  d.style.zIndex = 10000;
  d.style.left = "30vw";
  d.style.top = "0vh";
  d.style.boxShadow = "0px 0px 20px black";
  d.style.transition = "ease 0.5s";
  i.style.width = "100%";
  i.style.cursor = "pointer";
  /* foi aplicado a imagem um atributo chamado onclick, que na verdade é um evento de javascript para que o meu usuario clique na imagem
  e faça alguma operação. veja que neste exemplo o valor do atributo é uma função -> fecharImagem(). o que quer dizer que quando nosso usuario
  clica na imagem criada sera chamada a função fecharImagem()*/
  i.setAttribute("onclick", "fecharImagem()");
}
function fecharImagem() {
  document.getElementById("fundo").remove();
  //   document.bgColor = "white";
}
