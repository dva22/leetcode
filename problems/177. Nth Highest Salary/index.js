// Source : https://leetcode.com/problems/nth-highest-salary/description/
// Author : Dubchak Valery

/***
Write a SQL query to get the nth highest salary from the Employee table.

+----+--------+
| Id | Salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+
For example, given the above Employee table, the nth highest salary where n = 2 is 200. If there is no nth highest salary, then the query should return null.

+------------------------+
| getNthHighestSalary(2) |
+------------------------+
| 200                    |
+------------------------+

***/

/* Write your T-SQL query statement below */
/***
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT

BEGIN
DECLARE N1 INT(4);
set N1 = N - 1;
  RETURN (
      # Write your MySQL query statement below.
      select Salary
      from Employee
      group by 1
      order by Salary desc 
      limit N1,1
  );
END
*///