class Plateau {
    constructor(limits) {
        this.widthLimit = limits[0];
        this.heightLimit = limits[1];
    }

    isPositionOnLimit(position) {
        return position[0] <= this.widthLimit && position[1] <= this.heightLimit;
    }
}

module.exports = Plateau;