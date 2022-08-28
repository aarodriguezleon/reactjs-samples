import React from 'react'
import { useHistory } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import CityList from './../../Components/CityList'
import AppFrame from './../../Components/AppFrame'

const cities =[
    {city:"Buenos Aires", country:"Argentina", countryCode: "AR"},
    {city:"Caracas", country:"Venezuela", countryCode: "VE"},
    {city:"Bogota", country:"Colombia", countryCode: "CO"},
    {city:"Rio", country:"Brasil", countryCode: "BR"}
]

const MainPage = props => {

    const history = useHistory()

    const onClickHandler = () => {
        history.push("/city")
    } 

    return (
        <AppFrame>
            <Paper>
                <CityList cities={cities} onClickItem={onClickHandler}/>
            </Paper>
        </AppFrame>
    )
}

export default MainPage
