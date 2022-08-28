import React from 'react'
import ForcasItem from './ForcasItem'

export default{
    title: "Forcas Item",
    component: ForcasItem
}

export const LunesSoleado = () => (
    <ForcasItem hour={10} state="Clear" temperture={23} weekDay="lunes" />
    
)