## Criar, consultar ou excluir um banco de dados

### Sintaxe Simplificada

        CREATE DATABASE db_nome-do-banco-de-dados;

### Sintaxe Extendida
        CREATE DATABASE db_nome-do-banco-de-dados ON PRIMARY
        (NAME = teste02,
        FILENAME = 'C:\SQL\db_nome-do-banco-de-dados.mdf', --Atentar para a extenção do nome do arquivo (.mdf)
        SIZE = 8MB,
        MAXSIZE = 15MB,
        FILEGROWTH = 10% --Como o arquivo cresce)
        
        LOG ON (
        NAME = db_nome-do-banco-de-dados_log,
        FILENAME = 'C:\SQL\db_nome-do-banco-de-dados.ldf', --Atentar para a extenção do nome do arquivo (.ldf)
        SIZE = 1MB,
        FILEGROWTH = 1MB --Não precisa necessariamente ser em porcentagem
        )
        GO --o uso do GO dispensa o ; no final


### Consultar Bancos de Dados Existentes
            SELECT name
            FROM master.sys.databases
            ORDER BY name;

### Consultar Bancos de Dados Existentes via Stored Procedures
        EXEC sp_databases;

### Determinar qual banco será usado
        USE db_nome-do-banco-de-dados;

### Obter informações detalhadas de um banco de dados específico
        EXEC sp_helpdb db_nome-do-banco-de-dados;

### Excluir um banco de dados (se ele existir)
        DROP DATABASE IF EXISTS db_nome-do-banco-de-dados; --Comando para um banco que NÃO está em uso

### Excluir banco (em uso)
        USE MASTER --Muda o banco em uso para o MASTER
        GO
        ALTER DATABASE db_nome-do-banco-de-dados
        SET SINGLE_USER WITH ROLLBACK IMMEDIATE --Desconecta o banco imediatamente
        DROP DATABASE db_nome-do-banco-de-dados;

