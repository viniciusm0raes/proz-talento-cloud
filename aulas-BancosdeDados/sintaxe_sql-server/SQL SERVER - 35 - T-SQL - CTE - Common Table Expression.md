### SQL Server [T-SQL (Transact-SQL)] - [T-SQL - Subconsultas e CTE - Common Table Expression - com Tabelas Derivadas](https://www.youtube.com/watch?v=-o0ClA1JJlA&list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&index=39)

* CTE - Common Table Expression - Expressão de Tabela Comum.
* Variação sintática de uma subconsulta, similar a uma view (exibição).
* Pode ser acessada **múltiplas vezes** dentro da consulta principal, como se fosse uma exibição ou tabela.
* Na construção do código, o CTE **deve ser criado antes** da consulta principal. Isso o difere da subconsulta, pois nesta, a consulta principal é construída antes da subconsulta.

--- 
#### Sintaxe

	SELECT (SELECT nome-tabela.nome-coluna)
	AS Subconsulta;
	
---
Exemplo utilizando uma de base de dados que registra diferentes compras de uma **mesmo cliente**:

	-- CTE em si
	WITH nome-cte (coluna_1, coluna_2) -- Exemplos com duas, mas mais colunas, se necessário, podem ser declaradas.
	AS (SELECT tb1.coluna3 AS coluna1,
	(tb2.coluna5 * tb3.coluna2) AS Total
	FROM tabela_1 AS tb1
	INNER JOIN tabela_3 as tb3
	ON tb1.coluna1 = tb3.coluna1
	INNER JOIN tabela2 AS tb2
	ON tb3.coluna1 = tb2.coluna1)
	
	-- Subconsulta
	SELECT coluna1, SUM(Total) AS Valor_Total
	FROM nome-cte
	GROUP BY coluna1
	ORDER BY Valor_Total DESC;

---

[**Fonte**: Bóson Treinamentos](https://youtube.com/playlist?list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&si=iTJ-F9uZb8Eff3QA)
