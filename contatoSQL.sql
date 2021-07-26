CREATE DATABASE agenda;

USE agenda;

CREATE TABLE contato(
	id int auto_increment not null primary key,
    prinome varchar(255) not null,
    ulnome varchar(255) not null,
    email varchar(255) not null,
    telefone varchar(11) not null
)

select * from agenda.contato;
    