import React from 'react'
import PropTypes from 'prop-types'

import { WiDayCloudy, WiDayFog, WiDaySunny, WiRain, WiThunderstorm, WiRaindrop, WiSnow } from 'react-icons/wi'
//Thunderstorm  Rain Snow Clear Clouds
export const validValues =[
    "Clouds",
    "Drizzle",
    "Fog",
    "Clear",
    "Rain",
    "Snow",
    "Thunderstorm",
]
const stateByName = {
    Clouds: WiDayCloudy,
    Fog:WiDayFog,
    Clear:WiDaySunny,
    Rain: WiRain,
    Thunderstorm: WiThunderstorm,
    Drizzle: WiRaindrop,
    Snow: WiSnow,
}

const IconState = ({state}) => {
    const StateByName = stateByName[state]
    return (
        <StateByName/>
    )
}

IconState.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired,
}

export default IconState
