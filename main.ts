input.onButtonEvent(Button.A, input.buttonEventValue(ButtonEvent.Click), function () {
    if (Zufall == 1) {
        punkte += 1
        basic.showIcon(IconNames.Yes)
    } else {
        leben += -1
        basic.showIcon(IconNames.No)
    }
    basic.pause(1000)
})
input.onButtonEvent(Button.B, input.buttonEventValue(ButtonEvent.Click), function () {
    if (Zufall == 2) {
        punkte += 1
        basic.showIcon(IconNames.Yes)
    } else {
        leben += -1
        basic.showIcon(IconNames.No)
    }
    basic.pause(1000)
})
function anzeige () {
    Zufall = randint(1, 2)
    if (Zufall == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . .
            . . # . .
            . . # . .
            `)
    } else if (Zufall == 2) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . #
            . . # . .
            . . # . .
            `)
    }
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
}
function gameover () {
    basic.showString("GAME OVER!")
    basic.showString("PUNKTE:" + punkte)
}
let Zufall = 0
let punkte = 0
punkte = 0
let leben = 3
basic.showNumber(3)
basic.showNumber(2)
basic.showNumber(1)
basic.forever(function () {
    if (leben == 3) {
        basic.setLedColors(0x00ffff, 0x00ffff, 0x00ffff)
        anzeige()
    }
    if (leben == 2) {
        basic.setLedColors(0x00ffff, 0x00ffff, 0x000000)
        anzeige()
    }
    if (leben == 1) {
        basic.setLedColors(0x00ffff, 0x000000, 0x000000)
        anzeige()
    }
    if (leben == 0) {
        basic.setLedColors(0x000000, 0x000000, 0x000000)
        gameover()
    }
})
