// Source : https://leetcode.com/problems/median-employee-salary
// Author : Dubchak Valery

/***
The Employee table holds all employees. The employee table has three columns: Employee Id, Company Name, and Salary.
+-----+------------+--------+
|Id   | Company    | Salary |
+-----+------------+--------+
|1    | A          | 2341   |
|2    | A          | 341    |
|3    | A          | 15     |
|4    | A          | 15314  |
|5    | A          | 451    |
|6    | A          | 513    |
|7    | B          | 15     |
|8    | B          | 13     |
|9    | B          | 1154   |
|10   | B          | 1345   |
|11   | B          | 1221   |
|12   | B          | 234    |
|13   | C          | 2345   |
|14   | C          | 2645   |
|15   | C          | 2645   |
|16   | C          | 2652   |
|17   | C          | 65     |
+-----+------------+--------+
Write a SQL query to find the median salary of each company. Bonus points if you can solve it without using any built-in SQL functions.
+-----+------------+--------+
|Id   | Company    | Salary |
+-----+------------+--------+
|5    | A          | 451    |
|6    | A          | 513    |
|12   | B          | 234    |
|9    | B          | 1154   |
|14   | C          | 2645   |
+-----+------------+--------+

***/

/* Write your T-SQL query statement below */
/***
SELECT e1.*
FROM Employee e1, Employee e2
WHERE e1.Company = e2.Company
GROUP BY e1.Company, e1.Salary
HAVING SUM(CASE WHEN e1.Salary = e2.Salary THEN 1 ELSE 0 END) >= ABS(SUM(SIGN(e1.Salary - e2.Salary)))
*///