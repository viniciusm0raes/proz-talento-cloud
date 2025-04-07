### SQL Server [T-SQL (Transact-SQL)] - JOINS e INNER JOIN - Selecionar dados de duas ou mais tabelas

* A palavra-chave JOIN é usada para obter dados provenientes de duas ou mais tabelas, baseado em um relacionamento entre colunas nestas tabelas.

#### Tipos de JOINS

* INNER JOIN (interseção de dados): Retorna linhas quando houver pelo menos uma correspondência em AMBAS as tabelas.

* OUTER JOIN: Retorna linhas mesmo quando NÃO houver pelo menos uma correspondência em uma das tabelas (ou ambas). O OUTER JOIN dividi-se em LEFT JOIN, RIGHT JOIN e FULL JOIN.

--- 
##### Sintaxe INNER JOIN

	SELECT nome_coluna(s)
	FROM nome_tabela_1
	INNER JOIN tabela_2
	ON tabela1.nome_coluna = tabela_2.nome_coluna;	
			
---
Exemplo 1:

	SELECT * FROM tb_livro
	INNER JOIN tb_autores
	ON tb_livro.id_autor = tb_autores.id_autor;
		
---
Exemplo 2:

	SELECT tb_livro.nome_livro, tb_livro.isbn,
	tb_autores.nome_autor
	FROM tb_livro
	INNER JOIN tb_autores
	ON tb_livro.id_autor = tb_autores.id_autor;
		
---
Exemplo 3: -- Usando Aliases

	SELECT L.nome_livro AS Livro, E.nome_editora AS Editora
	FROM tb_livro AS L
	INNER JOIN tb_editoras AS E
	ON L.id_editora = E.id_editora;
		
---

[**Fonte**: Bóson Treinamentos](https://youtube.com/playlist?list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&si=iTJ-F9uZb8Eff3QA)