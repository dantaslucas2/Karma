CREATE DATABASE Karma;

USE Karma;

CREATE TABLE Users (
    id_user INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(50),
    points INT,
    institution VARCHAR(100),
    password VARCHAR(100),
    user VARCHAR(100)
);

CREATE TABLE Services (
    id_service INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    tag VARCHAR(100),
    points INT NOT NULL,
    category VARCHAR(100),
    description VARCHAR(200),
    status INT,
    type_service VARCHAR(200),
    id_owner INT,
    FOREIGN KEY (id_owner) REFERENCES users(id_user)
);

CREATE TABLE Contracts (
    id_contract INT AUTO_INCREMENT PRIMARY KEY,
    date_begin DATE,
    data_end DATE,
    points INT,
    id_service INT,
    id_request INT,
    FOREIGN KEY (id_service) REFERENCES services(id_service),
    FOREIGN KEY (id_request) REFERENCES users(id_user)
);

INSERT INTO users (name, email, points, institution, password, user)
VALUES ("Murphy", "murphy@hotmail.com", 100, "Cacholand", "AuAuAu", "murphyzinho");

INSERT INTO services (title, tag, points, category, description, status, type_service, id_owner)
VALUES ("Limpar Casa", "Limpeza", 50, "Serviços", "Limpeza de casas", 1, "Limpeza", 1);

INSERT INTO contracts (date_begin, data_end, points, id_service, id_request)
VALUES ("2018-12-03", "2018-12-04", 50, 1, 1);
