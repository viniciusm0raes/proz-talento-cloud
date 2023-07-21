algoritmo "alocacao"

var
// Seção de Declarações das variáveis
   fumante, animais: caractere
   totpessoas: inteiro

inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   Escreva("O cliente é fumante? (digite apenas s ou n): ")
   Leia(fumante)
   Escreva("O cliente está acompanhado de algum animal de estimação? (digite apenas s ou n): ")
   Leia(animais)
   Escreva("Qual o total de pessoas? ")
   Leia(totpessoas)

//Processamento

   EscrevaL("==========================")
   Se (fumante = "s") ou (animais = "s") entao
      EscrevaL("O cliente deve ser alocado na ÁREA EXTERNA.")
   SeNao
   Se (totpessoas >= 5) entao
      EscrevaL("Os clientes devem ser alocados no 1º ANDAR.")
   SeNao
      EscrevaL("O(s) cliente(s) deve(m) ser alocado(s) no TÉRREO.")
   Escreva("==========================")
   FimSe
   FimSe

fimalgoritmo
