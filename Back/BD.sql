CREATE TABLE karmaschema.Users(
    Id_User int not null,
    User varchar(120),
    Password varchar(120),
    Name varchar(255),
    Email varchar(255),
    Points int,
    Instituicion varchar(255),
    primary key(id_user)
    
);