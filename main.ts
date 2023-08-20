input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.stopAllSounds()
})
input.onSound(DetectedSound.Loud, function () {
    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.LoopingInBackground)
})
basic.forever(function () {
	
})
