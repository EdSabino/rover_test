const Rover = require('../lib/models/rover');
const assert = require('assert');
const { describe, it } = require('mocha');

describe('Rover', function() {
    it('Should keep the right started value', () => {
        const rover = new Rover('N', [0, 0]);
        assert.strictEqual('0 0 N', rover.toString());
    })

    it('Should turn to right', () => {
        const rover = new Rover('N', [0, 0]);
        rover.turnRight();
        assert.strictEqual('0 0 E', rover.toString());
    })

    it('Should turn to left', () => {
        const rover = new Rover('N', [0, 0]);
        rover.turnLeft();
        assert.strictEqual('0 0 W', rover.toString());
    })

    it('Should move to all directions', () => {
        const rover = new Rover('N', [0, 0]);
        rover.move();
        assert.strictEqual('0 1 N', rover.toString());
        rover.turnRight();
        assert.strictEqual('0 1 E', rover.toString());
        rover.move();
        assert.strictEqual('1 1 E', rover.toString());
        rover.turnRight();
        assert.strictEqual('1 1 S', rover.toString());
        rover.move();
        assert.strictEqual('1 0 S', rover.toString());
        rover.turnRight();
        assert.strictEqual('1 0 W', rover.toString());
        rover.move();
        assert.strictEqual('0 0 W', rover.toString());
        rover.turnRight();
        assert.strictEqual('0 0 N', rover.toString());
    })

    it('Should validate length of position', () => {
        try {
            new Rover('N', [0, 0, 4]);

        } catch (e) {
            assert.strictEqual('invalid_length', e.message);
        }
    })

    it('Should validate valid plateau', () => {
        try {
            new Rover('N', [-1, 0]);
        } catch (e) {
            assert.strictEqual('out_of_plateau', e.message);
        }
    })

});