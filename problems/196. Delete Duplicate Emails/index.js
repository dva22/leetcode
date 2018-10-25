// Source : https://leetcode.com/problems/department-top-three-salaries/description/
// Author : Dubchak Valery

/***Write a SQL query to delete all duplicate email entries in a table named Person, keeping only unique emails based on its smallest Id.

+----+------------------+
| Id | Email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
| 3  | john@example.com |
+----+------------------+
Id is the primary key column for this table.
For example, after running your query, the above Person table should have the following rows:

+----+------------------+
| Id | Email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
+----+------------------+
****/

/***
delete
from Person 
where Id not in
(select tmp.id from (select min(p1.Id) id
from Person p1
group by p1.Email) tmp)
*///