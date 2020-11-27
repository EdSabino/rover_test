const FileRepository = require('./lib/repositories/file_repository');
const Parse = require('./lib/actions/parse');
const Executor = require('./lib/actions/executor');

const PATH = './input.txt';

function main() {
    const fileRepository = new FileRepository();
    const parse = new Parse(fileRepository.getFromFile(PATH));
    const { plateau, instructions } = parse.execute();
    const executor = new Executor(plateau, instructions);
    executor.execute();
}

main();
