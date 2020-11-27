class Executor {
    constructor (plateau, instructions) {
        this.plateau = plateau;
        this.instructions = instructions;
    }

    execute() {
        const responses = []
        for (let instruction of this.instructions) {
            const rover = instruction.execute(this.plateau);
            const response = rover.toString()
            console.log(response);
            responses.push(response);
        }
        return responses;
    }
}

module.exports = Executor;