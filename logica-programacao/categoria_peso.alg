Algoritmo "categoria_peso"

// Disciplina   : [Algoritmo]
// Professor   : Jefferson Vieira
// Descrição   : Agrupar lutadores(as) em função do peso
// Autor(a)    : Vinícius B. de Moraes
// Data atual  : 25/07/2023

//Recebemos uma lista de lutadores com duas colunas,
//uma com o nome e a outra com o peso.
//Nosso algoritmo vai ler cada fileira e escrever
//o nome do lutador em uma de três listas:
//Peso Pena, Peso Médio, Peso Pesado.
//Nesse campeonato, os lutadores de peso pesado pesam mais de 73kg.
//Já os lutadores de peso médio podem pesar no máximo 73kg.
//Finalmente, os lutadores de peso pena podem pesar até 57kg.

Var
nome: caractere
peso: real

Inicio
Escreva ("Qual o nome do(a) lutador(a)?")
Leia(nome)
escreva ("Qual o seu peso?")
Leia(peso)

Se(peso < 57) Entao
  Escreva(nome, " se enquadra na categoria Peso Pena")
Senao
Se(peso >= 57) e (peso <= 73) Entao
  Escreva(nome, " se enquadra na categoria Peso Médio")
Senao
  Escreva(nome, " se enquadra na categoria Peso Pesado")
Fimse
Fimse
Fimalgoritmo
