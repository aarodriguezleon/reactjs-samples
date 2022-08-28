import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import CityInfo from './../../Components/CityInfo'
import Weather from './../../Components/Weather'
import WeatherDetails from './../../Components/WeatherDetails'
import ForcastChart from './../../Components/ForcastChart'
import Forcast from './../../Components/Forcast'
import AppFrame from './../../Components/AppFrame'

const dataExample = [
    {
        "dayHour": "Jue 18",
        "min": 14,
        "max": 22,
    },
    {
        "dayHour": "Vie 06",
        "min": 18,
        "max": 27,
    },
    {
        "dayHour": "Vie 12",
        "min": 18,
        "max": 28,
    },
    {
        "dayHour": "Vie 18",
        "min": 18,
        "max": 25,
    },
    {
        "dayHour": "Sab 06",
        "min": 15,
        "max": 22,
    },
    {
        "dayHour": "Sab 12",
        "min": 12,
        "max": 19,
    }
]

const forcastItemListExample = [
    {hour: 10, state:"sunny", temperture:23, weekDay:"lunes"},
    {hour: 10, state:"cloud", temperture:23, weekDay:"martes"},
    {hour: 10, state:"fog", temperture:23, weekDay:"miercoles"},
    {hour: 10, state:"cloudy", temperture:23, weekDay:"jueves"},
    {hour: 10, state:"rain", temperture:23, weekDay:"viernes"},
]

const CityPage = props => {
    const city = "Buenos Aires"
    const country = "Argentina"
    const state = "cloudy"
    const temperature = 22
    const humidity = 80
    const wind = 5
    const data = dataExample
    const forcastItemList = forcastItemListExample
    
    return (
        <AppFrame>
            <Grid container 
                justify="center"
                diretion="column"
                justifyContent="space-around"
                spacing={2}>
                <Grid container item 
                    justify="center"
                    alignItems="flex-end"
                    sm={10} xs={12}>
                    <CityInfo city={city} country={country}/>
                </Grid>
                <Grid container justify="center" 
                    item sm={10} xs={12}>
                        <Weather state={state} temperature={temperature}></Weather>
                        <WeatherDetails humidity={humidity} wind={wind} />
                </Grid>
                <Grid item sm={10} xs={12}>
                    <ForcastChart data={data}/>
                </Grid>
                <Grid item sm={10} xs={12}>
                    <Forcast forcastItemList={forcastItemList}/>
                </Grid>
            </Grid>
        </AppFrame>
    )
}

export default CityPage
