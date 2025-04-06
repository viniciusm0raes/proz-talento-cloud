#### SQL Server - WHERE - Filtrando registros em uma consulta

* A cláusula WHERE permite filtrar registros em uma consulta.

##### Sintaxe
---

	SELECT colunas FROM nome_tabela
	WHERE coluna = 'condição';
		
---
Exemplo 1:

	SELECT * FROM tb_livro
	WHERE id_autor = '1';

		
---
Exemplo 2:

	SELECT id_autor * FROM tb_autores
	WHERE sobrenome_autor = 'Stanek';

---

[**Fonte**: Bóson Treinamentos](https://youtube.com/playlist?list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&si=iTJ-F9uZb8Eff3QA)