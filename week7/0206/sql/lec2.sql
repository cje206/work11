USE kdt11;
CREATE TABLE employees (
	id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    username VARCHAR(31) NOT NULL,
    department VARCHAR(31) NOT NULL,
    salary INT
);

INSERT INTO employees (username, department, salary) VALUES
('홍길동', 'IT개발팀', 5000),
('이몽룡', '마케팅팀', 4000),
('성춘향', '디자인팀', 4500),
('임꺽정', 'IT개발팀', 6000),
('흥부', 'IT개발팀', 5500),
('놀부', '기획팀', 6000),
('변사또', '기획팀', 4800),
('황진이','디자인팀', 5000);

SELECT * FROM kdt11.employees;
SELECT DISTINCT department FROM employees;
SELECT department, AVG(salary) AS avg_salary FROM employees GROUP BY department HAVING AVG(salary) > 5000;
SELECT SUM(salary) AS sum_salary FROM employees;
SELECT count(*) AS count_employees FROM employees WHERE department = 'IT개발팀';