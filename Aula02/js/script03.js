/*
Foi criada a função altera cor para que seja chamada pelo botão de formulario no html . Assim o usuario podera interagir com os elementos em tela
*/
function alteraCor() {
  /*
Para saber em qual botão de radio o usuario clicou, estamos usando o comando document.forms [0].cor [x].checked , onde: 
document trata dos elementos que estão no body para pegar o formulario usamos o comando forms[0], ou seja o primeiro
formulario de uma pgina html sempre tera o seu indice igual a zero (0), portanto estamos pegando o primeiro formulario
E para pegar os elementos dentro do formulario tambem usamos os seus indices, assm temos cor que é um botão de radio e seguido
de seu indice , EX: cpr [0] assim pegamos o primeiro elemento do formulario, depois usamos o comando cheked para saber se a caixa
foi selecionada.
*/

  if (document.forms[0].cor[0].checked) document.bgColor = "red";
  else if (document.forms[0].cor[1].checked) document.bgColor = "green";
  else if (document.forms[0].cor[2].checked) document.bgColor = "blue";
  else if (document.forms[0].cor[3].checked) document.bgColor = "yellow";
  else if (document.forms[0].cor[4].checked) document.bgColor = "black";
}

function abreFoto(x) {
  // if (x == 1)
  //  document.getElementById("area").innerHTML = "<img src=img/foto01.jpg>";
  // else if (x == 2)
  //  document.getElementById("area").innerHTML = "<img src=img/foto02.jpg>";
  //else if (x == 3)
  //   document.getElementById("area").innerHTML = "<img src=img/foto03.jpg>";
  // else if (x == 4)
  //  document.getElementById("area").innerHTML = "<img src=img/foto04.jpg>";

  switch (x) {
    case 1:
      document.getElementById("area").innerHTML = "<img src=img/foto01.jpg>";
      break;
    case 2:
      document.getElementById("area").innerHTML = "<img src=img/foto02.jpg>";
      break;
    case 3:
      document.getElementById("area").innerHTML = "<img src=img/foto03.jpg>";
      break;
    case 4:
      document.getElementById("area").innerHTML = "<img src=img/foto04.jpg>";
      break;
    case 5:
      document.getElementById("area").innerHTML = "<img src=img/foto05.jpg>";
      break;
  }
}
