### SQL Server [T-SQL (Transact-SQL)] [Backup do Banco de Dados e Restauração](http://www.bosontreinamentos.com.br/sql-com-sql-server/como-realizar-backup-e-restore-no-microsoft-sql-server/)

* O link acima demonstra como realizar backup e restore via interface gráfica do SQL Server Management Studio (SSMS).

* Abaixo a forma de realização via comandos SQL

--- 
#### Sintaxe Backup (Disco Local)

	BACKUP DATABASE nome_do_banco
	TO DISK = 'caminho-para-salvamento-no-disco';

---
#### Sintaxe Backup (Mídia Externa)

	BACKUP DATABASE nome_do_banco
	TO DISK = 'caminho-para-salvamento-no-disco';
	WITH FORMAT; -- Essa opção formata a mídia antes da gravação do backup.
---
Exemplo:

	BACKUP DATABASE db_biblioteca
    TO DISK = 'c:\arquivos\biblioteca_20250804.bak'; --a extensão do arquivo precisa ser .bak e é importante indicar a data do backup
	
---
#### Sintaxe Restauração

	RESTORE DATABASE nome_do_banco
	FROM DISK = 'c:\arquivos\biblioteca_20250804.bak'
	WITH REPLACE; -- O WITH REPLACE substitui o banco de dados exitente com o nome que está especificado dentro do backup.
---
Exemplo:

	RESTORE DATABASE db_biblioteca
    FROM DISK = 'c:\arquivos\biblioteca.bak'; --a extensão do arquivo precisa ser .bak
	
---

[**Fonte**: Bóson Treinamentos](https://youtube.com/playlist?list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&si=iTJ-F9uZb8Eff3QA)
