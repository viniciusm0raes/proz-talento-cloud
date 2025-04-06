#### SQL Server - Criação de tabelas

        USE db_Biblioteca

        CREATE TABLE tb_livro
        (	
          ID_Livro SMALLINT PRIMARY KEY IDENTITY(100,1), --O identity é configurado com, número inicial e incremento
        	nome_livro VARCHAR(50) NOT NULL,
        	isbn VARCHAR(30) NOT NULL UNIQUE,        	
        	data_pub DATE NOT NULL,
        	preco_livro MONEY NOT NULL
        );
---
        CREATE TABLE tb_autores
        (
        	id_autor SMALLINT PRIMARY KEY,
        	nome_autor VARCHAR(50),
        	sobrenome_autor VARCHAR(60)
        );
---
        CREATE TABLE tb_editoras
        (
        	id_editora SMALLINT PRIMARY KEY IDENTITY,
        	nome_editora VARCHAR(50) NOT NULL
        );

---

O **sp_help** é um **comando reservado** no SQL Sever que informa os índices, chaves e campos, atributos, tipos de atributos de uma tabela (stored procedures, comandos pré-programados).

        sp_help nome_tabela;




[**Fonte**: Bóson Treinamentos](https://youtube.com/playlist?list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&si=iTJ-F9uZb8Eff3QA)