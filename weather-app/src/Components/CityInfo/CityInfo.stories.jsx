import React from 'react'
import CityInfo from './CityInfo'
import 'typeface-roboto'

export default{
    title: "City Info",
    component: CityInfo
}

export const CityExample = () => <CityInfo city={"Buenos Aires"} country={"Argentina1"}></CityInfo>