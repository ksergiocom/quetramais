DROP DATABASE IF EXISTS log_server;

CREATE DATABASE log_server;

USE log_server;

DROP TABLE IF EXISTS requests;

CREATE TABLE `requests` (
  `id` int NOT NULL AUTO_INCREMENT,
  `timestamp` datetime NOT NULL,
  `url` varchar(255) NOT NULL,
  `method` varchar(255) NOT NULL,
  `ip` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
