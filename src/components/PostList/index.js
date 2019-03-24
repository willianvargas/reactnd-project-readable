import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import Post from '../Post'
import SortbyBtn from './components/SortbyBtn'
import styles from './styles'

const PostList = ({ classes }) => (
  <Grid className={classes.root}>
    <Grid className={classes.actions} justify="flex-end" container>
      <SortbyBtn />
    </Grid>
    <Grid>
      <Post />
      <Post />
      <Post />
    </Grid>
  </Grid>
)

PostList.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(PostList)
