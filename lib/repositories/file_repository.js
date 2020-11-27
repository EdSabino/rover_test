const fs = require('fs');

class FileRepository {
    getFromFile(path) {
        const file = fs.readFileSync(path);
        return file.toString('utf8').replace(/\r/g, '');
    }
}

module.exports = FileRepository;