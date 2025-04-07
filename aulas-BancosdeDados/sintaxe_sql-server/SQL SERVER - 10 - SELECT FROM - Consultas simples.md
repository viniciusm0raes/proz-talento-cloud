#### SQL Server [T-SQL (Transact-SQL)] - SELECT FROM - Consultas simples em uma tabela

##### Sintaxe
---

	SELECT nome_coluna FROM nome_tabela;
		
---
Exemplo 1:

	SELECT nome_autor FROM tb_autores
		
		
---
Exemplo 2:

	SELECT nome_livro FROM tb_autores
	
---

Exemplo 3:

	SELECT * FROM tb_autores -- O caractere * retorna todas as colunas de uma tabela.
---

##### Selecionando colunas específicas de uma mesma tabela
##### Sintaxe

	SELECT coluna1, coluna3, coluna8 FROM nome_tabela;
	
---

Exemplo 1:

	SELECT nome_livro, id_autor FROM tb_livro;
	
---

Exemplo 2:

	SELECT nome_livro, isbn
	FROM tb_livro
	ORDER BY nome_livro -- O ORDER BY permite a classificação dos dados em função da coluna citada.

---

[**Fonte**: Bóson Treinamentos](https://youtube.com/playlist?list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&si=iTJ-F9uZb8Eff3QA)