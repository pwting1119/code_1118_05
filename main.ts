let sprite = 0
input.onGesture(Gesture.Shake, function () {
    sprite = randint(0, 10)
    if (sprite <= 5) {
        basic.showNumber(sprite)
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showNumber(sprite)
        basic.showIcon(IconNames.Heart)
    }
})
basic.forever(function () {
	
})
