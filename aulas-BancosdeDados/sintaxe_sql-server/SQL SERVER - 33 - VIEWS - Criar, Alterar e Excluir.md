### SQL Server [T-SQL (Transact-SQL)] - [VIEWS (Exibições) - Criar, Alterar e Excluir](https://www.youtube.com/watch?v=BDa_bH4fIyE&list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&index=36)

* Usa exibição (visão) é uma tabela **virtual** baseada no conjunto de resultados de uma consulta SQL.
* Contém linhas e colunas como uma tabela real e pode receber comandos como declarações JOIN, WHERE e funções como uma tabela normal.
* Mostra sempre resultados de dados atualizados, pois o motor do banco de dados recria os dados toda ver que um usuário consulta a VIEW.
* No SQL Server Management Studio (SSMS), as VIEWS podem serem visualizadas no painel lateral, dentro do banco de dados referente e em **exibições**.

--- 
#### Sintaxe de criação de uma VIEW

	CREATE VIEW nome-da-exibicao
	AS SELECT nome-coluna(s)
	FROM nome-tabela
	WHERE condicionais /*O WHERE aqui é um exemplo, sendo que outros atributos, como JOINS podem também serem usadas.*/
	
---
Exemplo1:

	CREATE VIEW vw_livro_autores
	AS SELECT tb_livro.nome_livro AS Livro,
	tb_autores.nome_autor AS Autor
	FROM tb_livro
	INNER JOIN tb_autores
	ON tb_livro.id_autor = tb_autores.id_autor;
    
---
#### Sintaxe de uso para uma VIEW criada aplicando uma condição para primeira letra do nome do livro
    
    SELECT nome-coluna(s)
	FROM nome-da-exibicao
	WHERE Livro LIKE 'S%';
	
---
Exemplo de uso de uma VIEW:

    SELECT Livro, Autor
	FROM vw_livro_autores
	WHERE Livro LIKE 'S%';

---
#### Sintaxe de alteração de uma VIEW criada anteriormente

	ALTER nome-da-exibicao
	AS SELECT nome-coluna(s)
	FROM nome-tabela
	INNER JOIN nome-tabela
	ON nome-tabela.nome-coluna = nome-outra-tabela.nome-coluna.

---
Exemplo de alteração de uma VIEW:
	ALTER VIEW vw_livro_autores
	AS SELECT tb_livro.nome_livro AS Livro,
	tb_autores.nome_autor AS Autor,
	preco_livro AS Preco
	FROM tb_livro
	INNER JOIN tb_autores
	ON tb_livro.id_autor = tb_autores.id_autor;

---
#### Sintaxe de visualização da VIEW alterada

	SELECT * FROM vw_livro_autores;
	
---
#### Sintaxe de exclusão de uma VIEW
	DROP VIEW nome-da-exibicao;

---
Exemplo de exclusão de uma VIEW:

	DROP VIEW vw_livro_autores;
	
---

[**Fonte**: Bóson Treinamentos](https://youtube.com/playlist?list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&si=iTJ-F9uZb8Eff3QA)
