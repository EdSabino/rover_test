const assert = require('assert');
const { describe, it } = require('mocha');
const Executor = require('../../lib/actions/executor');
const Instruction = require('../../lib/actions/instruction');
const Plateau = require('../../lib/actors/plateau');
const Rover = require('../../lib/actors/rover');

let ROVER;
beforeEach(() => {
    ROVER = new Rover('N', [0, 0]);
});

describe('Executor', function() {
    it('must execute and print', () => {
        const executor = new Executor(new Plateau([5, 5]), [new Instruction(ROVER, 'MMML')]);
        const responses = executor.execute();
        assert.strictEqual('0 3 W', responses[0]);
    });

});