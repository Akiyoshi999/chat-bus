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
import SendIcon from '@material-ui/icons/Send'
import React, { useEffect, useState } from 'react'

interface Props {}

const useStyles = makeStyles((theme) => ({
  list: {
    backgroundColor: theme.palette.grey[500],
  },
}))

interface Bus {
  name: string
  selected: boolean
}

interface Hitchhiker {
  name: string
}

const App: React.FC<Props> = (props) => {
  const [chatBus, setChatBus] = useState<Bus[]>([])
  const [hitchhiker, setHitchhiker] = useState<Hitchhiker[]>([])

  useEffect(() => {
    // TODO websocketからデータをもらう
    setChatBus([
      { name: 'aaa', selected: false },
      { name: 'bbb', selected: false },
      { name: 'ccc', selected: false },
    ])
    setHitchhiker([{ name: 'user1' }, { name: 'user2' }, { name: 'user3' }])
  }, [props])

  const classes = useStyles()

  return (
    <Container component="main" maxWidth="xl">
      <CssBaseline />
      <Grid container spacing={3}>
        <Grid item xs={3} className={classes.list}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                <SendIcon />
                ChatBus
              </ListSubheader>
            }>
            {chatBus.map((bus, index) => (
              <ListItem button key={index}>
                <ListItemText primary={bus.name} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={6}>
          main
        </Grid>
        <Grid item xs={3} className={classes.list}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                <SendIcon />
                hitchihikers
              </ListSubheader>
            }>
            {hitchhiker.map((h, index) => (
              <ListItem button key={index}>
                <ListItemText primary={h.name} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
