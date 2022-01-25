create database sitethes;
use sitethes;

create table the (
id INT auto_increment primary key not null,
nom varchar(50)
);

insert into the (nom) values ("vert"), ("noir");

select * from the;