| | | | |
|-|-|-|-|
|Nº|Variáveis|Sentença|Resultado|
|1|nota = 10|nota <= 10|Verdadeiro|
|2|nota = 6 faltas = 4|(nota<=6) and (faltas <=3)|Falso|
|3|convidados = 3 fumante = False|(convidados > 4) or (fumante == True)|Falso|
|4|dia = "qua"|(dia == "sab") or (dia == "dom")|Falso|
|5|feriado = True|not(feriado == False)|Verdadeiro|
|6|dia = "ter" feriado = False|(dia =="seg") or !(feriado == False)|Falso --- Obs.: Em Python, rodando o código como descrito, resulta em um erro de sintaxe, mas compreendendo a "!" como um NOT, o resultado é Falso.|
