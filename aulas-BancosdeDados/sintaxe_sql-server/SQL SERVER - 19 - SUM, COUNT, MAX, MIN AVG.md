### SQL Server [T-SQL (Transact-SQL)] - Funções Agregadas - MIN, MAX, AVG, SUM , COUNT

* MIN = Valor mínimo
* MAX = Valor máximo
* AVG = Média aritmética
* SUM = Total (Soma)
* COUNT = Contar quantidade de itens

##### Sintaxe
---

	SELECT COUNT (*) FROM nome_tabela 
	
	SELECT MAX(nome_coluna) FROM nome_tabela
	
	SELECT MIN(nome_coluna) FROM nome_tabela
	
	SELECT AVG(nome_coluna) FROM nome_tabela
	
	SELECT SUM(nome_coluna) FROM nome_tabela
	
			
---
Exemplos:

	SELECT COUNT (*) AS Total_Livros FROM tb_livro;

	SELECT COUNT (id_editora) AS Contagem FROM tb_livro; -- Caso algum campo permita valores nulos, essa contagem poderá ser diferente da efetuada com o *.

	SELECT MAX(preco_livro) AS Preço_Máximo FROM tb_livro;

	SELECT MIN(preco_livro) AS Preço_Mínimo FROM tb_livro;

	SELECT AVG(preco_livro) AS Média_Preço FROM tb_livro;

	SELECT SUM(preco_livro) AS Total_Custo FROM tb_livro;
		
---

[**Fonte**: Bóson Treinamentos](https://youtube.com/playlist?list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&si=iTJ-F9uZb8Eff3QA)