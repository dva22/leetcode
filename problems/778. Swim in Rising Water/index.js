// Source : https://leetcode.com/problems/swim-in-rising-water/description/
// Author : Dubchak Valery (dva@farma.amur.ru)

/***
On an N x N grid, each square grid[i][j] represents the elevation at that point (i,j).

Now rain starts to fall. At time t, the depth of the water everywhere is t. You can swim from a square to another 4-directionally adjacent square if and only if the elevation of both squares individually are at most t. You can swim infinite distance in zero time. Of course, you must stay within the boundaries of the grid during your swim.

You start at the top left square (0, 0). What is the least time until you can reach the bottom right square (N-1, N-1)?

Example 1:

Input: [[0,2],[1,3]]
Output: 3
***/

module.exports = function swimInWater(grid) {
  const H = grid.length;
  const W = H && grid[0].length;
  const pq = new Heap((a, b) => grid[a[0]][a[1]]-grid[b[0]][b[1]]);
  const seen = [...Array(H)].map(r => Array(W).fill(false));
  let max = 0;
  
  pq.push([0, 0]);
  seen[0][0] = true;
  while (true) {
    const [r, c] = pq.pop();
    max = Math.max(max, grid[r][c]);
    if (r === H-1 && c === W-1) {
      return max;
    }
    
    for (let [dr, dc] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
      const rr = r+dr;
      const cc = c+dc;
      if (rr < 0 || cc < 0 || rr >= H || cc >= W || seen[rr][cc]) continue;
      seen[rr][cc] = true;
      pq.push([rr, cc]);
    }
  }
}
function Heap(n=((n,t)=>n-t)){const t=[];return{push:function(e){t.push(e),function(){let e=t.length-1,o=e-1>>1;for(;0!==e&&n(t[e],t[o])<0;)[t[e],t[o]]=[t[o],t[e]],o=(e=o)-1>>1}()},pop:function(){const o=e(),u=t.pop();t.length>0&&(t[0]=u,function(){let e=0;for(;;){let o=e;for(const u of[2*e+1,2*e+2])u<t.length&&n(t[u],t[o])<0&&(o=u);if(o===e)return;[t[e],t[o]]=[t[o],t[e]],e=o}}());return o},peek:e,size:function(){return t.length}};function e(){return t[0]}}