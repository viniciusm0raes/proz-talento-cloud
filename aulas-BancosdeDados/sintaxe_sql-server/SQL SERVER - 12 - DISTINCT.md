#### SQL Server [T-SQL (Transact-SQL)] - DISTINCT - Consultas com valores distintos, sem repetição

* Algumas colunas podem conter valores duplicados. Para exibir apenas valores diferentes ("distintos"), usa-se a palavra-chave DISTINCT.

##### Sintaxe
---

	SELECT DISTINCT nome_coluna * FROM nome_tabela;
	
---
Exemplo:

	SELECT DISTINCT id_autor FROM tb_autores;
	
---

[**Fonte**: Bóson Treinamentos](https://youtube.com/playlist?list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&si=iTJ-F9uZb8Eff3QA)