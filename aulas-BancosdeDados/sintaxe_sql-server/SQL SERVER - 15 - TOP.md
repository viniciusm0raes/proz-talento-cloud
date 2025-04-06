#### SQL Server - TOP - Especificar número de registros a retornar

* Utilizado para especificar o número de registros que devem retornar na consulta de uma tabela.

##### Sintaxe
---

	SELECT TOP número|percentual nome_coluna
	FROM nome_tabela;
		
---
Exemplo 1:

	SELECT TOP 10 PERCENT nome_livro
	FROM tb_livro;
		
---
Exemplo 2:

	SELECT TOP 2 nome_livro
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