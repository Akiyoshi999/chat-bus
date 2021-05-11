import {
  Container,
  CssBaseline,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  makeStyles,
} from '@material-ui/core'
import red from '@material-ui/core/colors/red'
import SendIcon from '@material-ui/icons/Send'
import React, { useState } from 'react'

interface Props {}

const useStyles = makeStyles((theme) => ({
  red: {
    backgroundColor: red[500],
  },
}))

const App: React.FC<Props> = (props) => {
  const [count, setCount] = useState<number>(0)
  const classes = useStyles()
  return (
    <Container component="main" maxWidth="xl">
      <CssBaseline />
      <Grid container spacing={3}>
        <Grid item xs={3} className={classes.red}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                <SendIcon />
                ChatBus
              </ListSubheader>
            }>
            <ListItem button>
              <ListItemText primary="room name" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={6}>
          main
        </Grid>
        <Grid item xs={3}>
          users
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
