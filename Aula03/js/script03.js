function cor() {
  /* Vamos trabalhar com as cores rgb e com uma variação de numeros para formar a co de 0 a 9. os numeros virão de forma aleatoria
    /* portanto que se faz necessario o uso do comando math.random ();
    /* iremos multiplicar o valor obtido por random por 8 e arrendodar suas casas decimais .
    */

  //   document.bgColor = "#" + r + "" + r + "" + g + "" + g + "" + b + "" + b;

  var tabela = "<table>";
  for (var linha = 1; linha <= 20; linha++) {
    tabela += "<tr>";
    for (var coluna = 1; coluna <= 20; coluna++) {
      var r = Math.round(Math.random() * 8);
      var g = Math.round(Math.random() * 8);
      var b = Math.round(Math.random() * 8);
      console.log("#" + r + "" + r + "" + g + "" + g + "" + b + "" + b);
      tabela +=
        "<td style='background: #" +
        r +
        "" +
        r +
        "" +
        g +
        "" +
        g +
        "" +
        b +
        "" +
        b +
        "'>cor</td>";
    }
    tabela += "</tr>";
  }
  tabela += "</table>";
  document.getElementById("saida").innerHTML = tabela;
}
