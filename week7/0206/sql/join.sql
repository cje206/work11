-- 1
CREATE TABLE customer (
	id VARCHAR(10) NOT NULL PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    birthday DATE NOT NULL
);

INSERT INTO customer (id, name, birthday) VALUES
('aaa', '홍길동', '1999-03-17'),
('bbb', '성춘향', '1992-02-06'),
('ccc', '이몽룡', '1991-05-13');

CREATE TABLE orderlist (
	id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    customer_id VARCHAR(10) NOT NULL,
    product_name VARCHAR(20) NOT NULL,
    quantity INT,
    FOREIGN KEY (customer_id) REFERENCES customer(id)
);

INSERT INTO orderlist (customer_id, product_name, quantity) VALUES
('aaa', '맥북프로', 1),
('bbb', '모니터', 10),
('ccc', '키보드', 3),
('bbb', '핸드폰', 2),
('ccc', '마우스', 10);

SELECT a.id AS order_id, a.name, b.product_name FROM customer AS a 
INNER JOIN orderlist AS b ON a.id = b.customer_id 
WHERE b.quantity >= 5;


-- 2
CREATE TABLE departments (
	department_id INT PRIMARY KEY,
    department_name VARCHAR(255) NOT NULL
);

DROP TABLE employees;
CREATE TABLE employees (
	employee_id INT PRIMARY KEY,
    username VARCHAR(31) NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);

INSERT INTO departments (department_id, department_name) VALUES
(1, '기획팀'),
(2, 'IT개발팀'),
(3, '디자인팀');

INSERT INTO employees (employee_id, username, department_id) VALUES
(1, '홍길동', 2),
(2, '성춘향', 3),
(3, '이몽룡', NULL),
(4, '임꺽정', 2),
(5, '황진이', 3);

SELECT a.employee_id, a.username, b.department_name 
FROM employees AS a INNER JOIN departments AS b
ON a.department_id = b.department_id; 
-- ㄴ inner join은 양쪽에 모두 있는 데이터만 가져오므로 department_id가 null값인 이몽룡의 데이터는 보이지 않음

SELECT a.employee_id, a.username, b.department_name 
FROM employees AS a LEFT JOIN departments AS b
ON a.department_id = b.department_id;