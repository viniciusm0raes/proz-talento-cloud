#### SQL Server [T-SQL (Transact-SQL)] - Inserir dados nas Tabelas

##### Sintaxe
	INSERT INTO nome_tabela (coluna1, coluna2, ...)
	VALUES
		(valor1, valor2, ...);
		
Se uma coluna permitir a inserção de valores nulos, esta não precisará ser citada. O inverso ocorre para colunas configuradas como NOT NULL. Estas obrigatoriamente precisarão ser citadas. Já se uma coluna estiver configurada como INDENTITY, esta não precisa ser citada, visto que seu dado / incremento serão automáticos.

---
Exemplo 1:

	INSERT INTO tb_autores (id_autor, nome_autor, sobrenome_autor)
	VALUES
		(1, 'Daniel', 'Barret'),
		(2, 'Gerald', 'Carter'),
		(3, 'Mark', 'Sobell'),
		(4, 'William', 'Stanek'),
		(5, 'Richard', 'Blum');
		
---
Exemplo 2:
	
	INSERT INTO tb_editoras (nome_editora)
	VALUES
		('Prentice Hall'),
		('O´Reilly'),
		('Microsoft Press'),
		('Wiley');
		
---
Exemplo 3 (caso existam chaves estrangeiras na tabela em que se está tentando inserir dados, estes precisam PRIMEIRO serem inseridos na(s) tabela(s) que os contêm. No exemplo abaixo, a tabela tb_livro depende dos id's como FK's tanto da tabela tb_autores, quanto da tabela tb_editoras. Campos de texto e datas precisam ser inseridos entre aspas simples:
	
	INSERT INTO tb_livro (nome_livro, isbn, data_pub, preco_livro, id_autor, id_editora)
	VALUES
		('Linux Command Line and Shell Scripting',143853017,'20091221',68.35,5,4),
		('SSH, the Secure Shell', 127658789, '20091221', 58.30, 1, 2),
		('Using Samba', 123856789, '20001221', 61.45, 2, 2),
		('Fedora and Red Hat Linux',123346789,'20101101',62.23,3,1),
		('Windows Server 2012 inside Out',123346798,'20040517',67.80,4,3),
		('Microsoft Exchange Server 2010',123355848,'20001221',45.30,4,3);

---

[**Fonte**: Bóson Treinamentos](https://youtube.com/playlist?list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&si=iTJ-F9uZb8Eff3QA)