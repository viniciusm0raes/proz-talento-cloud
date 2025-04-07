#### SQL Server [T-SQL (Transact-SQL)] - TRUNCATE TABLE - Excluindo dados, sem excluir uma tabela

* Remove todas as linhas de uma tabela sem registrar as exclusões de linhas individuais.
* TRUNCATE TABLE é como a instrução DELETE sem usar a cláusula WHERE.
* Entretanto, TRUNCATE TABLE é mais rápida e utiliza menos recursos de sistema e log de transações.

##### Sintaxe
---
Exemplo 1:

	TRUNCATE TABLE nome_tabela;
		
---
Exemplo 2 - Contando valores antes e depois do TRUNCATE TABLE:

	SELECT COUNT(*) AS Tabela_Antes FROM tb_clientes
	GO
	TRUNCATE TABLE tb_clientes
	GO
	SELECT COUNT AS Tabela_Depois FROM tb_clientes
	GO;
---

[**Fonte**: Bóson Treinamentos](https://youtube.com/playlist?list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&si=iTJ-F9uZb8Eff3QA)