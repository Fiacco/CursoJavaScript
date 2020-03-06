function contagem() {
  var x = 1;
  while (x <= 10) {
    document.getElementById("caixa").innerHTML += "contei:" + x + "<br>";
    x++;
  }
}

function pares() {
  var inicial = prompt("digite um numero ");
  var final = prompt("digite outro numero ");

  while (inicial <= final) {
    // Para saber quais são os numeros pares , usaremos a divisão com modulo e pegamos o resto da divisão.
    //Se for igual a (0) então o numero é par e portanto sera exibido em tela.
    if (inicial % 2 == 0) {
      document.getElementById("caixa").innerHTML +=
        "este numero é par" + inicial + "<br>";
    }
    inicial++;
  }
}

function parcelamento() {
  var produto = document.getElementById("produto").value;
  var preco = document.getElementById("preco").value;
  var taxa = document.getElementById("taxa").value;
  var parcelas = document.getElementById("parcelas").value;

  var resultado = preco * (1 + parseFloat(taxa));
  var valorParcela = resultado / parcelas;

  document.getElementById("resultado").innerHTML +=
    " O produto: " +
    produto +
    " <br>tem valor a vista de " +
    preco +
    "<br> valor a prazo: " +
    resultado +
    "<br> divido em : " +
    parcelas +
    " x <br> cada parcela sai a: " +
    valorParcela;
}
function parcelas() {
  var x = 1;
  while (x <= 24) {
    document.getElementById("parcelas").innerHTML +=
      "<option value=" + x + ">  " + x + "</option>";
    x++;
  }
}
