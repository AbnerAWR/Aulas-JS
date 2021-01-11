update estado
set nome = 'Maranhão'
where sigla = 'MA'

select est.nome from estado est where sigla = 'MA'

update estado
set nome = 'Paraná', populacao = 11.32
WHERE sigla = 'PR'

select nome, sigla, populacao from estado where sigla = 'PR'
