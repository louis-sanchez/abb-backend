'use strict';

const FeatureFactory = require('./lib/Feature')

module.exports = {
    generateRandomPart() {
        let part = {
            name: 'Part A',
            features: [
                {
                    name: 'feature 1',
                    controls: ['control1', 'control2']
                },
                {
                    name: 'feature 2',
                    controls: ['control3']
                }
            ]
        }

        return FeatureFactory.createRandomFeature()
    }
}