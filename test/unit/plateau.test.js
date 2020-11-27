const Plateau = require('../../lib/actors/plateau');
const assert = require('assert');
const { describe, it } = require('mocha');

describe('Plateau', function() {
    it('must receive a position', () => {
        const plateau = new Plateau([2, 3]);
        assert.strictEqual(2, plateau.widthLimit);
        assert.strictEqual(3, plateau.heightLimit);
    });

    it('must check out of limits position', () => {
        const plateau = new Plateau([2, 3]);
        assert.strictEqual(false, plateau.isPositionOnLimit([3, 3]))
        assert.strictEqual(false, plateau.isPositionOnLimit([2, 4]))
        assert.strictEqual(true, plateau.isPositionOnLimit([2, 3]))
    });
});
