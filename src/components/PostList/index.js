import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import compose from 'recompose/compose'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import Post from '../Post'
import SortingBtn from './components/SortingBtn'
import styles from './styles'
import getPostsWithSorting from './selectors'

const PostList = ({ classes, posts }) => {
  return (
    <Grid className={classes.root}>
      <Grid className={classes.actions} justify="flex-end" container>
        <SortingBtn />
      </Grid>
      <Grid>
        {posts.map(post => (
          <Post key={post} id={post} />
        ))}
      </Grid>
    </Grid>
  )
}

PostList.propTypes = {
  classes: PropTypes.object.isRequired,
  posts: PropTypes.arrayOf(PropTypes.string).isRequired
}

const mapStateToProps = ({ posts: { data, sorting } }) => ({
  posts: getPostsWithSorting(data, sorting)
})

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, null)
)(PostList)
