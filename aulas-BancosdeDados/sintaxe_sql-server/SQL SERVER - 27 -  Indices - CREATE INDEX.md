### SQL Server [T-SQL (Transact-SQL)] - Índices - CREATE INDEX

* Permitem que as aplicações de Bancos de Dados encontrem os dados mais rapidamente, sem precisarem ler toda a tabela.
* Os índices **não são visíveis** para os usuários.
* O índice só pode ser aplicado em **uma coluna** da tabela por vez.
* Uma tabela **não pode** ter duas ou mais colunas indexadas, **apenas uma**.
* Criar índices **apenas** em tabelas que recebam muitas consultas.
* Tabelas indexadas **levam mais tempo** para serem atualizadas.
* Dentro do SQL Server, os índices podem ser visualizados expandindo o campo que demonstra as tabelas existentes.

--- 
#### Sintaxe

	CREATE INDEX nome_índice
	ON nome_tabela (nome_coluna);


---
Exemplo: -- Como nos exemplos anteriores tabelas contendo livros foram criadas e o nome destes parece ser o campo mais diretamente pesquisado por usuários, criar um índice deste campo faz sentido.

	CREATE INDEX indice_nome_livro
    ON tb_livro(nome_livro);
	
---

[**Fonte**: Bóson Treinamentos](https://youtube.com/playlist?list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&si=iTJ-F9uZb8Eff3QA)
