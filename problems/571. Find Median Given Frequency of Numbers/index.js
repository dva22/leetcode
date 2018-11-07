// Source : https://leetcode.com/problems/find-median-given-frequency-of-numbers
// Author : Dubchak Valery

/***
-- The Numbers table keeps the value of number and its frequency.
--
--+----------+-------------+
--|  Number  |  Frequency  |
--+----------+-------------|
--|  0       |  7          |
--|  1       |  1          |
--|  2       |  3          |
--|  3       |  1          |
--+----------+-------------+
--
--In this table, the numbers are 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 3, so the median is (0 + 0) / 2 = 0.
--
--+--------+
--| median |
--+--------|
--| 0.0000 |
--+--------+
--
--Write a query to find the median of all numbers and name the result as median.
+-----+------------+--------+

***/

/* Write your T-SQL query statement below */
/***
SELECT AVG(n1.Number) median
FROM Numbers n1
LEFT JOIN (SELECT Number, @prev:=@count prev_num, (@count:=@count+Frequency) count_num
           FROM Numbers, 
                (SELECT @count:=0, @prev:=0, @total:=(SELECT SUM(Frequency) FROM Numbers)) temp
                ORDER BY Number) n2
ON n1.Number = n2.Number
WHERE (prev_num < FLOOR((@total+1)/2) AND count_num >= FLOOR((@total+1)/2))
OR (prev_num < FLOOR((@total+2)/2) AND count_num >= FLOOR((@total+2)/2))
*///