const GetFromFile = require('./lib/actions/get_from_file');
const Parse = require('./lib/actions/parse');
const Executor = require('./lib/actions/executor');

const PATH = './input.txt';

function main() {
    const getFromFile = new GetFromFile(PATH);
    const parse = new Parse(getFromFile.execute());
    const { plateau, instructions } = parse.execute();
    const executor = new Executor(plateau, instructions);
    executor.execute();
}

main();
