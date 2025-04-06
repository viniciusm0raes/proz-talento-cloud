#### SQL Server - Alteração ou Exclusão de tabelas e colunas ou restrições (CONSTRAINTS)

É possível alterar a estrutura de uma tabela após sua criação, acrescentando ou excluindo atributos (campos) ou mesmo restrições (CONSTRAINTS).

Por exemplo, excluir uma coluna numa tabela existente:

    	ALTER TABLE nome_tabela
		DROP COLUMN nome_coluna;

Excluindo uma CONSTRAINT:

    	ALTER TABLE nome_tabela
		DROP CONSTRAINT nome_constraint;
---	
Inclusão de uma coluna e uma CONSTRAINT em uma tabela existente.

	ALTER TABLE tb_livro
	ADD id_autor SMALLINT NOT NULL
	CONSTRAINT fk_id_autor FOREIGN KEY (id_autor)
	REFERENCES tb_autores;
	
	ALTER TABLE tb_livro
	ADD id_editora SMALLINT NOT NULL
	CONSTRAINT fk_id_editora FOREIGN KEY (id_editora)
	REFERENCES tb_editoras;
	
---
Alteração de uma coluna. É preferível que essa alteração seja feita antes da inserção de dados na tabela.

	ALTER TABLE tb_livro
	ALTER COLUMN id_autor INT;

---
Inserção de uma PRIMARY KEY (PK) em uma tabela que ainda não a possua. Para que essa alteração seja efetivada, a coluna citada precisa já existir na tabela citada.

	ALTER TABLE tb_clientes
	ADD PRIMARY KEY (id_cliente);

---
Excluir uma tabela. Caso essa tabela possua relacionamentos (CONSTRAINTS), é preciso primeiro excluir as CONSTRAINTS para que o comando surta efeito. Lembrando que os dados desta tabela também serão excluídos.

	DROP TABLE nome_tabela;

---

[**Fonte**: Bóson Treinamentos](https://youtube.com/playlist?list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&si=iTJ-F9uZb8Eff3QA)