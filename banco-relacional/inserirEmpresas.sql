insert into empresas
    (nome, cnpj)
values 
    ('Bradesco', 95676549789115),
    ('Vale', 28455315648942),
    ('Cielo', 01648646445324);

alter table empresas modify cnpj VARCHAR(14);

desc empresas;
select * from empresas;
select * from cidades;

insert into empresas_unidades (empresa_id, cidade_id, sede)
values (1, 1, 1),
       (1,2, 0),
       (2, 1, 0),
       (2, 4, 1);