### SQL Server [T-SQL (Transact-SQL)] - Operadores IN e NOT IN - Filtros de Múltiplas Condições

#### IN: Filtro de Múltiplas Condições
* Determina se um valor corresponde a qualquer valor em uma subconsulta ou lista.
* Retorna sempre TRUE ou FALSE.
* Pode substituir o OR em Queries com mais de uma condição.

--- 
#### Sintaxe - Lista

	Expressão_teste(NOT) in (subconsulta | lista)
	
	SELECT * FROM nome_tabela
	WHERE nome_coluna IN (item1, item2, ...);
	
--- Invertendo essa mesma consula
		SELECT * FROM nome_tabela
		WHERE nome_coluna NOT IN (item1, item2, ...);
			
---
Exemplo IN:

	SELECT * FROM tb_livro
	WHERE id_autor IN (2,5)
		
---
Exemplo NOT IN:

	SELECT * FROM tb_livro
	WHERE id_autor NOT IN (2,5)
	
---

[**Fonte**: Bóson Treinamentos](https://youtube.com/playlist?list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&si=iTJ-F9uZb8Eff3QA)