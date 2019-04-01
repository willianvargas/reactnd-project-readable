import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import compose from 'recompose/compose'

import { withStyles } from '@material-ui/core/styles'
import { Grid, Paper, Typography } from '@material-ui/core'

import { handlePostComments } from './actions'
import getPostComments from './selectors'
import Post from '../Post'
import Comment from '../Comment'
import styles from './styles'

class PostPage extends Component {

  componentDidMount() {
    const { handlePostComments, postId } = this.props
    handlePostComments(postId)
  }

  render() {
    const { classes, postId, comments } = this.props
    return (
      <Grid className={classes.root}>
        <Post id={postId} complete />
        {comments.length > 0 && (
          <Fragment>
            <Typography className={classes.title} variant="h3" align="center">
              Comments
            </Typography>
            <Paper className={classes.comments} elevation={0}>
              {comments.map(comment => (
                <Comment key={comment} id={comment} />
              ))}
            </Paper>
          </Fragment>
        )}
      </Grid>
    )
  }

}

PostPage.propTypes = {
  classes: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.string).isRequired,
  handlePostComments: PropTypes.func.isRequired
}

const mapStateToProps = ({ comments }, { match }) => {
  const { postId } = match.params
  return {
    postId,
    comments: postId ? getPostComments(comments, postId) : []
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handlePostComments: (postId) => dispatch(handlePostComments(postId))
  }
}

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, mapDispatchToProps)
)(PostPage)
