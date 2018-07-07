// Source : https://leetcode.com/problems/cheapest-flights-within-k-stops/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
There are n cities connected by m flights. Each fight starts from city u and arrives at v with a price w.

Now given all the cities and fights, together with starting city src and the destination dst, your task is to find the cheapest price from src to dst with up to k stops. If there is no such route, output -1.

Example 1:
Input: 
n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
src = 0, dst = 2, k = 1
Output: 200
***/

var findCheapestPrice = module.exports= function(n, flights, src, dst, K) {
    const incomingNeighborInfo = createIncomingNeighborInfo(flights);

    const solution = {};

    for (let k=0; k<=K; k++) {
        for (let i=0; i<n; i++) {
            if (solution[k]) {
                solution[k][i] = -1;
            } else {
                solution[k] = {};
                solution[k][i] = -1;                
            }
        }
    }

    for (let k=0; k<=K; k++) {

        for (let i=0; i<n; i++) {

            let min = Number.MAX_SAFE_INTEGER;

            if (incomingNeighborInfo[i]) {
                for (let j=0; j<incomingNeighborInfo[i].length; j++) {
                    const neighbor = incomingNeighborInfo[i][j];
                    if (k > 0) {
                        if (solution[k-1][neighbor.src] !== -1 && (solution[k-1][neighbor.src] + neighbor.price) < min) {
                            min = solution[k-1][neighbor.src] + neighbor.price;
                        }
                    } else {
                        if (neighbor.src === src && neighbor.price < min) {
                            min = neighbor.price;
                        }
                    }
                }               
            }

            if (min !== Number.MAX_SAFE_INTEGER) {
                solution[k][i] = min;
            }
        }
    }

    let cheapest = Number.MAX_SAFE_INTEGER;

    for (k=0; k<=K; k++) {
        if (solution[k][dst] !== -1 && solution[k][dst] < cheapest) {
            cheapest = solution[k][dst];
        } 
    }

    if (cheapest !== Number.MAX_SAFE_INTEGER) {
        return cheapest;
    }

    return -1; 
};

function createIncomingNeighborInfo(flights) {
    const incomingNeighborInfo = {};

    for (let i=0; i<flights.length; i++) {
        const flight = flights[i];

        const src = flights[i][0];
        const dest = flights[i][1];
        const price = flights[i][2];

        const srcPrice = {
            src: src,
            price: price
        };

        if (incomingNeighborInfo[dest] !== undefined) {
            incomingNeighborInfo[dest].push(srcPrice);
        } else {
            incomingNeighborInfo[dest] = [srcPrice];
        }
    }

    return incomingNeighborInfo;        
}