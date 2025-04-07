### SQL Server [T-SQL (Transact-SQL)] - Tipos de dados SQL Server


|     |     |     |     |     |
| --- | --- | --- | --- | --- |
| **Tipos Numéricos Aproximados** |     |     |     |     |
| **Tipo** | **Valor Mínimo** | **Valor Máximo** | **Tamanho (em bytes)** | **Precisão** |
| **float** | -1.79E+308 | 1.79E+308 | 4 ou 8 | Depende de n |
| **real** | -3.40E+38 | 3.40E+38 | 4   | 7 dígitos |

### Tipos Numéricos
---
|     |     |     |     |     |
| --- | --- | --- | --- | --- |
| **Tipo** | **Valor Mínimo** | **Valor Máximo** | **Tamanho (em bytes)** |     |
| **bit** | 0   | 1   | 0, 1 ou nulo |     |
| **tinyint** | 0   | 255 | 1   |     |
| **smallint** | -32.768 | 32.767 | 2   |     |
| **int** | -2.147.483.648 | 2.147.483.647 | 4   |     |
| **bigint** | -9.223.372.036.854.775.808 | 9.223.372.036.854.775.807 | 8   |     |
| **decimal(p, s)** | Varia com precisão e escala | Varia com precisão e escala | 5-17 |     |
| **numeric(p, s)** | Varia com precisão e escala | Varia com precisão e escala | 5-17 |     |
| **money** | -922.337.203.685.477.5808 | 922.337.203.685.477.5807 | 8   |     |
| **smallmoney** | -214.748.3648 | 214.748.3647 | 4   |     |

### Tipos de Data e Hora
---

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
| **Tipo** | **Faixa de Data** | **Precisão** | **Tamanho (em bytes)** |     |
| **datetime** | 1753-01-01 a 9999-12-31 | Milissegundos | 8   |     |
| **smalldatetime** | 1900-01-01 a 2079-06-06 | Minutos | 4   |     |
| **date** | 0001-01-01 a 9999-12-31 | Data | 3   |     |
| **time** | 00:00:00.0000000 a 23:59:59.9999999 | Nanossegundos | 3 a 5 |     |
| **datetime2** | 0001-01-01 a 9999-12-31 | Nanossegundos | 6 a 8 |     |
| **datetimeoffset** | 0001-01-01 a 9999-12-31 | Minutos e Nanossegundos | 8 a 10 |     |

### Tipos de Caracteres e Texto
---

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
| **Tipo** | **Descrição** | **Tamanho Máximo** |     |     |
| **char** | Caracteres não Unicode de comprimento fixo | 8.000 caracteres |     |     |
| **varchar** | Caracteres não Unicode de comprimento variável | 8.000 caracteres |     |     |
| **varchar(max)** | Caracteres não Unicode de comprimento variável para grandes volumes de texto | ~2 GB |     |     |
| **nchar** | Caracteres Unicode de comprimento fixo | 4.000 caracteres |     |     |
| **nvarchar** | Caracteres Unicode de comprimento variável | 4.000 caracteres |     |     |
| **nvarchar(max)** | Caracteres Unicode de comprimento variável para grandes volumes de texto | ~1 GB |     |     |
| text | Cadeia de caracteres de tamanho \*\*variável\*\*. | Até 2Gb de dados |     |     |



### Tipos Binários
---
|     |     |     |     |     |
| --- | --- | --- | --- | --- |
| **Tipo** | **Descrição** | **Tamanho Máximo** |     |     |
| **binary** | Binários de comprimento fixo | 8.000 bytes |     |     |
| **varbinary** | Binários de comprimento variável | 8.000 bytes |     |     |
| **varbinary(max)** | Binários de comprimento variável para grandes volumes de dados | ~2 GB |     |     |
| **Tipos Especiais** |     |     |     |     |
| **Tipo** | **Descrição** | **Tamanho Máximo** |     |     |
| **uniqueidentifier** | Identificador único global (GUID) | 16 bytes |     |     |
| **sql_variant** | Valores de vários tipos de dados | 8.000 bytes |     |     |
| **xml** | Dados XML | ~2 GB |     |     |
| **geometry** | Dados espaciais planares | Depende da complexidade da forma |     |     |
| **geography** | Dados espaciais geográficos | Depende da complexidade da forma |     |     |
| **hierarchyid** | Dados hierárquicos | 892 bytes |     |     |
| **timestamp** | Versionamento de linhas, não é uma data/hora real | 8 bytes |     |     |
|     |     |     |     |     |

 [Fonte: MC02](https://www.mco2.com.br/artigos/guia-completo-dos-tipos-de-dados-no-sql-server.html) 