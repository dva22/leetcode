// Source : https://leetcode.com/problems/number-of-music-playlists/description/
// Author : Dubchak Valery

/***
Your music player contains N different songs and she wants to listen to L (not necessarily different) songs during your trip.  You create a playlist so that:

Every song is played at least once
A song can only be played again only if K other songs have been played
Return the number of possible playlists.  As the answer can be very large, return it modulo 10^9 + 7.

 

Example 1:

Input: N = 3, L = 3, K = 1
Output: 6

***/

var numMusicPlaylists = module.exports = function(N, L, K) {
     const MAGIC = 10 ** 9 + 7
    let f = new Array(L + 1).fill(0).map(a => new Array(N + 1).fill(0))
    f[0][0] = 1    
    // f[i][j] represents the number of playlists that its length is i and it contains j different songs
    for(let i = 1; i <= L; i++) {
        for (let j = 1; j <= Math.min(i, N); j++) {
            // Add a new song to playlist
            f[i][j] += f[i - 1][j - 1] * (N - j + 1)
            // Add an existed song to playlist
            f[i][j] += f[i - 1][j] * Math.max(j - K, 0)
            f[i][j] = f[i][j] % MAGIC
        }
    }
    return f[L][N]
};