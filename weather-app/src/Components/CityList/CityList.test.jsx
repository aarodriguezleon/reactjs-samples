import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import CityList from './CityList'


const cities =[
    {city:"Buenos Aires", country:"Argentina", countryCode: "AR"},
    {city:"Caracas", country:"Venezuela", countryCode: "VE"},
    {city:"Bogota", country:"Colombia", countryCode: "CO"},
    {city:"Rio", country:"Brasil", countryCode: "BR"}
]


test ("City List", async() =>{
    //AAA Arrange act assert
    //Arrange
    const {findAllByRole} = render(<CityList cities={cities} onClickItem={()=>{}}/>)

    //act
    const items = await findAllByRole("button")

    //assert
    expect(items).toHaveLength(4)
})

test ("Cisty List Click on Item", async() =>{
    //Simular la acción del click del usuario
    //para eso vamos a utilizar una función mok
    const fnClickOnItem = jest.fn()

    const {findAllByRole} = render(<CityList cities={cities} onClickItem={fnClickOnItem}/>)

    const items = await findAllByRole("button")
    //Ahora vamos a pasar a simular la acción  usando fire event
    //fireEvent es parte de la libreria testing-library/react
    fireEvent.click(items[0])

    // Ahora que tuvo que suceder?
    // Se debio llamar a la fucnción fnClickOnItem una unica vez
    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})