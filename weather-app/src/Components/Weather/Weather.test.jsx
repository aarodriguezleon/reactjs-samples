import React from 'react'
import Weather from './Weather'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test ("Weather render", async() =>{
    //AAA Arrange act assert

    const {findByRole} = render(<Weather temperature={10} state="Clouds"/>)

    const temp = await findByRole("heading")
    //console.log('temp: ', temp)
    expect(temp).toHaveTextContent("10")
})