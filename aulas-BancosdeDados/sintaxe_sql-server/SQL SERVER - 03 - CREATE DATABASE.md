#### SQL Server [T-SQL (Transact-SQL)] - Criação de banco de dados

#### Sintaxe Simplificada

        CREATE DATABASE nome_banco_de_dados;

---

#### Sintaxe Extendida (exemplo)
        CREATE DATABASE db_teste02 ON PRIMARY
        (NAME = teste02,
        FILENAME = 'C:\SQL\teste02.mdf', --Atentar para a extenção do nome de arquivos de banco de dados primários (.mdf).
        SIZE = 8MB,
        MAXSIZE = 15MB,
        FILEGROWTH = 10% --Como o arquivo cresce)
        
        LOG ON (
        NAME = teste02_log,
        FILENAME = 'C:\SQL\teste02.ldf', --Atentar para a extenção do nome de arquivos de log de transações do Microsoft SQL Server (.ldf).
        SIZE = 1MB,
        FILEGROWTH = 1MB --Não precisa necessariamente ser em porcentagem
        )
        GO --o uso do GO dispensa o ; no final

---

#### Consultar Bancos de Dados Existentes
        SELECT name
        FROM master.sys.databases
        ORDER BY name;

---

#### Consultar Bancos de Dados Existentes via Stored Procedures
        EXEC sp_databases;

---

#### Determinar qual banco será usado
        USE nome_banco_de_dados;

---

#### Obter informações detalhadas de um banco de dados específico
        EXEC sp_helpdb nome_banco_de_dados;

---

#### Excluir um banco de dados, se ele existir
        DROP DATABASE IF EXISTS nome_banco_de_dados; --Comando para um banco que NÃO está em uso

---

#### Excluir banco EM uso
        USE MASTER --Muda o banco em uso para o MASTER
        GO
        ALTER DATABASE nome_banco_de_dados
        SET SINGLE_USER WITH ROLLBACK IMMEDIATE --Desconecta o banco imediatamente
        DROP DATABASE nome_banco_de_dados;

---

[Fonte: Bóson Treinamentos](https://youtube.com/playlist?list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&si=iTJ-F9uZb8Eff3QA)