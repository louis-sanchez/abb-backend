class Part {
    constructor(id, features) {
        this.id = id
        this.features = features
    }
}

class Feature {
    constructor(id, controls) {
        this.id = id
        this.controls = controls
    }
}

class Deviation {
    constructor(dev, devOutTotal) {
        this.dev = dev
        this.devOutTotal = devOutTotal
    }
}

module.exports = { Part, Feature, Control }