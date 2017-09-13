class TicTacToe {

    constructor() {
         this.arr = [
            [null,null,null],
            [null,null,null],
            [null,null,null]
        ];
        this.length = 0;
        this.p = 'x';

    }

    getCurrentPlayerSymbol() {
            return this.p;
    }

    nextTurn(rowIndex, columnIndex)
    {

            if(this.arr[rowIndex][columnIndex] != null)
        {
            return this;
        }

            this.arr[rowIndex][columnIndex] = this.p;
        
            this.length++;
        if(this.p == 'x')
        {
            this.p = 'o';
            return this;
        }
        if(this.p == 'o')
        {
            this.p = 'x';
            return this;
        }
    }

    isFinished() {


        if(this.arr[0][0] == 'x' && this.arr[0][1] == 'x' && this.arr[0][2] == 'x') return true;
        if(this.arr[1][0] == 'x' && this.arr[1][1] == 'x' && this.arr[1][2] == 'x') return true;
        if(this.arr[2][0] == 'x' && this.arr[2][1] == 'x' && this.arr[2][2] == 'x') return true;
        if(this.arr[0][0] == 'x' && this.arr[1][0] == 'x' && this.arr[2][0] == 'x') return true;
        if(this.arr[0][1] == 'x' && this.arr[1][1] == 'x' && this.arr[2][1] == 'x') return true;
        if(this.arr[0][2] == 'x' && this.arr[1][2] == 'x' && this.arr[2][2] == 'x') return true;
        if(this.arr[0][0] == 'x' && this.arr[1][1] == 'x' && this.arr[2][2] == 'x') return true;
        if(this.arr[0][2] == 'x' && this.arr[1][1] == 'x' && this.arr[2][0] == 'x') return true;

        if(this.arr[0][0] == 'o' && this.arr[0][1] == 'o' && this.arr[0][2] == 'o') return true;
        if(this.arr[1][0] == 'o' && this.arr[1][1] == 'o' && this.arr[1][2] == 'o') return true;
        if(this.arr[2][0] == 'o' && this.arr[2][1] == 'o' && this.arr[2][2] == 'o') return true;
        if(this.arr[0][0] == 'o' && this.arr[1][0] == 'o' && this.arr[2][0] == 'o') return true;
        if(this.arr[0][1] == 'o' && this.arr[1][1] == 'o' && this.arr[2][1] == 'o') return true;
        if(this.arr[0][2] == 'o' && this.arr[1][2] == 'o' && this.arr[2][2] == 'o') return true;
        if(this.arr[0][0] == 'o' && this.arr[1][1] == 'o' && this.arr[2][2] == 'o') return true;
        if(this.arr[0][2] == 'o' && this.arr[1][1] == 'o' && this.arr[2][0] == 'o') return true;
        for(var x = 0; x <=2; x++) {
            for (var y = 0; y <= 2; y++) {
                if(this.arr[x][y] == null)
                    return false;
            }
        }
        return true;
    }

    getWinner() {
        if(this.arr[0][0] == 'x' && this.arr[0][1] == 'x' && this.arr[0][2] == 'x') return 'x';
        if(this.arr[1][0] == 'x' && this.arr[1][1] == 'x' && this.arr[1][2] == 'x') return 'x';
        if(this.arr[2][0] == 'x' && this.arr[2][1] == 'x' && this.arr[2][2] == 'x') return 'x';
        if(this.arr[0][0] == 'x' && this.arr[1][0] == 'x' && this.arr[2][0] == 'x') return 'x';
        if(this.arr[0][1] == 'x' && this.arr[1][1] == 'x' && this.arr[2][1] == 'x') return 'x';
        if(this.arr[0][2] == 'x' && this.arr[1][2] == 'x' && this.arr[2][2] == 'x') return 'x';
        if(this.arr[0][0] == 'x' && this.arr[1][1] == 'x' && this.arr[2][2] == 'x') return 'x';
        if(this.arr[0][2] == 'x' && this.arr[1][1] == 'x' && this.arr[2][0] == 'x') return 'x';

        if(this.arr[0][0] == 'o' && this.arr[0][1] == 'o' && this.arr[0][2] == 'o') return 'o';
        if(this.arr[1][0] == 'o' && this.arr[1][1] == 'o' && this.arr[1][2] == 'o') return 'o';
        if(this.arr[2][0] == 'o' && this.arr[2][1] == 'o' && this.arr[2][2] == 'o') return 'o';
        if(this.arr[0][0] == 'o' && this.arr[1][0] == 'o' && this.arr[2][0] == 'o') return 'o';
        if(this.arr[0][1] == 'o' && this.arr[1][1] == 'o' && this.arr[2][1] == 'o') return 'o';
        if(this.arr[0][2] == 'o' && this.arr[1][2] == 'o' && this.arr[2][2] == 'o') return 'o';
        if(this.arr[0][0] == 'o' && this.arr[1][1] == 'o' && this.arr[2][2] == 'o') return 'o';
        if(this.arr[0][2] == 'o' && this.arr[1][1] == 'o' && this.arr[2][0] == 'o') return 'o';
        return null;
    }

    noMoreTurns() {
        for(var x = 0; x <=2; x++) {
            for (var y = 0; y <= 2; y++) {
                if(this.arr[x][y] == null)
                    return false;
            }
        }
        return true;

    }

    isDraw() {
        for(var x = 0; x <=2; x++) {
            for (var y = 0; y <= 2; y++) {
                if(this.arr[x][y] == null)
                    return false;
            }
        }
        if(this.arr[0][0] == 'x' && this.arr[0][1] == 'x' && this.arr[0][2] == 'x') return false;
        if(this.arr[1][0] == 'x' && this.arr[1][1] == 'x' && this.arr[1][2] == 'x') return false;
        if(this.arr[2][0] == 'x' && this.arr[2][1] == 'x' && this.arr[2][2] == 'x') return false;
        if(this.arr[0][0] == 'x' && this.arr[1][0] == 'x' && this.arr[2][0] == 'x') return false;
        if(this.arr[0][1] == 'x' && this.arr[1][1] == 'x' && this.arr[2][1] == 'x') return false;
        if(this.arr[0][2] == 'x' && this.arr[1][2] == 'x' && this.arr[2][2] == 'x') return false;
        if(this.arr[0][0] == 'x' && this.arr[1][1] == 'x' && this.arr[2][2] == 'x') return false;
        if(this.arr[0][2] == 'x' && this.arr[1][1] == 'x' && this.arr[2][0] == 'x') return false;

        if(this.arr[0][0] == 'o' && this.arr[0][1] == 'o' && this.arr[0][2] == 'o') return false;
        if(this.arr[1][0] == 'o' && this.arr[1][1] == 'o' && this.arr[1][2] == 'o') return false;
        if(this.arr[2][0] == 'o' && this.arr[2][1] == 'o' && this.arr[2][2] == 'o') return false;
        if(this.arr[0][0] == 'o' && this.arr[1][0] == 'o' && this.arr[2][0] == 'o') return false;
        if(this.arr[0][1] == 'o' && this.arr[1][1] == 'o' && this.arr[2][1] == 'o') return false;
        if(this.arr[0][2] == 'o' && this.arr[1][2] == 'o' && this.arr[2][2] == 'o') return false;
        if(this.arr[0][0] == 'o' && this.arr[1][1] == 'o' && this.arr[2][2] == 'o') return false;
        if(this.arr[0][2] == 'o' && this.arr[1][1] == 'o' && this.arr[2][0] == 'o') return false;

        return true;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.arr[rowIndex][colIndex];

    }
}

module.exports = TicTacToe;
