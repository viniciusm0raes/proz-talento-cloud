### SQL Server [T-SQL (Transact-SQL)] - [Subconsultas (subqueries) com Tabelas Derivadas](https://www.youtube.com/watch?v=vXq85AhvMDU&list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&index=38)

* Subconsulta (subquery) é uma declaração SQL embutida em uma consulta externa.
* A Subconsulta fornece uma resposta à consulta externa na forma de um valor escalar, lista de valores ou conjunto de dados, equivalentes a uma expressão, lista ou tabela para a consulta externa.
* A tabela derivada de uma subconsulta é denominada **tabela derivada**
* A tabela derivada só existe **no instante da consulta**, ela não faz parte do banco de dados

--- 
#### Sintaxe

	SELECT (SELECT nome-tabela.nome-coluna)
	AS Subconsulta;
	
---
Exemplo utilizando uma de base de dados que registra diferentes compras de uma **mesmo cliente**:

	SELECT resultado.cliente as Cliente, SUM(resultado.total) AS Total
	FROM
	(SELECT cl.nome_cliente AS Cliente,
	pr.nome_produto,pr.preco_produto,
	(pr.preco_produto * co.quantidade) as Total
	FROM clientes AS cl
	INNER JOIN tbl_compras AS co
	ON cl.id_cliente = co.id_cliente
	INNER JOIN produtos AS pr
	ON co.id_produto = pr.id_produto) AS resultado
	GROUP BY resultado.cliente
	ORDER BY total DESC

---

[**Fonte**: Bóson Treinamentos](https://youtube.com/playlist?list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&si=iTJ-F9uZb8Eff3QA)
