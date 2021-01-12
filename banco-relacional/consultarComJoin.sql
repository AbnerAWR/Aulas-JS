select 
    e.nome as Estado,
    c.nome as Cidade,
    regiao as Região
from estado e, cidades c
where e.id = c.estado_id;

select
    c.nome as Cidade,
    e.nome as Estado,
    regiao as Região
from estado e
inner join cidades c on e.id = c.estado_id 
