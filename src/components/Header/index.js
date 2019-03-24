import React, { Component, Fragment, createElement } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography, Button } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'

import styles from './styles'

const categories = [
  {
    name: 'react',
    path: 'react'
  },
  {
    name: 'redux',
    path: 'redux'
  },
  {
    name: 'udacity',
    path: 'udacity'
  }
]

categories.unshift({
  name: 'home',
  path: '',
  icon: HomeIcon
})

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
          <Grid className={classes.navContent} spacing={8} container>
            {categories.map(category => (
              <Grid key={category.name} item>
                <Button
                  className={classes.navItem}
                  activeClassName={classes.navItemActive}
                  to={'/'.concat(category.path)}
                  component={NavLink}
                  exact
                >
                  {category.icon && (
                    createElement(category.icon, {
                      className: classes.navItemIcon
                    })
                  )}
                  {category.name}
                </Button>
              </Grid>
            ))}
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
