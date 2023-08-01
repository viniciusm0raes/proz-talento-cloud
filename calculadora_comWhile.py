print("-----------------------------------")
num1 = eval(input("Digite o primeiro número : "))
num2 = eval(input("Digite o segundo número : "))
print("-----------------------------------")
op = int(input("Informe a operação:\n 1 para Adição\n 2 para Subtração\n 3 para Multiplicação\n 4 para Divisão:\n 0 Sair:\n "))
print("-----------------------------------")

def calculo(num1,num2,op):
    if op == 1:
        print("A soma de ", num1, "e", num2, " é: ", num1 + num2)
    elif op == 2:
        print(num1, "menos", num2, "resulta em: ", num1 - num2)
    elif op == 3:
        print(num1, "multiplicado por", num2, "é igual a:", num1 * num2)
    elif op == 4:
        print(num1, "dividido por", num2, "é igual a:", num1 / num2)

calculo(num1, num2, op)

while ((op >=1) and (op <=4)):
    print("-----------------------------------")
    num1 = eval(input("Digite o primeiro número : "))
    num2 = eval(input("Digite o segundo número : "))
    print("-----------------------------------")
    op = int(input("Informe a operação:\n 1 para Adição\n 2 para Subtração\n 3 para Multiplicação\n 4 para Divisão:\n 0 Sair:\n "))
    print("-----------------------------------")
    calculo(num1, num2, op)

    if (op == 0):
        print("Você saiu da calculadora.")
        break



while ((op <0 ) or (op >4)):
    print("Operação inválida")
    print("-----------------------------------")
    num1 = eval(input("Digite o primeiro número : "))
    num2 = eval(input("Digite o segundo número : "))
    print("-----------------------------------")
    op = int(input("Informe a operação:\n 1 para Adição\n 2 para Subtração\n 3 para Multiplicação\n 4 para Divisão:\n 0 Sair:\n "))
    print("-----------------------------------")
    calculo(num1, num2, op)
    
    if (op == 0):
        print("Você saiu da calculadora.")
    break  
      