### SQL Server [T-SQL (Transact-SQL)] - Campos Calculados

#### IN: Filtro de Múltiplas Condições
* Os campos calculados são usados no momento da criação da tabela para guardar automaticamente cálculos feitos com outros campos presentes na tabela.

--- 
#### Sintaxe

	CREATE TABLE nome_tabela (
		nome_campo_id SMALLINT IDENTITY,
		nome_campo_produto VARCHAR(20),
		nome_campo_preco MONEY,
		nome_campo_quant SMALLINT,
		nome_campo_total AS (nome_campo_preco * nome_campo_quant)
	);

---
Exemplo:

	CREATE TABLE tb_produtos (
		codproduto SMALLINT IDENTITY,
		nomeproduto VARCHAR(20),
		preco MONEY,
		quant SMALLINT,
		total AS (preco * quant)
	);

	INSERT INTO tb_produtos
	VALUES
		('Mouse',13.00,2),
		('Teclado',25.00,2),
		('Fones',25.00,1),
		('Pendrive',28.00,3),
		('SD Card',35.00,2),
		('DVD-R',1.35,12);
		
	SELECT * FROM tb_produtos; -- O campo total já virá calculado conforme indicado na criação da tabela.

	SELECT SUM(total) FROM tb_produtos; -- Calculará a soma de todos os produtos.
	
---

[**Fonte**: Bóson Treinamentos](https://youtube.com/playlist?list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&si=iTJ-F9uZb8Eff3QA)
