select regiao as 'Região',
    sum(populacao) as Total
from estado
GROUP BY regiao
order by total desc

 