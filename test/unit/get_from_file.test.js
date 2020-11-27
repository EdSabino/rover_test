const GetFromFile = require('../../lib/actions/get_from_file');
const assert = require('assert');
const { describe, it } = require('mocha');

const sample1 = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`;

const sample2 = `4 5
1 2 N
LMLLMLMM
3 2 E
MMRMRMRRM`;

describe('GetFromFile', function() {
    it('must parse 1', () => {
        const getFromFile = new GetFromFile('./test/mocks/test_file_1.txt')
        const stringResult = getFromFile.execute();
        assert.strictEqual(sample1, stringResult);
    });

    it('must parse 2', () => {
        const getFromFile = new GetFromFile('./test/mocks/test_file_2.txt')
        const stringResult = getFromFile.execute();
        assert.strictEqual(sample2, stringResult);
    });
   
});