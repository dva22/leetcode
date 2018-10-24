// Source : https://leetcode.com/problems/department-top-three-salaries/description/
// Author : Dubchak Valery

/***
The Employee table holds all employees. Every employee has an Id, and there is also a column for the department Id.

+----+-------+--------+--------------+
| Id | Name  | Salary | DepartmentId |
+----+-------+--------+--------------+
| 1  | Joe   | 70000  | 1            |
| 2  | Henry | 80000  | 2            |
| 3  | Sam   | 60000  | 2            |
| 4  | Max   | 90000  | 1            |
| 5  | Janet | 69000  | 1            |
| 6  | Randy | 85000  | 1            |
+----+-------+--------+--------------+
The Department table holds all departments of the company.

+----+----------+
| Id | Name     |
+----+----------+
| 1  | IT       |
| 2  | Sales    |
+----+----------+
Write a SQL query to find employees who earn the top three salaries in each of the department. For the above tables, your SQL query should return the following rows.

+------------+----------+--------+
| Department | Employee | Salary |
+------------+----------+--------+
| IT         | Max      | 90000  |
| IT         | Randy    | 85000  |
| IT         | Joe      | 70000  |
| Sales      | Henry    | 80000  |
| Sales      | Sam      | 60000  |
+------------+----------+--------+
/***
Select d.Name Department, SalaryRank.Name Employee, SalaryRank.Salary Salary
from
(select E.DepartmentId, E.Name, E.Salary, (
    select count(distinct E2.Salary)
    from Employee E1, Employee E2 
    where E1.DepartmentId = E2.DepartmentId and
          E1.Salary < E2.Salary and
          E.Id = E1.Id  
) rank
from Employee E) SalaryRank,
Department d
where d.Id = SalaryRank.DepartmentId and
      SalaryRank.Rank < 3
order by 1, 3 desc
*///