import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import Post from '../Post'
import styles from './styles'

const PostPage = ({ classes, match }) => {
  const { postId } = match.params
  return (
    <Grid className={classes.root}>
      <Post id={postId} />
    </Grid>
  )
}

PostPage.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(PostPage)
