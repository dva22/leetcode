// Source : https://leetcode.com/problems/linked-list-components/description/
// Author : Dubchak Valery (dva@farma.amur.ru)

/***
We are given head, the head node of a linked list containing unique integer values.

We are also given the list G, a subset of the values in the linked list.

Return the number of connected components in G, where two values are connected if they appear consecutively in the linked list.

Example 1:

Input: 
head: 0->1->2->3
G = [0, 1, 3]
Output: 2
Explanation: 
0 and 1 are connected, so [0, 1] and [3] are the two connected components.
***/

var numComponents = module.exports = function(head, G) {
    
        Gset = new Set();
        for (x of G) Gset.add(x);

        cur = head;
        ans = 0;

        while (cur != null) {
            if (Gset.has(cur.val) &&
                    (cur.next == null || !Gset.has(cur.next.val)))
                ans++;
            cur = cur.next;
        }

        return ans;
};