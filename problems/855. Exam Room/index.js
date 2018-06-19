// Source : https://leetcode.com/problems/exam-room/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
In an exam room, there are N seats in a single row, numbered 0, 1, 2, ..., N-1.

When a student enters the room, they must sit in the seat that maximizes the distance to the closest person.  If there are multiple such seats, they sit in the seat with the lowest number.  (Also, if no one is in the room, then the student sits at seat number 0.)

Return a class ExamRoom(int N) that exposes two functions: ExamRoom.seat() returning an int representing what seat the student sat in, and ExamRoom.leave(int p) representing that the student in seat number p now leaves the room.  It is guaranteed that any calls to ExamRoom.leave(p) have a student sitting in seat p.

 

Example 1:

Input: ["ExamRoom","seat","seat","seat","seat","leave","seat"], [[10],[],[],[],[],[4],[]]
Output: [null,0,9,4,2,null,5]
***/

var ExamRoom = function(N) {
    this.seats = [], this.n = N - 1;
};


ExamRoom.prototype.seat = function() {
    if (this.seats.length == 0) {
       this.seats = [0];
        return 0;
    }
    let mx = ind = 0, n = this.seats.length;
    for (let i = 1; i < n; i++) {
        l = this.seats[i - 1], r = this.seats[i];
        d = Math.floor((r - l) / 2);
        if (d > mx) {
            mx = d, ind = l + d;
        }
    }
    if (this.seats[n - 1] != this.n && this.n - this.seats[n - 1] > mx) {
        mx = this.n - this.seats[n - 1], ind = this.n;
    }
    if (this.seats[0] >= mx) {
        mx = this.seats[0], ind = 0;
    }
    this.seats.push(ind);
    this.seats.sort(function (a, b) {return a - b;});
    return ind;
};


ExamRoom.prototype.leave = function(p) {
    this.seats.splice(this.seats.indexOf(p), 1);
};
 