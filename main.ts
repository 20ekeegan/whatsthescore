let score_a = 0
input.onButtonPressed(Button.A, function () {
    score_a += 1
    score_a = score_a
    basic.showNumber(score_a)
})
input.onButtonPressed(Button.AB, function () {
    score_a += 3
    score_a = score_a
    basic.showNumber(score_a)
})
input.onButtonPressed(Button.B, function () {
    score_a += 2
    score_a = score_a
    basic.showNumber(score_a)
})
basic.forever(function () {
    if (score_a > 10) {
        basic.showString("WINNER")
    }
})
