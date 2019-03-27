import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import compose from 'recompose/compose'

import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

import Post from '../Post'
import SortingBtn from './components/SortingBtn'
import styles from './styles'
import getPostsWithSorting from './selectors'
import ReactLogo from '../../images/logo.svg'

const PostList = ({ classes, posts }) => (
  posts.length === 0 ? (
    <Grid className={classes.placeholder} direction="column" alignItems="center" container>
      <img className={classes.placeholderImg} src={ReactLogo} alt="react" />
      <Typography variant="body1" align="center">
        No posts here.
      </Typography>
    </Grid>
  ) : (
    <Fragment>
      <Grid className={classes.actions} justify="flex-end" container>
        <SortingBtn />
      </Grid>
      {posts.map(post => (
        <Post key={post} id={post} />
      ))}
    </Fragment>
  )
)

PostList.propTypes = {
  classes: PropTypes.object.isRequired,
  posts: PropTypes.arrayOf(PropTypes.string).isRequired
}

const mapStateToProps = ({ posts: { data, sorting } }, props) => {
  const { category } = props.match.params
  return {
    posts: getPostsWithSorting(data)(category)(sorting)
  }
}

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, null)
)(PostList)
