const FileRepository = require('../../lib/repositories/file_repository');
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

describe('FileRepository', function() {
    it('must parse 1', () => {
        const fileRepository = new FileRepository()
        const stringResult = fileRepository.getFromFile('./test/mocks/test_file_1.txt');
        assert.strictEqual(sample1, stringResult);
    });

    it('must parse 2', () => {
        const fileRepository = new FileRepository();
        const stringResult = fileRepository.getFromFile('./test/mocks/test_file_2.txt');
        assert.strictEqual(sample2, stringResult);
    });
   
});