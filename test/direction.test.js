const Direction = require('../lib/models/direction');
const assert = require('assert');
const { describe, it } = require('mocha');

describe('Direction', function() {
    it('Should keep the right started value 1', () => {
        const direction = new Direction('N');
        assert.strictEqual('N', direction.getChar());
    })

    it('Should turn to right', () => {
        const direction = new Direction('W');
        assert.strictEqual('W', direction.getChar());
        direction.toRight();
        assert.strictEqual('N', direction.getChar());
    })

    it('Should turn to left', () => {
        const direction = new Direction('W');
        assert.strictEqual('W', direction.getChar());
        direction.toLeft();
        assert.strictEqual('S', direction.getChar());
    })

    it('Should turn many times', () => {
        const direction = new Direction('W');
        assert.strictEqual('W', direction.getChar());
        direction.toRight();
        assert.strictEqual('N', direction.getChar());
        direction.toRight();
        assert.strictEqual('E', direction.getChar());
        direction.toLeft();
        assert.strictEqual('N', direction.getChar());
    })

    it('Should know when is vertical', () => {
        let direction = new Direction('N');
        assert.strictEqual(true, direction.isVerticalFacing());
        direction = new Direction('W');
        assert.strictEqual(false, direction.isVerticalFacing());
    })

    it('Should throw error if invalid direction', () => {
        try {
            new Direction('P');
        } catch (e) {
            assert.strictEqual('invalid_direction', e.message);
        }
    })

    it('Should face positive', () => {
        const direction = new Direction('N');
        assert.strictEqual(true, direction.facingPositive());
        direction.toRight();
        assert.strictEqual('E', direction.getChar());
        assert.strictEqual(true, direction.facingPositive());
    })

    it('Should face negative', () => {
        const direction = new Direction('S');
        assert.strictEqual(false, direction.facingPositive());
        direction.toRight();
        assert.strictEqual('W', direction.getChar());
        assert.strictEqual(false, direction.facingPositive());
    })

    
});