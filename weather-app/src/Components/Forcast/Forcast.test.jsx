import React from 'react'
import Forcast from './Forcast'
import {render} from '@testing-library/react'

const forcastItemList = [
    {hour: 10, state:"Clear", temperture:23, weekDay:"lunes"},
    {hour: 11, state:"Clouds", temperture:23, weekDay:"martes"},
    {hour: 12, state:"Fog", temperture:23, weekDay:"miercoles"},
    {hour: 13, state:"Clouds", temperture:23, weekDay:"jueves"},
    {hour: 14, state:"Rain", temperture:23, weekDay:"viernes"},
]

test('Forcast Render', async () => {
    
    const {findAllByTestId} = render(<Forcast forcastItemList={forcastItemList}></Forcast>)

    const corcastItems = await findAllByTestId("forcast-item-container")

    expect(corcastItems).toHaveLength(5)
})
