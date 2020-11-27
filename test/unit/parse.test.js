const Parse = require('../../lib/actions/parse');
const assert = require('assert');
const { describe, it } = require('mocha');

describe('Parse', function() {
    it('must parse 1', () => {
        const parser = new Parse(`5 5\n1 2 N\nLMLMLMLMM`);
        const { plateau, instructions } = parser.execute();
        assert.strictEqual(5, plateau.widthLimit);
        assert.strictEqual(5, plateau.heightLimit);
        assert.strictEqual(1, instructions.length);
    });

    it('must parse 2', () => {
        const parser = new Parse(`3 3\n1 2 N\nLMLMLMLMM\n2 3 E\nLMRMMM`);
        const { plateau, instructions } = parser.execute();
        assert.strictEqual(3, plateau.widthLimit);
        assert.strictEqual(3, plateau.heightLimit);
        assert.strictEqual(2, instructions.length);
    });
   
});