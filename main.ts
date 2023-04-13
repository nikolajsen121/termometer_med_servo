basic.showIcon(IconNames.SmallHeart)
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P9, pins.map(
    input.temperature(),
    0,
    1023,
    0,
    180
    ))
})
