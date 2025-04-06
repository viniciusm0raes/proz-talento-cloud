#### SQL Server - ALIAS - Nomes alternativos para colunas ou tabelas

* Utilizado para retornar nomes alternativos a uma coluna ou tabela em uma consulta.

##### Sintaxe
---

	SELECT nome_coluna
	AS nome_alias
	FROM nome_tabela;
		
---
Exemplo 1:

	SELECT nome_livro
	AS livro
	FROM tb_livro;
		
---
Exemplo 2 com mais de uma coluna:

	SELECT nome_livro
	AS Livro, id_autor AS num_autor
	FROM tb_livro;
	
---
Exemplo 3:

	SELECT TOP 3 nome_livro, preco_livro, id_editora, isbn
	FROM tb_livro;
	
---
Exemplo 4:

	SELECT TOP 30 PERCENT nome_livro, preco_livro, id_editora, isbn
	FROM tb_livro;
	
---

[**Fonte**: Bóson Treinamentos](https://youtube.com/playlist?list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&si=iTJ-F9uZb8Eff3QA)