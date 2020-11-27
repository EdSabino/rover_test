const fs = require('fs');

class GetFromFile {
    constructor (path) {
        this.path = path;
    }

    execute() {
        const file = fs.readFileSync(this.path);
        return file.toString('utf8').replace(/\r/g, '');
    }
}

module.exports = GetFromFile;