// I think this should work like a clock to make it easier to control and test
const directions = {
    N: 0,
    E: 1,
    S: 2,
    W: 3
}

class Direction {
    constructor (initialFace) {
        if (!Object.keys(directions).includes(initialFace)) {
            throw new Error('invalid_direction');
        }
        this.face = directions[initialFace];
    }

    toLeft() {
        // loops to the other side
        if (this.face === directions.N) {
            this.face = directions.W;
        } else {
            this.face -= 1;
        }
    }

    toRight() {
        // loops to the other side
        if (this.face === directions.W) {
            this.face = directions.N;
        } else {
            this.face += 1;
        }
    }

    getChar() {
        return Object.keys(directions)[this.face];
    }

    isVerticalFacing() {
        return this.face % 2 == 0;
    }

    facingPositive() {
        return this.face < 2;
    }
}

module.exports = Direction;