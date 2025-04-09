### SQL Server [T-SQL (Transact-SQL)] - [Cláusula WITH TIES](https://www.youtube.com/watch?v=pm-dEMGidlE&list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&index=35)

* A cláusula WITH TIES é utilizada juntamente com a função TOP. Quando **não utilizada**, resultados de mesmo valor **que o último item** listado na função TOP não são exibidos.

* O que a cláusula WITH TIES modifica nesse cenário é que, se itens da tabela pesquisada com a função TOP tiverem o mesmo valor que o último item, **estes também serão exibidos** na consulta.

--- 
#### Sintaxe

	SELECT TOP(3) WITH TIES coluna1, coluna2 -- Atentar para a posição da cláusula na consulta
	FROM nome_tabela
	ORDER by coluna2 DESC;
	
* Neste exemplo, todos os itens que tiverem valor igual ao terceiro item, como t **serão exibidos** na consulta.

---
#### Tabela criada para os exemplos

	CREATE TABLE times(
	  nome_time VARCHAR(30),
	  pontos INT NOT NULL
	  );

	INSERT INTO times(nome_time, pontos)
		VALUES
			('Atlético-MG',1),
			('Bahia',2),
			('Botafogo',4),
			('Bragantino',1),
			('Ceará SC',4),
			('Corinthians',4),
			('Cruzeiro',3),
			('EC Vitória',0),
			('Flamengo',4),
			('Fluminense',3),
			('Fortaleza',4),
			('Grêmio',3),
			('Internacional',4),
			('Juventude',3),
			('Mirassol',1),
			('Palmeiras',4),
			('Santos',1),
			('São Paulo',2),
			('Sport Recife',1),
			('Vasco da Gama',3);			

Exemplo1: -- **Sem usar** a cláusula WITH TIES

	SELECT TOP(3) nome_time, pontos
	FROM times
	ORDER BY pontos DESC;
	
* Neste caso, **sem a cláusula WITH TIES**, ainda que 7 times tenham os mesmos 4 pontos, **apenas 3** serão listados. Sendo essa "prioridade" relacionada ao ordenamento **do cadastro** da informação.
    
---
Exemplo2: -- **Usando** a cláusula WITH TIES
    
	SELECT TOP(3) WITH TIES nome_time, pontos
	FROM times
	ORDER by pontos DESC;
	
* Com o **uso da cláusula** WITH TIES, ainda que a consulta determine a exibição dos 3 primeiros em função da coluna pontos, como o último item possui valor igual a itens posteriores pelo mesmo critério de ordenação, todos os que tiverem esses valores repetidos serão listados na consulta. Afinal, o critério é de **3 maiores pontuações**. 
	
---

[**Fonte**: Bóson Treinamentos](https://youtube.com/playlist?list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&si=iTJ-F9uZb8Eff3QA)
