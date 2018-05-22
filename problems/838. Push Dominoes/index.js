// Source : https://leetcode.com/problems/push-dominoes/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
There are N dominoes in a line, and we place each domino vertically upright.

In the beginning, we simultaneously push some of the dominoes either to the left or to the right.

After each second, each domino that is falling to the left pushes the adjacent domino on the left.

Similarly, the dominoes falling to the right push their adjacent dominoes standing on the right.

When a vertical domino has dominoes falling on it from both sides, it stays still due to the balance of the forces.

For the purposes of this question, we will consider that a falling domino expends no additional force to a falling or already fallen domino.

Given a string "S" representing the initial state. S[i] = 'L', if the i-th domino has been pushed to the left; S[i] = 'R', if the i-th domino has been pushed to the right; S[i] = '.', if the i-th domino has not been pushed.

Return a string representing the final state. 

Example 1:

Input: ".L.R...LR..L.."
Output: "LL.RR.LLRRLL.."
***/

var pushDominoes = module.exports = function(dominoes) {
        let A = dominoes;
        let N = A.length;
        let forces = Array(N).fill(0);

        let force = 0;
        for (let i = 0; i < N; i++) {
            if (A[i] == 'R') force = N;
            else if (A[i] == 'L') force = 0;
            else force = Math.max(force - 1, 0);
            forces[i] += force;
        }
    
        force = 0;
        for (let i = N-1; i >= 0; i--) {
            if (A[i] == 'L') force = N;
            else if (A[i] == 'R') force = 0;
            else force = Math.max(force - 1, 0);
            forces[i] -= force;
        }
    
        ans = "";
        for (f of forces)
            ans += f > 0 ? 'R' : f < 0 ? 'L' : '.';
        return ans;
};
 