### SQL Server [T-SQL (Transact-SQL)] - BETWEEN - Seleção de Intervalos em Registros

##### Sintaxe
---

	SELECT nome_coluna(s) FROM nome_tabela
	WHERE nome_coluna BETWEEN valor1 AND valor2;
	
			
---
Exemplo 1:

	SELECT * FROM tb_livro
	WHERE data_pub BETWEEN '20080517' AND '20100517';
		
---
Exemplo 2:

SELECT nome_livro AS Livro, preco_livro AS Preco
FROM tb_livro
WHERE preco_livro BETWEEN 40.00 AND 60.00;
		
---

[**Fonte**: Bóson Treinamentos](https://youtube.com/playlist?list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&si=iTJ-F9uZb8Eff3QA)