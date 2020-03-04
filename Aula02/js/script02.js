var cor = prompt(
  "digite uma das cores para o plano fundo : preto , vermelho , verde , azul , amarelo "
);

//cor = cor.toUpperCase(); // converte todas as letras para maiúscula
cor = cor.toLowerCase(); // converte todas as letras para minuscula
console.log(cor);

//if (cor == "preto") document.bgColor = "black";
//if (cor == "vermelho") document.bgColor = "red";
//if (cor == "verde") document.bgColor = " green";
//if (cor == "azul") document.bgColor = " blue ";
//if (cor == "amarelo ") document.bgColorColor = "yellow";

//if (cor == "preto") document.bgColor = "black";
//else if (cor == "vermelho") document.bgColor = "red";
//else if (cor == "verde") document.bgColor = " green";
//else if (cor == "azul") document.bgColor = " blue ";
//else if (cor == "amarelo ") document.bgColorColor = "yellow";
//else document.bgColor = "silver";

//Quando temos muitos teste a se fazer utilizamos a estrutura switch ao invés do if

switch (cor) {
  case "vermelho":
    document.bgColor = "#f44336";
    break;
  case "roxo":
    document.bgColor = "#9c27b0";
    break;
  case "preto":
    documento.bgColor = "#000000";
    break;
  case "verde":
    documento.bgColor = "#00ff00";
    break;
  case "azul":
    document.bgColor = "#0000ff";
    break;
  case "amarelo":
    document.bgColor = "#ffff00";
    break;
  case "laranja":
    document.bgColor = "#ff9800";
    break;
  default:
    document.bgColor = "#eeeeee";
    break;
}
