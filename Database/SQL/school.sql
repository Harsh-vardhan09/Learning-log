CREATE DATABASE IF NOT EXISTS school;
USE school;

CREATE TABLE teacher(
id INT PRIMARY KEY,
NAME VARCHAR(50),
subject VARCHAR(50),
salary INT
);

INSERT INTO teacher 
(id,NAME,subject,salary)
VALUES
(23,"ajay","math",50000),
(47,"bharat","english",60000),
(18,"chetan","chemistry",45000),
(21,"divya","physical edu",90000);

SELECT * FROM teacher;

SELECT * FROM teacher WHERE salary>50000;

ALTER TABLE teacher CHANGE COLUMN salary ctc INT;
SET SQL_SAFE_UPDATES=0;

UPDATE teacher SET ctc=ctc+ctc*0.25;

ALTER TABLE teacher ADD COLUMN city VARCHAR(30) DEFAULT "GURGAON";

ALTER TABLE teacher DROP COLUMN ctc;

CREATE TABLE student(
rollno INT PRIMARY KEY,
name VARCHAR(30),
city VARCHAR(30),
marks INT
);

INSERT INTO student
(rollno,name,city,marks)
VALUES
(110,"adam","delhi",76),
(108,"himanshu","delhi",89),
(109,"bob","pune",94),
(124,"casey","new york",76),
(111,"ishika","baghpat",86);

SELECT * FROM student;

SELECT * FROM student WHERE marks>=75;

SELECT DISTINCT CITY  FROM student;
SELECT CITY FROM student GROUP BY CITY;

SELECT CITY,MAX(marks) FROM student GROUP BY CITY;

SELECT AVG(MARKS) FROM student;

ALTER TABLE student 
ADD COLUMN grade VARCHAR(2);

UPDATE student 
SET grade="O"
WHERE MARKS>=80;

UPDATE student 
SET grade="A"
WHERE MARKS>=70 AND marks<80;

UPDATE student 
SET grade="B"
WHERE MARKS>=60 AND marks<70;




