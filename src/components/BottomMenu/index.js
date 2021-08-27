import React, { useState } from 'react'

import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Home, Add, Person } from '@material-ui/icons'

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginTop: 'auto',
  },
});

const BottomMenu = () => {
  const [value, setValue] = useState(0);
  const classes = useStyles()

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Home" icon={<Home/>} />
      <BottomNavigationAction label="Add Book" icon={<Add/>} />
      <BottomNavigationAction label="Profile" icon={<Person/>} />
    </BottomNavigation>
  )
}

export default BottomMenu