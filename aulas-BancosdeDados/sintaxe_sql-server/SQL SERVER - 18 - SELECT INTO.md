### SQL Server [T-SQL (Transact-SQL)] - SELECT INTO - Criar nova tabela a partir de uma tabela existente

* Seleciona dados de uma ou mais tabela e os insere em uma tabela diferente.
* Pode ser usada para criar cópias de backup de tabelas.

##### Sintaxe
---

	SELECT *
	INTO nova_tabela
	FROM tabela_atual;	
		
---
Exemplo 1:

	SELECT id_livro, nome_livro, isbn
	INTO tb_livro_isbn
	FROM tb_livro;
		
---
Exemplo 2:

	SELECT id_livro, nome_livro, isbn
	INTO tb_livro_isbn
	FROM tb_livro
	WHERE id_livro > 104;
	
---		
Exemplo 3 - Criando uma tabela de backup:

	SELECT *
	INTO tb_livro_backup
	FROM tb_livro;
	
---

[**Fonte**: Bóson Treinamentos](https://youtube.com/playlist?list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&si=iTJ-F9uZb8Eff3QA)