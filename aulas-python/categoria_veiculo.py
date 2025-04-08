qtd_rodas = eval(input("Quantas rodas possui o veículo? "))
peso = eval(input("Qual o peso do veículo em Kg? "))
passageiros = eval(input("Quantos passageiros vão no veículo? "))

if ((qtd_rodas == 2) or (qtd_rodas == 3)):
    print("Categoria A")
elif (((qtd_rodas == 4) and (peso <= 3500)) and (passageiros <= 8)):
    print("Categoria B")
elif (((qtd_rodas == 4) and (peso > 3500 <= 6000)) and (passageiros > 8)):
    print("Categoria C")
elif (((qtd_rodas >= 4) and (peso <= 6000)) or (passageiros >= 8)):
    print("Categoria D")
elif ((qtd_rodas >= 4) and (peso > 6000)):
    print("Categoria E")
else:
    print("A descrição do veículo não é válida.")
