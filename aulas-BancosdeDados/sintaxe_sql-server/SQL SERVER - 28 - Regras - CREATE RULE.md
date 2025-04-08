### SQL Server [T-SQL (Transact-SQL)] - Regras - [CREATE RULE](https://learn.microsoft.com/pt-br/sql/t-sql/statements/create-rule-transact-sql?view=sql-server-ver16)

* As regras são configurações que permitem especificar como determinados parâmetros do banco devem se comportar, como exemplo, limitar faixas de valores em colunas ou especificar valores inválidos para registros.

--- 
#### Sintaxe

	CREATE RULE nome_regra
	AS @nome_parâmetro > 10.00;

* As variáveis criadas são denominadas como STORED PROCEDURE e podem ser verificadas no SQL Server pelo painel esquerdo e dentro de PROGRAMAÇÃO.
* O @ nomeia variáveis. Nesse caso, determinando que seja maior que 10.00

---
#### Sintaxe para vincular a RULE em uma tabela

	EXECUTE SP_BINRULE
	nome_regra, 'nome-tabela.nome-coluna';
	
* [SP_BINDRULE](https://learn.microsoft.com/pt-br/sql/relational-databases/system-stored-procedures/sp-bindrule-transact-sql?view=sql-server-ver16) é o stored procedure que vincula a regra criada em uma tabela.

---
Exemplo (criando uma RULE): -- Regra criada com base nas tabelas das demonstrações anteriores.

	CREATE RULE rl_preco
    AS @VALOR >= 10.00;
    
---
Exemplo (vinculando uma RULE)
    
    EXECUTE SP_BINDRULE
    rl_preco, 'tb_livro.preco_livro';
	
---

[**Fonte**: Bóson Treinamentos](https://youtube.com/playlist?list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&si=iTJ-F9uZb8Eff3QA)
