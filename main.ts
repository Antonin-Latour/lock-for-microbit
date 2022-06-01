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
basic.showLeds(`
    . . . . .
    . . . . .
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
    if (sonar.ping(
    DigitalPin.P2,
    DigitalPin.P2,
    PingUnit.Centimeters
    ) == 2) {
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
    }
})
basic.forever(function () {
    if (sonar.ping(
    DigitalPin.P2,
    DigitalPin.P2,
    PingUnit.Centimeters
    ) < 2) {
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
