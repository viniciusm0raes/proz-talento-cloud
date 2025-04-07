#### SQL Server [T-SQL (Transact-SQL)] - IDENTITY - Auto incremento de valores em colunas

* O Autoincremento permite que um número única seja gerado quando um novo registro é inserido em uma tabela.
* Em SQL Server, trata-se da palavra-chave reservada IDENTITY, cujo valor inicial **padrão** é 1 e também seu incremento **padrão** de 1.
* Para que o valor de IDENTITY inicie, por exemplo, em 100 e se incremente em 2 por registro, use IDENTITY(100,2).

---

* Ao inserir valores na tabela, não é necessário especificar o valor da coluna de autoincremento.
* Não é possível alterar uma coluna existente para configurar o IDENTITY.
* Se necessário, crie uma **nova tabela** com IDENTITY e exclua a atual.
* Só é permitido **usar uma coluna** de identidade por tabela.

#### Exemplo de identidade
		CREATE TABLE tb_teste_identidade
		(
			id_teste SMALLINT PRIMARY KEY IDENTITY,
			valor SMALLINT NOT NULL
		);
				
		INSERT INTO tb_teste_identidade(valor)
			VALUES
				(10),
				(20),
				(30),
				(40);
				
		SELECT * FROM tb_teste_identidade;



[**Fonte**: Bóson Treinamentos](https://youtube.com/playlist?list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&si=iTJ-F9uZb8Eff3QA)