radio.setGroup(1)
basic.forever(function () {
    radio.sendValue("Pressure" + "_From_" + 1, envirobit.getPressure())
    radio.sendValue("Light0" + "_From_" + 1, envirobit.getLight())
    radio.sendValue("Temp0" + "_From_" + 1, envirobit.getTemperature())
    radio.sendValue("Humidity" + "_From_" + 1, envirobit.getHumidity())
    radio.sendValue("Light" + "_From_" + 1, input.lightLevel())
    radio.sendValue("Temp" + "_From_" + 1, input.temperature())
})
