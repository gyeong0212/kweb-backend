CREATE TABLE `students` (
`id` INT NOT NULL AUTO_INCREMENT,
`학생 이름` VARCHAR(20) NOT NULL,
`입학연도` INT NOT NULL,
`전공` VARCHAR(20) NOT NULL,
`학번` INT NOT NULL,
`전화번호` VARCHAR(11) NOT NULL,
`주소` VARCHAR(100) NOT NULL,
`누적 이수학점` INT NOT NULL DEFAULT 0,
`평균 평점` DOUBLE NOT NULL DEFAULT 0.0,
`재학 여부` TINYINT(1) NOT NULL DEFAULT 1,
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
