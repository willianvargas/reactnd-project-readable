import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { MuiThemeProvider, withStyles } from '@material-ui/core/styles'
import { CssBaseline, Grid } from '@material-ui/core'

import MuiTheme from '../../styles/MuiTheme'
import Header from '../Header'
import PostList from '../PostList'

import styles from './styles'

/* eslint-disable-next-line */
class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <MuiThemeProvider theme={MuiTheme}>
        <CssBaseline />
        <Grid className={classes.root}>
          <Header />
          <PostList />
        </Grid>
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(App)
