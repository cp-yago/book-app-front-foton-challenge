import React, { useState } from 'react'

import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Home, Add, Person } from '@material-ui/icons'

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: 'absolute',
    bottom: '0'
  },
});

const BottomMenu = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const classes = useStyles()

  return (
    <BottomNavigation
      value={tabIndex}
      onChange={(event, newValue) => {
        setTabIndex(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Home" icon={<Home/>} component={Link} to="/"/>
      <BottomNavigationAction label="Add Book" icon={<Add/>} component={Link} to="/book/form"/>
      <BottomNavigationAction label="Profile" icon={<Person/>} component={Link} to="/" />
    </BottomNavigation>
  )
}

export default BottomMenu