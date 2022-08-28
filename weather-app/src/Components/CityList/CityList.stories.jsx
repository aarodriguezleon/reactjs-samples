import React from 'react'
import CityList from './CityList'
import {action} from '@storybook/addon-actions'

export default{
    title: 'CityList',
    component: CityList
}
const cities =[
    {city:"Buenos Aires", country:"Argentina"},
    {city:"Caracas", country:"Venezuela"},
    {city:"Bogota", country:"Colombia"},
    {city:"Rio", country:"Brasil"}
]

export const CityListExample  = () => <CityList cities={cities} onClickItem={action("Click on City")}/>