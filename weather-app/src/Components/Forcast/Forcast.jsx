import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import ForcasItem from './../ForcasItem'
import IconState, {validValues} from './../IconState'

const renderForcastItem = forcast => {
    const {weekDay, hour, state, temperture} = forcast
    return(
        <Grid data-testid={"forcast-item-container"} item key={`${weekDay}${hour}`} >
            <ForcasItem  hour={hour} state={state} temperture={temperture} weekDay={weekDay}></ForcasItem>
        </Grid>
    )

}

const Forcast = ({forcastItemList}) => {
    return (
        <Grid container justifyContent="space-around" alignItems="center">
            {
                forcastItemList.map(forcast => renderForcastItem(forcast))
            }
        </Grid>
    )
}

Forcast.propTypes = {
    forcastItemList: PropTypes.shape({
        weekDay: PropTypes.string.isRequired,
        hour: PropTypes.number.isRequired,
        state: PropTypes.oneOf(validValues).isRequired,
        temperture: PropTypes.number.isRequired,
    }).isRequired,
}

export default Forcast
