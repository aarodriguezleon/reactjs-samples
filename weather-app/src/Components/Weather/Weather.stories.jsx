import React from 'react'
import Weather from './Weather'

export default{
    title: "Weather",
    component: Weather
}

export const WeatherCloud = () => <Weather temperature={10} state="Clouds"/>

export const WeatherSunny = () => <Weather temperature={10} state="Clear"/>