### SQL Server [T-SQL (Transact-SQL)] - [Concatenação de Strings](https://www.youtube.com/watch?v=ghbCZwQPY24&list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&index=33)

* É possível concatenar strings usando-se o operador de concatenação +

--- 
#### Sintaxe

	SELECT 'string1' ou nome-coluna + 'string2' + nome-coluna;

---
Exemplo1: -- **Sem usar** um banco de dados existente

	SELECT 'Teste ' + 'de concatenação ' + 'de strings' AS Texto; -- O Alias usado é para nomear a coluna que trará a concatenação como resultado.
    
---
Exemplo2: -- **Usando** um banco de dados existente
    
    SELECT nome_autor + ' ' + sobrenome_autor AS 'Nome Completo' FROM tb_autores;
	
---
Exemplo3: -- Também **usando** um banco de dados existente juntamente com a cláusula WHERE.
    
    SELECT nome_livro + ' - Livro recomendado' AS 'Comentario' FROM tb_livro
	WHERE id_livro = '103';
	
* Caso, na cláusula WHERE seja informado um valor não presente no banco de dados, a consulta do SELECT é realizada, mas como o retorno do WHERE será NULL, apesar de demonstrar uma coluna nomeada conforme o alias declarado, a concatenação não é efetivada.
		
---

[**Fonte**: Bóson Treinamentos](https://youtube.com/playlist?list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&si=iTJ-F9uZb8Eff3QA)
