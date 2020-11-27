const Instruction = require("./instruction");
const Rover = require("../actors/rover");

class Parse {
    constructor(baseString) {
        this.baseString = baseString;
    }

    execute() {
        const lines = this.baseString.split('\n');
        const plateau = new Plateau(lines[0].split(' ').map(p => Number(p)));
        const instructions = _parseInstructions(lines.slice(1, lines.length));
        return {
            plateau,
            instructions
        }
    }

    _parseInstructions(instructionLines) {
        const instructions = [];
        for (let i = 0; i < instructionLines.length; i += 2) {
            const roverVar = instructionLines[i].split(' ');
            const rover = new Rover(roverVar[2], roverVar.slice(0, 2).map(p => Number(p)));
            instructions.push(new Instruction(rover, instructionLines[i + 1]));
        }
        return instructions
    }
}

module.exports = Parse;
