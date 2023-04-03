 create database pucast;
 use  pucast;
create table usuario(
id_usuario int not null,
nome varchar (255) not null,
Username varchar (255) not null,
email varchar (255) not null,
senha varchar (255) not null,
primary key (id_usuario)
);
create table podcast(
id_podcast int not null,
titulo varchar (50) not null,
descricao varchar (255) not null,
autor varchar (255) not null,
url varchar (255) not null,
primary key (id_podcast)
);
create table user_favorite_podcast(
id_podcast int not null,
id_usuario int not null,
foreign key (id_usuario) REFERENCES usuario(id_usuario),
foreign key (id_podcast) REFERENCES podcast(id_podcast)
);