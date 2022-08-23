CREATE TABLE IF NOT EXISTS `tasks` (
    id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    description varchar(255),
    completed BOOLEAN DEFAULT false
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;