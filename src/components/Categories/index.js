import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import compose from 'recompose/compose'

import { withStyles } from '@material-ui/core/styles'
import { Grid, Button } from '@material-ui/core'

import styles from './styles'

const Categories = ({ classes, categories }) => (
  <Grid spacing={8} container>
    {categories.map(category => (
      <Grid key={category.name} item>
        <Button
          className={classes.item}
          activeClassName={classes.itemActive}
          to={'/'.concat(category.path)}
          component={NavLink}
          exact
        >
          {category.name}
        </Button>
      </Grid>
    ))}
  </Grid>
)

Categories.propTypes = {
  classes: PropTypes.object.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired
}

const mapStateToProps = ({ categories }) => ({
  categories: Object
    .keys(categories)
    .map(key => categories[key])
})

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, null)
)(Categories)
