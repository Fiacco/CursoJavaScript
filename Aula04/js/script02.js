function array1() {
  var cidades = ["São Paulo", "Leme", "Campinas", "Salvador"];
  console.log(cidades);
  for (var i = 0; i <= 3; i++) {
    console.log(cidades[i] + "=> Cidade");
  }
}
function array2() {
  var cursos = [
    [
      "Admnistração Geral",
      "Admnistração Financeira",
      "Assistente Administrativo"
    ],
    ["Beleza e Estética", "Depilação", "Massagem com óleos"],
    ["Computação", "Autocard", "CorelDraw"]
  ];
  console.log(cursos);

  var exibir = "";
  for (var i = 0; i <= 2; i++) {
    exibir += "<div>";
    for (var j = 0; j <= 2; j++) {
      exibir += "<p>" + cursos[i][j] + "</p>";
    }
    exibir += "</div>";
  }
  document.getElementById("saida").innerHTML = exibir;
}
