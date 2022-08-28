import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import {IconContext} from 'react-icons'
import { WiDaySunny } from 'react-icons/wi'
import Link from '@material-ui/core/Link'
import {Link as LinkRouter} from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import IconState, {validValues} from './../IconState'
const AppFrame = ({children}) => {
    return (
        <Grid container justify="center">
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton color="inherit" arial-label="menu">
                        <Link 
                            component={LinkRouter}
                            color="inherit" 
                            to="/main" 
                            aria-label="menu">
                            
                            <IconContext.Provider value={{size: '2em'}}>
                                <WiDaySunny/>
                            </IconContext.Provider>
                        </Link>
                        <Typography variant="h6" color="inherit">
                            wheather App
                        </Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Grid item
                xd={12}
                sm={11}
                md={10}
                lg={8}
                >
                   {children}
            </Grid>
        </Grid>
    )
}

AppFrame.propTypes = {
    children: PropTypes.node
}

export default AppFrame
