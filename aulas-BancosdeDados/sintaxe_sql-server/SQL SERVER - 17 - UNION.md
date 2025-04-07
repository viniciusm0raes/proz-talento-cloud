#### SQL Server [T-SQL (Transact-SQL)] - UNION - Operador para combinação de resultados

* O operador UNION permite combinar duas ou mais declarações SELECT.
* Cada declaração SELECT deve ter o mesmo número de colunas, tipos de dados e ordem de colunas.
* Não precisa ser a mesma informação, mas sim o mesmo TIPO de dados.
* Por padrão, filtra as repetições e demonstra valores únicos.
* Caso seja desejado a exibição de todos os valores, mesmo com repetição, utilizar o modificador ALL.

##### Sintaxe
---

	SELECT colunas FROM tabela1
	UNION
	SELECT colunas FROM tabela2;	
		
---
Exemplo 1:

	SELECT id_autor FROM tb_autores
	UNION
	SELECT id_autor FROM tb_livro;
		
---
Exemplo 2:

	SELECT id_autor FROM tb_autores
	UNION ALL
	SELECT id_autor FROM tb_livro;
	
---

[**Fonte**: Bóson Treinamentos](https://youtube.com/playlist?list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&si=iTJ-F9uZb8Eff3QA)