algoritmo "alocacao"

var
// Seção de Declarações das variáveis
   fumante, animais: caractere
   totpessoas: inteiro

inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   escreva("O cliente é fumante? (digite apenas s ou n): ")
   leia(fumante)
   escreva("O cliente está acompanhado de algum animal de estimação? (digite apenas s ou n): ")
   leia(animais)
   escreva("Qual o total de pessoas? ")
   leia(totpessoas)

//processamento

   escreval("==========================")
   se (fumante = "s") ou (animais = "s") entao
      escreval("O cliente deve ser alocado na ÁREA EXTERNA.")
   senao
   se (totpessoas >= 5) entao
      escreval("Os clientes devem ser alocados no 1º ANDAR.")
   senao
      escreval("O(s) cliente(s) deve(m) ser alocado(s) no TÉRREO.")
   escreva("==========================")
   fimse
   fimse

fimalgoritmo
