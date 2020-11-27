const Parse = require('./lib/actions/parse');

function main() {
    const parse = new Parse(file.toString('utf-8'));
    const { plateau, instructions } = parse.execute();
    console.log(instructions)
}

main();
