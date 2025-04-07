### SQL Server [T-SQL (Transact-SQL)] - Constraints (restrições)
- Restrições são regras aplicadas nas colunas de uma tabela
- São usadas para limitar os tipos de dados que são inseridos
- Podem ser especificadas no momento de criação da tabela (CREATE) ou após a tabela ter sido criada (ALTER)

## Principais Constraints
##### NOT NULL
- A constraint NOT NULL impõe a uma coluna NÃO aceitar valores nulos (NULL).
- A constraint NOT NULL obriga um campo a sempre possuir um valor.
- Deste modo, NÃO é possível inserir um registro (ou atualizar) sem entrar com um valor neste campo.

##### UNIQUE
- A restrição UNIQUE identifica de forma única cada registro em uma tabela de um banco de dados.
- As constraints UNIQUE e PRIMARY KEY garantem a unicidade em uma coluna ou conjunto de colunas.
- Uma constraint PRIMARY KEY automaticamente possui uma restrição UNIQUE definida.
- É possível ter várias constraints UNIQUE em uma tabela, mas apenas uma PRIMARY KEY por tabela.

##### PRIMARY KEY
- A PRIMARY KEY identifica de forma única cada registro em uma tabela de banco de dados.
- Chaves Primárias devem conter valores únicos.
- Uma coluna de chave primária **não pode** conter valores NULL.
- Cada tabela deve ter uma chave primária e **apenas uma** chave primária.

##### FOREIGN KEY
- Uma FOREIGN KEY (Chave Estrangeira) em uma tabela é um campo que aponta para uma chave primária **em outra tabela**.

		CONSTRAINT fk_id_autor FOREIGN KEY (id_autor) REFERENCES tb_autores (id_autor)

Neste exemplo a chave primária está na tabela tb_autores e uma chave estrangeira de nome id_autor foi criada na tabela atual, usando o nome fk_id_autor.

##### CHECK
- A constraint CHECK é usada para limitar uma faixa de valores que podem ser colocados em uma coluna.
- Se uma constraint CHECK for definida em **uma única coluna**, ela permitirá **apenas determinados valores** para a coluna.
- Se a constraint CHECK for definida para **a tabela**, ela poderá limitar valores em algumas colunas com base nos valores de outras colunas **do registro**. 

##### DEFAULT
- A constraint DEFAULT é usada para inserir um **valor padrão** em uma coluna.
- O valor padrão será adicionado a todos os novos registros, **caso nenhum outro valor** seja especificado.

[**Fonte**: Bóson Treinamentos](https://youtube.com/playlist?list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&si=iTJ-F9uZb8Eff3QA)