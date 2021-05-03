"use strict";

const ControlFactory = require('./lib/Control')

module.exports = {
    generateRandomPart() {
        let control1 = {
            type: 1,
            dev: 1,
            devOutTotal: 1
        }

        let control2 = {
            type: 2,
            dev: 2,
            devOutTotal: 2
        }

        let control3 = {
            type: 3,
            dev: 3,
            devOutTotal: 3
        }

        let part = {
            name: "Part A",
            features: [
                {
                    name: "feature 1",
                    controls: [control1, control2]
                },
                {
                    name: "feature 2",
                    controls: [control3]
                }
            ]
        }

        return ControlFactory.createRandomControl()
        // return {
        //     name: "Part A",
        //     features: [
        //         {
        //             name: "feature 1",
        //             controls: [control1, control2]
        //         },
        //         {
        //             name: "feature 2",
        //             controls: [control3]
        //         }
        //     ]
        // }
    }
}