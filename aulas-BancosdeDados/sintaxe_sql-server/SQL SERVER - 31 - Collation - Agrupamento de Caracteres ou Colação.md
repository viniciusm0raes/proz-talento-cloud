### SQL Server [T-SQL (Transact-SQL)] - [Collation - "Colação" / "Agrupamento"](https://www.youtube.com/watch?v=hCXVBBCTrNY&list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&index=34)

* Trata-se da codificação dos caracteres em uma ordem padrão.
* Muitos sistemas de colação são baseados em ordem numérica ou alfabética.
* Essa configuração interfere na forma de funcionamento padrão da cláusula ORDER BY.
* A colação usada pelos bancos de dados é configurada durante a instalação do sistema. Podendo posteriormente ser alterada para cada banco de dados.
* A configuração adequada também interfere em quais caracteres serão suportados para inserção de dados. Idiomas orientais, por exemplo.
* [Collation Charts](https://collation-charts.org/mssql/) - Site com cartas de agrupamento em vários alfabetos e idiomas.

--- 
* Sintaxe para **consultar** as opções de agrupamento disponíveis **no SGBD**

	SELECT * FROM fn_helpcollations();

--- 
* Sintaxe para **consultar** o esquema de colação **usado no sistema** atualmente pelo servidor

        SELECT SERVERPROPERTY('Collation')
        AS 'Colacao_Atual_Servidor';
        
        -- SERVERPROPERTY é uma **função que** consultar
        propriedades do servidor.

--- 
* Sintaxe para **consultar** o esquema de colação usado **no banco de dados** atual

    	SELECT DATABASEPROPERTYEX('nome_banco', 'Collation')
    	AS 'Colacao_Atual_deste_DB');

--- 
* Sintaxe para **alterar** o esquema de colação usado **em um banco de dados**

    	ALTER DATABSE nome_banco
    	COLLATE nome_esquema_agrupamento;
    
        -- Nomes dos esquemas disponíveis no site citado,
        mas **também na consulta** da função **fn_helpcollations**.

--- 
* Sintaxe para **alterar** o esquema de colação usado **em uma coluna(s)** apenas numa consulta

    	SELECT * FROM nome_tabela
    	ORDER BY nome_coluna
    	COLLATE nome_esquema_agrupamento;
    
        -- Nomes dos esquemas disponíveis no site citado,
        mas **também na consulta** da função **fn_helpcollations**.
		
---

[**Fonte**: Bóson Treinamentos](https://youtube.com/playlist?list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&si=iTJ-F9uZb8Eff3QA)
