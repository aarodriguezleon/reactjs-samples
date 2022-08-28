import React from 'react'
import CityInfo from './CityInfo' //SUT SUBJECT OVER TESTING (OBJETO DE TESTEO)
import {render} from '@testing-library/react'
test("CityInfo render", async () => {
    // AAA
    // Arrange 

    const city = "Buenos Aires"
    const country = "Argentina"

    const {findAllByRole} = render(<CityInfo city={city} country={country}/>)
    // Act
    const cityAndCountryComponents = await findAllByRole("heading")
    // Assert
    expect(cityAndCountryComponents[0]).toHaveTextContent(city)
    expect(cityAndCountryComponents[1]).toHaveTextContent(country)
})