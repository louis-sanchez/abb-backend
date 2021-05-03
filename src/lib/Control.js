class ControlFactory {
    createRandomControl() {

        const controls = ['position', 'diameter', 'length'];
        const random = Math.floor(Math.random() * controls.length);
        const randomControl = controls[random]

        switch (randomControl) {
            case 'position':
                return new PositionControl(1)
            
            case 'diameter':
                return new DiameterControl(2)
            
            case 'length':
                return new LengthControl(3)
        }
    }
}

class Control {
    constructor(type, value) {
        this.type = type
        this.value = value
    }
}

class PositionControl extends Control {
    static tolerance = 1

    constructor(value) {
        super('position', value)
    }
}

class DiameterControl extends Control {
    static tolerance = 2

    constructor(value) {
        super('diameter', value)
    }
}

class LengthControl extends Control {
    static tolerance = 3

    constructor(value) {
        super('length', value)
    }
}

module.exports = new ControlFactory()