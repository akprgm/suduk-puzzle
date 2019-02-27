//Modify the solution array for new input test case
const sol = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 3, 4, 5, 6, 7, 8, 9, 1],
    [3, 4, 5, 6, 7, 8, 9, 1, 2],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [5, 6, 7, 8, 9, 1, 2, 3, 4],
    [6, 7, 8, 9, 1, 2, 3, 4, 5],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [8, 9, 1, 2, 3, 4, 5, 6, 7],
    [9, 1, 2, 3, 4, 5, 6, 7, 8],
];

// sum of all number from 1 to 9
const sum = 45;
const horiSum = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // horizontal sum
const vertiSum = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // vertical sum
const boxSum = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // 3*3 cubes sum
for (let i=0; i<9; i++) {
    for (let k=0; k<9; k++) {
        horiSum[i] += sol[i][k];
        vertiSum[k] += sol[k][i];  
        if (i<=2 && k<=2) {
            boxSum[0] += sol[i][k];
        } else if (i<=2 && k<=5 && k>2)  {
            boxSum[1] = sol[i][k]
        } else if (i<=2 && k<=8 && k>5)  {
            boxSum[2] += sol[i][k]
        } else if (i>2 && i<=5 && k<=2)  {
            boxSum[3] += sol[i][k]
        } else if (i>2 && i<=5 && k<=5 && k>2)  {
            boxSum[4] += sol[i][k]
        } else if (i>2 && i<=5 && k<=8 && k>5)  {
            boxSum[5] += sol[i][k]
        } else if (i>5 && i<=8 && k<=2)  {
            boxSum[6] += sol[i][k]
        } else if (i>5 && i<=8 && k<=5 && k>2)  {
            boxSum[7] += sol[i][k]
        } else if (i>5 && i<=8 && k<=8 && k>5)  {
            boxSum[8] += sol[i][k]
        }     
    }
}

(function checkSudoko() {
    for (let i=0; i<9; i++) {
        if (horiSum[i] !== 45) {
            console.log("Invalid Solution of Sudoku");
            return;
        } 
    }
    for (let i=0; i<9; i++) {
        if (vertiSum[i] !== 45) {
            console.log("Invalid Solution of Sudoku");
            return;
        } 
    }
    for (let i=0; i<9; i++) {
        if (boxSum[i] !== 45) {
            console.log("Invalid Solution of Sudoku");
            return;
        } 
    }
})();