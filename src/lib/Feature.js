const ControlFactory = require('./Control')

class FeatureFactory {

    createRandomFeature() {
        const randomFeature = this.#getRandomFeature()
        const randomControls = this.#createRandomControls()

        return new Feature(randomFeature, randomControls)
    }

    #getRandomFeature() {
        const features = ['seam', 'slot', 'hole'];
        const random = Math.floor(Math.random() * features.length);
        const randomFeature = features[random];

        return randomFeature;
    }

    #createRandomControls() {
        const controls = []
        const random = Math.floor(Math.random() * 5);

        for (let i = 0; i <= random; i++) {
            controls.push(ControlFactory.createRandomControl())
        }

        return controls
    }
}

class Feature {
    constructor(name, controls) {
        this.name = name
        this.controls = controls
    }
}

module.exports = new FeatureFactory()