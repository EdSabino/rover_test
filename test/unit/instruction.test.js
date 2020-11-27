const Instruction = require('../../lib/actions/instruction');
const assert = require('assert');
const { describe, it } = require('mocha');
const Rover = require('../../lib/actors/rover');
const Plateau = require('../../lib/actors/plateau');

let ROVER;
beforeEach(() => {
    ROVER = new Rover('N', [0, 0]);
});

describe('Instruction', function() {
    it('must move with command', () => {
        const instruction = new Instruction(ROVER, 'MLMMRM');
        instruction.actions['M']();
        assert.strictEqual('0 1 N', instruction.rover.toString());
    });

    it('must turn left usign command', () => {
        const instruction = new Instruction(ROVER, 'MLMMRM');
        instruction.actions['L']();
        assert.strictEqual('0 0 W', instruction.rover.toString());
    });

    it('must turn right usign command', () => {
        const instruction = new Instruction(ROVER, 'MLMMRM');
        instruction.actions['R']();
        assert.strictEqual('0 0 E', instruction.rover.toString());
    });

    it('must execute sequence', () => {
        const instruction = new Instruction(ROVER, 'MRMMLM');
        const plateau = new Plateau([5, 5]);
        const rover = instruction.execute(plateau);
        assert.strictEqual('2 2 N', rover.toString());
    });

    it('must throw error on invalid action', () => {
        try {
            const instruction = new Instruction(ROVER, 'MRMMLMP');
            const plateau = new Plateau([5, 5]);
            instruction.execute(plateau);
        } catch (e) {
            assert.strictEqual('invalid_action_P', e.message);
        }
    });

    it('must throw error when out of plateau', () => {
        try {
            const instruction = new Instruction(ROVER, 'MRMMMLM');
            const plateau = new Plateau([2, 2]);
            instruction.execute(plateau);
        } catch (e) {
            assert.strictEqual('rover_out_of_plateau', e.message);
        }
    });
});