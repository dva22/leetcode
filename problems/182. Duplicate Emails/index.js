// Source : https://leetcode.com/problems/duplicate-emails/description/
// Author : Dubchak Valery

/***
Write a SQL query to find all duplicate emails in a table named Person.

+----+---------+
| Id | Email   |
+----+---------+
| 1  | a@b.com |
| 2  | c@d.com |
| 3  | a@b.com |
+----+---------+
For example, your query should return the following for the above table:

+---------+
| Email   |
+---------+
| a@b.com |
+---------+

***/

/* Write your T-SQL query statement below */
/***
select p.Email
from Person p
group by p.Email
having count(*) > 1;
*///