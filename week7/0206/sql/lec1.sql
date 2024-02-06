use kdt11;

CREATE TABLE user (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100)
);

INSERT INTO user (username, age, address) VALUES ('홍길동', 13, '서울시 마포구');
INSERT INTO user (username, age, address) VALUES ('성춘향', 12, '서울시 강남구');
INSERT INTO user (username, age, address) VALUES ('이몽룡', 14, '서울시 용산구');
INSERT INTO user (username, age, address) VALUES ('임꺽정', 12, '서울시 영등포구');
INSERT INTO user (username, age, address) VALUES ('변사또', 30, '서울시 서대문구');
INSERT INTO user (username, age, address) VALUES ('황진이', 15, '서울시 강서구');

SELECT * FROM user; 
SELECT * FROM user WHERE age < 15 AND age >= 13; 
SELECT * FROM user WHERE username = '이몽룡';
SELECT * FROM user WHERE age >= 14 ORDER BY username DESC;
SELECT * FROM user WHERE address LIKE '%강남%';
SELECT * FROM user WHERE username LIKE '__향';
SELECT * FROM user WHERE age BETWEEN 13 AND 15;
SELECT * FROM user WHERE age IN(13,15) ORDER BY age DESC LIMIT 1;
SELECT * FROM user WHERE address IS NOT NULL;

UPDATE user SET address = '부산시 해운대구', age = 25 WHERE id = 1;
DELETE FROM user WHERE id = 8;