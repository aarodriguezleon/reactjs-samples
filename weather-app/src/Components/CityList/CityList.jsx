import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import CityInfo from './../CityInfo'
import Weather from './../Weather'

//renderCityAndCountry se va convertir en una función que retorna otra función
const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) =>{
    //const {temperature, state} = weather
    const {city, country} = cityAndCountry
    return (
        <ListItem button key={city} onClick={eventOnClickCity}>
            <Grid container junstify="center" alignitems="center">
                <Grid item md={9} xs={12}>
                    <CityInfo city={city} country={country}/>
                </Grid>
                {
                weather?
                (<Grid item md={3} xs={12}>
                    <Weather temperature={weather.temperature} state={weather.state}/>
                </Grid>): ("no hay datos")
                }

            </Grid>
            
            
        </ListItem>
    )
}

const CityList = ({cities, onClickItem}) => {

    const [allWeather, setAllWeather] = useState({})

    const setWeather = (city, country, countryCode) => {
        const appid = '13b24a2395100f7508971aff724be26f'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`
        axios.get(url)
        .then(response => {
            const {data} = response
            const temperature = data.main.temp
            const state = data.weather[0].main
            const propName = `${city}-${country}`
            const propValue = {temperature, state}
            setAllWeather(allWeather => {
                const result = {...allWeather,[propName]: propValue}
                console.log("allWeather result: ", result)
                return result
                })
        })
    }


    useEffect(() => {
        cities.forEach(({city, country, countryCode}) => {
            setWeather(city, country, countryCode)
        });
        
    }, [cities])

    //const weather = {temperature: 10, state: "sunny"}
    return (
        <List>
            {   //renderCityAndCountry se va convertir en una función que retorna otra función
                //cities.map(cityAndCountry => renderCityAndCountry(onClickItem)(cityAndCountry, weather))
                cities.map(cityAndCountry => renderCityAndCountry(onClickItem)(cityAndCountry, allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`]))
            }
        </List>
    )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
            countryCode: PropTypes.string.isRequired,
        }).isRequired
    ),
    onClickItem: PropTypes.func.isRequired
}

export default CityList
