import React from 'react'
import Forcast from './Forcast'

export default {
    title: "Forcast",
    component: Forcast
}
const forcastItemList = [
    {hour: 10, state:"Clear", temperture:23, weekDay:"lunes"},
    {hour: 10, state:"Clouds", temperture:23, weekDay:"martes"},
    {hour: 10, state:"Fog", temperture:23, weekDay:"miercoles"},
    {hour: 10, state:"Clouds", temperture:23, weekDay:"jueves"},
    {hour: 10, state:"Rain", temperture:23, weekDay:"viernes"},
]
export const ForcastExample = () => (<Forcast forcastItemList={forcastItemList}></Forcast>)