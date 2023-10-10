nome = str(input("Digite seu nome completo: "))
while(True):	
	print("Digite seu ano de nascimento: ")
	try:	
		nasc = int(input())
		idade = (2022-nasc)
		if ((nasc >= 1922) and (nasc < 2022)):	
			print("-"*35)		
			print(nome + ",","PARABÉNS!", "\nVocê completou",idade, "ano(s) de idade.")			
			print("-"*35)		
			break
	
		else:
			print("-"*53)		
			print("Revise o seu ano de nascimento.\nDados válidos apenas no intervalo entre 1922 e 2021.")
			print("-"*53)		
		
	except:
		print("-"*53)		
		print("A informação digitada é invalida.\nO ano precisa ser informado como um número INTEIRO.")
		print("-"*53)		
