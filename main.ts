input.onPinPressed(TouchPin.P0, function () {
    able_tounlock = 0
})
input.onButtonPressed(Button.A, function () {
    if (input.logoIsPressed()) {
        servos.P0.setAngle(90)
        basic.clearScreen()
        basic.showIcon(IconNames.Yes)
        basic.pause(2000)
        basic.showLeds(`
            . # # . .
            . . . # .
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showIcon(IconNames.No)
        servos.P0.setAngle(0)
        basic.clearScreen()
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    if (input.logoIsPressed()) {
        servos.P0.setAngle(90)
        basic.clearScreen()
        basic.showIcon(IconNames.Yes)
        basic.pause(2000)
        basic.showLeds(`
            . # # . .
            . . . # .
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showIcon(IconNames.No)
        servos.P0.setAngle(0)
        basic.clearScreen()
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
let unlock_checknumber = 0
let able_tounlock = 0
able_tounlock = 0
basic.showLeds(`
    . . . . .
    . . # . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showIcon(IconNames.SmallSquare)
basic.showIcon(IconNames.Square)
basic.showLeds(`
    . . # . .
    . # . # .
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
    if (unlock_checknumber == 80) {
        basic.showIcon(IconNames.Yes)
        servos.P0.setAngle(90)
        basic.clearScreen()
        basic.showLeds(`
            . # # . .
            . . . # .
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
basic.forever(function () {
    if (unlock_checknumber == 82) {
        basic.showIcon(IconNames.Yes)
        servos.P0.setAngle(90)
        basic.clearScreen()
        basic.showLeds(`
            . # # . .
            . . . # .
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
basic.forever(function () {
    if (able_tounlock == 1) {
        basic.showString("" + (pins.analogReadPin(AnalogPin.P1)))
        unlock_checknumber = pins.analogReadPin(AnalogPin.P1)
    }
})
basic.forever(function () {
    if (unlock_checknumber == 83) {
        basic.showIcon(IconNames.Yes)
        servos.P0.setAngle(90)
        basic.clearScreen()
        basic.showLeds(`
            . # # . .
            . . . # .
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
basic.forever(function () {
    if (sonar.ping(
    DigitalPin.P2,
    DigitalPin.P2,
    PingUnit.Centimeters
    ) == 2) {
        able_tounlock = 1
    }
})
basic.forever(function () {
    if (unlock_checknumber == 84) {
        basic.showIcon(IconNames.Yes)
        servos.P0.setAngle(90)
        basic.clearScreen()
        basic.showLeds(`
            . # # . .
            . . . # .
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
basic.forever(function () {
    if (unlock_checknumber == 85) {
        basic.showIcon(IconNames.Yes)
        servos.P0.setAngle(90)
        basic.clearScreen()
        basic.showLeds(`
            . # # . .
            . . . # .
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
basic.forever(function () {
    if (unlock_checknumber == 86) {
        basic.showIcon(IconNames.Yes)
        servos.P0.setAngle(90)
        basic.clearScreen()
        basic.showLeds(`
            . # # . .
            . . . # .
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
basic.forever(function () {
    if (unlock_checknumber == 81) {
        basic.showIcon(IconNames.Yes)
        servos.P0.setAngle(90)
        basic.clearScreen()
        basic.showLeds(`
            . # # . .
            . . . # .
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
basic.forever(function () {
    if (unlock_checknumber < 80) {
        servos.P0.setAngle(0)
    }
})
basic.forever(function () {
    if (unlock_checknumber == 87) {
        basic.showIcon(IconNames.Yes)
        servos.P0.setAngle(90)
        basic.clearScreen()
        basic.showLeds(`
            . # # . .
            . . . # .
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
basic.forever(function () {
    if (unlock_checknumber > 90) {
        servos.P0.setAngle(0)
    }
})
basic.forever(function () {
    if (unlock_checknumber == 88) {
        basic.showIcon(IconNames.Yes)
        servos.P0.setAngle(90)
        basic.clearScreen()
        basic.showLeds(`
            . # # . .
            . . . # .
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
basic.forever(function () {
    if (unlock_checknumber == 89) {
        basic.showIcon(IconNames.Yes)
        servos.P0.setAngle(90)
        basic.clearScreen()
        basic.showLeds(`
            . # # . .
            . . . # .
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
basic.forever(function () {
    if (unlock_checknumber == 90) {
        basic.showIcon(IconNames.Yes)
        servos.P0.setAngle(90)
        basic.clearScreen()
        basic.showLeds(`
            . # # . .
            . . . # .
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
