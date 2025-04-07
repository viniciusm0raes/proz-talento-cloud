### SQL Server [T-SQL (Transact-SQL)] - FULL (OUTER) JOIN - Selecionar dados de várias tabelas

* FULL JOIN: Combinação de RIGHT JOIN com LEFT JOIN. Traz os dados de interseção entre as tabelas, além daqueles que não possuam correspondência entre as mesmas. Em outras palavras, traz TODOS os dados das tabelas citadas.

--- 
#### Sintaxe FULL JOIN

	SELECT nome_coluna(s)
	FROM nome_tabela_1
	FULL JOIN tabela_2
	ON tabela_1.nome_coluna = tabela_2.nome_coluna;	
			
---
Exemplo 1:

	SELECT Lvr.nome_livro, Lvr.id_autor, Atr.nome_autor
	FROM tb_livro AS Lvr
	FULL JOIN tb_autores AS Atr
	ON Lvr.id_autor = Atr.id_autor;
		
---
#### FULL JOIN excluindo correspondências

#### Sintaxe

	SELECT colunas
	FROM tabela_1
	FULL JOIN tabela_2
	ON tabela_1.coluna = tabela_2.coluna
	WHERE tabela_1.coluna IS NULL
	OR tabela_2.coluna IS NULL;
		
---
Exemplo 2:

	SELECT Lvr.nome_livro, Lvr.id_autor, Atr.nome_autor
	FROM tb_livro AS Lvr
	FULL JOIN tb_autores AS Atr
	ON Lvr.id_autor = Atr.id_autor
	WHERE Lvr.id_autor IS NULL
	OR Atr.id_autor IS NULL;
	
---

[**Fonte**: Bóson Treinamentos](https://youtube.com/playlist?list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&si=iTJ-F9uZb8Eff3QA)