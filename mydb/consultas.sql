ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

INSERT INTO producto (id_producto, nombre, tipo, color, talla, genero, precio) VALUES (2, 'camiseta interrail', 'camisetas', 'blanca', 'M', 'Hombre', 20);

SELECT * FROM producto;