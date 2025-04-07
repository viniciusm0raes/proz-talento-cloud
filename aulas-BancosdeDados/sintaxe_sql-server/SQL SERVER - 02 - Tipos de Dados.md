#### SQL Server [T-SQL (Transact-SQL)] - Tipos de dados

Tipo         	  | Armazenamento   					| Descrição
---          	  | ---                                 | ---
**char(n)**       | n (o número de caracteres desejado) | String de caracteres detamanho **fixo**, máximo de 8.000 caracteres. 
**varchar(n)**    |                                     | String de caracteres de tamanho **variável**, máximo de 8.000 caracteres.
**nchar(n)**      |                                     | Dados Unicode de tamanho **fixo**, máximo de 4.000 caracteres.
**nvarchar(n)**   |                                     | Dados Unicode de tamanho **variável**, máximo de 4.000 caracteres.
**bit**           |                                     | 0, 1 ou nulo.
**tinyint**       | 1 byte                              | Números inteiros de 0 a 255.
**smallint**      | 2 bytes                             | Números inteiros de -32768 a 32767.
**int**           | 4 bytes                             | Números inteiros entre -2.147.483.648 e 2.147.483.647
**bigint**        | 8 bytes                             | Números entre -9.223.372.036.854.775.808 e 9.223.372.036.854.775.807.
**real**          | 4 bytes                             | Números de ponto flutuante entre -3.4 x 10<sup>38 e 3.4 x 10<sup>38.
**datetime**      | 8 bytes                             | Data e hora de 01/01/1753 a 31/12/9999, com uma precisão de 3.33 milesegundos.
**smalldatetime** | 4 bytes                             | Data e hora de 01/01/1900 a 06/06/2079, com uma precisão de 1 minuto.
**date**          | 3 bytes                             | Data apenas. De 01/01/0001 a 31/12/9999.
**time**          | 3-5 bytes                           | Hora apenas. Precisão de até 100 nanossegundos.
**text**          |                                     | Cadeia de caracteres de tamanho **variável**. Até 2Gb de dados.
**money**         | 8 bytes                             | Dados monetários de -922.337.203.685.477.5808 até 922.337.203.685.477.5807.
****

[**Fonte**: Bóson Treinamentos](https://youtube.com/playlist?list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK&si=iTJ-F9uZb8Eff3QA)