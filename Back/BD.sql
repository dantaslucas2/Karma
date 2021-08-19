CREATE TABLE users (
    id_user INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(50),
    points INT,
    institution VARCHAR(100),
    password VARCHAR(100),
    user VARCHAR(100)
);

CREATE TABLE services (
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

CREATE TABLE contracts (
    id_contract INT AUTO_INCREMENT PRIMARY KEY,
    date_begin DATE,
    data_end DATE,
    points INT,
    id_service INT,
    id_request INT,
    FOREIGN KEY (id_service) REFERENCES services(id_service),
    FOREIGN KEY (id_request) REFERENCES users(id_user)
);
