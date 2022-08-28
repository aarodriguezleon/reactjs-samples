import React from 'react'
import WeatherDetails from './WeatherDetails'

export default{
    title: 'Weather Details',
    component: WeatherDetails
}

export const WeatherdetailsExample = () => {
    return <WeatherDetails humidity={40} wind={20} />
}