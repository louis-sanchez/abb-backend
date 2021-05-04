const { v4: uuidv4 } = require('uuid');
const FeatureFactory = require('./Feature')

class PartFactory {

    createRandomPart() {
        const randomId = uuidv4()
        const randomFeatures = this.#createRandomFeatures()

        return new Part(randomId, randomFeatures)
    }

    #createRandomFeatures() {
        const features = []
        const random = Math.floor(Math.random() * 3);

        for (let i = 0; i <= random; i++) {
            features.push(FeatureFactory.createRandomFeature())
        }

        return features
    }
}

class Part {
    constructor(id, features) {
        this.id = id
        this.features = features
    }
}

module.exports = new PartFactory()