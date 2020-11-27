const Rover = require("../actors/rover");

class Instruction {
    constructor(rover, sequence) {
        if (!(typeof rover !== Rover)) {
            throw new Error('argument_must_be_Rover')
        }
        this.rover = rover;
        this.sequence = sequence;
    }

    actions = {
        M: () => this.rover.move(),
        L: () => this.rover.turnLeft(),
        R: () => this.rover.turnRight()
    }

    execute(plateau) {
        const splited = this.sequence.split('');
        const validActions = Object.keys(this.actions);
        for (let char of splited) {
            if (!validActions.includes(char)) {
                throw new Error('invalid_action_' + char);
            }
            this.actions[char]();
        }
        if (!plateau.isPositionOnLimit(this.rover.position)) {
            throw new Error('rover_out_of_plateau');
        }
        return this.rover;
    }
}

module.exports = Instruction;
