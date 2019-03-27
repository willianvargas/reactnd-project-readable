import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import compose from 'recompose/compose'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { MuiThemeProvider, withStyles } from '@material-ui/core/styles'
import { CssBaseline, Grid } from '@material-ui/core'

import MuiTheme from '../../styles/MuiTheme'
import Header from '../Header'
import PostList from '../PostList'
import styles from './styles'
import handleInitialData from './actions'

class App extends Component {

  componentDidMount() {
    const { handleInitialData } = this.props
    handleInitialData()
  }

  render() {
    const { classes } = this.props
    return (
      <MuiThemeProvider theme={MuiTheme}>
        <CssBaseline />
        <Router>
          <Grid className={classes.root}>
            <Header />
            <Route path='/:category?' component={PostList} />
          </Grid>
        </Router>
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  handleInitialData: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInitialData: () => dispatch(handleInitialData()),
  }
}

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(null, mapDispatchToProps)
)(App)
