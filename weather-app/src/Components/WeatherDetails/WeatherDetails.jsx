import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const WeatherDetails = ({humidity, wind}) => {
    return (
        <div>
            <Typography variant="h6">Humedad: {humidity} %</Typography>
            <Typography variant="h6">Viento: {wind} Km/h</Typography>
        </div>
    )
}

WeatherDetails.propTypes = {
    humidity: PropTypes.number.isRequired, 
    wind: PropTypes.number.isRequired
}

export default WeatherDetails
