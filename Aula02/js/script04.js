/* 
Esta estrutura de codigo é para utilização das estruturas de repetição tais como:
while;
for;
for in*; 
as estruturas de repetição possuem 4 partes distintas:
1 inicio da variavel
2 condição ára repetição
3 corpo
4 incrementação ou decrementação

*/
function contagem() {
  var x = 0;
  while (x <= 10) {
    console.log("contei " + x);
    x = x + 1;
  }
}
