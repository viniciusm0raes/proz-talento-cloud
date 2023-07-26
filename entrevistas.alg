Algoritmo "imprimir_entrevistadas"
// Disciplina   : [Algoritmo]
// Professor   : Jefferson Vieira
// Descrição   : Imprime número de pessoas entrevistadas
// Autor(a)    : Vinícius B. de Moraes
// Data atual  : 25/07/2023

Var

quant, contador: inteiro

Inicio

Escreva("Quantas pessoas entrevistadas no dia? ")
Leia(quant)

contador <- 1

Enquanto (contador <= quant) Faca
   Escreval("Vc entrevistou a pessoa de número:", contador)
   contador <- contador + 1
Fimenquanto
Escreval("---------------------")
Escreval("Suas entrevistas foram listadas")
Fimalgoritmo
