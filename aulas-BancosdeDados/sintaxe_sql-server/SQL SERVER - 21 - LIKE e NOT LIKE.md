#### SQL Server [T-SQL (Transact-SQL)] - LIKE e NOT LIKE - Filtrar por padrões específicos

* Determina se uma cadeia de caracteres específica corresponde a um padrão especificado.
* Um padrão pode incluir caracteres normais e curingas.
* NOT LIKE inverte a comparação, verificando se a cadeia de caracteres NÃO corresponde ao padrão especificado.
* Usado junto com a cláusula WHERE. 

--- 
##### Padrões específicos

* '%' -- Qualquer cadeia de 0 ou mais caracteres

* '_' -- Sublinhado: qualque caractere único

* '[]' -- Qualquer caractere único no intervalo ou conjunto especificado ([a-h]; [aeiou])

* '[^]' -- Qualquer caractere único que NÃO esteja no intervalo ou conjunto especificado ([a-h]; [aeiou])

---
##### Sintaxe

	SELECT nome_coluna(s)
	FROM nome_tabela
	WHERE nome_coluna LIKE 's%'; -- Que começa com a letra S. Para algum caractere no final, basta inverter. Ex.: '%g'.
	
			
---
Exemplo 1:

	SELECT nome_livro
	FROM tb_livro
	WHERE nome_livro LIKE 'f%';
		
---
Exemplo 2:

	SELECT nome_livro
	FROM tb_livro
	WHERE nome_livro LIKE '%x';
		
---
Exemplo 3: -- Retorna nomes de livros cuja SEGUNDA letra seja i.

	SELECT nome_livro
	FROM tb_livro
	WHERE nome_livro LIKE '_i%';
		
---
Exemplo 4: -- Retorna nomes de livros que começam com a letra l OU s.

	SELECT nome_livro
	FROM tb_livro
	WHERE nome_livro LIKE '[sl]%';
		
---
Exemplo 5: -- Retorna nomes de livros que terminam com a letra g OU x.

	SELECT nome_livro
	FROM tb_livro
	WHERE nome_livro LIKE '%[gx]';
		
---
Exemplo 6: -- Retorna nomes de livros cuja terceira letra seja n, d OU c.

	SELECT nome_livro
	FROM tb_livro
	WHERE nome_livro LIKE '__[ndc]%';
		
---
Exemplo 7: -- Retorna nomes de livros cuja segunda letra seja i e a quinta letra seja o.

	SELECT nome_livro
	FROM tb_livro
	WHERE nome_livro LIKE '_i__o%';
		
---
Exemplo 8: -- Retorna nomes de livros cuja primeira letra NÃO seja m.

	SELECT nome_livro
	FROM tb_livro
	WHERE nome_livro NOT LIKE 'm%';
		
---

[**Fonte**: Bóson Treinamentos](https://youtube.com/playlist?list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&si=iTJ-F9uZb8Eff3QA)