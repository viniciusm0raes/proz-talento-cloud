print("Bem vindo à Calculadora.")
num1 = eval(input("Informe um número: "))
num2 = eval(input("Informe outro número: "))
op = input("Informe a operação:\n 1 para Adição\n 2 para Subtração\n 3 para multiplicação\n 4 para divisão:\n ")

if op == '1':
    print("A soma de ", num1, "e", num2, " é: ", num1 + num2)
elif op == '2':
    print(num2, "subtraído de", num1, "resulta em: ", num1 - num2)
elif op == '3':
    print(num1, "multiplicado por", num2, "é igual a:", num1 * num2)
elif op == '4':
    print(num1, "dividido por", num2, "é igual a:", num1 / num2)
else:
    print("Operação inválida")