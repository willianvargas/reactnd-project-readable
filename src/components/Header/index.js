import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { NavLink, Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography, Button } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'

import Categories from '../Categories'
import styles from './styles'

class Header extends Component {

  state = {
    sticky: false
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.updateScrollTop)
  }

  updateScrollTop = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const { sticky } = this.state
    if (scrollTop > 72 && !sticky) {
      this.setState({ sticky: true })
    } else if (scrollTop < 72) {
      this.setState({ sticky: false })
    }    
  }

  render() {
    const { classes } = this.props
    const { sticky } = this.state
    return (
      <Fragment>
        <Grid className={classes.titleContainer}>
          <Typography className={classes.title} variant="h1" align="center">
            Readable. A React Project
          </Typography>
        </Grid>
        <Grid
          className={classNames(
            classes.navContainer,
            sticky && classes.navContainerSticky
          )}
        >
          <Grid
            className={classes.navContent}
            justify="space-around"
            spacing={8}
            container
          >
            <Grid direction="row" spacing={8} container item xs>
              <Grid item>
                <Button
                  className={classes.homeBtn}
                  activeClassName={classes.homeBtnActive}
                  to="/"
                  component={NavLink}
                  exact
                >
                  <HomeIcon className={classes.homeBtnIcon} />
                  Home
                </Button>
              </Grid>
              <Grid item>
                <Categories />
              </Grid>
            </Grid>
            <Grid item>
              <Button
                component={Link}
                to="/create"
                variant="outlined"
                color="primary"
                size="large"
              >
                Create Post
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(Header)
