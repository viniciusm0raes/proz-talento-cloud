def calcular(num1,num2,op):    
    if op == 1:
        return (num1 + num2)
    elif op == 2:
        return  (num1 - num2)
    elif op == 3:
        return  (num1 * num2)
    elif op == 4:
        return  (num1 / num2)
    return 0

while(True):    
    print("-----------------------------------")
    num1 = eval(input("Digite o primeiro número: "))
    num2 = eval(input("Digite o segundo número: "))     
    print("-----------------------------------")
    op = int(input("Informe a operação:\n 1 - para Adição\n 2 - para Subtração\n 3 - para Multiplicação\n 4 - para Divisão\n 0 - Sair\n "))
    print("-----------------------------------")

    if op == 1:
        resultado = f"{calcular(num1,num2,op):_.2f}".format(calcular(num1,num2,op)).replace(".",",").replace("_",".")
        print("A soma de", num1, "e", num2, "resulta em:", resultado)
    elif op == 2:
        resultado = f"{calcular(num1,num2,op):_.2f}".format(calcular(num1,num2,op)).replace(".",",").replace("_",".")
        print(num1, "menos", num2, "resulta em:", resultado)
    elif op == 3:
        resultado = f"{calcular(num1,num2,op):_.2f}".format(calcular(num1,num2,op)).replace(".",",").replace("_",".")
        print("A multiplicação de", num1, "por", num2, "resulta em:", resultado)
    elif op == 4:
        resultado = f"{calcular(num1,num2,op):_.2f}".format(calcular(num1,num2,op)).replace(".",",").replace("_",".")
        print("A divisão de", num1, "por", num2, "resulta em:", resultado)
    elif (op == 0):
        print("Você saiu da calculadora.")
        break
    
    else:
        print("Operação inválida")
