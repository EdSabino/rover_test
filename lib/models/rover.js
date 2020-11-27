const Direction = require('./direction');

class Rover {
    constructor(face, initialPosition) {
        if (initialPosition.length !== 2) {
            throw new Error('invalid_length');
        }
        if (initialPosition[0] < 0 || initialPosition[1] < 0) {
            throw new Error('out_of_plateau');
        }
        this.direction = new Direction(face);
        this.position = initialPosition;
    }

    turnRight() { this.direction.toRight(); }
    turnLeft() { this.direction.toLeft(); }

    move() {
        const index = this.direction.isVerticalFacing() ? 1 : 0;
        const movement = this.direction.facingPositive() ? 1 : -1;
        this.position[index] += movement;
    }

    toString() {
        return `${this.position[0]} ${this.position[1]} ${this.direction.getChar()}`;
    }
}

module.exports = Rover;