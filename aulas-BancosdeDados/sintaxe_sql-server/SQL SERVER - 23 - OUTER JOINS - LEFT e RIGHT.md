#### SQL Server [T-SQL (Transact-SQL)] - OUTER JOINS - LEFT e RIGHT - Selecionar dados de várias tabelas

* OUTER JOINS: Utilizados quando se deseja retorno de registros, mesmo quando NÃO haja correspondência exata entre as tabelas selecionadas.
* LEFT JOIN: Retorna todas as linhas da tabela à esquerda, mesmo se NÃO houver nenhuma correspondência na tabela à direita. É a interseção de dados, somada com todos os dados da tabela à esquerda que NÃO estão relacionados.
* RIGHT JOIN: Retorna todas as linhas da tabela à direita, mesmo se NÃO houver nenhuma correspondência na tabela à esquerda. É a interseção de dados, somada com todos os dados da tabela à direita que NÃO estão relacionados.
* FULL JOIN: Retorna linhas QUANDO HOUVER UMA correspondência em qualquer uma das tabelas. É uma combinação de LEFT e RIGHT JOINS.

--- 
#### Sintaxe LEFT JOIN -- A ideia de esquerda e direita citadas refere-se a primeira tabela citada (esquerda), segunda tabela citada (direita)

	SELECT nome_coluna
	FROM nome_tabela_esquerda
	LEFT JOIN tabela_direita
	ON tabela_esquerda.nome_coluna = tabela_direita.nome_coluna;	
			
---
#### Sintaxe LEFT JOIN -- A ideia de esquerda e direita citadas refere-se a primeira tabela citada (esquerda), segunda tabela citada (direita)

	SELECT nome_coluna
	FROM nome_tabela_esquerda
	LEFT JOIN tabela_direita
	ON tabela_esquerda.nome_coluna = tabela_direita.nome_coluna;	
			
---
Exemplo 1:

	SELECT * FROM tb_livro
	LEFT JOIN tb_autores
	ON tb_livro.id_autor = tb_autores.id_autor;
		
---
#### LEFT JOIN excluindo correspondências

#### Sintaxe

	SELECT coluna
	FROM tabela_esquerda
	LEFT JOIN tabela_direita
	ON tabela_esquerda.coluna = tabela_direita.coluna
	WHERE tabela_direita.coluna IS NULL;
		
---
Exemplo 2:

	SELECT *
	FROM tb_livro
	LEFT JOIN tb_autores
	ON tb_livro.id_autor = tb_autores.id_autor
	WHERE tb_livro.id_autor IS NULL;
	
---
#### Sintaxe RIGHT JOIN

	SELECT nome_coluna
	FROM nome_tabela_esquerda
	RIGHT JOIN tabela_direita
	ON tabela_esquerda.nome_coluna = tabela_direita.nome_coluna;	
			
---
Exemplo 3:

	SELECT * 
	FROM tb_livro AS Lvr
	RIGHT JOIN tb_editoras AS Edt
	ON Lvr.id_editora = Edt.id_autor;
		
---
#### RIGHT JOIN excluindo correspondências

#### Sintaxe

	SELECT coluna
	FROM tabela_esquerda
	RIGHT JOIN tabela_direita
	ON tabela_esquerda.coluna = tabela_direita.coluna
	WHERE tabela_esquerda.coluna IS NULL;
		
---
Exemplo 4:

	SELECT *
	FROM tb_livro
	RIGHT JOIN tb_editoras
	ON tb_livro.id_editora = tb_editoras.id_editora
	WHERE tb_livro.id_editora IS NULL;
	
---

[**Fonte**: Bóson Treinamentos](https://youtube.com/playlist?list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&si=iTJ-F9uZb8Eff3QA)