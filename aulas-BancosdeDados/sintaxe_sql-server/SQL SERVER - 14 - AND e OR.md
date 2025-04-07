#### SQL Server [T-SQL (Transact-SQL)] - AND e OR - Operadores Lógicos

* AND e OR são operadores usados para filtrar registros baseados em mais de uma condição.
* O operador AND mostra um registro se ambas / todas as condições forem verdadeiras.
* O operador OR mostra um registro se pelo menos uma das condições for verdadeira.

##### Sintaxe
---

	SELECT colunas FROM nome_tabela
	WHERE nome_coluna = 'condição1' AND outra_coluna = ''condição2;
		
---
Exemplo 1:

	SELECT * FROM tb_livro
	WHERE id_livro > 2 AND id_autor < 4;

		
---
Exemplo 2:

	SELECT * FROM tb_livro
	WHERE id_livro > 2 OR id_autor < 8;

---

[**Fonte**: Bóson Treinamentos](https://youtube.com/playlist?list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&si=iTJ-F9uZb8Eff3QA)