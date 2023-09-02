### Exemplo de site com **JavaScript**

A site abaixo apresenta uma calculadora que utiliza HTML e CSS3 para estruturação / estilização e chama um arquivo JavaScript para realização da interação e cálculos:
_____________
[Calculadora em JavaScript](https://gicaalves.github.io/pw-calculadora/src/)

_____________

O script é chamado pela tag <script> que, neste caso, chama o arquivo script.js para os cálculos e a interação com o usuário.

![Tela do site:](calc.png)
_____________

Abaixo o código contido no arquivo script.js citado:
~~~javascript
 function adicionae(tecla) {
   visor.value = visor.value + tecla;
 }
 // quando o "c" for pressionado limpa o visor
 function limpezatotal() {
   visor.value = "";
   alert("Apagando... ✨");
 }
 // quando o "=" for pressionado calcula
 function calculari() {
   visor.value = eval(visor.value);
 }
 ~~~
 _____________
 