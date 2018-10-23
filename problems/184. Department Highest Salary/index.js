// Source : https://leetcode.com/problems/department-highest-salary/description/
// Author : Dubchak Valery

/***
The Employee table holds all employees. Every employee has an Id, a salary, and there is also a column for the department Id.

+----+-------+--------+--------------+
| Id | Name  | Salary | DepartmentId |
+----+-------+--------+--------------+
| 1  | Joe   | 70000  | 1            |
| 2  | Henry | 80000  | 2            |
| 3  | Sam   | 60000  | 2            |
| 4  | Max   | 90000  | 1            |
+----+-------+--------+--------------+
The Department table holds all departments of the company.

+----+----------+
| Id | Name     |
+----+----------+
| 1  | IT       |
| 2  | Sales    |
+----+----------+
Write a SQL query to find employees who have the highest salary in each of the departments. For the above tables, Max has the highest salary in the IT department and Henry has the highest salary in the Sales department.

+------------+----------+--------+
| Department | Employee | Salary |
+------------+----------+--------+
| IT         | Max      | 90000  |
| Sales      | Henry    | 80000  |
+------------+----------+--------+

***/

/* Write your T-SQL query statement below */
/***
select D.Name Department, E.Name Employee, E.Salary Salary 
from Department D,
     Employee E,
     (select max(E1.Salary) E1Salary, E1.DepartmentId E1DepartmentId 
     from Employee E1
     group by E1.DepartmentId) E1   
where E.Salary = E1.E1Salary and
      E.DepartmentId = E1.E1DepartmentId  and
      D.Id = E.DepartmentId
*///