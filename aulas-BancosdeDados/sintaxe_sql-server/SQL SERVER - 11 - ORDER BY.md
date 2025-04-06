#### SQL Server - ORDER BY - Ordenar dados

* A palavra-chave ORDER BY é usada para ordenar o conjunto-resultado de registros.
* ASC - Ordem ascendente (é a ordem padrão e não precisa ser declarada)
* DESC - Ordem descendente (inversa)

##### Sintaxe
---

	SELECT * FROM nome_tabela
	ORDER BY nome_coluna ASC --ou DESC conforme a ordem desejada
		
---
Exemplo 1:

	SELECT * FROM tb_livro
	ORDER BY nome_livro ASC;

---

[**Fonte**: Bóson Treinamentos](https://youtube.com/playlist?list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&si=iTJ-F9uZb8Eff3QA)