nome = str(input("Digite seu nome completo: "))
anoCorreto = False
while(anoCorreto == False):	
	print("Digite seu ano de nascimento: ")
	try:	
		nasc = int(input())
		idade = (2022-nasc)
		if ((nasc >= 1922) and (nasc < 2022)):
			anoCorreto = True
			print("PARABÉNS!", nome, "\nVc completou",idade, "ano(s) de idade.")			
	
		else:
			print("Revise o seu ano de nascimento.\nDados válidos apenas no intervalo entre 1922 e 2021.")
		
	except:
		print("A informação digitada é invalida.\nO ano precisa ser informado como um número INTEIRO.")
